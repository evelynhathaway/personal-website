import React from "react";
import {graphql, useStaticQuery} from "gatsby";
import Img from "gatsby-image";
import Tiles from "../../Tiles";
import styles from "./styles.module.css";

export default function TilesSection () {
	// Load fluid image using Gatsby, GraphQL, and Sharp
	const data = useStaticQuery(graphql`
		query {
			headshot: file(relativePath: {eq: "headshot.png"}) {
				childImageSharp {
					fluid(maxWidth: 500) {
						...GatsbyImageSharpFluid
					}
				}
			}
		}
	`);

	return (
		<div className={styles.root}>
			<div className={styles.flexArea}>
				<div className={styles.speechBubble}>
					<p className={styles.preheader}>Hey there! 👋</p>
					<h1>I am Evelyn Hathaway.</h1>
					<p className={styles.tagline}>I&apos;m a software developer with a strong passion for frontend and backend JavaScript and web accessibility.</p>
					<span className={styles.cssTriangle}></span>
				</div>

				<div className={styles.imageContainer}>
					<Img className={styles.image} alt="Evelyn's Headshot" fluid={data.headshot.childImageSharp.fluid}/>
				</div>
			</div>

			{/* Tiles Background */}
			<Tiles/>
		</div>
	);
}
