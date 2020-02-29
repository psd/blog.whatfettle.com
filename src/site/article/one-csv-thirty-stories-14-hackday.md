---
title: "One CSV, thirty stories: 14. Hackday"
timestamp: 2014-11-06T23:47:19Z
date: 2014-11-06
---

	<p><em>This is day 14 of <a href="http://blog.whatfettle.com/2014/10/13/one-csv-thirty-stories/">One <span class="caps">CSV</span>, 30 stories</a> a series of articles exploring <a href="https://www.gov.uk/government/statistical-data-sets/price-paid-data-downloads">price paid data</a> from the Land Registry found on <span class="caps">GOV</span>.UK. The code for this and the other articles is available as open source from <a href="https://github.com/psd/price-paid-data">GitHub</a></em></p>

	<p><a href="http://blog.whatfettle.com/2014/11/04/one-csv-thirty-stories-12-stacked/">Yesterday</a> I started to look into where all the houses listed inside the <span class="caps">CSV</span> are located, but today I was down in Plymouth to help run an internal <a href="https://github.com/landregistry/hackday">Land Registry Hackday</a></p>

	<p><img src="https://raw.githubusercontent.com/LandRegistry/hackday/master/poster.png"></p>

	<p>I think it was a great event, with some amazing hacks presented. My two favourite hacks had multidisciplinary teams build something, try it with users, realise it was the wrong thing, so built something better as a result. All in a single day!</p>

	<p><a href="https://www.flickr.com/photos/psd/15538436767" title="Let the hacking begin! by Paul Downey, on Flickr"><img src="https://farm4.staticflickr.com/3952/15538436767_7889cab7b1_c.jpg" width="800" height="279" alt="Let the hacking begin!"></a></p>

	<p>For my part I tried to help one of the hacks consume the <a href="https://www.gov.uk/inspire-index-polygons-spatial-data">Land Registry <span class="caps">INSPIRE</span> index polygons</a> by converting the <a href="http://en.wikipedia.org/wiki/Geography_Markup_Language"><span class="caps">GML</span></a> format shapefiles into <a href="http://en.wikipedia.org/wiki/GeoJSON#TopoJSON">TopoJSON</a> files. Unfortunately this took a lot of compute time, and both <a href="https://github.com/mbostock/topojson">topojson</a> and <a href="https://github.com/mbloch/mapshaper">mapshaper</a> kept running out of memory on my huge EC2 machine. You can see the code and some of the polygons in <a href="https://github.com/psd/landregistry-inspire-data">github.com/psd/landregistry-inspire-data</a></p>

	<p><a href="https://www.flickr.com/photos/psd/15726079761" title="City of London topojson by Paul Downey, on Flickr"><img src="https://farm6.staticflickr.com/5614/15726079761_4b42b4b67c_c.jpg" width="800" height="480" alt="City of London topojson"></a></p>

	<p>Close to the final show and tell I paired up with <a href="https://twitter.com/mikiee_t">Michael</a> and we turned the heatmap from <a href="http://blog.whatfettle.com/2014/10/25/one-csv-thirty-stories-8-heatmap-meh/">Day 8</a> into a poster which we framed and presented to the Land Registry, to be hung on their canteen wall:</p>

	<p><a href="https://github.com/LandRegistry/hackday/raw/master/price-paid-data-heatmap.pdf"><img src="http://farm8.staticflickr.com/7553/15108565183_9f04cfc2a9_c.jpg" width="800" height="534" alt="Poster"></a></p>

	<p>[<a href="https://github.com/LandRegistry/hackday/raw/master/price-paid-data-heatmap.pdf"><span class="caps">PDF</span></a>]</p>

	<p>Tomorrow I hope to make another, similar poster based on the geographical data.</p>