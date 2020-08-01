import React from "react";
import {graphql, useStaticQuery, GatsbyConfig} from "gatsby";
import {Helmet} from "react-helmet";
import shareImage from "../../assets/images/share-image.png";


export interface SEOProps {
	description?: string;
	lang?: string;
	title: string;
}


export default function SEO ({
	description = "",
	lang = "en",
	title,
}: SEOProps): JSX.Element {
	const {site: {siteMetadata: siteData}}: {
		site: GatsbyConfig;
	} = useStaticQuery(
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

	const metaDescription = description || siteData?.description as string;

	return (
		<Helmet
			htmlAttributes={{
				lang,
			}}
			title={title}
			titleTemplate={`%s | ${siteData?.title as string}`}
			meta={[
				{
					property: "og:url",
					content: siteData?.siteUrl as string,
				},
				{
					property: "og:type",
					content: "website",
				},
				{
					property: "profile:first_name",
					content: "Evelyn",
				},
				{
					property: "profile:last_name",
					content: "Hathaway",
				},
				{
					property: "profile:username",
					content: "evelynhathaway",
				},
				({
					property: "profile:gender",
					"data-comment": "Open Graph: \"enum(male, female)\"; Evelyn, a rebel who fights for what's right by invalidating her own Open Graph data...",
					content: "non-binary",
				} as JSX.IntrinsicElements["meta"]),
				{
					property: "og:site_name",
					content: siteData?.title as string,
				},
				{
					property: "name",
					content: siteData?.title as string,
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
				{
					property: "og:image",
					content: `${siteData?.siteUrl as string}${shareImage}`,
				},
				{
					name: "twitter:image",
					content: `${siteData?.siteUrl as string}${shareImage}`,
				},
				{
					property: "og:image:alt",
					content: "Hey there! 👋 I am Evelyn Hathaway.",
				},
				{
					name: "twitter:image:alt",
					content: "Hey there! 👋 I am Evelyn Hathaway.",
				},
			]}
		/>
	);
}
