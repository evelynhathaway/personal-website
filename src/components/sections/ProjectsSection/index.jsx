import React from "react";
import Emoji from "a11y-react-emoji";
import classNames from "classnames";
import materialStyles from "../../../styles/material.module.scss";
import Container from "../../utils/Container";
import UnstyledAnchor from "../../utils/UnstyledAnchor";
import styles from "./styles.module.scss";


export default function ProjectsSection () {
	return (
		<Container>
			<h2>Projects</h2>
			<div className={styles.ProjectsSection}>
				<article className={classNames(
					materialStyles.material,
					// materialStyles.white,
					materialStyles.raised,
					materialStyles.whiteShade,
					styles.card,
				)}
				>
					<UnstyledAnchor href="https://github.com/rocketryjs/rocketry" target="_blank" rel="noopener noreferrer">
						<div className={styles.overlay}>
							<h3 className={styles.overlayText}>Rocketry.js</h3>
							<p className={styles.overlayText}>A high-level, feature-filled interface for the Novation Launchpad <Emoji symbol="🚀" label="rocket" /><Emoji symbol="🎹" label="piano keys" /></p>
						</div>
						<img src="https://github.com/rocketryjs/assets/raw/master/edited/SDIM0036-adjusted-16_9-tilt-shift.png" className={styles.image} />
					</UnstyledAnchor>
				</article>
				<article className={classNames(
					materialStyles.material,
					// materialStyles.white,
					materialStyles.raised,
					materialStyles.whiteShade,
					styles.blue,
					styles.card,
				)}
				>
					<UnstyledAnchor href="https://github.com/evelynhathaway/triton-poll" target="_blank" rel="noopener noreferrer">
						<div className={styles.overlay}>
							<h3 className={styles.overlayText}>Triton Poll</h3>
							<p className={styles.overlayText}>Live virtual voting and placard rasing for Model United Nations conferences <Emoji symbol="👩‍⚖️" label="woman in suit" /><Emoji symbol="🗳" label="ballot box" /></p>
						</div>
						<img src="https://pro2-bar-s3-cdn-cf6.myportfolio.com/352538c0-ae27-4b15-80e1-4dc31e0cd823/7526b832-f850-449a-8163-a40c49220dbe_rw_600.png?h=899180133f5071bb053a4c5dfd6943cb" className={styles.image} />
					</UnstyledAnchor>
				</article>
			</div>
			<div className={styles.ProjectsSection2}>
				<article className={classNames(
					materialStyles.material,
					// materialStyles.white,
					materialStyles.raised,
					materialStyles.whiteShade,
					styles.lilac,
					styles.card,
				)}
				>
					<UnstyledAnchor href="https://github.com/evelynhathaway/eslint-plugin-evelyn" target="_blank" rel="noopener noreferrer">
						<div className={styles.overlay}>
							<h3 className={styles.overlayText}>ESLint Plugin Evelyn</h3>
							<p className={styles.overlayText}>Plugin for my projects with my preferred code style and bugfixes <Emoji symbol="🔮" label="crystal ball" /><Emoji symbol="🧹" label="broom" /></p>
						</div>
						<img src="https://github.com/evelynhathaway/eslint-plugin-evelyn/raw/master/.github/icon.png" className={styles.image} />
					</UnstyledAnchor>
				</article>
				<article
					className={
						classNames(
							materialStyles.material,
							// materialStyles.white,
							materialStyles.raised,
							materialStyles.whiteShade,
							styles.blue,
							styles.card,
						)
					}
				>
					<UnstyledAnchor href="https://github.com/evelynhathaway/bind-deep" target="_blank" rel="noopener noreferrer">
						<div className={styles.overlay}>
							<h3 className={styles.overlayText}>Bind Deep</h3>
							<p className={styles.overlayText}>Lightweight module for binding a function or object deeply <Emoji symbol="📎" label="paperclip" /><Emoji symbol="🕳️" label="hole" /></p>
						</div>
						<img src="https://github.com/evelynhathaway/bind-deep/raw/master/.github/icon.png" className={styles.image} />
					</UnstyledAnchor>
				</article>
				<article className={classNames(
					materialStyles.material,
					// materialStyles.white,
					materialStyles.raised,
					materialStyles.whiteShade,
					styles.card,
				)}
				>
					<UnstyledAnchor href="https://github.com/evelynhathaway/pluot" target="_blank" rel="noopener noreferrer">
						<div className={styles.overlay}>
							<h3 className={styles.overlayText}>Pluot</h3>
							<p className={styles.overlayText}>Create iCal files from Wild Apricot events <Emoji symbol="📆" label="calendar" /><Emoji symbol="🍑" label="peach" /></p>
						</div>
						<img src="https://github.com/evelynhathaway/pluot/raw/master/.github/icon.png" className={styles.image} />
					</UnstyledAnchor>
				</article>
			</div>
		</Container>
	);
}
