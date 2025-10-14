import { c as createComponent, m as maybeRenderHead, u as unescapeHTML, a as renderTemplate } from './astro/server_I3Lq-tOg.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Newsletter update</p>\n<ul>\n<li>Newlsetter to come</li>\n</ul>";

				const frontmatter = {"title":"newsletter","date":"2025-10-13T00:00:00.000Z","excerpt":"tktktk","draft":false};
				const file = "/Users/abigailmcclain/low-speed-spoon/src/content/blog/a-gentle-beginning.md";
				const url = undefined;
				function rawContent() {
					return "\nNewsletter update\n\n- Newlsetter to come\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
