import { c as createComponent, r as renderComponent, a as renderTemplate, F as Fragment, m as maybeRenderHead } from '../chunks/astro/server_I3Lq-tOg.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_CrPfhnK6.mjs';
import { $ as $$NewsletterForm } from '../chunks/NewsletterForm_CzFCTQO1.mjs';
export { renderers } from '../renderers.mjs';

const $$Contact = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$BaseLayout, { "title": "Contact \u2014 the low-speed spoon", "theme": "theme-contact" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="mx-auto max-w-3xl px-4 py-16 prose"> <h1>contact</h1> <br> <p>drop a line to me via email and see what else i've been up to on my academic website and instagram.</p> <br> <ul> <li>email: <a href="mailto:amcclain@gwu.edu">amcclain@gwu.edu</a></li> <li>website: <a href="https://armcclain.github.io"> academic updates </a></li> <li>instagram: <a href="https://instagram.com/the_primate_diaries">@the_primate_diaries</a></li> </ul> </section>  `, "newsletter": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "newsletter" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "NewsletterForm", $$NewsletterForm, {})} ` })}` })}`;
}, "/Users/abigailmcclain/low-speed-spoon/src/pages/contact.astro", void 0);

const $$file = "/Users/abigailmcclain/low-speed-spoon/src/pages/contact.astro";
const $$url = "/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contact,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
