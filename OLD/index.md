---
layout: archive
permalink: /
title: "Today's Book"
---


<div class="featured-post">
{% for post in site.posts limit:1 %}
	{% include post-featured.html %}
{% endfor %}
</div>
<div class="tiles">
<h3>Past Books</h3>
{% for post in site.posts offset:1 %}
	{% include post-grid.html %}
{% endfor %}
</div><!-- /.tiles -->
