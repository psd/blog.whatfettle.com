---
title: "One CSV, thirty stories: 21. Mistakes were made"
timestamp: 2014-12-02T06:55:04Z
date: 2014-12-02
---

	<p><em>This is day 21 of <a href="http://blog.whatfettle.com/2014/10/13/one-csv-thirty-stories/">One <span class="caps">CSV</span>, 30 stories</a> a series of articles exploring <a href="https://www.gov.uk/government/statistical-data-sets/price-paid-data-downloads">price paid data</a> from the Land Registry found on <span class="caps">GOV</span>.UK. The code for this and the other articles is available as open source from <a href="https://github.com/psd/price-paid-data">GitHub</a></em></p>

	<p>I now know quite a few people who work for the Land Registry, regularly hang out with some of the digital team, follow <a href="https://twitter.com/LandRegGov">@LandRegGov</a> on Twitter, and here I am writing these thirty love-notes to their open data. I also have something of an ego. So it was a little disappointing to have to hear third-hand about a recent Land Registry blog post:</p>

	<blockquote>
		<p><a href="http://blog.landregistry.gov.uk/price-paid-data-improving-data-quality/">Price Paid Data – Improving data quality</a> </p>
	</blockquote>

	<p>That&#8217;s a fairly jaunty title I thought, and entirely relevant to my interests!</p>

	<blockquote>
		<p>While we strive to release data of the highest quality we know sometimes that we could do better. This month we are improving our Price Paid Dataset by removing historic transactions that were added in error.</p>
	</blockquote>

	<p>My heart sank.</p>

	<blockquote>
		<p>Recently a customer reported some duplicate entries in our 2003 and 2004 Price Paid Dataset. After investigation we found there had been an internal error with a process used to cancel applications. Price paid entries were not removed when they should have been. That process changed early in 2005. We’ve now corrected the data and will be removing around 48,000 transactions from a dataset that contains over 19 million. There were approximately 18,000 duplicates in 2003, 30,000 in 2004 and less than 100 from 2005.</p>
	</blockquote>

	<p>Less than 0.25% of records over twenty years doesn&#8217;t sound too bad, but if 30,000 of the 1,261,448 transactions in 2004 are duplicate, that implies a 2.4% increase in volume and means roughly 1 in every 40 transactions are ones which in wouldn&#8217;t be present in other years. That could be quite bad news for these posts.</p>

	<blockquote>
		<p>The invalid entries will be removed from each version of the yearly files that we publish through <span class="caps">GOV</span>.UK and from the single complete file of all Price Paid transactions. The change will also be applied to the open data used by Price Paid Report Builder in the same month.</p>
	</blockquote>

	<p>OK, so that&#8217;s cool.</p>

	<blockquote>
		<p>We will be publishing a file on <span class="caps">GOV</span>.UK that contains details of all the invalid entries on 28 November 2014. The file will be in the same form as the monthly update, which can be used to update data stores. Each record in the update files will have a record status set to ‘D’.</p>
	</blockquote>

	<p>Well the 28th was last Friday, so I created a fresh clone of <a href="https://github.com/psd/price-paid-data">the repository</a> and ran &#8220;make&#8221; to download the latest version of the price-file and rebuild the data. That took a while.</p>

	<p>Looking at the status, there are no &#8216;D&#8217; records in new complete file:</p>

<pre><code>cat old/data/status.tsv new/data/status.tsv
19325571    A
19455964    A</code></pre>

	<p>It did occur to me there might be duplicate records within the <span class="caps">CSV</span> file, so checked, firstly by looking for duplicate transaction identifiers:</p>

<pre><code>$ awk &#39;!_[$1]++&#39; &lt; pp-complete.csv &gt; pp-deduped.csv
$ cmp pp-complete.csv pp-deduped.csv
[no difference]</code></pre>

	<p>and then again by uniquely sorting the entire file:</p>

<pre><code>$ cat pp-complete.csv | iconv -f ISO-8859-1 -t UTF-8 | sort -u &gt; pp-complete-uniq.csv
$ wc -l pp-complete.csv pp-complete-uniq.csv
19325571 pp-complete.csv
19325571 pp-complete-uniq.csv</code></pre>

	<p>I then wanted to compare the old <span class="caps">CSV</span> with the new version. Ordinarily I&#8217;d use <a href="http://blog.whatfettle.com/2005/12/05/i-opendiff/">opendiff</a> to visually compare two versions of text, but these files are way too big for that. Also the records could be in a different order, so I sorted them by date and then ran them through the good old Unix <a href="http://en.wikipedia.org/wiki/Diff_utility">diff</a>:</p>

