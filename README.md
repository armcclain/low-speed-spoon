# the low-speed spoon — starter scaffold

This repo includes a minimal Astro + Tailwind scaffold for a portfolio-first site with:
- Black & white landing page (logo-centered)
- Subpages: About, Contact, Blog, Portfolio (and Personal / Professional / Academic)
- Scroll-away navigation (not fixed)
- Journal-style blog (Markdown content)
- Newsletter signup stub (replace with your provider)
- Per-page theme hooks (distinct background colors/images on inner pages)

## Edit points

- **Logo:** place your logo file at `public/assets/Low_Speed_Spoon.png`, then update `src/pages/index.astro` if filename differs.
- **Fonts:** add your custom fonts to `public/fonts/` and declare them in `src/styles/base.css` + `tailwind.config.cjs`.
- **Colors / backgrounds:** update `src/styles/themes.css` or add background images per page.
- **Blog:** add Markdown posts to `src/content/blog/`. Each file should have frontmatter (title, date, draft).
- **Portfolio:** edit pages in `src/pages/portfolio/`, and use the `ProjectCard` component as needed.
- **Newsletter:** open `src/components/NewsletterForm.astro` and wire Buttondown/Substack/Mailchimp.

## Dev commands

```bash
npm install
npm run dev       # local preview at http://localhost:4321
npm run build     # generate static files into /dist
```

## Deploy
Push to GitHub `main` branch. GitHub Actions will build & publish to GitHub Pages if configured in Settings → Pages.
