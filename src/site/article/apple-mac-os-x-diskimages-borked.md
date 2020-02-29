---
title: Apple Mac OS-X DiskImages Borked
timestamp: 2006-06-25T20:46:11Z
date: 2006-06-25
---

<p>I just spent 40 minutes trying to work out why Tiger (10.4.6) was refusing to mount disk images, Google didn't have the answer, so hopefully after publishing this, it will :-) </p>

<p>Double clicking a <a href="http://en.wikipedia.org/wiki/.dmg">.dmg</a> file gave no response, and the <a href="http://en.wikipedia.org/wiki/Disk_Utility">Disk Utility</a>, <a href="http://developer.apple.com/documentation/Darwin/Reference/ManPages/man1/hdiutil.1.html">hdiutil</a> and <a href="http://developer.apple.com/documentation/Darwin/Reference/ManPages/man8/hdid.8.html">hdid</a> commands locked up. Plugging around with the <code>-debug</code> and <code>-verbose</code> options gave nothing away.  Resorting to trial and error clearing cache files from under the <code>/System/Library/Caches</code> directory was the answer with deleting <code>Extensions.kextcache</code> and   <code>Extensions.mkext</code> then rebooting finally doing the trick.</p>
