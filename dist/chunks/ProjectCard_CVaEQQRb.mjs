import { b as createAstro, c as createComponent, m as maybeRenderHead, e as addAttribute, a as renderTemplate } from './astro/server_I3Lq-tOg.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';

const $$Astro = createAstro("https://YOUR_USERNAME.github.io/low-speed-spoon");
const $$ProjectCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ProjectCard;
  const { title, blurb = "", href = "#", meta = "" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")} class="block border rounded-2xl p-4 hover:shadow-md transition"> <h3 class="text-base font-medium mb-1">${title}</h3> ${blurb && renderTemplate`<p class="text-sm text-gray-600">${blurb}</p>`} ${meta && renderTemplate`<p class="mt-2 text-xs text-gray-500">${meta}</p>`} </a>`;
}, "/Users/abigailmcclain/low-speed-spoon/src/components/ProjectCard.astro", void 0);

export { $$ProjectCard as $ };
