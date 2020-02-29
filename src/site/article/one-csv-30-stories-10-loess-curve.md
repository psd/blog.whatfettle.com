---
title: "One CSV, thirty stories: 10. LOESS curve"
timestamp: 2014-11-01T14:55:37Z
date: 2014-11-01
---

	<p><em>This is day 10 of <a href="http://blog.whatfettle.com/2014/10/13/one-csv-thirty-stories/">One <span class="caps">CSV</span>, 30 stories</a> a series of articles exploring <a href="https://www.gov.uk/government/statistical-data-sets/price-paid-data-downloads">price paid data</a> from the Land Registry found on <span class="caps">GOV</span>.UK. The code for this and the other articles is available as open source from <a href="https://github.com/psd/price-paid-data">GitHub</a></em></p>

	<p>It&#8217;s been a few days since <a href="http://blog.whatfettle.com/2014/10/28/one-csv-thirty-stories-9-yearly/">yesterday&#8217;s post</a> in part because I&#8217;ve been away canal boating without much access to the Internet, but mostly because I spent the time I had literally off in the weeds. It seems I frittered what little time I had for this project exploring statistical techniques to try and make more sense of the prices.</p>

	<p>A week away has also put me in something a reflective mood. Playing with statistics reminded me of my time as a University placement student working in an <a href="http://en.wikipedia.org/wiki/Operations_research">operational research</a> team at <a href="http://en.wikipedia.org/wiki/Imperial_Chemical_Industries"><span class="caps">ICI</span></a> in the 1980s. I learnt a lot of things during that year sharing an office with an elderly statistician<a href="#†">†</a>, but above all else, how statistics is an art form in that art is required to use statistics to tell stories.</p>

	<p><a href="https://www.flickr.com/photos/psd/33877019" title="ICI Mond Division 1984 by Paul Downey, on Flickr"><img src="https://farm1.staticflickr.com/23/33877019_6bf2cd0f39_z.jpg" width="640" height="375" alt="ICI Mond Division 1984"></a></p>

	<p>Something else I&#8217;ve carried with me came directly from my boss at the time, Mike Taylor. I really couldn&#8217;t have asked for a better sponsor for my &#8220;industrial training&#8221;, someone who really understood the value of using a multiplicity of tools, instilling into me the Marshall McLuhan insight how we shape tools which shape how we think. Mike set me loose on quite a few problems experienced by quite a variety of users, and encouraged to tackle each of them with a different programming language or environment, many of which no longer exist or have much of a footprint on the Web. But it was <a href="http://en.wikipedia.org/wiki/APL_(programming_language)"><span class="caps">APL</span></a> which really captured my imagination. Here&#8217;s a picture of Mike in front of his <span class="caps">IBM</span> XT, with its <span class="caps">APL</span> keyboard and printer:</p>

	<p><a href="https://www.flickr.com/photos/psd/4321426" title="Mike Taylor ICI Runcorn by Paul Downey, on Flickr"><img src="https://farm1.staticflickr.com/1/4321426_67ffe39a95_z.jpg" width="640" height="431" alt="Mike Taylor ICI Runcorn"></a></p>

	<p>Given my fond memories of this era building small systems in Prolog, Smalltalk, <span class="caps">SAVOIR</span> and <a href="http://en.wikipedia.org/wiki/SAS_(software)"><span class="caps">SAS</span></a>, and establishing a long love of <span class="caps">APL</span>, I&#8217;m rather surprised to be finding <a href="http://en.wikipedia.org/wiki/R_(programming_language)">R</a> heavy going, especially given how quick and easy it was to generate an interesting perspective on our prices:</p>

<pre><code>prices &lt;- read.csv(&quot;data/prices.tsv&quot;, sep=&quot;⋯&quot;)
plot(prices[,1])</code></pre>

	<p><a href="https://www.flickr.com/photos/psd/15057749553" title="R prices"><img src="https://farm6.staticflickr.com/5601/15057749553_3406f2e7a2_z.jpg" width="640" height="607" alt="R prices"></a></p>

	<p>R is after all just yet another workspace environment with great matrix manipulation, so what&#8217;s not to like?  Well whilst interactive environments are great for experimentation and a <a href="http://en.wikipedia.org/wiki/Read%E2%80%93eval%E2%80%93print_loop"><span class="caps">REPL</span></a> is almost essential for learning a new programming language, my aesthetic is definitely for small pieces, loosely joined and it&#8217;s hard to fit workspaces into the <a href="http://en.wikipedia.org/wiki/Pipeline_(Unix)">Unix pipeline</a>. It is, however possible to create R scripts using the following <a href="http://en.wikipedia.org/wiki/Shebang_(Unix)">shebang</a>:</p>

<pre><code>#!/usr/bin/env r --slave -f</code></pre>

	<p>and whilst we can easily generate plots as images:</p>

<pre><code>png(&quot;out/pricesmooth.png&quot;, width=640, height=480)</code></pre>

	<p>I&#8217;ve had little luck dealing with files from standard input even when using a filename of <code>/dev/stdin</code>, though it is possible to generate images to standard output:</p>

<pre><code>png(&quot;/dev/stdout&quot;, width=640, height=480)</code></pre>

	<p>The R scatter plot is almost as fast to render as our original postscript version from <a href="http://blog.whatfettle.com/2014/10/17/one-csv-thirty-stories-4-scattering/">Day 4</a>:</p>

<pre><code>plot(prices[,1], prices[,2])</code></pre>

	<p><a href="https://www.flickr.com/photos/psd/15491772618" title="R Scatterplot"><img src="https://farm6.staticflickr.com/5609/15491772618_a1e649a1ae_z.jpg" width="640" height="480" alt="R Scatterplot"></a></p>

	<p>Of course the reason to use a package like R is it provides code to analyse the data, such as fitting a <a href="http://en.wikipedia.org/wiki/Local_regression" title="LOESS">Local regression</a> curve:</p>

<pre><code>scatter.smooth(prices[,1], prices[,2], degree=2, col=&quot;#C8C8C8&quot;, span=0.5)</code></pre>

	<p><a href="https://www.flickr.com/photos/psd/15491767658" title="LOESS curve"><img src="https://farm6.staticflickr.com/5614/15491767658_9a1f63f91f_z.jpg" width="590" height="528" alt="LOESS curve"></a></p>

	<p>Cropping the plot to figures below £600,000 makes that flat line a little more informative:</p>

<pre><code>scatter.smooth(prices[,1], prices[,2], degree=2, col=&quot;#c8c8c8&quot;, span=0.5, ylim=c(0, 600000))</code></pre>

	<p><a href="https://www.flickr.com/photos/psd/15496343807" title="LOESS zoomed"><img src="https://farm6.staticflickr.com/5599/15496343807_75eb0d5c2c_z.jpg" width="640" height="636" alt="LOESS zoomed"></a></p>

	<p>Basically this shows prices rising gradually with a steeper build up before 2009. I could spend time <a href="http://blog.whatfettle.com/2014/11/02/one-csv-thirty-stories-11-calendar/">tomorrow</a> improving this plot, but first I think I need to grab some of the low-hanging fruit to overcome my now 8 post deficit.</p>

	<p><span id="†">†</span><em>I&#8217;m now bothered by that memory of her because my time spent with Pam was brilliant and I think I&#8217;m now close to her age when we shared an office.</em></p>