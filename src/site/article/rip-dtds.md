---
title: "RIP DTDs?"
timestamp: 2006-11-07T10:47:22Z
date: 2006-11-07
---

<img src="http://blog.whatfettle.com//images/xml-soup.jpg" height="477" width="357" border="0" hspace="4" vspace="4" alt="XML Soup" title="XML Soup" />

<p>So <a href="http://blogs.msdn.com/rssteam/articles/PublishersGuide.aspx">Internet Explorer 7 rejects DTDs</a>:</p>

<blockquote>Feeds that reference a DTD are not supported by the RSS Platform.  A DTD is used to help XML parsers with validation of the document.  However, DTD validation is a potential source of security issues for XML parsers, and validation is not required for feeds to work correctly in aggregators. </blockquote>

<p>This is by no means news from Microsoft <a href="http://msdn.microsoft.com/library/default.asp?url=/library/en-us/xmlsdk/html/8a65b5b1-d62a-4b21-b599-4d7fa5b7a8d6.asp">possibly with good cause</a>. The WS-I Basic Profile <a href="http://www.ws-i.org/Profiles/BasicProfile-1.1.html#Disallowed_Constructs">disallows DTDs</a> in SOAP messages, and just like SOAP many see RSS as a serialisation spewed out by tools and not a document lovingly crafted by humans, to which I say "feh". Still it's likely to take many others <a href="http://vowe.net/archives/007858.html">by surprise</a>.</p>

<p>Coincidentally I'm currently trying to work out how well supported DTDs are by databinding implementations, and thus far they seem OK-ish, but I do wonder for how much longer. I guess we are just observing a defacto <a href="http://norman.walsh.name/2004/11/10/xml20">XML 2.0</a> emerging, which is OK, but not before we have a standard replacement for entities, something like <a href="http://www.xml.com/pub/a/2003/01/02/xmlchar.html">xmlchar</a> or <a href="http://www.talsever.org/xml/edml.html">EDML</a> might be good enough <i>if only everyone could have agreed upon them six years ago. You know it's much easier to chop things off than add new stuff in later.</i></p>
