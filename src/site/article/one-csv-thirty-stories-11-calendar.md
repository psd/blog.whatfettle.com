---
title: "One CSV, thirty stories: 11. Calendar"
timestamp: 2014-11-02T17:38:13Z
date: 2014-11-02
---

	<p><em>This is day 11 of <a href="http://blog.whatfettle.com/2014/10/13/one-csv-thirty-stories/">One <span class="caps">CSV</span>, 30 stories</a> a series of articles exploring <a href="https://www.gov.uk/government/statistical-data-sets/price-paid-data-downloads">price paid data</a> from the Land Registry found on <span class="caps">GOV</span>.UK. The code for this and the other articles is available as open source from <a href="https://github.com/psd/price-paid-data">GitHub</a></em></p>

	<p><a href="http://blog.whatfettle.com/2014/11/01/one-csv-30-stories-10-loess-curve/">Yesterday</a> I confessed to being blocked exploring the distribution of prices, so today I&#8217;m going to return to looking at the distribution of transactions over time. Whilst the histograms on <a href="http://blog.whatfettle.com/2014/10/28/one-csv-thirty-stories-9-yearly/">day 9</a> were interesting, they didn&#8217;t reveal much about busiest days of the week, or months of the year. A good way to see such patterns is with a calendar.</p>

	<p>Whilst it&#8217;s possible to code <a href="http://stackoverflow.com/questions/15014595/how-to-use-black-and-white-fill-patterns-instead-of-color-coding-on-calendar-hea">a heatmap calendar in R</a>, I think it&#8217;s time we moved away from generating images to creating Web pages. <a href="http://bost.ocks.org/mike/">Mike Bostock</a> has an <a href="https://github.com/mbostock/d3/wiki/Gallery">extensive gallery</a> of example visualisations for his <a href="http://d3js.org/">d3</a> JavaScript library which includes a <a href="http://bl.ocks.org/mbostock/4063318">heatmap calendar</a>.</p>

	<p>I <a href="https://github.com/psd/price-paid-data/commit/1496e79496ef3a5cd13bb94e41ede15b1fea5ca0">tweaked this example</a> to parse the <a href="https://github.com/psd/price-paid-data/blob/master/data/date.tsv">date.tsv</a> we made on <a href="http://blog.whatfettle.com/2014/10/15/one-csv-thirty-stories-2-counting-things/">day 2</a> and <a href="https://github.com/psd/price-paid-data/commit/380a9a278972fb0495e10e5e14f2835a0b30d480">played with the colours</a> giving a calendar of twenty years of transactions:</p>

	<p><a href="http://psd.github.io/price-paid-data/html/calendar.html" title="d3 calendar"><img src="https://farm8.staticflickr.com/7488/15072370643_c64ff46c9a_k.jpg" width="235" height="640" alt="d3 calendar"></a></p>

	<p>The calendar has Sunday as the first and Saturday as the last day of the week, highlighting Fridays as the busiest day of the week, and the last Friday being the busiest day in a month. And I quite like how you can see which Fridays are Good Fridays. The year is busiest from Summer to Christmas, and once again we can see the fall in volumes following the crash of 2008.</p>

	<p>As quick as this hack was to make (it took me less than an hour), it seems like a poor use of <span class="caps">SVG</span> and client-side JavaScript where some nicely marked-up, accessible <span class="caps">HTML</span> would do. I may return to this hack later, but probably not <a href="http://blog.whatfettle.com/2014/11/04/one-csv-thirty-stories-12-stacked/">tomorrow</a>.</p>