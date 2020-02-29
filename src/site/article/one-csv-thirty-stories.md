---
title: "One CSV, thirty stories"
timestamp: 2014-10-13T20:59:48Z
date: 2014-10-13
---

<p>I&#8217;ve hit something of a creative impasse. I stopped blogging here a while ago, and whilst I think I&#8217;ve helped other people make things, I haven&#8217;t really been making things for myself.</p>
<p>A number of colleagues for similar reasons have successfully used the <a href="http://heckyeahtumblrchallenges.tumblr.com/post/6152604154/30-day-song-challenge">30 days song challenge</a> to unblock their blogging, and this has inspired me to try something similar, something to force me to make visualisations, and write about them.</p>
<p>So I&#8217;ve picked on a single dataset, <a href="https://www.gov.uk/government/statistical-data-sets/price-paid-data-downloads">the list of price paid for property</a> from <a href="https://www.gov.uk/government/organisations/land-registry">The Land Registry</a>, and every day over the next month I&#8217;ll use it to make 30 small things to talk about open data and visualisation. Thirty is <a href="http://backtothefuture.wikia.com/wiki/DeLorean_time_machine">a nice round number</a> and at this point seems almost unachievable. It also feels more than a little ridiculous to constrain myself to obsessing over just a single CSV file. But that's the point. To stir myself into action with something challenging, but very constrained.</p>
<p>The code for these articles will be <a href="https://github.com/psd/price-paid-data">open source</a>, natch, and I&#8217;ll aim to build <a href="http://psd.github.io/price-paid-data">a portfolio site</a> as we go along.</p>
<ol>
<li><a href="http://blog.whatfettle.com/2014/10/13/one-csv-thirty-stories-bootstrapping/">Bootstrapping</a> <em>13-Oct-14</em></li>
<li><a href="http://blog.whatfettle.com/2014/10/15/one-csv-thirty-stories-2-counting-things/">Counting things</a> <em>15-Oct-14</em></li>
<li><a href="http://blog.whatfettle.com/2014/10/15/one-csv-30-stories-3-minimal-viable-histograms/">Minimal viable histograms</a> <em>15-Oct-14</em></li>
<li><a href="http://blog.whatfettle.com/2014/10/17/one-csv-thirty-stories-4-scattering/">Scattering</a> <em>17-Oct-14</em></li>
<li><a href="http://blog.whatfettle.com/2014/10/18/one-csv-thirty-stories-5-axes/">Axes</a> <em>18-Oct-14</em></li>
<li><a href="http://blog.whatfettle.com/2014/10/19/one-csv-thirty-stories-6-prices/">Prices</a> <em>19-Oct-14</em></li>
<li><a href="http://blog.whatfettle.com/2014/10/20/one-csv-thirty-stories-7-prices-redux/">Prices redux</a> <em>20-Oct-14</em></li>
<li><a href="http://blog.whatfettle.com/2014/10/25/one-csv-thirty-stories-8-heatmap-meh/">Heatmap meh</a> <em>25-Oct-14</em></li>
<li><a href="http://blog.whatfettle.com/2014/10/28/one-csv-thirty-stories-9-yearly/">Yearly</a> <em>28-Oct-14</em>
<li><a href="http://blog.whatfettle.com/2014/11/01/one-csv-30-stories-10-loess-curve/">LOESS curve</a> <em>01-Nov-14</em>
<li><a href="http://blog.whatfettle.com/2014/11/02/one-csv-thirty-stories-11-calendar/">Calendar</a> <em>02-Nov-14</em>
<li><a href="http://blog.whatfettle.com/2014/11/04/one-csv-thirty-stories-12-stacked/">Stacked</a> <em>04-Nov-14</em>
<li><a href="http://blog.whatfettle.com/2014/11/06/one-csv-thirty-stories-13-postcodes/">Postcodes</a> <em>06-Nov-14</em>
<li><a href="http://blog.whatfettle.com/2014/11/07/one-csv-thirty-stories-14-hackday/">Hackday</a> <em>07-Nov-14</em>
<li><a href="http://blog.whatfettle.com/2014/11/07/one-csv-thirty-stories-15-hotspots/">Hotspots</a> <em>08-Nov-14</em>
<li><a href="http://blog.whatfettle.com/2014/11/11/one-csv-thirty-stories-16-mapination/">Mapination</a> <em>10-Nov-14</em>
<li><a href="http://blog.whatfettle.com/2014/11/17/one-csv-thirty-stories-17-scattermap-calendar/">Scattermap calendar</a> <em>17-Nov-14</em>
<li><a href="http://blog.whatfettle.com/2014/11/20/one-csv-thirty-stories-18-choropleth/">Choropleth</a> <em>20-Nov-14</em>
<li><a href="http://blog.whatfettle.com/2014/11/25/one-csv-thirty-stories-19-bubblepleth/">Bubblepleth</a> <em>25-Nov-14</em>
<li><a href="http://blog.whatfettle.com/2014/11/27/one-csv-thirty-stories-20-unknown-prices/">Unknown prices</a> <em>26-Nov-14</em>
<li><a href="http://blog.whatfettle.com/2014/12/02/mistakes-were-made/">Mistakes were made</a> <em>01-Dec-2014</em>
</ol>
<p><em>Something of a disclaimer: <a href="https://gds.blog.gov.uk/2012/02/23/blurring-boundaries/">I am a Technical Architect with the Government Digital Service</a> and have been working with the <a href="http://blog.landregistry.gov.uk/new-digital-services-working-alpha/">Land Registry to develop an alpha digital service</a>. However these articles could be written by anyone with the time and inclination to dig into the open data, something the Land Registry encourages you to do through initiatives such as <a href="https://www.geovation.org.uk/launching-geovation-housing-challenge/">the GeoVation challenge</a>. They certainly won&#8217;t be used to announce new services or reveal information or data which isn&#8217;t already public. The articles definitely shouldn&#8217;t be read as saying anything in an official capacity on behalf of these organisations, and you should treat my conclusions as the conjecture they are. I&#8217;m just this guy, you know?</em></p>
