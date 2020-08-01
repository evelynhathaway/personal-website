import React from "react";
import Emoji from "a11y-react-emoji";
import {graphql, useStaticQuery} from "gatsby";
import Img from "gatsby-image";
import GitHubIcon from "../../../assets/images/icons/github.inline.svg";
import LinkedInIcon from "../../../assets/images/icons/linkedin.inline.svg";
import Tiles from "../../Tiles";
import {ChipAnchor} from "../../ui/Chip";
import Icon from "../../ui/Icon";
import Navigation from "../../ui/Navigation";
import styles from "./styles.module.scss";


export default function TilesSection () {
	// Load fluid image using Gatsby, GraphQL, and Sharp
	const data = useStaticQuery(graphql`
		query {
			headshot: file(relativePath: {eq: "headshot.png"}) {
				childImageSharp {
					fluid(
						webpQuality: 90,
						srcSetBreakpoints: [175, 225, 275, 300, 350, 400, 450, 500, 550, 750, 1000],
						sizes: "(max-width: 600px) 175px, (max-width: 800px) 225px, (max-width: 1400px) 275px, (max-width: 1500px) 300px, 375px",
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
					<p className={styles.preheader}>Hey there! <Emoji symbol="👋" label="Waving hand"/></p>
					<h1>I&apos;m Evelyn Hathaway.</h1>
					<p className={styles.tagline}>
						I&apos;m a software engineer with a specializing in JavaScript and fighting for web accessibility. (she/her)
					</p>
					<span className={styles.cssTriangle} />
				</div>

				<div className={styles.imageContainer}>
					<Img className={styles.image} alt="Evelyn's Headshot" fluid={data.headshot.childImageSharp.fluid} loading="eager" />
				</div>
			</div>

			{/* Info chips */}
			<div className={styles.chips}>
				<ChipAnchor
					href="mailto:hey@evelyn.dev" rel="noopener" target="_blank" title="Email me"
					shade="warm" color="white" raised
					text="Contact"
					thumbnail={<Icon material="email" className={styles.chipIcon} />}
				/>
				<ChipAnchor
					href="https://github.com/evelynhathaway" rel="noopener" target="_blank" title="View my GitHub profile"
					shade="warm" color="white" raised
					text="Code"
					thumbnail={<Icon svg={<GitHubIcon />} label="GitHub" className={styles.chipIcon} />}
				/>
				<ChipAnchor
					href="https://www.linkedin.com/in/evelynhathaway/" rel="noopener" target="_blank" title="View my LinkedIn profile"
					shade="warm" color="white" raised
					text="Connect"
					thumbnail={<Icon svg={<LinkedInIcon />} label="LinkedIn" className={styles.chipIcon} />}
				/>
				<ChipAnchor
					href="https://goo.gl/maps/9x98A5BuH4vLB3G1A" rel="noopener" target="_blank" title="View my city on Google Maps"
					shade="warm" color="white" raised
					text="Seattle, WA"
					thumbnail={<Icon material="place" label="Location" className={styles.chipIcon} />}
				/>
			</div>

			{/* Navigation */}
			<div className={styles.outerNavContainer}>
				<Navigation center />
			</div>

			{/* Tiles Background */}
			<Tiles />
		</div>
	);
}