<pre><code>$ cat old/data/pp-complete-old.csv | iconv -f ISO-8859-1 -t UTF-8 | sort -t, -k3 &gt; old/data/pp-complete-sorted.tsv
$ cat new/data/pp-complete.csv | iconv -f ISO-8859-1 -t UTF-8 | sort -t, -k3 &gt; new/data/pp-complete-sorted.tsv
$ diff old/data/pp-complete-sorted.csv new/data/pp-complete-sorted.csv  &gt; diffs.txt</code></pre>

	<p>On my quite constrained, otherwise busy laptop, running on battery whilst I was <a href="https://twitter.com/psd/status/539342955065405441">sat on a delayed train</a>, that took quite a while, but not long enough to make me feel a need to provision and spin up a Hadoop cluster.</p>

<pre><code>real    8m9.073s
user    0m44.637s
sys     3m57.099s</code></pre>

	<p>I put the output into a <a href="https://gist.github.com/psd/81f49b1429318fcdb2c2">gist</a>. We can then get a feel for how much has changed using <a href="http://invisible-island.net/diffstat/">diffstat</a>:</p>

<pre><code>$ diffstat diffs.txt 
unknown |243657 +++++++++++++++++++++++++++++++++++++++++++++++++---------------
1 file changed, 187025 insertions(+), 56632 deletions(-)</code></pre>

	<p>Though that doesn&#8217;t quite tell the story. So I split the <span class="caps">CSV</span> into a file for each year:</p>

<pre><code>$ awk -F, &#39;{ file=&quot;years/&quot; substr($3,2,4) &quot;.csv&quot;; print &gt; file}&#39; pp-complete-sorted.tsv</code></pre>

	<p>then looked at the difference for each year:</p>

<pre><code>$ for i in *; do diff $i ../../../old/data/years/$i &gt; $i.txt ; done
$ ls *txt | xargs -L 1 -t diffstat</code></pre>

<pre><code>1995 |  140 +++++++++++++++++++++++++++++++++++++---------------------------
 1 file changed, 81 insertions(+), 59 deletions(-)
 1996 |  202 ++++++++++++++++++++++++++++++++++++++--------------------------
 1 file changed, 120 insertions(+), 82 deletions(-)
 1997 |  194 ++++++++++++++++++++++++++++++++++++++--------------------------
 1 file changed, 116 insertions(+), 78 deletions(-)
 1998 |  205 ++++++++++++++++++++++++++++++++++++++--------------------------
 1 file changed, 122 insertions(+), 83 deletions(-)
 1999 |  244 ++++++++++++++++++++++++++++++++++++++--------------------------
 1 file changed, 147 insertions(+), 97 deletions(-)
 2000 |  282 +++++++++++++++++++++++++++++++++++-----------------------------
 1 file changed, 156 insertions(+), 126 deletions(-)
 2001 |  366 +++++++++++++++++++++++++++++++++++-----------------------------
 1 file changed, 203 insertions(+), 163 deletions(-)
 2002|  365 ++++++++++++++++++++++++++++++++++------------------------------
 1 file changed, 194 insertions(+), 171 deletions(-)
 2003 |19166 ----------------------------------------------------------------
 1 file changed, 199 insertions(+), 18967 deletions(-)
 2004 |30190 ----------------------------------------------------------------
 1 file changed, 209 insertions(+), 29981 deletions(-)
 2005 |  396 +++++++++++++++++++++++++++-------------------------------------
 1 file changed, 169 insertions(+), 227 deletions(-)
 2006 |  415 +++++++++++++++++++++++++++++++++-------------------------------
 1 file changed, 220 insertions(+), 195 deletions(-)
 2007 |  494 ++++++++++++++++++++++++++++++++++------------------------------
 1 file changed, 265 insertions(+), 229 deletions(-)
 2008 |  229 ++++++++++++++++++++++++++++++++--------------------------------
 1 file changed, 118 insertions(+), 111 deletions(-)
 2009 |  233 +++++++++++++++++++++++++++++++++++-----------------------------
 1 file changed, 129 insertions(+), 104 deletions(-)
 2010 |  278 +++++++++++++++++++++++++++++++++-------------------------------
 1 file changed, 147 insertions(+), 131 deletions(-)
 2011 |  244 ++++++++++++++++++++++++++++++++++------------------------------
 1 file changed, 131 insertions(+), 113 deletions(-)
 2012 |  370 +++++++++++++++++++++++++++++++++++-----------------------------
 1 file changed, 208 insertions(+), 162 deletions(-)
 2013 | 1434 +++++++++++++++++++++++++++++++++++++++++++++-------------------
 1 file changed, 1014 insertions(+), 420 deletions(-)
 2014 |188210 ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++--
 1 file changed, 183077 insertions(+), 5133 deletions(-)</code></pre>

	<p>That&#8217;s a lot of changes, and matches the number of changes for the years outlined in the announcement, but there are quite a few other changes as well.</p>

	<p>Summaries are useful, but there&#8217;s no replacement for digging into the detail. Mostly the differences seem to be changes to addresses, such as:</p>

