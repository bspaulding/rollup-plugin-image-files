export default {
	input: 'src/index.js',
	output: [
		{
			file: 'dist/index.cjs.js',
			format: 'cjs'
		},
		{
			file: 'dist/index.es.js',
			format: 'es'
		}
	],
	external: ['fs', 'path', '@rollup/pluginutils']
};
