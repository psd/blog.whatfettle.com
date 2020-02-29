---
title: "One CSV, thirty stories: 17. Scattermap Calendar"
timestamp: 2014-11-17T16:27:09Z
date: 2014-11-17
---

	<p><em>This is day 17 of <a href="http://blog.whatfettle.com/2014/10/13/one-csv-thirty-stories/">One <span class="caps">CSV</span>, 30 stories</a> a series of articles exploring <a href="https://www.gov.uk/government/statistical-data-sets/price-paid-data-downloads">price paid data</a> from the Land Registry found on <span class="caps">GOV</span>.UK. The code for this and the other articles is available as open source from <a href="https://github.com/psd/price-paid-data">GitHub</a></em></p>

	<p>The <a href="http://blog.whatfettle.com/2014/11/11/one-csv-thirty-stories-16-mapination/">previous post</a> resulted in a scatter map of the property transactions in the price-paid dataset. Having made the images, I thought it would be a simple matter to string them into a single page to make a calendar of transactions per-postcode for each day.</p>

	<p><a href="https://www.flickr.com/photos/psd/15805520555" title="Volume of Land Registry Transactions 1995-2014 by Paul Downey, on Flickr"><img src="https://farm9.staticflickr.com/8661/15805520555_6dcc380b3e_c.jpg" width="800" height="565" alt="Volume of Land Registry Transactions 1995-2014"></a></p>

	<p><a href="https://github.com/psd/price-paid-data/blob/master/posters/scattermap-calendar.pdf">75MB A1 <span class="caps">PDF</span></a></p>

	<p>It turned out the plot took me a lot longer to develop than expected. As much as I like this poster, in particular the techniques used for its production, I am now several days older and a more than a little wiser.</p>

	<p>I should start by thanking everyone who completed my <a href="http://tinyurl.com/1csv-30stories-survey">short, anonymous survey</a> or <a href="http://blog.whatfettle.com/about/">contacted me</a> about the series thus far. I&#8217;ll incorporate people&#8217;s suggestions into the hacks and give a wrap-up of the survey in the final post. Your feedback is really helping keep me motivated, even when I&#8217;ve been blocked, and guilt-tripping me into not kittening and dropping this project in favour of shiny new ventures, or indeed playing with our new kittens.</p>

	<p><a href="https://www.flickr.com/photos/psd/15589998268" title="Blame <code>matwall by Paul Downey, on Flickr"&gt;&lt;img src="https://farm6.staticflickr.com/5610/15589998268_30627a33bc_c.jpg" width="800" height="528" alt="Blame </code>matwall"></a></p>

	<p>One actionable suggestion came from my brilliant colleague, <a href="http://anna.ps">Anna</a>, who nudged me to change the scatter maps from plotting the radius to the area. That was a simple matter of using the square-root of the value when scaling the circle for each postcode, and removed some of the splodgy outliers in the daily plots.</p>

	<p>A question a number of people have asked is what happens when the Land Registry realise more data in a month or so&#8217;s time? All of the hacks thus far have been built using a <a href="https://github.com/psd/price-paid-data/blob/master/Makefile">Makefile</a> which downloads the dataset from <span class="caps">GOV</span>.UK, re-runs all of the scripts and recreates all the images. All apart from the hackday posters, which <a href="https://twitter.com/mikiee_t">Michael</a> built by hand, applying his lovely design fu in Adobe InDesign.  Whilst it might be possible to script and automate InDesign, I&#8217;m disinclined to have to fathom how to manage Adobe software licences on my machine, and it doesn&#8217;t help others who can&#8217;t afford such luxuries as professional publishing tools.</p>

	<p>So I turned to recreating the posters as <span class="caps">HTML</span>, and used the browser to design and composite the page. There are a lot of different ways of generating <span class="caps">HTML</span> from our data, but I wanted to use a <a href="http://en.wikipedia.org/wiki/Comparison_of_web_template_engines">templating language</a> for which there&#8217;s again a lot of options. I wrote a <a href="https://github.com/psd/price-paid-data/blob/master/bin/scattermap-calendar.php"><span class="caps">PHP</span> script</a>, mostly because selecting something like Ruby or Python means using yet another language for the templating, but mostly because <span class="caps">PHP</span> is ubiquitous. There&#8217;s a certain amount of snobbery about <span class="caps">PHP</span>, but I&#8217;ve no truck for such snark. <span class="caps">PHP</span> is the Web&#8217;s <span class="caps">BASIC</span>. It&#8217;s everywhere, beginner-friendly, and I like it.</p>

	<p>This approach seemed hopeful, but then I hit an issue. Chrome in particular struggled, flaking out where there were more than 5,000 images on a page. I experimented with ways of reducing the number of individual files, including making a single, massive image file, and only showing weekdays, but neither really helped. So I turned to tiling the images, and displaying a portion of each image in each square using <a href="http://en.wikipedia.org/wiki/Sprite_(computer_graphics)#Sprites_by_CSS"><span class="caps">CSS</span> sprites</a>. This is where much of my time was lost. Front-end development remains a tricky craft, and creating a page of 7,034 tiles on a grid using responsive images was a bit of a faff. Getting these images to scale and inside table cells was beyond my skill. I really should have grabbed one of my many front-end specialist friends to help, but after a Swan load of failed attempts, I landed on something that worked: a series of divs, each with a spacer image:</p>

<pre><code>.day {
  float: left;
  overflow: hidden;
  height: 5mm;
  max-width: 5mm;
}
...
&lt;div class=&#39;day y2007 m02 d01 _S&#39;&gt;
  &lt;img class=&#39;spacer&#39; src=&#39;mapination/blank.gif&#39; title=&#39;2007-02-01&#39;&gt;
  &lt;img class=&#39;sprite&#39; src=&#39;mapination/sprites-2007-02.gif&#39; style=&#39;left:0%&#39; title=&#39;2007-02-01&#39;&gt;
&lt;/div&gt;
&lt;div class=&#39;day y2007 m02 d02 _F&#39;&gt;
  &lt;img class=&#39;spacer&#39; src=&#39;mapination/blank.gif&#39; title=&#39;2007-02-02&#39;&gt;
  &lt;img class=&#39;sprite&#39; src=&#39;mapination/sprites-2007-02.gif&#39; style=&#39;left:-100%&#39; title=&#39;2007-02-02&#39;&gt;
&lt;/div&gt;
&lt;div class=&#39;day y2007 m02 d03 _S&#39;&gt;
   &lt;img class=&#39;spacer&#39; src=&#39;mapination/blank.gif&#39; title=&#39;2007-02-03&#39;&gt;
   &lt;img class=&#39;sprite&#39; src=&#39;mapination/sprites-2007-02.gif&#39; style=&#39;left:-200%&#39; title=&#39;2007-02-03&#39;&gt;
&lt;/div&gt;
...</code></pre>

	<p>Finally, printing such a large page reliably crashed Chrome. Fortunately the <a href="http://wkhtmltopdf.org/">wkhtmltopdf</a> command can be used to generate a <span class="caps">PDF</span> from <span class="caps">HTML</span>, works reliably for our page and can be driven from a Makefile:</p>

<pre><code>posters/scattermap-calendar.pdf:      html/scattermap-calendar.html
        wkhtmltopdf -q --page-size a1 --orientation landscape html/scattermap-calendar.html $@</code></pre>

	<p>I have to continue to learn how to deal with getting stuck like this if I&#8217;m to regain any kind of momentum on this venture. Let&#8217;s see how well I do <a href="http://blog.whatfettle.com/2014/11/20/one-csv-thirty-stories-18-choropleth/">tomorrow</a>.</p>