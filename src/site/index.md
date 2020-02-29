---
summary: <p class="vcard">The <a href="https://whatfettle.com">personal site</a> and all too infrequent journal of <a href="/about/" class="fn" rel="me">Paul Downey</a> (<a href="#elsewhere" class="nickname">psd</a>), a <a href="https://thewebisagreement.com">doodling</a> <span class="title">hacker</span> living in <a href="https://en.wikipedia.org/wiki/Berkhamsted" class="adr"><span class="locality">Berkhamsted</span>, <span class="country-name">England</span></a>, published with an <a href="https://blog.whatfettle.com/feed/" title="Paul Downey Atom (XML) Feed" rel="alternate" type="application/atom+xml">Atom Feed</a> and under a <a id="license" rel="license" href="https://creativecommons.org/licenses/by/3.0/" title="Creative Commons License">Creative Commons License</a>.</p>
layout: layouts/base.njk
---


<ul class="listing">
{%- for page in collections.article | reverse -%}
  <li>
    <a href="{{ page.url }}">{{ page.data.title }}</a> -
    <time datetime="{{ page.date }}">{{ page.date | dateDisplay("d LLLL y") }}</time>
  </li>
{%- endfor -%}
</ul>
