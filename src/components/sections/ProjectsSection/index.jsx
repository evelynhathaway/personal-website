import React from "react";
import Emoji from "a11y-react-emoji";
import {graphql, useStaticQuery} from "gatsby";
import Img from "gatsby-image";
import bindDeepIcon from "../../../assets/images/projects/icons/bind-deep.svg";
import eslintPluginIcon from "../../../assets/images/projects/icons/eslint-plugin-evelyn.svg";
import looseRGBIcon from "../../../assets/images/projects/icons/loose-rgb.svg";
import pluotIcon from "../../../assets/images/projects/icons/pluot.svg";
import willMutateIcon from "../../../assets/images/projects/icons/will-mutate.svg";
import Container from "../../utils/Container";
import Project from "./Project";
import styles from "./styles.module.scss";


export default function ProjectsSection () {
	const data = useStaticQuery(graphql`
		query {
			rocketry: file(relativePath: {eq: "projects/covers/rocketry.png"}) {
				childImageSharp {
					fluid(
						webpQuality: 90,
						traceSVG: {
							color: "#80223A"
						}
					) {
						...GatsbyImageSharpFluid_withWebp_tracedSVG
					}
				}
			}
			tritonPoll: file(relativePath: {eq: "projects/covers/triton-poll.png"}) {
				childImageSharp {
					fluid(
						webpQuality: 90,
						traceSVG: {
							color: "#1F6C80"
						}
					) {
						...GatsbyImageSharpFluid_withWebp_tracedSVG
					}
				}
			}
		}
	`);

	return (
		<Container>
			<h2>Projects</h2>
			<div className={styles.ProjectsSection}>
				<Project
					title="Rocketry.js"
					link="https://github.com/rocketryjs/rocketry"
					description={(
						<>
							A high-level, feature-filled interface for the Novation Launchpad
							{" "}
							<Emoji symbol="🚀" label="rocket" /><Emoji symbol="🎹" label="piano keys" />
						</>
					)}
					image={(
						<Img className={styles.gatsbyImage} alt="MIDI Controller with RGB lights" fluid={data.rocketry.childImageSharp.fluid} />
					)}
					overlayColor="orange"
				/>
				<Project
					title="Triton Poll"
					link="https://github.com/evelynhathaway/triton-poll"
					description={(
						<>
							Live virtual voting and placard rasing for Model United Nations conferences
							{" "}
							<Emoji symbol="👩‍⚖️" label="woman in suit" /><Emoji symbol="🗳" label="ballot box" />
						</>
					)}
					image={(
						<Img className={styles.gatsbyImage} alt="Screenshot of Triton Poll" fluid={data.tritonPoll.childImageSharp.fluid} />
					)}
					overlayColor="blue"
				/>
				<Project
					iconProject
					title="Bind Deep"
					link="https://github.com/evelynhathaway/bind-deep"
					description={(
						<>
							Lightweight module for binding a function or object deeply
							{" "}
							<Emoji symbol="📎" label="paperclip" /><Emoji symbol="🕳️" label="hole" />
						</>
					)}
					image={(
						<img
							src={bindDeepIcon}
							alt="Icon"
						/>
					)}
					overlayColor="blue"
				/>
				<Project
					iconProject
					title="Loose RGB"
					link="https://github.com/evelynhathaway/loose-rgb"
					description={(
						<>
							Normalizes RGB color data types to a certain format
							{" "}
							<Emoji symbol="🎨" label="palette" /><Emoji symbol="🃏" label="joker playing card" />
						</>
					)}
					image={(
						<img
							src={looseRGBIcon}
							alt="Icon"
						/>
					)}
					overlayColor="lilac"
				/>
				<Project
					iconProject
					title="Will Mutate"
					link="https://github.com/ceoss/will-mutate"
					description={(
						<>
							Runtime test to that detects mutations to objects
							{" "}
							<Emoji symbol="🕵️‍♀️" label="Detective" /><Emoji symbol="🧬" label="DNA" />
						</>
					)}
					image={(
						<img
							src={willMutateIcon}
							alt="Icon"
						/>
					)}
					overlayColor="mint"
				/>
				<Project
					iconProject
					title="ESLint Plugin Evelyn"
					link="https://github.com/evelynhathaway/eslint-plugin-evelyn"
					description={(
						<>
							Plugin for my projects with my preferred code style and bugfixes
							{" "}
							<Emoji symbol="🔮" label="crystal ball" /><Emoji symbol="🧹" label="broom" />
						</>
					)}
					image={(
						<img
							src={eslintPluginIcon}
							alt="Icon"
						/>
					)}
					overlayColor="lilac"
				/>
				<Project
					iconProject
					title="Pluot"
					link="https://github.com/evelynhathaway/pluot"
					description={(
						<>
							Create iCal files from Wild Apricot events
							{" "}
							<Emoji symbol="📆" label="calendar" /><Emoji symbol="🍑" label="peach" />
						</>
					)}
					image={(
						<img
							src={pluotIcon}
							alt="Icon"
						/>
					)}
					overlayColor="orange"
				/>
			</div>
		</Container>
	);
}
