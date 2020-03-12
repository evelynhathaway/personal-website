const path = require("path");


module.exports = {
	siteMetadata: {
		title: "Evelyn Hathaway",
		description: "I'm a software developer with a strong passion for frontend and backend JavaScript and web accessibility.",
		siteUrl: "https://evelyn.dev/",
	},
	plugins: [
		"gatsby-transformer-sharp",
		"gatsby-plugin-sharp",
		"gatsby-plugin-preload-fonts",
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
				background_color: "#ff7d3d",
				theme_color: "#ff7d3d",
				display: "minimal-ui",
				icon: "src/assets/images/headshot.png",
			},
		},
		"gatsby-plugin-react-helmet",
		{
			resolve: "gatsby-plugin-robots-txt",
			options: {
				resolveEnv: () => process.env.GITHUB_REF,
				env: {
					"refs/heads/dev": {
						host: "https://dev.evelyn.dev/sitemap.xml",
						sitemap: "https://dev.evelyn.dev/sitemap.xml",
						policy: [
							{
								userAgent: "*",
								disallow: "/",
							},
						],
					},
					"refs/heads/master": {
						host: "https://evelyn.dev/sitemap.xml",
						sitemap: "https://evelyn.dev/sitemap.xml",
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
	],
};
