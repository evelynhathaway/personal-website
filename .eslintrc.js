module.exports = {
	"plugins": [
		"evelyn",
	],

	"extends": [
		"plugin:evelyn/default",
		"plugin:evelyn/extensions",
		"plugin:evelyn/json",
		"plugin:evelyn/babel",
	],

	"overrides": [
		{
			"files": [
				"src/**/*.js",
				"src/**/*.jsx",
				"src/**/*.tsx",
				"gatsby-ssr.js",
			],
			"extends": [
				"plugin:evelyn/react",
			],
		},
		{
			"files": [
				"src/**/*.ts",
				"src/**/*.tsx",
			],
			"extends": [
				"plugin:evelyn/typescript",
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
	],
};
