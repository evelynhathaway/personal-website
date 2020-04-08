module.exports = {
	"plugins": [
		"evelyn",
	],

	"extends": [
		"plugin:evelyn/default",
		"plugin:evelyn/babel",
	],

	"overrides": [
		{
			"files": [
				"src/**/*.js",
				"src/**/*.jsx",
			],
			"extends": [
				"plugin:evelyn/react",
			],
		},
		{
			"files": [
				"*.js",
			],
			"extends": [
				"plugin:evelyn/node",
				"plugin:evelyn/source",
			],
		},
		{
			"files": [
				"gatsby-ssr.js",
			],
			"extends": [
				"plugin:evelyn/react",
			],
		},
	],
};