<pre><code>9715c9715
&lt; ...,&quot;533&quot;,&quot;FLAT ABOVE SHOP&quot;,&quot;BATTERSEA PARK ROAD&quot;,&quot;LONDON&quot;,&quot;LONDON&quot;,&quot;WANDSWORTH&quot;,&quot;GREATER LONDON&quot;,&quot;A&quot;^M
---
&gt; ... ,&quot;533A&quot;,&quot;&quot;,&quot;BATTERSEA PARK ROAD&quot;,&quot;&quot;,&quot;LONDON&quot;,&quot;WANDSWORTH&quot;,&quot;GREATER LONDON&quot;,&quot;A&quot;^M</code></pre>

	<p>and:</p>

<pre><code>8447592c8447867
&lt; ... ,&quot;ROSEWAITE, 1&quot;,&quot;&quot;,&quot;PANTON ROAD&quot;,&quot;BENNIWORTH&quot;,&quot;MARKET RASEN&quot;,&quot;EAST LINDSEY&quot;,&quot;LINCOLNSHIRE&quot;,&quot;A&quot;^M
---
&gt; ... ,&quot;ROSEWAITE&quot;,&quot;&quot;,&quot;&quot;,&quot;BENNIWORTH&quot;,&quot;MARKET RASEN&quot;,&quot;EAST LINDSEY&quot;,&quot;LINCOLNSHIRE&quot;,&quot;A&quot;^M</code></pre>

	<p>or even:</p>

<pre><code>8605627c8605907
&lt; ... ,&quot;GLANLLYN&quot;,&quot;FLAT 2&quot;,&quot;WATER STREET&quot;,&quot;BARMOUTH&quot;,&quot;BARMOUTH&quot;,&quot;GWYNEDD&quot;,&quot;GWYNEDD&quot;,&quot;A&quot;^M
---
&gt; ... ,&quot;BRON LLYN&quot;,&quot;&quot;,&quot;WATER STREET&quot;,&quot;&quot;,&quot;BARMOUTH&quot;,&quot;GWYNEDD&quot;,&quot;GWYNEDD&quot;,&quot;A&quot;^M</code></pre>

	<p>As mentioned on <a href="http://blog.whatfettle.com/2014/11/06/one-csv-thirty-stories-13-postcodes/">Day 13</a> addresses are a fluffy, movable feast, but I&#8217;m suprised to see changes like this to records from 1995. This has further reduced my confidence in the use of informal lines of text as a means of identifying a location. I&#8217;ll dig deeper into addresses in a subsequent post, but my position remains: addresses are just an attribute, not a key. What we need in the price-paid data file is a stable identifier for each property transacted upon, and a stable identifier for a street address, with links between the two identities.</p>

	<p>Then there are records where other fields such as the property-type has changed, as in this example where a Semi-detached house sold in January 1995 is now recorded as being Detached:</p>

