import React from "react";
import {graphql, useStaticQuery} from "gatsby";
import Img from "gatsby-image";
import Tiles from "../../Tiles";
import Icon from "../../ui/Icon";
import Chip from "../../ui/Chip";
import UnstyledAnchor from "../../utils/UnstyledAnchor";
import styles from "./styles.module.scss";

export default function TilesSection () {
	// Load fluid image using Gatsby, GraphQL, and Sharp
	const data = useStaticQuery(graphql`
		query {
			headshot: file(relativePath: {eq: "headshot.png"}) {
				childImageSharp {
					fluid(
						webpQuality: 90,
						srcSetBreakpoints: [200, 275, 300, 400, 500, 600, 700, 800, 1000],
						sizes: "(max-width: 250px) 200px, (max-width: 1400px) 275px, (max-width: 1465px) 300px, (max-width: 1670px) 400px, 500px",
						traceSVG: {
							color: "#FF9764"
						}
					) {
						...GatsbyImageSharpFluid_withWebp_tracedSVG
					}
				}
			}
		}
	`);

	return (
		<div className={styles.TilesSection}>
			<div className={styles.flexArea}>
				<div className={styles.speechBubble}>
					<p className={styles.preheader}>Hey there! 👋</p>
					<h1>I am Evelyn Hathaway.</h1>
					<p className={styles.tagline}>I&apos;m a software developer with a strong passion for frontend and backend JavaScript and web accessibility.</p>
					<span className={styles.cssTriangle}></span>
				</div>

				<div className={styles.imageContainer}>
					<Img className={styles.image} alt="Evelyn's Headshot" fluid={data.headshot.childImageSharp.fluid} loading="eager"/>
				</div>
			</div>

			{/* Info chips */}
			<div className={styles.chips}>
				<UnstyledAnchor href="mailto:hey@evelyn.dev" rel="noopener" target="_blank">
					<Chip
						slotThumbnail={<Icon icon="email" className={styles.chipIcon}/>}
						text="hey@evelyn.dev"
					/>
				</UnstyledAnchor>
				<UnstyledAnchor href="https://github.com/evelynhathaway" rel="noopener" target="_blank">
					<Chip
						slotThumbnail={<Icon icon="code" className={styles.chipIcon}/>}
						text="GitHub"
					/>
				</UnstyledAnchor>
				<UnstyledAnchor href="https://www.linkedin.com/in/evelynhathaway/" rel="noopener" target="_blank">
					<Chip
						slotThumbnail={<Icon icon="work" className={styles.chipIcon}/>}
						text="LinkedIn"
					/>
				</UnstyledAnchor>
				<UnstyledAnchor href="https://goo.gl/maps/9x98A5BuH4vLB3G1A" rel="noopener" target="_blank">
					<Chip
						slotThumbnail={<Icon icon="place" label="Location" className={styles.chipIcon}/>}
						text="Seattle, WA"
					/>
				</UnstyledAnchor>
			</div>

			{/* Tiles Background */}
			<Tiles/>
		</div>
	);
}
