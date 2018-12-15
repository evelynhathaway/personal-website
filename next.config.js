const images = require("remark-images");
const emoji = require("remark-emoji");

const withMDX = require("@zeit/next-mdx")({
	options: {
		mdPlugins: [
			images,
			emoji,
		],
	}
});


module.exports = withMDX({
	webpack: config => {
		// Fixes npm packages that depend on `fs` module
		config.node = {
			fs: "empty",
		};

		return config;
	},
	pageExtensions: ["js", "jsx", "mdx"],
});
