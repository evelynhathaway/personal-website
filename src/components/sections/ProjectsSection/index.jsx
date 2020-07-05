import React from "react";
import Emoji from "a11y-react-emoji";
import Container from "../../utils/Container";
import Project from "./Project";
import styles from "./styles.module.scss";


export default function ProjectsSection () {
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
						<img
							src="https://github.com/rocketryjs/assets/raw/master/edited/SDIM0036-adjusted-16_9-tilt-shift.png"
							alt="MIDI Controller with RGB lights"
						/>
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
						<img
							src="https://pro2-bar-s3-cdn-cf6.myportfolio.com/352538c0-ae27-4b15-80e1-4dc31e0cd823/7526b832-f850-449a-8163-a40c49220dbe_rw_600.png?h=899180133f5071bb053a4c5dfd6943cb"
							alt="Screenshot of Triton Poll"
						/>
					)}
					overlayColor="blue"
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
							src="https://github.com/evelynhathaway/eslint-plugin-evelyn/raw/master/.github/icon.png"
							alt="Icon"
						/>
					)}
					overlayColor="lilac"
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
							src="https://github.com/evelynhathaway/bind-deep/raw/master/.github/icon.png"
							alt="Icon"
						/>
					)}
					overlayColor="blue"
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
							src="https://github.com/ceoss/will-mutate/raw/master/.github/icon.png"
							alt="Icon"
						/>
					)}
					overlayColor="mint"
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
							src="https://github.com/evelynhathaway/pluot/raw/master/.github/icon.png"
							alt="Icon"
						/>
					)}
				/>
			</div>
		</Container>
	);
}
