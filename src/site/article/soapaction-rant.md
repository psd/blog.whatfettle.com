---
title: SOAPAction Rant
timestamp: 2006-06-07T18:24:27Z
date: 2006-06-07
---

<p>Something I keep tripping over is how many tools consume a WSDL with a blank HTTP SOAPAction but then go onto reject valid messages because they don't happen to have their different implementation specific incantation. I notice some standard WSDLs such as <a href="http://www.w3.org/TR/2005/NOTE-xkms-wsdl-20051118/">XKMS</a> use an XML entity to make SOAPAction configurable though servers usually want a different value for each operation, and even then you can't reuse the binding across multiple endpoints let alone switch implementations without impacting the client. Bah.</p>



<!-- technorati tags start --><p>Technorati Tags: <a href="http://www.technorati.com/tag/soap" rel="tag">soap</a>, <a href="http://www.technorati.com/tag/wsdl" rel="tag">wsdl</a></p><!-- technorati tags end -->