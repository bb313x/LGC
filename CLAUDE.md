# Lets Grow Clients — Website

## Overview
Single-page marketing website for **letsgrowclients.com**, an AI-powered legal marketing agency specializing in helping law firms grow their client base.

## Tech Stack
- Pure HTML/CSS/JS (no frameworks, no build step)
- Hosted via Cloudflare Workers + GitHub Pages
- Google Fonts: DM Sans + DM Serif Display

## Color Palette
- Purple: `#6B35D9` / Light: `#8B55F6` / Dark: `#4A1FA8`
- Magenta: `#D435A0` / Light: `#F055C0`
- Dark backgrounds: `#0A0A0F`, `#111118`, `#18181F`, `#22222C`
- Primary gradient: `linear-gradient(135deg, #6B35D9, #D435A0)`

## File Structure
```
index.html          — Main website (single page)
cloudflare-worker.js — Cloudflare Worker for hosting
favicon.ico         — Site favicon
.gitignore          — Git ignore rules
CLAUDE.md           — This file
```

## Sections
1. Hero — Bold headline + stats
2. PIP Spotlight — Featured practice area section
3. Services — 6-card grid of marketing services
4. AI Solutions — 5-card grid of AI-powered offerings
5. Practice Areas — 8 practice areas (PIP highlighted)
6. Process — 4-step workflow
7. Results & Testimonials — Stats + 3 testimonials
8. CTA — Free growth audit
9. Footer — Links, social, copyright

## Practice Areas
- **PIP / No-Fault** (primary focus)
- Criminal Defense
- Family Law
- Employment Law
- Bankruptcy
- Estate & Probate
- Workers' Compensation
- Social Security Disability

## Deployment
1. Push to GitHub repo
2. Enable GitHub Pages
3. Configure Cloudflare Worker to proxy from GitHub Pages
4. Point letsgrowclients.com DNS to Cloudflare
