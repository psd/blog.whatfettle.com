---
title: Mixed Advice to the Lost
timestamp: 2005-12-13T12:34:48Z
date: 2005-12-13
---

<a href="http://www.flickr.com/photos/psd/73176135/"><img src="http://blog.whatfettle.com/push-me-pull-you.png" height="250" width="265" border="0" hspace="4" vspace="4" alt="Push-Me-Pull-You" /></a>

<p>A nicely thought out and tactfully written piece from <a href="http://appside.blogspot.com/2005/12/w3c-schema-patterns-wg-is-not.html">Erik</a> in response to <a href="">Dare</a>'s rather mixed message.</p>
<p> "Just Use XML" might be something I personally agree with, but reminds me of the joke about being lost and asking a local expert directions and being told "I wouldn't start from here if I were you ..", er right, thanks!</p>
<p>It's the essence of XML, the Web and Web services that as a sender I don't impose how to implement or even to a large extent process the information exchanged. Like it or not many customers still demand tools to keep them safe in their own world, oblivious to the reality of a <a href="http://intertwingly.net/blog/601.html">rain of angle brackets</a>.  We're in this mess now precisely because suppliers gave many users their first fix of databinding for free - exactly what they thought they wanted. Unsurprisingly customers who were hooked, bought into them in droves and Microsoft as a company continues to promote and sell databinding in their tools and products, though have some visionary products such <a href="http://msdn.microsoft.com/netframework/future/linq/">LINQ</a> in the pipeline.</p>
<p>
So Dare's piece had me feeling flat about ever getting vendors to think about the problem in hand until I read his comment offering advice to <a href="http://www.securesoa.com/blog/">Anil</a> on how to cope in the current environment:
<blockquote>
(i) if you are consuming web services, then consume them as XML instead of using the object to XML mapping that your toolkit provides. Most toolkits allow you to get at the underlying XML of a SOAP response.
</blockquote>
<p>.. right, "don't start from here" and "impose a implementation choice on my potential customers" ..</p>
<blockquote>
(ii)if you are exposing web services then use as few XSD features as possible. I'd limit it to basic types (integer, float, boolean and datetime) and constructs (sequence, any, choice) with a few other limitations. This can be achieved by taking a code-first approach to building the service and not using 'fancy' datatypes like the ADO.NET DataSet.
</blockquote>
<p>FX: Slaps head in disbelief! - That' precisely what the <a href="">XML Schema Patterns for Databinding WG</a> aims to document. In the meantime customers to continue to have to guess what bits of XML Schema Microsoft and other vendors actually implement. You know, dear vendors, it takes more than one to interoperate!</p>
