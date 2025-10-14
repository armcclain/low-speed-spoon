import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_I3Lq-tOg.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_CrPfhnK6.mjs';
import { $ as $$ProjectCard } from '../../chunks/ProjectCard_CVaEQQRb.mjs';
export { renderers } from '../../renderers.mjs';

const $$Academic = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$BaseLayout, { "title": "academic \u2014 the low-speed spoon", "theme": "theme-portfolio" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="mx-auto max-w-3xl px-4 py-16"> <h1 class="text-xl font-medium mb-6">academic</h1> <div class="mb-8 text-sm"> <div class="mb-8 text-sm"> <ul class="flex gap-4"> <li><a class="underline" href="/portfolio"> go back</a></li> </ul> </div> <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"> ${renderComponent($$result2, "ProjectCard", $$ProjectCard, { "title": "academic sample", "blurb": "a placeholder for research visuals.", "href": "#", "meta": "data viz" })} </div> </div></section> ` })}`;
}, "/Users/abigailmcclain/low-speed-spoon/src/pages/portfolio/academic.astro", void 0);

const $$file = "/Users/abigailmcclain/low-speed-spoon/src/pages/portfolio/academic.astro";
const $$url = "/portfolio/academic";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Academic,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
