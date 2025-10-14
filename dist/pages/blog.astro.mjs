import { b as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, e as addAttribute } from '../chunks/astro/server_I3Lq-tOg.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_CrPfhnK6.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://YOUR_USERNAME.github.io/low-speed-spoon");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const posts = await Astro2.glob(/* #__PURE__ */ Object.assign({"../../content/blog/a-gentle-beginning.md": () => import('../chunks/a-gentle-beginning_vp8AOxzE.mjs')}), () => "../../content/blog/*.md");
  return renderTemplate`${renderComponent($$result, "Layout", $$BaseLayout, { "title": "Blog \u2014 the low-speed spoon", "theme": "theme-blog" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="mx-auto max-w-3xl px-4 py-16"> <h1 class="text-xl font-medium mb-6">newsletter</h1> <ul class="space-y-4"> ${posts.sort((a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date)).map((post) => renderTemplate`<li> <a class="block p-4 border rounded-2xl hover:shadow-md transition"${addAttribute(post.url, "href")}> <h3 class="text-base font-medium">${post.frontmatter.title}</h3> ${post.frontmatter.date && renderTemplate`<p class="text-xs text-gray-600">${new Date(post.frontmatter.date).toLocaleDateString()}</p>`} ${post.frontmatter.excerpt && renderTemplate`<p class="text-sm text-gray-700 mt-1">${post.frontmatter.excerpt}</p>`} </a> </li>`)} </ul> </section> ` })}`;
}, "/Users/abigailmcclain/low-speed-spoon/src/pages/blog/index.astro", void 0);

const $$file = "/Users/abigailmcclain/low-speed-spoon/src/pages/blog/index.astro";
const $$url = "/blog";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
