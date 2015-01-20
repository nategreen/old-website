---
layout: page

title: "Nate Green: UX & Visual Designer"
---

This is going to be my portfolio site, soon, but for now I've started [a blog]({{ site.base_url }}/blog) where you can see my progress and some of the things I'm working on in my UX design Master's degree program at Kent State. I built this site with my bare hands, so to speak, with help from Jekyll, Github Pages, and others. I'm still working on it, adding features and style as I go, so you may see some mistakes here and there. Feel free to [email me](mailto:{{ site.email }}) about anything you encounter.

{% unless site.posts == empty %}

## Recent posts on [my blog](/blog):

{% for post in site.posts %}
- [{{post.title}}]({{post.url}})
{% endfor %}

{% endunless %}