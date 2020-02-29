---
layout: layouts/base.njk
pageClass: article
templateEngineOverride: njk, md
---

<main>
  <h1>{{ title | safe }}</h1>
  {{ content | safe }}
</main>
