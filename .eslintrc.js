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
				"*.d.ts",
			],
			"rules": {
				"import/newline-after-import": "off",
			},
		},
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
			"rules": {
				// React requires null sometimes
				"unicorn/no-null": "off",
			},
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
