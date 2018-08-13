import image from '../src/index';

export default {
	entry: './index',
	dest: './output/bundle.js',
	plugins: [image()]
};
