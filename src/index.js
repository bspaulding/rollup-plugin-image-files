import { readFileSync, writeFileSync } from 'fs';
import { basename, dirname } from 'path';
import { createFilter } from 'rollup-pluginutils';

const extensions = ['.jpg', '.jpeg', '.png', '.gif', '.svg' ];
const includes = extensions.map(e => `**/*${e}`);

export default function image(options = {}) {
	const filter = createFilter(options.include || includes, options.exclude);
	let images = [];

	return {
		name: 'image-file',
		load(id) {
			if (!filter(id)) {
				return null;
			}

			if (images.indexOf(id) < 0) {
				images.push(id);
			}
			const code = `const img = require('./${basename(id)}'); export default img;`;

			const ast = {
				type: 'Program',
				sourceType: 'module',
				start: 0,
				end: null,
				body: []
			};

			return { ast, code, map: { mappings: '' } };
		},
		ongenerate(options, rendered) {
			const dir = dirname(options.dest);
			images.forEach(id => {
				writeFileSync(`${dir}/${basename(id)}`, readFileSync(id));
			});
		}
	};
}
