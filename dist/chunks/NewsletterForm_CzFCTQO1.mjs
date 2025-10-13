import { b as createAstro, c as createComponent, m as maybeRenderHead, a as renderTemplate } from './astro/server_I3Lq-tOg.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';

const $$Astro = createAstro("https://YOUR_USERNAME.github.io/low-speed-spoon");
const $$NewsletterForm = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$NewsletterForm;
  const { provider = "buttondown" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="flex items-center gap-2"> <form class="flex items-center gap-2" action="https://buttondown.email/api/emails/embed-subscribe/YOUR_USERNAME" method="post" target="popupwindow" onsubmit="window.open('https://buttondown.email/YOUR_USERNAME', 'popupwindow')"> <input class="border rounded px-2 py-1 text-sm" type="email" name="email" placeholder="email for updates" required> <button class="border rounded px-3 py-1 text-sm" type="submit">Subscribe</button> </form> </div>`;
}, "/Users/abigailmcclain/low-speed-spoon/src/components/NewsletterForm.astro", void 0);

export { $$NewsletterForm as $ };
