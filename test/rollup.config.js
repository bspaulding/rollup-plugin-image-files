import image from '../src/index';

export default {
	input: './index',
	output: {
		file: './output/bundle.js',
		format: 'cjs'
	},
	plugins: [
		image({
			output: './output/images'
		})
	]
};
