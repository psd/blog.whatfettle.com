---
title: Too Many Specs, Your Royal Highness
timestamp: 2005-09-22T14:59:12Z
date: 2005-09-22
---

<a href="http://www.innoq.com/soa/ws-standards/poster/Web_Services_Standards_09_2005.pdf" title="Web_Services_Standards_09_2005.pdf">
<img src="http://blog.whatfettle.com/Web_Services_Standards_09_2005_thumbnail.jpg" height="354" width="500" border="0" hspace="4" vspace="4" alt="Web Services Standards 09 2005 Thumbnail" /></a>
<p>
<a href="http://www.innoq.com/blog/st/">Stefan</a> has just posted an excellent <a href="http://www.innoq.com/soa/ws-standards/poster/">WS-Standards Poster</a> in the form of an A0 <a href="http://www.innoq.com/soa/ws-standards/poster/Web_Services_Standards_09_2005.pdf">PDF</a>. What's interests me most is how many of these things I can safely ignore.  Trying to understand the intent, politics, ramifications and interdependencies of each and every one of these twigs is starting^W doing my head in!</p>
<p>Meanwhile over in planet simplification, <a href="http://www.tbray.org/ongoing/When/200x/2005/09/21/Atom-Protocol">Tim Bray</a> continues with the "think of the trees" argument. For me using <code>curl</code> is an excellent way to debug apps, however there remains one fly in that ointment - security.  My attempts to <code>wget --debug</code> the simplistic <a href="http://www.flickr.com/services/api/">flickr services</a> came to an abrupt stop when I hit <a href="http://www.flickr.com/services/api/misc.userauth.html">authentication</a>. The flickr approach whilst powerful, seems at least as complex as some of the WS-* specs, but with the benefits of the 'uniform interface' and reuse being quite lost. Using a bespoke library, in my case <a href="http://www.phpflickr.com/">phpFlickr</a>, rapidly became a must.</p>
<p>So the path to sanity for WS-* comes from profiles such as <a href="http://www-128.ibm.com/developerworks/webservices/library/ws-ramppaper.html">RAMP</a> and for REST, well, some agreed up patterns of use would be nice, which is what some would argue most of these WS-* specs in-fact are.
</p>

<!-- technorati tags start --><p>Technorati Tags: <a href="http://technorati.com/tag/REST" rel="tag">REST</a>, <a href="http://technorati.com/tag/w3c" rel="tag">w3c</a>, <a href="http://technorati.com/tag/WebServices" rel="tag">WebServices</a>, <a href="http://technorati.com/tag/XML" rel="tag">XML</a></p><!-- technorati tags end -->