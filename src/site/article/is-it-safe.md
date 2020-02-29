---
title: Is it safe?!
timestamp: 2005-10-31T14:36:03Z
date: 2005-10-31
---

<a href="http://uk.imdb.com/title/tt0074860/combined"><img src="http://blog.whatfettle.com/is-it-safe.jpg" height="215" width="301" border="0" hspace="4" vspace="4" alt="Is-It-Safe" /></a>
<p>A game I sometimes play when inflicting my presentation skills upon developers is to ask the simple question <a href="http://www.w3.org/2001/tag/doc/whenToUseGet.html">"so when do you use HTTP POST as opposed to GET?"</a> Depressingly the answers always involve the length of 'URLs', size and complexity of content being sent and worst of all, hiding pages from users. Occasionally some bright spark may highlight how the browser won't resend a POST without a dialogue, but I've not yet been given an answer which involved the word <i>verb</i>, let alone <a href="http://www.w3.org/TR/webarch/#safe-interaction">safety</a>.</p>
<p>So it should have come as no surprise when reading the O'Reilly <a href="http://www.oreilly.com/catalog/phpnut/">PHP in a Nutshell</a> (November 2005, first edition, wonder what took them so long?)  this afternoon that in a section discussing GET and POST, there is no mention of safety.</p>
</p>Of course this is fairly topical with the fallout following Google's Web accelerator (<a href='http://www.intertwingly.net/blog/2005/10/24/Theyre-baaaaaaack'>They're baaaaaaack</a>, <a href="http://37signals.com/svn/archives2/the_google_web_accelerator_is_back_with_a_vengeance.php">Back with a vengence</a>) just surfing around and kicking off all sorts of weird and wonderful side-effects - click <a href="">here</a> to launch the nukes!</p>
<p>
In WSDL, we had several rounds of fairly heated discussion on just <a href="http://www.w3.org/2002/ws/desc/4/lc-issues/#LC75c">this issue</a> surrounding describing safe operations, many people being of the opinion that frameworks and tools can't detect when an operation is 'safe', and developers don't care anyway. For my money any tool or Web framework <a href="http://www.mnot.net/blog/2005/10/30/frameworks">worth writing your code inside out for</a> should fire up a dentist's drill, slap you around the face and repeatedly ask <a href="http://uk.imdb.com/title/tt0074860/quotes">IS IT SAFE?</a> until it GET's a straight answer.</p>
