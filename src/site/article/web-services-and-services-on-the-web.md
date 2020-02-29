---
title: Web Services and Services on the Web
timestamp: 2006-05-21T22:59:13Z
date: 2006-05-21
---

<img width="300" height="132" border="0" alt="chalk-and-cheese.png" src="http://blog.whatfettle.com/archives/chalk-and-cheese.png" />

Here's a short presentation (<a href="http://www.whatfettle.com/2006/05/WebServices.pdf">slides</a> 2.5 MB PDF, <a href="http://blog.whatfettle.com/archives/000384.html#more">text below</a>) I just gave as a part of <a href="http://www.iona.com/blogs/newcomer/archives/000297.html">Eric's panel</a> at the <a href="http://www.w3.org/2004/02/Process-20040205/organization.html#AC">W3C AC</a> meeting. <em>[update: fixed the link!]</em>

<!-- technorati tags start -->

Technorati Tags: <a rel="tag" href="http://www.technorati.com/tag/w3c">w3c</a>, <a rel="tag" href="http://www.technorati.com/tag/soap">soap</a>, <a rel="tag" href="http://www.technorati.com/tag/WebServices">WebServices</a>

<!-- technorati tags end -->
<!--more-->
<ul>
	<li><strong>Services on the Web and Web Services</strong> 
[pic: chalk and cheese icons]
Paul Downey, BT</li>
	<li><strong>WHERE'S PAUL?</strong> 
[pic: "WHERE'S WALDO?" like Postcard]
I work for BT, BT is a big company with lots of people working for  it, lots of different suppliers, partners, and customers. It would be impossible for me to speak for "BT" say something interesting and satisfy all of these People, but I'll do my best! And if I do manage to say something interesting then remember, it's not BT's fault! In a way it is this issue is at the heart of my talk.</li>
	<li><strong>Thriving in the digital networked economy</strong> 
[pic: BT Advert, Man jumping over information] 
We exist in a fast, changing world. Like for many companies, our business is fluid
- we buy in software and services, aquire other companies, hive off parts of the business, outsource services, yada yada. To cope with this fluidity BT is moving towards a "Capability" based infrastructure In addition we may expose "Capabilities" externally following a commercial decision. But we may also expose a Capability as a result of regulation often at the drop of a hat with something called "equivalence of input"</li>
	<li><strong>Interoperability</strong>
[pic: telephone plug/socket] 
The answer to our problems involves standards. Interoperability  gives us cheaper, faster, better integration; Widens the marketplace for services; Allows us to switch implementations without impacting customers.</li>
	<li><strong>Web Services</strong> 
[pic: cheese icon] 
So it's Web services to the rescue!</li>
	<li><strong>POST Message</strong> 
[pic: diagram posting a postcard and it arriving through a letterbox, travelling in a lorry, on a bike, on a pigeon] 
Messaging is cool! I'd much rather build a call centre based on email than telephone calls. It's easier to scale for throughput, rather than peak demand. The essence of SOAP is transport independent messages, you get to processes messages in the same way, regardless of how they got there and that's cool too, until you realise what that means in practice ..</li>
	<li><strong>Big Bag of Headers</strong> 
[pic: 100+line SOAP/XML message to say "Hello World"] 
Header hell - there is no real processing model for headers not even a layering. it's just this extensible bag of stuff mustIgnore is great, really great, and mustUnderstand can only be used for good, right?</li>
	<li><strong>Web Services Standards</strong> 
[pic: <a href="http://www.innoq.com/soa/ws-standards/poster/">diagram from innoQ</a>]
Transport independence means you have to reinvent the whole OSI stack. We've seen a DOS attack from specifications. But in essence these are all just patterns of use, and in many cases aim to provide "solutions" for enterprises. Building patterns for problems, some interesting, some enabling and some barking! I'm not going to say which is which!</li>
	<li><strong>Evolution</strong> 
[pic: evolutionary tree] 
So we're seeing a natural evolution of specifications - I use the word "evolution: because I certainly don't see a lot of evidence for "intelligent design" :-) And if you built your infrastructure on WS-ResourceDodo or WS-CompositeDinosaur, well that's just your bad luck. "Place your bets!"</li>
	<li><strong>Lego Bricks</strong> 
[pic: <a href="http://www.xmlgrrl.com/blog/archives/2006/05/11/the-smell-of-software/">two incompatible stacks of lego bricks, thanks Eve!</a>] 
I keep hearing how SOA specs compose like lego, Well maybe when you stick to one manufacturer</li>
	<li><strong>Escher Lego</strong> 
[pic: <a href="http://3quarksdaily.blogs.com/3quarksdaily/2004/09/mc_eschers_rela.html">Escher staircase in lego</a>]
 and although they may compose well on paper, they might not make too much sense in reality.</li>
	<li><strong>Raft of the Medusa</strong>
[pic: <a href="http://en.wikipedia.org/wiki/The_Raft_of_the_Medusa">The Raft of the Medusa</a>]
Notice I've got these far without mentioning our big pain points: broken implementations, description languages and no way to evolve services. Please help me!</li>
	<li><strong>Tower of Babel</strong> 
[pic: <a href="http://en.wikipedia.org/wiki/Image:Brueghel-tower-of-babel.jpg">Brueghel Tower of Babel</a>]
So many people are having fun taking pot-shots at all this enterprisy chaos my favourite being <a href="http://www.tbray.org/ongoing/When/200x/2006/03/24/WS-Evolving">Tim Bray</a> who said
"nobody cared about the slaves who built the Tower of Babel" Yeah, thanks a lot Tim :-)</li>
	<li><strong>Services on the Web</strong>
[pic: chalk icon] 
We love the Web!</li>
	<li><strong>Web 2.0</strong> 
[pic: screen shot of http://www.web2log.com] 
There's this thing called the Web and there are these things Web people are calling "webservices". So you can GET service data over the Web, but that's just for hackers and people who can use the words "Web 2.0", "AJAX" and "mashup" and keep a straight face. Can they really have the answer?</li>
	<li><strong>"Good Enough?"</strong> 
[pic: query in MIT] 
Authentication, Authorisation, Identity, Discovery, Description, Reliability. Well the story of the Web has been "good enough" and it's the simplest thing that can possibly succeed that will win out in the end, But there are some real business requirements buried amongst all those enterprisey specs not being met on the Web. Actually give me one thing, something to manage my "identity"! And although the likes of Yahoo! Google and Amazon all have patterns  for authentication, they are fragmented, and don't seem to have the same scrutiny as say, WS-Trust and SAML. Shouldn't these things be standardised?</li>
	<li><strong>"Mutiny!"</strong> 
[pic: <a href="http://en.wikipedia.org/wiki/Image:Mutiny_HMS_Bounty.jpg">Mutiny on the Bounty</a>]
 So what should the W3C do about Web services? It could cast them adrift. But that story won't have a happy ending.</li>
	<li><strong>Services on the Web and Web Services</strong> 
[pic: chalk icon, cheese icon]
No, just accept they're separate things. They're chalk and cheese. Please don't try and make chalky-cheese or cheesey-chalk. But maybe you'd like to give us patterns for services to address some of those missing enterprisy bits ..</li>
</ul>
Thank you!