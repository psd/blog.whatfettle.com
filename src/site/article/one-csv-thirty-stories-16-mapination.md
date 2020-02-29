---
title: "One CSV, thirty stories: 16. Mapination"
timestamp: 2014-11-10T23:04:54Z
date: 2014-11-10
---

	<p><em>This is day 16 of <a href="http://blog.whatfettle.com/2014/10/13/one-csv-thirty-stories/">One <span class="caps">CSV</span>, 30 stories</a> a series of articles exploring <a href="https://www.gov.uk/government/statistical-data-sets/price-paid-data-downloads">price paid data</a> from the Land Registry found on <span class="caps">GOV</span>.UK. The code for this and the other articles is available as open source from <a href="https://github.com/psd/price-paid-data">GitHub</a></em></p>

	<p><a href="http://blog.whatfettle.com/2014/11/07/one-csv-thirty-stories-15-hotspots/">Yesterday</a> we made a map with the total volume of transactions over 20 years. I wanted to see how that distribution changed over time. A spot of knife-and-forking:</p>

<pre><code>cut -d&#39;⋯&#39; -f2,3 data/pp.tsv |
    sed -e &#39;s/ //&#39; |
    awk &#39;$2&#39; |
    sort |
    uniq -c |
    sort -rn |
    sed -e &#39;s/^ *//&#39; -e &#39;s/  */⋯/&#39; -e &#39;s/ *$//&#39;
    sort -k2 &gt; daily-postcodes.tsv</code></pre>

	<p>gives a count of the number of transactions for each postcode on each date:</p>

<pre><code>1⋯1995-01-01⋯B297NS
1⋯1995-01-01⋯B315DF
1⋯1995-01-01⋯B458LY
1⋯1995-01-01⋯BB99RQ
1⋯1995-01-01⋯BS110JH
1⋯1995-01-01⋯BS16XF
1⋯1995-01-01⋯BS81BY
1⋯1995-01-01⋯CA119JD
1⋯1995-01-01⋯CO70BZ
1⋯1995-01-01⋯CR35SU
...</code></pre>

	<p>To make a version of the map, one for each of the days in the price-paid dataset requires an awfully large number of postcode lookups. Rather than sorting and merging individual files 7181 times I elected to write some code to read the OS OpenData™ Code-Point® into a Perl hash table:</p>

<pre><code>my $geocodes = &quot;data/codepo_gb.tsv&quot;;
my %postcode = ();
open my $file, &quot;&lt;&quot;, $geocodes or die &quot;unable to open $geocodes&quot;;
while (my $line = &lt;$file&gt;) {
    my ($postcode, $easting, $northing) = split /\t/, $line;
    $postcode{$postcode} = { easting =&gt; $easting, northing =&gt; $northing };
}</code></pre>

	<p>Which we can use to look-up the easting and northing to draw a circle for each postcode:</p>

<pre><code>my $c = $postcode{$p-&gt;{postcode}};
my $x = $width * $c-&gt;{easting} / $max_easting;
my $y = $height - ($height * $c-&gt;{northing} / $max_northing);
my $size = $p-&gt;{count};
printf($fp &quot;circle %d,%d,%d,%d\n&quot;, $x, $y, $x+$size, $y+$size);</code></pre>

	<p>The complete script generates an individual image for each day, here&#8217;s the 365 images for 2007:</p>

	<p><a href="https://www.flickr.com/photos/psd/15759722375" title="Daily volume of Land Registry transactions by postcode 2007"><img src="https://farm8.staticflickr.com/7475/15759722375_4812e88a43_z.jpg" width="640" height="394" alt="Daily volume of Land Registry transactions by postcode 2007"></a></p>

	<p>Stringing these individual images using <a href="http://www.lcdf.org/gifsicle/man.html">gifsicle</a> gives a rather large animated gif:</p>

	<p><a href="https://github.com/psd/price-paid-data/blob/master/out/mapination/daily-2012.gif"><img src="https://raw.githubusercontent.com/psd/price-paid-data/master/out/mapination/daily-2012.gif"></a></p>

	<p>If you are minded, you can upload these to <a href="http://gifprint.com/">gifprint.com</a> to make a flip book. A partial success:</p>

	<p><img src="https://raw.githubusercontent.com/psd/price-paid-data/master/out/flipbook.gif"></p>

	<p>The daily images are quite noisy and should benefit from some polishing, so more iteration on this hack <a href="http://blog.whatfettle.com/2014/11/17/one-csv-thirty-stories-17-scattermap-calendar/">tomorrow</a>.</p>