# Jedidiah Kristilere — Personal Portfolio

A distinctive, editorial-style personal portfolio built with pure HTML, CSS, and vanilla JS. Deployable to GitHub Pages with zero build steps.

---

## ⚡ Quick Deploy to GitHub Pages

### Option A — Root Deployment (Simplest)

1. Push this folder to the **root of your `main` branch**:
   ```
   your-username.github.io/
   ├── index.html
   ├── assets/
   │   ├── css/styles.css
   │   └── js/script.js
   └── README.md
   ```

2. In your GitHub repo settings → **Pages** → Source: `Deploy from a branch` → Branch: `main` → Folder: `/(root)`

3. Your site will be live at: `https://jkristilere.github.io`

### Option B — `/docs` Folder

1. Move all files into a `/docs` folder
2. In GitHub Pages settings → Source: `main` branch → `/docs` folder

---

## 📁 File Structure

```
portfolio/
├── index.html          ← All HTML content (edit sections here)
├── assets/
│   ├── css/
│   │   └── styles.css  ← All styling and design tokens
│   └── js/
│       └── script.js   ← Interactions and animations
└── README.md
```

---

## ✏️ How to Update Content

### Add a New Project

In `index.html`, find the `<!-- Projects Section -->` and add inside `.projects-grid`:

```html
<article class="project-card reveal">
  <div class="project-card-inner">
    <div class="project-tag-row">
      <span class="project-tag project-tag-type mono">Category · Type</span>
    </div>
    <h3 class="project-title">Your Project Name</h3>
    <p class="project-desc">Brief description of what you built and why it matters.</p>
    <div class="project-tech">
      <span class="mono">Python</span>
      <span class="mono">FastAPI</span>
    </div>
    <a href="https://github.com/YourRepo" class="project-link" target="_blank" rel="noopener">
      View Project <span class="project-arrow">→</span>
    </a>
  </div>
</article>
```

To make a project **featured** (full-width): add class `project-card-featured` to the article.

---

### Add a New Work Experience

In `index.html`, find the `<!-- Experience Section -->` and add a new `.timeline-item` inside `.timeline`:

```html
<div class="timeline-item reveal">
  <div class="timeline-marker">
    <div class="timeline-dot"></div>
    <div class="timeline-line"></div>
  </div>
  <div class="timeline-card">
    <div class="timeline-meta">
      <span class="timeline-date mono">2024 — 2025</span>
      <span class="timeline-badge">Your Badge</span>
    </div>
    <h3 class="timeline-role">Job Title</h3>
    <p class="timeline-company">Company Name · Location</p>
    <p class="timeline-desc">What you did overall.</p>
    <div class="timeline-achievements">
      <div class="achievement">
        <span class="achievement-icon">⬡</span>
        <span>Specific achievement with <strong>impact highlighted</strong></span>
      </div>
    </div>
    <div class="timeline-stack">
      <span class="stack-tag mono">Python</span>
    </div>
  </div>
</div>
```

---

### Update Skills

In `index.html`, find the `<!-- Skills Section -->` and edit the `.skill-tags` inside each `.skill-category`. 

Primary/highlighted skills use `skill-tag skill-tag-primary`, others just use `skill-tag`.

---

### Update Personal Info

All personal details are in `index.html`. Search for these placeholders to update:

| What | Where to look |
|---|---|
| Name, email, phone | `index.html` throughout |
| LinkedIn URL | `<a href="https://www.linkedin.com/in/..."` |
| GitHub URL | `<a href="https://github.com/..."` |
| Location | `hero-meta` div and contact section |
| About paragraph | `about-text` div |
| Stats (3+, 10+, 1) | `.about-stats` div |

---

### Change Theme Colors

All design tokens are CSS variables in `assets/css/styles.css` under `:root` (dark mode) and `body.light-mode`:

```css
:root {
  --accent:  #e8a020;   /* amber gold — change this to your accent color */
  --bg:      #0a0e17;   /* main background */
  --text:    #e8edf5;   /* primary text */
  ...
}
```

---

### Add Your Photo (Optional)

To add a profile photo to the About section, replace the `.about-card-stack` div in `index.html` with:

```html
<div class="about-visual reveal reveal-delay">
  <div class="about-photo-wrap">
    <img src="assets/images/your-photo.jpg" alt="Jedidiah Kristilere" class="about-photo" />
  </div>
</div>
```

And add to `styles.css`:

```css
.about-photo-wrap {
  position: relative;
  border: 1px solid var(--border-2);
  border-radius: 4px;
  overflow: hidden;
}
.about-photo {
  width: 100%;
  display: block;
  filter: grayscale(20%);
  transition: filter 0.3s;
}
.about-photo:hover { filter: grayscale(0%); }
```

---

## 🛠️ Tech Stack

- **HTML5** — Semantic, accessible markup
- **CSS3** — Custom properties, Grid, Flexbox, animations
- **Vanilla JS** — No frameworks, no build step
- **Google Fonts** — DM Serif Display, IBM Plex Mono, Sora
- **GitHub Pages** — Free hosting

---

## 📋 Checklist Before Going Live

- [ ] Update email address in form and contact links
- [ ] Verify all GitHub project links are correct
- [ ] Add your real LinkedIn URL
- [ ] Check phone number is correct
- [ ] Test on mobile (Chrome DevTools)
- [ ] Test dark/light mode toggle
- [ ] Submit sitemap to Google Search Console (optional)

---

*Built with intent — Lagos, Nigeria*
