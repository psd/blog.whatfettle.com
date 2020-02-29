---
title: IMDB Vote History
timestamp: 2004-03-29T21:49:23Z
date: 2004-03-29
---

<img alt="Fremont Cinema in San Louis Obispo" src="http://blog.whatfettle.com/archives/fremont-slo.jpg" width="162" height="279" border="0" />
<p>
I'm a big fan of <a href='http://uk.imdb.com'>The Internet Movie Database</a>. The other day I wanted to share my voting history with a friend but couldn't find a publicly visible URI. So I ended up hacking my own <a>Film Voting History</a> page. 
Interestingly although my votes can differ quite wildly to the IMDB score, overall my average vote matches that of the IMDB membership. Just call me Mr Average!
</p>
<!--more-->
<p>To create your own Film Voting History Page for your MovableType site save <a href='/archives/ImdbVoteHistory.pl.txt'>ImdbVoteHistory.pl</a> as a '.pl' file in your plugins directory and then put the following tags in of your MT templates:
</p>
<pre>
  &lt;MTImdb id="FsdFSfSFDFsdfsdfsdf....."&gt;

  &lt;table&gt;
    &lt;tr&gt;
      &lt;th align='left'&gt;Film&lt;/th&gt;
      &lt;th&gt;Vote&lt;/th&gt;
      &lt;th&gt;IMDB&lt;/th&gt;
    &lt;/tr&gt;

    &lt;MTImdbVoteHistory&gt;

      &lt;tr&gt;
        &lt;td&gt;&lt;a href='&lt;$MTImdbVoteLink$&gt;'&gt;&lt;$MTImdbVoteName$&gt;&lt;/a&gt;&lt;/td&gt;
        &lt;td&gt;&lt;$MTImdbVoteMyValue$&gt;&lt;/td&gt;
        &lt;td&gt;&lt;$MTImdbVoteImdbValue$&gt;&lt;/td&gt;
      &lt;/tr&gt;

    &lt;/MTImdbVoteHistory&gt;

    &lt;tr&gt;
      &lt;th&gt;Average over &lt;$MTImdbVoteCount$&gt; films:&lt;/th&gt;
      &lt;th&gt;&lt;$MTImdbVoteMyAverage$&gt;&lt;/th&gt;
      &lt;th&gt;&lt;$MTImdbVoteImdbAverage$&gt;&lt;/th&gt;
    &lt;/tr&gt;
  &lt;/table&gt;
</pre>
<p>
Where id is the imdb.com 'id' cookie - you can find this by digging around in your browser cache.
</p>
<p>
This module parses the HTML from the IMDB site using a regular expression. I've tried to make the regex as flexible as possible, but as with any page scraping, it will break if imdb.com radically alter their site.
</p>
<p>
To ensure you get all the votes and the regex gets both your vote and the average score, on the IMDB "your vote history page", click on "Change display options for this category" then set:
</p>
<pre>
Show (x) All titles
Show (x) Your votes
Show
    DVD available to buy ( )
    VHS available to buy ( )
    CD available to buy ( )
    On TV ( )
    Showtimes ( )
    IMDb Votes (x)
</pre>
<p>
so the vote history page is a list with three columns: "title", "your-votes", "imdb-votes".
</p>
<p>
16-12-2004: Imdb added a year column, so had to fix this - download the latest version (0.2) of the script
</p>