<pre><code>25601c25601
&lt; &quot;{1FB96B78-6395-4C6F-9A7C-F1D8ABC78EB6}&quot;,&quot;65000&quot;,&quot;1995-01-20 00:00&quot;,&quot;NR14 7SX&quot;,&quot;S&quot;,&quot;N&quot;,&quot;F&quot;,&quot;22&quot;,&quot;&quot;,&quot;CAWSTONS MEADOW&quot;,&quot;PORINGLAND&quot;,&quot;NORWICH&quot;,&quot;SOUTH NORFOLK&quot;,&quot;NORFOLK&quot;,&quot;A&quot;^M
---
&gt; &quot;{1FB96B78-6395-4C6F-9A7C-F1D8ABC78EB6}&quot;,&quot;65000&quot;,&quot;1995-01-20 00:00&quot;,&quot;NR14 7SX&quot;,&quot;D&quot;,&quot;N&quot;,&quot;F&quot;,&quot;22&quot;,&quot;&quot;,&quot;CAWSTONS MEADOW&quot;,&quot;PORINGLAND&quot;,&quot;NORWICH&quot;,&quot;SOUTH NORFOLK&quot;,&quot;NORFOLK&quot;,&quot;A&quot;^M</code></pre>

	<p>Hmmm. I wondered if a more recent transaction might have impacted this early record:</p>

<pre><code>$ grep &quot;NR14 7SX&quot; old/data/pp-complete-sorted.tsv  | grep &#39;&quot;22&quot;&#39;
&quot;{1FB96B78-6395-4C6F-9A7C-F1D8ABC78EB6}&quot;,&quot;65000&quot;,&quot;1995-01-20 00:00&quot;,&quot;NR14 7SX&quot;,&quot;S&quot;,&quot;N&quot;,&quot;F&quot;,&quot;22&quot;,&quot;&quot;,&quot;CAWSTONS MEADOW&quot;,&quot;PORINGLAND&quot;,&quot;NORWICH&quot;,&quot;SOUTH NORFOLK&quot;,&quot;NORFOLK&quot;,&quot;A&quot;
&quot;{B78457EE-8921-4211-837F-27A3EE2F7895}&quot;,&quot;177500&quot;,&quot;2007-09-17 00:00&quot;,&quot;NR14 7SX&quot;,&quot;S&quot;,&quot;N&quot;,&quot;F&quot;,&quot;22&quot;,&quot;&quot;,&quot;CAWSTONS MEADOW&quot;,&quot;PORINGLAND&quot;,&quot;NORWICH&quot;,&quot;SOUTH NORFOLK&quot;,&quot;NORFOLK&quot;,&quot;A&quot;</code></pre>

