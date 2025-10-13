import { b as createAstro, c as createComponent, f as renderHead, e as addAttribute, d as renderSlot, a as renderTemplate } from './astro/server_I3Lq-tOg.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';

const $$Astro = createAstro("https://YOUR_USERNAME.github.io/low-speed-spoon");
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const { title = "the low-speed spoon", theme = "" } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>${title}</title><link rel="icon" href="/favicon.svg"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link rel="stylesheet" href="/src/styles/base.css"><link rel="stylesheet" href="/src/styles/themes.css">${renderHead()}</head> <body${addAttribute(`${theme}`, "class")}> <header class="w-full"> <div class="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between"> <a href="/" class="text-sm lowercase tracking-widest">the low-speed spoon</a> <nav class="text-sm"> <ul class="flex gap-6"> <li><a class="hover:underline" href="/about">about</a></li> <li><a class="hover:underline" href="/portfolio/">portfolio</a></li> <li><a class="hover:underline" href="/blog">newsletter</a></li> <li><a class="hover:underline" href="/contact">contact</a></li> </ul> </nav> </div> </header> <main class="min-h-[70vh]"> ${renderSlot($$result, $$slots["default"])} </main> <footer class="mt-16 border-t"> <div class="mx-auto max-w-6xl px-4 py-8 text-xs text-gray-600 flex items-center justify-between"> <p>© ${(/* @__PURE__ */ new Date()).getFullYear()} the low-speed spoon</p> ${renderSlot($$result, $$slots["newsletter"])} </div> </footer> </body></html>`;
}, "/Users/abigailmcclain/low-speed-spoon/src/layouts/BaseLayout.astro", void 0);

export { $$BaseLayout as $ };
