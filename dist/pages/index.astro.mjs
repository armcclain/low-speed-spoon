import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_I3Lq-tOg.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_CrPfhnK6.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$BaseLayout, { "title": "the low-speed spoon" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="mx-auto max-w-4xl px-4 py-24"> <div class="grid place-items-center"> <br> <br> <div class="w-50px mx-auto"> <img src="/assets/Low_Speed_Spoon.png" alt="the low-speed spoon logo" class="w-auto h-auto"> </div> <div class="mt-10 text-xs lowercase tracking-widest text-gray-500"></div> </div> </section> ` })}`;
}, "/Users/abigailmcclain/low-speed-spoon/src/pages/index.astro", void 0);

const $$file = "/Users/abigailmcclain/low-speed-spoon/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
