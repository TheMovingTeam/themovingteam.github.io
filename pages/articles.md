---
layout: article.njk
title: Articles
description: Read all of Move transit app's articles here.
keywords: move transit app, move blog, move article

tags: destination

eleventyImport:
  collections: ["articles"]
---

Read up on all articles about the Move transit app

<!-- Terminate content div to allow articles to grow to the full width -->
</div>
<div class="hc ac jse fw reflow" id="articleList">
{% for article in collections.articles reversed %}
<div class="article card vc">
<a href="{{ article.fileSlug | slugify }}">
<img src="/media/thumbs/{{ article.data.thumbnail }}.png" loading="lazy" alt="">
<div class="content">

### {{ article.data.title }}

{{ article.data.description }}
{{ article.page.excerpt }}

</div>
</a>
</div>
{% endfor %}
</div>
