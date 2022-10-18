---
author: Ron Shaker
datetime: Fri Oct 14 02:52:04 PDT 2022
title: Astro blog, my blog
slug: ""
featured: true
draft: false
tags:
  - action
  - astro
  - blog
  - github
ogImage: ""
description:
  How I setup an Astro blog on Github
---
I chose [Astro](https://astro.build/) because it uses Javascript for both server and client-side and
claims to be capable of [integrating](https://astro.build/integrations/) with a wide variety of other frameworks and services.
Astro is for building MPAs (multi page applications), ones receptive to deployment on edge computing nodes around the world.
The compiler's output is small, fast and static.

Having operated a Jekyll site previously, I'm glad to be away from Ruby. Using more than one language to develop
a web site is a bit too multiple-personality-disorder and Ruby is hard enough to wrap your head around by itself.

The presence of a RSS feed is curious, because so few clients are available nowadays. I wouldn't think
it worth the effort. Google is [reportedly](https://www.androidpolice.com/googles-feed-reader-desktop-first-signs/)
bringing back feed-reader functionality to desktop version of Chrome though, latest build #106 has a `chrome://flags/#following-feed-sidepanel` option.

Astro doesn't have the concept of "[themes](https://astro.build/themes/)", what people call themes are just starter projects.
Their absence is not a detriment, the idea of having some "module" buried deep in a subdirectory with its own special API to
deal with is an unwelcome one. Having said that, I have no idea how to approach the theming of an Astro project yet.

Github pages addresses have a repo name as the first part of their path (e.g. rshaker.github.io/blog). The 
[starter project](https://github.com/satnaing/astro-paper/) I forked this blog from expected page addresses like "/about" and "/posts", 
thus it misinterpreted the actual paths once deployed to Github. The work-around I used was to add a `base` property to the `SITE` object in [`src/config.ts`](https://github.com/rshaker/blog/blob/main/src/config.ts). `base` is a string that provides the prefix (aka repo name) to the rest of the application. `astro.config.mjs` already maintains a base property, but importing that variable caused a compilation error down deep in other peoples' packages, so I created something similar in `src/config.ts` instead.

If you're [using a custom domain](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/about-custom-domains-and-github-pages), none of the aforementioned matters.

Other static site generators, Jekyll et al: [jamstack.org/generators](https://jamstack.org/generators/)

## Reference
* [Astro deployment guide for Github](https://docs.astro.build/en/guides/deploy/github/)
* [Astro build+deploy Action for Github](https://github.com/withastro/action)
* https://docs.astro.build/en/guides/rss/