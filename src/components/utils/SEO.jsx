import React from "react";
import Helmet from "react-helmet";
import {graphql, useStaticQuery} from "gatsby";


export default function SEO ({
	description = "",
	lang = "en",
	title,
}) {
	const {site: {siteMetadata: siteData}} = useStaticQuery(
		graphql`
			query {
				site {
					siteMetadata {
						title
						description
						siteUrl
					}
				}
			}
		`
	);

	const metaDescription = description || siteData.description;

	return (
		<Helmet
			htmlAttributes={{
				lang,
			}}
			title={title}
			titleTemplate={`%s | ${siteData.title}`}
			meta={[
				{
					property: "og:url",
					content: siteData.siteUrl,
				},
				{
					property: "og:site_name",
					content: siteData.title,
				},
				{
					property: "name",
					content: siteData.title,
				},
				{
					property: "og:title",
					content: title,
				},
				{
					property: "og:locale",
					content: "en_US",
				},
				{
					name: "twitter:title",
					content: title,
				},
				{
					name: "description",
					content: metaDescription,
				},
				{
					property: "og:description",
					content: metaDescription,
				},
				{
					name: "twitter:description",
					content: metaDescription,
				},
				{
					name: "twitter:card",
					content: "summary_large_image",
				},
				// TODO
				// {
				// 	property: "og:image",
				// 	content: "https://unicorn-utterances.com/share-banner.png",
				// },
				// {
				// 	name: "twitter:image",
				// 	content: "https://unicorn-utterances.com/share-banner.png",
				// },
			]}
		/>
	);
}
