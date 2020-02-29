---
title: Google Suggest
timestamp: 2004-12-11T00:39:54Z
date: 2004-12-11
---

<img alt="google-suggest.jpg" src="http://blog.whatfettle.com/archives/google-suggest.jpg" width="369" height="298" border="0" />

<a href='http://www.google.co.uk/webhp?complete=1&amp;hl=en'>Google Suggest</a> is very cool! A useful replacement for the vanilla search page. Via <a href='http://www.joelonsoftware.com/'>Joel</a>.

<i>Update:</i> <a href='http://www.adamstiles.com/'>Adam Stiles</a> reveals <a href='http://www.adamstiles.com/adam/2004/12/hacking_google_.html'>how it works</a>. The onkeydown event invokes a HTTP GET which returns the suggestions as a Javascript function, e.g <a href='http://www.google.com/complete/search?hl=en&amp;js=true&amp;qu=paul+downe'>http://www.google.com/complete/search?hl=en&amp;js=true&amp;qu=paul+downe</a>. An interesting combination of a Web service and self modifying code. What's amazing is how smoothly this fine grained chatty interaction works.