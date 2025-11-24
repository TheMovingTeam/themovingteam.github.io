---
layout: main.njk
title: Universal transit app
description: Move is a universal public transit app for android that allows users to check the time estimates for buses, tram and other methods of transit in a fast and efficient manner.
keywords: public transit app, bus app

signUpOpen: false
isHero: true
---


<div class="heroContainer oh gc" id="hero">

<div class="vc ac">

# Move

The universal public transit app

<a class="accentButton" href="#sign-up">Sign up for the wait-list!</a>

</div>
{% include "./_includes/components/blobs.njk" %}
</div>

<section class="gc" id="introduction">
<div class="vc ac banner">

## What is Move?

Move is a blazingly fast public transit app for Android designed to get you where you need to go without the clutter or delays common in most navigation tools.

Built with a local-first design, Move stores essential data directly on your device to ensure instant load times and reliable access to the information even when your connection is spotty.

Furthermore, its focus on usability creates a seamless transit app experience that prioritizes immediate access to what you need. Making it the ideal universal transit companion for daily commuters who value speed and straightforward usability above all else, whether it's over bus, tram, or anything else.

It's, in few words, the universal transit app for the people.

</div>
</section>

<section class="gc" id="features">
<div class="hc ac reflow jse card">
<div class="vc ac">
<div class="hc oh" id="featureContainer">

<div class="featureEntry vc">

## Never miss a bus again

Move is fast, giving you the information of your favorite stops as fast as possible so you can always be on time.

</div>

<div class="featureEntry vc">

## All in one place

Traveling often?<br>
Move unifies all of your transit services in one place so you can just plan your transfers.

</div>

<div class="featureEntry vc">

## Constantly growing

Features are constantly being added and planned for Move. Providers are also being added to support more locations near you!

</div>

</div>

<div id="featureIndicator" class="hc"></div>

</div>
{% include "./_includes/components/logoPhone.njk" %}
</div>
</section>

{% include "./_includes/components/providers.njk" %}

<section id="sign-up" class="gc">
<div class="hc ac reflow jse card">

{% if not signUpOpen %}
## Sign-ups coming soon!
{% else %}
{% include "./_includes/components/signupForm.njk" %}
{% endif %}

{% include "./_includes/components/ssphone.njk" %}

</div>
</section>

{% include "./_includes/components/recentArticles.njk" %}
