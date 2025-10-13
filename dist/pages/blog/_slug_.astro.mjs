import { b as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, d as renderSlot } from '../../chunks/astro/server_I3Lq-tOg.mjs';
import 'kleur/colors';
import 'html-escaper';
export { renderers } from '../../renderers.mjs';

const $$Astro$1 = createAstro("https://YOUR_USERNAME.github.io/low-speed-spoon");
const $$PostLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$PostLayout;
  const { frontmatter } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Layout", Layout, { "title": `${frontmatter.title} \u2014 the low-speed spoon`, "theme": "theme-blog" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<article class="mx-auto max-w-3xl px-4 py-12 prose"> <h1>${frontmatter.title}</h1> ${frontmatter.date && renderTemplate`<p class="text-sm text-gray-500">${new Date(frontmatter.date).toLocaleDateString()}</p>`} ${renderSlot($$result2, $$slots["default"])} </article> ` })}
---
import Layout from './BaseLayout.astro';`;
}, "/Users/abigailmcclain/low-speed-spoon/src/layouts/PostLayout.astro", void 0);

const $$Astro = createAstro("https://YOUR_USERNAME.github.io/low-speed-spoon");
const Astro = $$Astro;
async function getStaticPaths() {
  const posts = await Astro.glob(/* #__PURE__ */ Object.assign({"../../content/blog/a-gentle-beginning.md": () => import('../../chunks/a-gentle-beginning_DgdtPnzm.mjs')}), () => "../../content/blog/*.md");
  return posts.map((post) => {
    const file = post.file || "";
    const slug = file.split("/").pop()?.replace(/\.md$/, "") || "post";
    return {
      params: { slug },
      props: { frontmatter: post.frontmatter, Content: post.Content }
    };
  });
}
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { frontmatter, Content } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "PostLayout", $$PostLayout, { "frontmatter": frontmatter }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Content", Content, {})} ` })}`;
}, "/Users/abigailmcclain/low-speed-spoon/src/pages/blog/[slug].astro", void 0);

const $$file = "/Users/abigailmcclain/low-speed-spoon/src/pages/blog/[slug].astro";
const $$url = "/blog/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
