# Editable Project Structure
```
low-speed-spoon/
├── low-speed-spoon/
│   ├── public/
│   ├── src/
│   │   ├── consts.ts
│   │   └── content.config.ts
│   ├── astro.config.mjs
│   ├── package-lock.json
│   ├── package.json
│   ├── README.md
│   └── tsconfig.json
├── public/
│   ├── assets/
├── src/
│   ├── components/
│   │   ├── Footer.astro
│   │   ├── ImageFrame.astro
│   │   ├── Nav.astro
│   │   ├── NewsletterForm.astro
│   │   └── ProjectCard.astro
│   ├── content/
│   ├── layouts/
│   │   ├── BaseLayout.astro
│   │   ├── BlogPost.astro
│   │   └── PostLayout.astro
│   ├── pages/
│   │   ├── about.astro
│   │   ├── contact.astro
│   │   └── index.astro
│   ├── styles/
│   │   ├── base.css
│   │   └── themes.css
│   └── env.d.ts
├── astro.config.mjs
├── package-lock.json
├── package.json
├── postcss.config.js
├── README.md
└── tailwind.config.js
```

## Key Edit Points
- **src/pages** — Top-level page routes for the site (edit these to change content or structure).
- **src/components** — Reusable UI blocks such as navigation, headers, or cards.
- **src/layouts** — Shared layout templates wrapping pages.
- **src/styles** — Global and custom stylesheets, Tailwind configs, and CSS modules.
- **public** — Static assets (images, icons, fonts) accessible via root paths.
- **astro.config.mjs** — Main Astro configuration (integrations, base URL, output dir).
- **tailwind.config.js** — TailwindCSS theme and plugin settings.
- **package.json** — Project metadata and scripts (dev, build, deploy).
