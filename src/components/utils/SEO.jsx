import React from "react";
import {graphql, useStaticQuery} from "gatsby";
import PropTypes from "prop-types";
import {Helmet} from "react-helmet";
import shareImage from "../../assets/images/share-image.png";


SEO.propTypes = {
	description: PropTypes.string,
	lang: PropTypes.string,
	title: PropTypes.string.isRequired,
};


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
				{
					property: "profile:gender",
					"data-comment": "Open Graph: \"enum(male, female)\"; Evelyn, a rebel who fights for what's right by invalidating her own Open Graph data...",
					content: "non-binary",
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
				{
					property: "og:image",
					content: `${siteData.siteUrl}${shareImage}`,
				},
				{
					name: "twitter:image",
					content: `${siteData.siteUrl}${shareImage}`,
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
