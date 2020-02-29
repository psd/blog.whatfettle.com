---
title: "One CSV, thirty stories: 4. Scattering"
timestamp: 2014-10-17T19:30:18Z
date: 2014-10-17
---

	<p><em>This is day 4 of <a href="http://blog.whatfettle.com/2014/10/13/one-csv-thirty-stories/">One <span class="caps">CSV</span>, 30 stories</a> a series of articles exploring <a href="https://www.gov.uk/government/statistical-data-sets/price-paid-data-downloads">price paid data</a> from the Land Registry found on <span class="caps">GOV</span>.UK. The code for this and the other articles is available as open source from <a href="https://github.com/psd/price-paid-data">GitHub</a></em></p>

	<p>I had some feedback after <a href="http://blog.whatfettle.com/2014/10/15/one-csv-30-stories-3-minimal-viable-histograms/">yesterday</a> mostly from people enjoying my low-tech approach, which was nice. Today I wanted to look at the price paid for property. All 19 million prices on a single page in a hope to see any apparent trends or anomalies.</p>

	<p>To do this we only need the date and the price columns, and we might as well sort them by date as I&#8217;m pretty sure that&#8217;ll be useful later:</p>

<pre><code>awk -F&#39;⋯&#39; &#39;{print $2 &quot;⋯&quot; $1}&#39; &lt; data/pp.tsv | sort &gt; prices.tsv</code></pre>

	<p>Now to scatter the prices with time on the x-axis, and the price paid on the y-axis. We&#8217;ll use yet another awk script to do this:</p>

<pre><code>cat prices.tsv | {
cat &lt;&lt;!
%!
%%Orientation: Landscape
%%Page: 1 1
0 0 0 setrgbcolor
/p {
    1 0 360 arc fill
} def
!
awk -F&#39;	&#39; -v max=15000000 &#39;
    function epoch(s) {
        gsub(/[:-]/, &quot; &quot;, s);
        s = s &quot; 00 00 00&quot;
        return mktime(s);
    }
    NR == 1 {
        first = epoch($1);
        last = systime() - first;
    }
    {
        this = epoch($1) - first;
        x = 600 * this / last;
        y = 600 * $2 / max;
        printf &quot;%d %d p\n&quot;, x, y;
    }&#39;
echo showpage
}</code></pre>

	<p>which generates a rather large <a href="http://en.wikipedia.org/wiki/PostScript">PostScript</a> document:</p>

<pre><code>%!
%%Orientation: Landscape
%%Page: 1 1
0 0 0 setrgbcolor
/p {
    1 0 360 arc fill
} def
0 4 p
0 0 p
   ... [19 million lines removed] ...
595 3 p
595 13 p
showpage</code></pre>

	<p>Back in the day the quickest way to see the output would be to attach a laser printer to the parallel port on the back of a server and <code>cat prices.ps &gt; /dev/lp</code> but these days we have a raft of ways of executing PostScript. Most anything that can render a <span class="caps">PDF</span> can usually also run the older PostScript language — it&#8217;s a little bit weird how we bat executable programs back and forth when we&#8217;re exchanging text and images. Just to emphasise the capacity for mischief, the generated 1.5 Gig PostScript reliably crashes the Apple OS X preview application, so it&#8217;s best to use something more solid, such as the open source <a href="http://www.imagemagick.org/">ImageMagick</a> in this case to make a raster image:</p>

<pre><code>scatterps.sh &lt; data/prices.tsv | convert -density 300 - out.png</code></pre>

	<p><img alt="" src="https://raw.githubusercontent.com/psd/price-paid-data/master/out/scatterps.png" /></p>

	<p>This image is intriguing, but we should be able to differentiate the density of points if we make them slightly transparent. PostScript is notoriously poor at rendering opacity, but luckily ImageMagick has its own drawing language which makes png files directly and it&#8217;s fairly straightforward to <a href="https://github.com/psd/price-paid-data/blob/master/bin/scatterim.sh">tweak the awk</a> to generate <a href="http://www.imagemagick.org/Usage/draw/"><span class="caps">MVG</span></a>:</p>

	<p><img alt="" src="https://raw.githubusercontent.com/psd/price-paid-data/master/out/scatterim.png" /></p>

	<p>We can see from this a general, apparently slow trend in the bulk of house prices, with seasonal and a marked dip at what looks like 2009. There&#8217;s also a strange vertical gap in higher priced properties towards the right which along with the horizontal bands more apparent on the first plot could be down to <a href="https://twitter.com/scedwar/status/522327111865237504">bunching around the stamp duty bands</a>.</p>

	<p>So there&#8217;s a few stories to delve into. I completely mismanaged my time writing this post, so will leave adding axis to the graphs until <a href="http://blog.whatfettle.com/2014/10/18/one-csv-thirty-stories-5-axes/">tomorrow</a>.</p>