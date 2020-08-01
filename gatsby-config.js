const path = require("path");


const buildMode = process.env.BUILD_ENV || "production";
const siteUrl = buildMode === "production" ? "https://evelyn.dev" : "https://beta.evelyn.dev";

module.exports = {
	siteMetadata: {
		title: "Evelyn Hathaway",
		description: "I'm a software developer with a strong passion for frontend and backend JavaScript and web accessibility.",
		siteUrl,
	},
	plugins: [
		"gatsby-transformer-sharp",
		"gatsby-plugin-sharp",
		"gatsby-plugin-preload-fonts",
		{
			resolve: "gatsby-plugin-scss-typescript",
			options: {
				sassLoaderOptions: {
					implementation: require("sass"),
					data: `
						@use "sass:map";
						@use "animations.scss";
						@use "colors.scss";
						@use "typography.scss";
					`,
					includePaths: [
						"src/styles/defs/",
					],
				},
			},
		},
		{
			resolve: "gatsby-source-filesystem",
			options: {
				name: "images",
				path: path.join(__dirname, "src", "assets", "images"),
			},
		},
		{
			resolve: "gatsby-plugin-typography",
			options: {
				pathToConfigModule: "src/utils/typography",
			},
		},
		{
			resolve: "gatsby-plugin-manifest",
			options: {
				name: "Evelyn Hathaway",
				short_name: "Evelyn Hathaway",
				start_url: "/",
				background_color: "#ED4424",
				theme_color: "#FF7D3D",
				display: "minimal-ui",
				icon: "src/assets/images/headshot.png",
			},
		},
		"gatsby-plugin-react-helmet",
		{
			resolve: "gatsby-plugin-robots-txt",
			options: {
				host: `${siteUrl}/sitemap.xml`,
				sitemap: `${siteUrl}/sitemap.xml`,
				resolveEnv: () => buildMode,
				env: {
					"development": {
						policy: [
							{
								userAgent: "*",
								disallow: "/",
							},
						],
					},
					"production": {
						policy: [
							{
								userAgent: "*",
								allow: "/",
							},
						],
					},
				},
			},
		},
		{
			resolve: "gatsby-plugin-react-svg",
			options: {
				rule: {
					include: /\.inline\.svg/,
				},
			},
		},
		"gatsby-plugin-typescript",
	],
};
