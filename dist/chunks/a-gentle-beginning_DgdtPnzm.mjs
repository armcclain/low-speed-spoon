import { c as createComponent, m as maybeRenderHead, u as unescapeHTML, a as renderTemplate } from './astro/server_I3Lq-tOg.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>This is a lightly-styled journal entry. Replace me with your own writing, sketches, or process notes.</p>\n<ul>\n<li>Keep posts simple and reflective.</li>\n<li>Drop in line illustrations or photos as needed.</li>\n<li>Use this space as a working log for projects.</li>\n</ul>";

				const frontmatter = {"title":"a gentle beginning","date":"2025-10-13T00:00:00.000Z","excerpt":"First notes on making a quiet space for design, research, and communication.","draft":false};
				const file = "/Users/abigailmcclain/low-speed-spoon/src/content/blog/a-gentle-beginning.md";
				const url = undefined;
				function rawContent() {
					return "\nThis is a lightly-styled journal entry. Replace me with your own writing, sketches, or process notes.\n\n- Keep posts simple and reflective.\n- Drop in line illustrations or photos as needed.\n- Use this space as a working log for projects.\n";
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
