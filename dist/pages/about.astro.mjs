import { c as createComponent, r as renderComponent, a as renderTemplate, F as Fragment, m as maybeRenderHead } from '../chunks/astro/server_I3Lq-tOg.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_CrPfhnK6.mjs';
import { $ as $$NewsletterForm } from '../chunks/NewsletterForm_CzFCTQO1.mjs';
export { renderers } from '../renderers.mjs';

const $$About = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$BaseLayout, { "title": "About \u2014 the low-speed spoon", "theme": "theme-about" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="mx-auto max-w-3xl px-4 py-16 prose"> <h1 class="text-xl font-medium mb-6">about</h1> <br> <p>hi! i'm abby, i'm an artist, scientist, and enjoyer of colloquialisms. </p><p> <br> </p><p>the low-speed spoon is space i created to as a place to house my portfolio of art, design, and data-vis projects. if you've found yourself here, i hope you enjoy poking around!</p> <br> <br> <div class="not-prose my-12"> <img src="/assets/separators/spoon.png" alt="" role="presentation" class="mx-auto block opacity-90" style="width:200px;max-width:none;"> <br> <br> </div> <h1>what is a low-speed spoon?</h1> <br> <p> <span style="color:#A47DAB;" class="italic">/loʊ&nbsp;spiːd&nbsp;spuːn/</span> noun </p><p> <br> </p><p> literally, a vernacular phrase reffering to the smaller of two spoons included in a table setting, i.e, teaspoon. see high-speed spoon as an analog for 'dinner spoon' </p><p></p></section>  `, "newsletter": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "newsletter" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "NewsletterForm", $$NewsletterForm, {})} ` })}` })}`;
}, "/Users/abigailmcclain/low-speed-spoon/src/pages/about.astro", void 0);

const $$file = "/Users/abigailmcclain/low-speed-spoon/src/pages/about.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$About,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