<pre><code>$ grep &quot;NR14 7SX&quot; new/data/pp-complete-sorted.tsv  | grep &#39;&quot;22&quot;&#39;
&quot;{1FB96B78-6395-4C6F-9A7C-F1D8ABC78EB6}&quot;,&quot;65000&quot;,&quot;1995-01-20 00:00&quot;,&quot;NR14 7SX&quot;,&quot;D&quot;,&quot;N&quot;,&quot;F&quot;,&quot;22&quot;,&quot;&quot;,&quot;CAWSTONS MEADOW&quot;,&quot;PORINGLAND&quot;,&quot;NORWICH&quot;,&quot;SOUTH NORFOLK&quot;,&quot;NORFOLK&quot;,&quot;A&quot;
&quot;{B78457EE-8921-4211-837F-27A3EE2F7895}&quot;,&quot;177500&quot;,&quot;2007-09-17 00:00&quot;,&quot;NR14 7SX&quot;,&quot;D&quot;,&quot;N&quot;,&quot;F&quot;,&quot;22&quot;,&quot;&quot;,&quot;CAWSTONS MEADOW&quot;,&quot;PORINGLAND&quot;,&quot;NORWICH&quot;,&quot;SOUTH NORFOLK&quot;,&quot;NORFOLK&quot;,&quot;A&quot;</code></pre>

	<p>It seems not. That&#8217;s even more worrying. This kind of detail shouldn&#8217;t just change arbitrarily in what should after all be an immutable, tamper-proof register.</p>

	<blockquote>
		<p>Despite the number of transactions affected, we can confirm that there is no impact on the House Price Index figure published each month. However sales volume figures will change.</p>
	</blockquote>

	<p>That does indeed sound hopeful, and is borne out by my difficulty of spotting differences in the regenerated visualisations from those in previous posts. I was particularly worried about losing some of the more interesting anomalies in the heatmap we made into a poster and pinned up on the Land Registry canteen wall on <a href="http://blog.whatfettle.com/2014/11/07/one-csv-thirty-stories-14-hackday/">Day 14</a>:</p>

	<p><a href="https://www.flickr.com/photos/psd/15303511564" title="New data by Paul Downey, on Flickr"><img src="https://farm8.staticflickr.com/7470/15303511564_4bed91160f_o.png" width="635" height="249" alt="New data"></a></p>

	<p>Not much of a visible difference between the two plots. Phew!</p>

	<p>So after being initially irritated by the title of this post, the <a href="http://en.wikipedia.org/wiki/Non-apology_apology">non-apology apology</a> tone and disappointed about how I came to hear about the issue I think this is actually a very cool story for open data, and I have to applaud the Land Registry for their openness.</p>

	<p>People working in Government are often expected to be infallible and get a lot of criticism when they&#8217;re not. Often that&#8217;s because there&#8217;s no alternative but to use their information or service, which is one of the reasons being called a &#8220;customer&#8221; when you&#8217;re <a href="http://russelldavies.typepad.com/planning/2014/06/consumers-users-people-mammals.html">the user</a> of a public service without any alternative can feel quite insulting.</p>

	<p>As the canonical data provider, such pressures can make it very easy to let perfection become the enemy of good, and limit the amount of data released. Although I&#8217;m pushing the Land Registry to do better in these posts, I remain best pleased the Land Registry releases this data openly, and in convenient form. Mistakes will happen, but admitting fault like this quickly and openly is great, and exactly the right thing to do.</p>

	<p>This issue is a great example of how publishing open data can really help improve its quality. I suspect the &#8220;customer feedback&#8221; must have been based on knowledge of particular transactions. </p>

	<p><a href="http://www.memespring.co.uk/">Richard</a> has suggested ways of <a href="http://blog.memespring.co.uk/2014/07/16/programatically-testing-regulatory-data/">programatically testing regulatory data</a> and enabling greater scrutiny is exactly why we should open up more data. Being open allows anyone to independently cross-check the validity and veracity of public data, building a better relationship with users and encouraging improving the quality of our public data at source. Establishing such feedback loops is why one of my favourite Government Digital Service design principles is to <a href="https://www.gov.uk/design-principles#tenth">make things open, it makes them better</a></p>

	<p><img src="https://raw.githubusercontent.com/psd/design-principles-doodles/master/postcards/10-make-things-open-it-makes-them-better.png"></p>

	<p>One thing publishers of data should do is to maintain files such as this under <a href="http://en.wikipedia.org/wiki/Revision_control">revision control</a> and publish differences, so as consumers we can track changes and assess their impact.</p>

	<blockquote>
		<p>If you have any queries or concerns over this correction please contact us at commercial.services@landregistry.gsi.gov.uk. We welcome your feedback.</p>
	</blockquote>

	<p>I&#8217;m a little put off by mention of &#8220;commercial services&#8221;, but I have sent mail to this address with a link to this post.</p>

	<p>This blip did take the wind out of my sails a little, but I&#8217;ll aim to pick up with another post in the series &#8220;tomorrow&#8221;.</p>

	<p><i><a href="http://www.owenboswarva.com/">Owen Boswarva</a> has shared similar thoughts on this issue in his post <a href="http://mapgubbins.tumblr.com/post/103854046790/how-far-can-we-trust-open-data">how far can we trust open data</a></i></p>

	<p><i>Update: I had a very nice response to my mail from <a href="http://blog.landregistry.gov.uk/author/lorna/">Lorna Jordan</a> who I know has been busy supporting users and working on releasing more data. Lorna confirmed the &#8216;D&#8217; status appears to the monthly files, and are then removed when compiling complete file and also explained the Land Registry continue to receive cases as old as 1995 even now which are being registered voluntarily for the first time, which results in additions. She also explained the process for publishing price-paid data, which can introduce corrections: &#8220;The price paid data does not come from the register, but is captured separately at the beginning of a case, therefore the register is not incorrect for property type etc when these changes occur. However, if there are changes to the price or date of a transaction we will always check against the register and amend if needed.&#8221;</i></p>