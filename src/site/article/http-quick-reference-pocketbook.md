---
title: HTTP Quick Reference PocketBook
timestamp: 2010-09-15T19:33:34Z
date: 2010-09-15
---

<a href="http://www.flickr.com/photos/psd/4989568119/" title="httppocketbook - a TiddlySpace by psd, on Flickr"><img src="http://farm5.static.flickr.com/4108/4989568119_4ec2d9f513.jpg" width="500" height="390" alt="httppocketbook - a TiddlySpace" /></a>
<p>Just before our fun and games with <a href="http://blog.whatfettle.com/2010/09/14/rest-cards/">REST cards</a> at the <a href="http://xmlsummerschool.com">XML Summer School</a> it became apparent that a quick reference guide for <a href="http://en.wikipedia.org/wiki/List_of_HTTP_headers">HTTP headers</a> and <a href="http://en.wikipedia.org/wiki/List_of_HTTP_status_codes">status codes</a> would be useful. So I knife-and-forked <a href="http://www.ietf.org/rfc/rfc2616.txt">RFC 2616</a> into <a href="http://httppocketbook.tiddlyspace.com">httpPocketBook.tiddlyspace.com</a>, printed a few copies out, and projected the page whilst we waved our hands about.</p>
<p>As mentioned <a href="http://blog.whatfettle.com/2010/09/15/tiddlypocketbook/">previously</a>, the CSS3 print stylesheet doesn't work on crufty old browsers, so here's an A4 <a href="http://httppocketbook.tiddlyspace.com/httppocketbook.pdf">PDF</a> which most printing applications should be able to scale to non-standard paper sizes.</p>
<p>In case you're interested, putting the PDF into one of the <a href="http://tiddlyweb.com">TiddlyWeb</a> <a href="	http://httppocketbook.tiddlyspace.com/bags">bags</a> which underpin this space was a cinch:</p>
<pre class="code">$ curl -X PUT \ 
 -umyUsername:myPassword \
 --data-binary @httppocketbook.pdf \
 -H 'Content-type: application/pdf' \
http://httppocketbook.tiddlyspace.com/bags/httppocketbook_public/tiddlers/httppocketbook.pdf</pre>
<p>Which I think hints at how <a href="http://tiddlyspace.com">TiddlySpace</a> can be used as a nice RESTful data store.</p>
<p>As with all my efforts, this is published under a <a href="http://creativecommons.org/licenses/by/3.0/">Creative Commons License</a>, but I don't really <a href="http://blog.whatfettle.com/2008/10/24/on-the-vanity-of-demanding-attribution/">demand attribution</a>.</p>