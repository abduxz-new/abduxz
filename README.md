<div align="center">

# ✦ Luxury Developer Portfolio

### A free, open-source, dark-luxury portfolio template — pure HTML, CSS &amp; JavaScript. No frameworks. No build step. No dependencies.

[![License: MIT](https://img.shields.io/badge/License-MIT-C9A84C.svg?style=for-the-badge)](#license)
[![Made with HTML CSS JS](https://img.shields.io/badge/Made%20with-HTML%20%C2%B7%20CSS%20%C2%B7%20JS-0A0A0F.svg?style=for-the-badge)](#tech-stack)
[![No Frameworks](https://img.shields.io/badge/Dependencies-Zero-2ECC71.svg?style=for-the-badge)](#getting-started)
[![PRs Welcome](https://img.shields.io/badge/PRs-Welcome-00D4FF.svg?style=for-the-badge)](#contributing)

**[Live Demo](https://abduxz.vercel.app)** &nbsp;·&nbsp; **[Quick Start](#getting-started)** &nbsp;·&nbsp; **[Customization](#customization)** &nbsp;·&nbsp; **[License](#license)**

</div>

<br/>

<div align="center">
  <sub>Built and designed by <a href="https://github.com/Abdu-xx"><strong>@Abduxz</strong></a> — free for anyone to clone, fork, and ship.</sub>
</div>

<br/>

---

## ✦ Overview

This is a **production-ready portfolio template** for developers who want something that looks like a luxury brand site instead of a default Bootstrap theme. It ships as three static pages, fully responsive, with a custom cursor, scroll-triggered animations, and an icon-only design system — **not a single emoji in the entire codebase.**

No `npm install`. No webpack config. No React. Open `index.html` and it works.

<table>
<tr>
<td width="33%" valign="top">

**🏠 Home**
Hero with animated terminal, live stat counters, services grid, bento-style featured projects, tech stack, and an about section.

</td>
<td width="33%" valign="top">

**📁 Projects**
Filterable project grid (API / Bot / Web App / Open Source), stats strip, and detailed project cards.

</td>
<td width="33%" valign="top">

**✉️ Contact**
Direct contact channels (GitHub, WhatsApp, Telegram, YouTube, Email) plus a polished message form.

</td>
</tr>
</table>

> **Note:** the table above uses emoji for *this README's* readability only — the actual site template contains zero emoji by design. See [Icon System](#icon-system).

---

## ✦ Features

| | Feature | Details |
|---|---|---|
| 🖱️ | **Custom cursor** | Gold dot + lagging ring outline, scales on hover over links/buttons, replaces the native OS cursor entirely |
| 🎨 | **Icon-only design** | Every visual marker is a hand-drawn stroke SVG (`currentColor`, 1.5px weight) — consistent across every OS and browser |
| 🎬 | **Scroll animations** | Fade-up reveals and animated number counters, powered by `IntersectionObserver` |
| 🧱 | **Bento-grid layout** | Asymmetric featured / tall / standard project cards that are trivial to extend |
| 🔍 | **Live filtering** | Client-side category filter on the Projects page — zero page reloads |
| 📱 | **Fully responsive** | Clean single-column collapse with slide-in mobile drawer nav under 960px |
| ♿ | **Accessible markup** | Semantic landmarks, `aria-label`s on icon-only controls, `aria-hidden` on decorative SVGs |
| ⚡ | **Featherweight** | No JS libraries, no icon fonts, no CSS framework — total payload is a few dozen KB |

---

## ✦ Tech Stack

<div align="center">

| Layer | Choice |
|:---|:---|
| **Markup** | Semantic HTML5 |
| **Styling** | Vanilla CSS — custom properties, Grid, Flexbox |
| **Interactivity** | Vanilla JavaScript (ES6+), zero bundler |
| **Icons** | Inline SVG sprite, stroke-based, `currentColor` |
| **Typography** | [Playfair Display](https://fonts.google.com/specimen/Playfair+Display) · [Space Grotesk](https://fonts.google.com/specimen/Space+Grotesk) · [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono) |
| **Hosting** | Any static host — Vercel, Netlify, GitHub Pages, Cloudflare Pages |

</div>

---

## ✦ File Structure

```
portfolio/
├── index.html              Home — hero, services, bento projects, tech stack, about
├── projects.html           All projects — filter bar, grid, stats strip
├── contact.html            Contact — direct channels + message form
│
├── css/
│   ├── base.css            Design tokens · reset · cursor · nav · footer · buttons (shared)
│   ├── home.css             Hero · marquee · services · bento grid · tech · about
│   ├── projects.css          Projects grid · filter bar · stat strip
│   └── contact.css            Contact methods · form layout
│
├── js/
│   └── main.js              Cursor · nav scroll state · mobile drawer
│                             fade-up observer · counters · filters · form handler
│
├── assets/
│   └── icons.svg             Reference icon sprite
│
└── README.md
```

<details>
<summary><strong>How the CSS is organized</strong></summary>
<br/>

`base.css` loads on every page and defines the design tokens (colors, fonts, spacing), the reset, the custom cursor, navigation, footer, and shared button styles. Each page then loads exactly one additional stylesheet scoped to its own content — `home.css`, `projects.css`, or `contact.css`. Nothing is duplicated, nothing is unused.

</details>

---

## ✦ Getting Started

### 1 · Clone it

```bash
git clone https://github.com/Abdu-xx/portfolio-template.git
cd portfolio-template
```

### 2 · Run it locally

No build step. Open `index.html` directly, or serve it:

```bash
npx serve .
# — or —
python3 -m http.server 8000
```

### 3 · Deploy it

Drag the folder onto **[Vercel](https://vercel.com/new)** or **[Netlify Drop](https://app.netlify.com/drop)**, or connect the repo directly — there's no config to write since there's no build step.

---

## ✦ Customization

<details open>
<summary><strong>Content checklist</strong></summary>
<br/>

| What to change | Where to find it |
|---|---|
| Name / brand mark | `.nav-logo`, `.footer-logo` |
| Hero headline & copy | `.hero-title`, `.hero-desc` |
| Animated stats | `.stat-card` blocks — edit the `data-count` attribute |
| Services list | `.service-card` blocks |
| Featured projects | `.bento-card` (home) and `.project-card` (projects page) |
| Tech stack icons | `.tech-item` blocks |
| About text & quote | `.about-left`, `.about-card` |
| Social / contact links | `.footer-socials`, `.contact-method` |

</details>

<details>
<summary><strong>Theme colors & fonts</strong></summary>
<br/>

Every design token lives in one place — `css/base.css`:

```css
:root {
  --obsidian:      #0A0A0F;   /* page background   */
  --slate:         #1A1A28;   /* card background    */
  --gold:          #C9A84C;   /* primary accent      */
  --cyan:          #00D4FF;   /* secondary accent     */
  --white:         #F0EDE8;   /* primary text          */
  --white-dim:     #9A9490;   /* secondary text         */
  --green:         #2ECC71;   /* "available / live" dot */

  --font-display:  'Playfair Display', serif;     /* headings */
  --font-body:     'Space Grotesk', sans-serif;     /* body text */
  --font-mono:     'JetBrains Mono', monospace;       /* terminal / code */
}
```

Change these eight values and the entire site re-themes — no other edits required.

</details>

---

## ✦ Icon System

There are **no emojis** anywhere in this codebase. Every icon is a hand-picked inline SVG — 1.5px stroke weight, `currentColor` fill — so icons inherit surrounding text color and stay crisp at any size or zoom level.

To add a new one:

```html
<!-- 1. Add a symbol to the inline sprite at the top of the page -->
<svg style="display:none">
  <symbol id="i-yourname" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
    <!-- path data -->
  </symbol>
</svg>

<!-- 2. Reference it anywhere -->
<svg class="icon icon-stroke"><use href="#i-yourname"/></svg>
```

**[Lucide Icons](https://lucide.dev)** and **[Feather Icons](https://feathericons.com)** use the same stroke style and are excellent sources for additional symbols.

---

## ✦ Browser Support

Tested on the latest stable releases of **Chrome, Firefox, Safari, and Edge**. Uses CSS Grid, custom properties, and `IntersectionObserver` — no polyfills are included, so legacy browsers (IE11) are not supported.

---

## ✦ License

<details>
<summary><strong>MIT License</strong> — click to expand full text</summary>
<br/>

```
MIT License

Copyright (c) 2026 Abdu-xx

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

</details>

**Free for personal and commercial use.** Fork it, modify it, ship it as your own portfolio. Credit is appreciated but never required.

---

## ✦ Credits

<div align="center">

**Designed & built by [@Abduxz](https://github.com/Abdu-xx)**

[![GitHub](https://img.shields.io/badge/GitHub-Abdu--xx-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Abdu-xx)
[![WhatsApp](https://img.shields.io/badge/WhatsApp-Chat-25D366?style=for-the-badge&logo=whatsapp&logoColor=white)](https://wa.me/94776803526)
[![Telegram](https://img.shields.io/badge/Telegram-Message-26A5E4?style=for-the-badge&logo=telegram&logoColor=white)](https://t.me/+94776803526)
[![YouTube](https://img.shields.io/badge/YouTube-@xanz__crush-FF0000?style=for-the-badge&logo=youtube&logoColor=white)](https://youtube.com/@xanz_crush)

<br/>

If this template helped you ship your portfolio, **a ⭐ on the repo** goes a long way.

</div>

---

## ✦ Contributing

Issues and pull requests are welcome. Built something on top of this template? Open a PR — a **"Built with this template"** showcase section may be added in the future.

<div align="center">
<sub>© 2026 Abdu-xx · Built with care in Sri Lanka</sub>
</div>
