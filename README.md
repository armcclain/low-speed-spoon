# Developer Structure: *The Low-Speed Spoon*

This document maps only the **editable and conceptually important files/folders** of the site, with inline notes explaining what each controls.  
It’s specific to this project’s **Astro + TailwindCSS** setup, deployed via **GitHub Pages**.

---

## Overview of Editable Structure

```
low-speed-spoon/
├── astro.config.mjs                # Astro configuration: integrations (Tailwind, sitemap), site URL, build settings
├── tailwind.config.js              # Tailwind theme customization: colors, fonts, spacing, etc.
├── package.json                    # Project metadata + npm scripts (dev/build/deploy)
├── public/                         # Static assets served as-is (favicon, images, icons)
│   ├── favicon.svg                 # Browser tab icon
│   ├── images/                     # Upload and reference directly in HTML/Astro
│   └── ...                         # Any non-code file accessible at site root
├── src/                        # Core editable site source
│   ├── pages/                  # Each .astro file here = one route (e.g., /about, /contact)
│   │   ├── index.astro             # Landing page
│   │   ├── about.astro             # “About” page (dictionary-style explanation)
│   │   ├── contact.astro           # Contact form / info
│   │   ├── portfolio/              # Subdirectory for portfolio pages
│   │   │   ├── academic.astro      # Academic portfolio section
│   │   │   ├── professional.astro  # Professional portfolio section
│   │   │   └── personal.astro      # Personal/creative portfolio section
│   │   └── blog/                   # (Optional) MDX or future blog content
│   ├── components/             # Reusable UI pieces shared across pages
│   │   ├── Header.astro            # Top navigation bar and logo
│   │   ├── Footer.astro            # Footer links and credits
│   │   ├── NavMenu.astro           # Mobile/desktop menu behavior
│   │   └── ...                     # Buttons, separators, cards, etc.
│   ├── layouts/                # Page templates wrapping content with shared header/footer
│   │   └── BaseLayout.astro        # Common layout used by most pages
│   ├── styles/                 # Global and component-specific styles
│   │   ├── base.css                # Base resets and general style tokens
│   │   ├── themes.css              # Color and typography theming
│   │   └── utilities.css           # Extra class utilities beyond Tailwind
│   └── content/                    # Optional Markdown/MDX content collections
│       └── blog/                   # (If using Astro Content Collections for blog posts)
└── README.md                       # Main setup + usage instructions (editable documentation)
```

---

## Edit by Purpose

### Content & Navigation
- **`src/pages/`** — Modify these `.astro` files to change written content, page structure, or routing.  
  - Each `.astro` file = one route automatically (e.g., `about.astro` → `/about`).  
  - Subfolders create nested routes (e.g., `portfolio/personal.astro` → `/portfolio/personal`).  
- **`src/components/Header.astro` & `Footer.astro`** — Control navigation links, logo, and footer text.  
- **`public/`** — Add or replace static media assets (logos, artwork, separators, etc.).  

### Visual Design (Color, Typography, Layout)
- **`tailwind.config.js`** — Edit to customize the Tailwind theme: color palette, fonts, spacing scales, and breakpoints.  
- **`src/styles/themes.css`** — Fine-tune font families, dictionary-style typography, or color variables.  
- **`src/styles/base.css`** — Adjust global HTML element styles, transitions, and background color defaults.  
- **`src/layouts/BaseLayout.astro`** — Modify structural layout (margins, containers, background elements).  

### Site Configuration & Deployment
- **`astro.config.mjs`** — Controls Astro behavior, site metadata, and integrations (Tailwind, sitemap, etc.).  
- **`package.json`** — Edit `scripts` for deployment or add new dependencies.  
- **`.github/workflows/deploy.yml`** *(auto-generated)* — GitHub Pages deployment via Astro build to `dist/`.  

---

## Update Workflow

1. **Run locally**  
   ```bash
   npm install
   npm run dev
   ```
   Visit [http://localhost:4321](http://localhost:4321) to preview changes.

2. **Edit Content or Style**  
   - Update text → `src/pages/*`
   - Adjust layout or theme → `src/layouts/` and `src/styles/`
   - Change color/typography → `tailwind.config.js` or `themes.css`

3. **Build for production**  
   ```bash
   npm run build
   ```

4. **Deploy**  
   - Push to the `main` branch — the GitHub Pages workflow builds and publishes automatically.

---

## Notes
- Avoid editing anything in `dist/` or `node_modules/`; they are generated automatically.  
- Keep all editable `.astro` pages under `src/pages/` for Astro’s file-based routing to work.  
- Add new pages simply by creating a `.astro` file (e.g., `src/pages/newpage.astro` → `yoursite.com/newpage`).  

---

