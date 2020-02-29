---
title: Comment errors ..
timestamp: 2004-12-05T10:34:33Z
date: 2004-12-05
---

<img alt="error.jpg" src="http://blog.whatfettle.com/archives/error.jpg" width="330" height="263" border="0" />

Drat! For some reason the MT script that forwards comments from this blog to my email address has stoped working. Unfortunately my ISP doesn't seem to provide an error_log, only statistics, so it's a case of head scratching over what may have changed along with littering the code with "exec 2&gt; my_log" statements.  I've so many better things planned for today :-(

18-12-2004: The MT rebuild triggered by adding a comment was thrashing and I guess exceeding a server process limit. Reducing the number of  templates with the 'rebuild' flag on seems to have resolved this (for the moment).  Of course within three minutes of reenabling comments, I was hit by 10 comment spams. Gah!
