---
title: Ruby Net::HTTP and SOAPAction
timestamp: 2006-09-13T17:15:04Z
date: 2006-09-13
---

<p>So you want to spurn <a href="http://raa.ruby-lang.org/project/soap4r/">SOAP4r</a> and <a href="http://raa.ruby-lang.org/project/http-access2/">http-access2</a> and espouse Ruby's builtin <a href="http://www.ruby-doc.org/stdlib/libdoc/net/http/rdoc/classes/Net/HTTP.html">Net::HTTP</a> class?  But yes, it is strange how headers such as <code>SOAPAction</code> get munged into <code>Soapaction</code> and rejected by many SOAP toolkits. Don't spill yer chunky-bacon, try my quick and dirty work-round:</p>

<pre>
require 'rubygems'
require 'net/http'
require 'uri'
require 'builder'

endpoint = 'http://localhost:10080/'
soap = 'http://schemas.xmlsoap.org/soap/envelope/'
service =  'http://www.w3.org/2002/ws/databinding/examples/6/05/'
operation = "echoStringElement"

xml = Builder::XmlMarkup.new
xml.Envelope :xmlns => soap do
  xml.Body do
     xml.tag! operation, 'Be like the squirrel!', :xmlns => service
  end
end

module Net
  module HTTPHeader
    def canonical( k )
      return "SOAPAction" if k == 'soapaction'
      k.split(/-/).map {|i| i.capitalize }.join('-')
    end
  end
end

uri = URI.parse(endpoint)
http = Net::HTTP.new(uri.host, uri.port)
#http.set_debug_output $stderr

req_headers= {
  'Content-Type' => 'text/xml; charset=utf-8',
  'SOAPAction' => '"' + service + '#' + operation + '"',
}

req_body = xml.target!
response = http.request_post(uri.path, req_body, req_headers)
puts response.body
</pre>
<p>
Note I followed <a href="http://www.intertwingly.net/blog/2006/09/12/Dominion-and-Sovereignty">Sam's example</a> and used <a href="http://builder.rubyforge.org/classes/Builder/XmlBase.html">XML::Builder</a> to make the SOAP message. I now anticipate <a href="http://www.tbray.org/ongoing/When/200x/2006/09/11/Making-Markup">bile and vitriol</a> from the apparently friendly, inclusive Ruby community :-)
</p>
<!-- technorati tags start -->
<p style="text-align: right; font-size: 10px">Technorati Tags: <a rel="tag" href="http://www.technorati.com/tag/HTTP">HTTP</a>, <a rel="tag" href="http://www.technorati.com/tag/Ruby">Ruby</a>, <a rel="tag" href="http://www.technorati.com/tag/SOAP">SOAP</a>, <a rel="tag" href="http://www.technorati.com/tag/Web%20Services">Web Services</a></p>
<!-- technorati tags end -->