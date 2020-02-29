---
title: Web APIs Are Just Web Sites
timestamp: 2007-01-11T09:37:45Z
date: 2007-01-11
---

<a href="http://whatfettle.com/2007/01/WebAPIs.pdf"><img src="http://blog.whatfettle.com//images/naked-headers.png" height="255" width="366" border="0" hspace="4" vspace="4" alt="Warning" title="Warning" longdesc="You are about to see naked protocol headers" /></a>

<p>A <a href="http://whatfettle.com/2007/01/WebAPIs.pdf">short presentation</a> on how you might like to build a simple "Web API".</p>

<p><i>Updated:</i> an accessible version with errata fixes and links:</p>
<ol>
<li>A Web Friendly API?</li>
<li>Javascript AJAX Python Ruby PHP Perl Curl</li>
<li>[Picture: collection of Web 2.0 logos from flickr, Google, Yahoo!, last.fm, etc]</li>
<li>One thing in common ..</li>
<li>They <b>HATE</b> SOAP</li>
<li>But <b>LOVE</b> The Web</li>
<li>URIs <a href="http://blog.whatfettle.com/2005/02/07/uris-identify-stuff/">identify</a> stuff</li>
<li>And can be anywhere</li>
<li>[photo of shower head with URI <a href="http://www.speakerman.com">WWW.SPEAKERMAN.COM</a>]</li>
<li>Use <a href="http://www.w3.org/Provider/Style/URI">cool</a> URIs</li>
<li>Read <a href="http://www.ietf.org/rfc/rfc2616.txt">RFC 2616</a></li>
<li>Constrain Verbs: GET/HEAD and POST <i>(PUT, DELETE, OPTIONS - YAGNI?)</i></li> 
<li>Ask "<a href="/2005/10/31/is-it-safe/">IS IT SAFE?</a>" [photo of the dentist from <a href="http://en.wikipedia.org/wiki/Marathon_Man">Marathon Man</a>]</li>
<li>Understand HTTP Methods:<pre>
method     safe    idempotent   semantics    resource     cacheable 
             ----------------------------------------------------------- 
   GET       |  X          X            X           X             X    | 
   HEAD      |  X          X            X           X             X    | 
   PUT       |             X            X           X                  | 
   POST      |                                                    *    | 
   DELETE    |             X            X           X                  | 
   OPTIONS   |  X          X            X                              | 
             ----------------------------------------------------------- 
   PROPFIND  |  X          X            X           X             *    | 
   PROPPATCH |             X            X           X                  | 
   MKCOL     |             *            X           X                  | 
   COPY      |             X            X           X                  | 
   MOVE      |             ?            X           X                  | 
   LOCK      |                          X           X                  | 
   UNLOCK    |             X            X           X                  | 
   PATCH     |             *            X           X                  | 
             ----------------------------------------------------------- 
</pre></li>
<li>think about representations: HTML, RSS/Atom, XML, JSON, <i>whatever</i></li>
<li>Warning! You are about to see Naked Protocol Headers!</li>
<li>Content-Negotiation:
 <pre>HTTP GET ...
Accept: application/weatherml+xml; q=1.0, 
        application/xml; q=0.8, 
        text/html; q=0.5</pre>
<pre>Apache Server .htaccess
AddType application/weatherml+xml wea 
  Options +MultiViews 
    ./index.wea 
    ./index.xml 
    ./index.html
</pre>
</li>
<li>enjoy the free caching
<pre>HTTP GET http://flickr.com/photos/psd/2450160 
If-Modified-Since:  Fri, 31 Dec 1999 23:59:59 GMT 
If-None-Match: 'guid-21343244324' </pre> 
<pre>HTTP/1.1 304 Not Modified</pre></li>
<li>make Phone Call
<pre>HTTP POST http://example.com/calls 
Content-Type: application/x-www-form-urlencoded 
Accept: text/xml; charset=utf-8 

callingParty=tel:+447918808 
calledParty=sip:Merlin

=&gt;

HTTP 1.1 201 Created 
Location: http://example.com/calls/123213 
Content-Type: text/xml; charset=utf-8 

&lt;callInfo&gt; 
  &lt;callId&gt;http://example.com/calls/123213&lt;/callId&gt; 
  &lt;callStatus&gt;Initial&lt;/callStatus&gt;
&lt;/callInfo&gt;
</pre></li>

<li>get Call Info
<pre>HTTP GET http://example.com/calls/123213 
Accept: text/xml 

=&gt;
 
200 OK
Content-Type: text/xml; charset=utf-8 

&lt;callInfo&gt; 
  &lt;callId&gt; http://example.com/user/fred/calls/123213 
  &lt;callStatus&gt; CallInitial  
  &lt;callingParty&gt; tel:+447918880... 
  &lt;calledParty&gt; tel:+447918880... 
  &lt;timeStarted&gt; 2007-01-09 11:45:20 
  &lt;duration&gt; 502 
  &lt;terminationStatus&gt; CallNotTerminated 
&lt;/callInfo&gt;</pre></li>

<li>end Call<pre>HTTP POST http://example.com/calls/123213 
Content-Type: application/x-www-form-urlencoded 

callStatus=Terminated 

=&gt; 

202 Accepted 
Location: http://example.com/calls/123213</pre></li>

<li>list Recent Calls [Feed Icon]

<pre>HTTP GET http://example.com/calls/feed 
 
=&gt;

200 OK 
Content-Type: application/atom+xml 

&lt;feed xmlns="http://www.w3.org/2005/Atom"&gt; 
  &lt;title>Phone Calls 
  &lt;link rel="self" href="http://example.com/calls/" 
        rel="alternate" type="text/html"/&gt; 
  &lt;updated>2007-01-0911:45:02Z 
  &lt;author&gt;&lt;name>Phonebox 
  &lt;id&gt;tag:example.com,2007-01-09:/calls 
  &lt;entry> 
   &lt;link href="http://example.com/user/psd/calls/1234567/"/> 
    &lt;title>Call 1234567
    &lt;id>tag:example.com/calls/1234567-200701091223313 
    &lt;summary>CallInformation 
    &lt;updated>2005-10-13T18:30:02Z 
  &lt;/entry> 
  &lt;entry> 
   &lt;link href="http://example.com/user/fred/calls/17231667/" 
    ...</pre></li>
 
<li>Overall:
<pre>http://example.com/calls 
http://example.com/calls/feed 
http://example.com/user/paul/calls/feed 
http://example.com/user/paul/calls/7d6374da5 
http://example.com/user/paul/calls/search?callingParty=tel:%3A44791888 
http://example.com/sms 
http://example.com/sms/feed 
http://example.com/user/fred/sms/7d6374da5 
http://example.com/user/fred/sms/inbox/feed 
http://example.com/user/fred/sms/inbox/7d6374da5 
http://example.com/user/fred/sms/inbox/search?from=tel:%3A44791888 
....</pre></li>
<li>Yes, Dear Reader, there's no API as such it's just yet another Web site ..</li>
<li>Surf long and prosper!</li>
</ol>
