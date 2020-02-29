---
title: xsi:type is Evil
timestamp: 2006-11-29T16:04:15Z
date: 2006-11-29
---

<img src="http://blog.whatfettle.com//images/pipe.png" height="285" width="400" border="0" hspace="4" vspace="4" alt="Pipe" title="Pipe" longdesc="This is not a xs:string" />

<p>Using a <a href="http://meyerweb.com/eric/comment/chech.html">sad old cliché</a> I hereby declare <a href="http://norman.walsh.name/2004/01/29/trainwreck">the train wreck</a> that is <a href="http://www.w3.org/TR/xmlschema-1/#xsi_type">xsi:type</a> should be considered harmful:</p>
<ol>
<li>First of all it assumes the receiver has a <a href="http://www.w3.org/TR/xmlschema-1/">W3C XML Schema</a>. Wrong! Schemas are just one of a number of different ways I might have used to describe the XML. You might be using a description I gave you in RelaxNG, on the back of an envelope, whatever. You might have constructed your own model. I don't care so long as you send me the right elements, attributes and content. You know, the right "stuff".</li>
<li>Sticking the Schema abstract type into a message is at best verbose, worst expects me to understand how you're thinking about the data. I don't care. Really. Just send me the "stuff".</li>
<li>Whilst Schema is wishy-washy about things such as <a href="http://2006.xmlconference.org/programme/presentations/143.html">where a schema is located</a>, here we don't have a hint. No, it's an assertion. You will obey <code>xsi:type</code>.</li>
<li>It encourages people to want to switch "types" on the fly. Yikes, that's a manifesto to <a href="http://en.wikipedia.org/wiki/Monkey_patch">Monkey Patch</a> (via <a href="http://intertwingly.net/blog/2006/11/28/Meet-the-New-Boss">Sam</a>)</li>
<li>It's intrinsically insecure, consider eviltude such as <code>&lt;getTime xsi:type="FireNuclearMissiles"&gt;</code>.
</li>
<li>Dynamic languages don't need it, OK, <i>maybe</i> it's useful when a repeated list has only one item, but otherwise <a href="http://en.wikipedia.org/wiki/Duck_typing">Duck Typing</a> is what I like and if I want to process my <code>accountNo</code> as an <code>integer</code> or a <code>string</code>, I'd rather keep that choice <a href="http://lists.w3.org/Archives/Public/public-ws-addressing/2004Dec/0088.html">under my Kimono.</a> thank you very much!</li>
<li>It doesn't work with many existing static language tools, for example a number of JAXB2 implementations take an <code>xs:anyURI</code>, generate a Java string, but then bounce <code>xsi:type="xs:anyURI"</code>. Yes <a href="http://jira.codehaus.org/browse/XFIRE-753">really</a>. I may cry.</li>
<li>It doesn't help the <a href="http://www.w3.org/XML/2005/xsd-versioning-use-cases/">versioning story</a>. Sorry. It just doesn't.</li>
</ol>
<p>So don't touch it. <a href="http://en.wikipedia.org/wiki/Time_Bandits">It's eviil!</a></p>
