---
title: Widget catalog
description: A catalog of some of Flutter's rich set of widgets.
short-title: Widgets
---

Create beautiful apps faster with Flutter's collection of visual, structural,
platform, and interactive widgets. In addition to browsing widgets by category,
you can also see all the widgets in the [widget index][].

<div class="card-deck">
{% assign categories = catalog.index | sort: 'name' -%}
{% for section in categories %}
    {%- if section.name != "Material 2 Components" -%}
        <a class="card" href="{{page.url}}{{section.id}}">
            <div class="card-body">
                <header class="card-title">{{section.name}}</header>
                <p class="card-text">{{section.description}}</p>
            </div>
        </a>
    {% endif -%}
{% endfor %}
</div>

## Widget of the Week

100+ short, 1-minute explainer videos to
help you quickly get started with Flutter widgets.

<div class="card-deck card-video-deck">
    <div class="video-card">
        <div class="card-body">
            <iframe src="{{site.yt.embed}}/1z6YP7YmvwA" title="Learn about the TextStyle Flutter Widget" {{site.yt.set}}></iframe>
        </div>
    </div>
    <div class="video-card">
        <div class="card-body">
            <iframe src="{{site.yt.embed}}/VdkRy3yZiPo" title="Learn about the flutter_rating_bar Flutter Package" {{site.yt.set}}></iframe>
        </div>
    </div>
    <div class="video-card">
        <div class="card-body">
            <iframe src="{{site.yt.embed}}/gYNTcgZVcWw" title="Learn about the LinearGradient Flutter Widget" {{site.yt.set}}></iframe>
        </div>
    </div>
    <div class="video-card">
        <div class="card-body">
            <iframe src="{{site.yt.embed}}/-Nny8kzW380" title="Learn about the AutoComplete Flutter Widget" {{site.yt.set}}></iframe>
        </div>
    </div>
    <div class="video-card">
        <div class="card-body">
            <iframe src="{{site.yt.embed}}/y9xchtVTtqQ" title="Learn about the NavigationRail Flutter Widget" {{site.yt.set}}></iframe>
        </div>
    </div>
    <div class="video-card">
        <div class="card-body">
            <iframe src="{{site.yt.embed}}/qjA0JFiPMnQ" title="Learn about the mason Flutter Package" {{site.yt.set}}></iframe>
        </div>
    </div>
</div>

<a class="btn btn-primary full-width" target="_blank" href="{{site.yt.playlist}}PLjxrf2q8roU23XGwz3Km7sQZFTdB996iG" >See more Widget of the Weeks</a>

[widget index]: /reference/widgets
