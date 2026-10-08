---
number: 4
title: This website
summary: A static portfolio built with Astro, hosted on Cloudflare Pages, with a Docker and nginx fallback.
period: '2026'
role: Design and build
stack: [Astro, TypeScript, CSS, Cloudflare Pages, Docker, nginx]
diagram:
  - label: Markdown + TypeScript
    detail: Content
  - label: Astro build
    detail: Static HTML/CSS
  - label: Cloudflare Pages
    detail: Global CDN
  - label: Docker + nginx
    detail: Self-host fallback
---

## Problem

I wanted one place that shows both halves of what I do, embedded and software, in a form that is fast, easy to scan, and that I fully control.

## Approach

The site is styled as a component datasheet. All content lives in one TypeScript file and a Markdown file per project, so the website and the printable CV come from the same source. There is no client-side framework: the pages are plain HTML and CSS.

It deploys to Cloudflare Pages on every push. The same build also runs in a small multi-stage Docker image with nginx, so I can move it to my own server at any time.

## Result

Static pages, no tracking, no cookie banner, and a CV page that prints straight to PDF.
