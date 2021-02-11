import React from "react";
import Emoji from "a11y-react-emoji";
import Container from "../../utils/Container";
import styles from "./styles.module.scss";
import {ButtonAnchor} from "../../ui/Button";

export default function AboutSection (): JSX.Element {
	return (
		<Container>
			<div className={styles.textBlock}>
				<h1>About</h1>
				<p>Software developer with a strong passion for front-end and back-end JavaScript and web accessibility. Experienced in client- and server-side development and in the automation of linting and building code. Knowledgeable in advanced data structures, functional and object-oriented programming, and modular and extensible codebases. Experienced in managing online communities, working as a leader and team member.</p>

				<div className={styles.buttonGroup}>
					<ButtonAnchor href="https://www.linkedin.com/in/evelynhathaway/" target="_blank" raised outline color="blue">LinkedIn</ButtonAnchor>
					<ButtonAnchor href="https://evelyn.dev/resume.pdf" target="_blank" raised outline color="blue">Resume</ButtonAnchor>
				</div>

				<h2>Now</h2>
				<div className={styles.projectTickers}>
					<figure>
						<figcaption><strong>Current Project</strong></figcaption>
						<object type="image/svg+xml" data="https://badgen.net/runkit/evelynhathaway/5efff0f4a433390013bee3fe?cache=300" />
					</figure>
					<figure>
						<figcaption><strong>Last Personal Project</strong></figcaption>
						<object type="image/svg+xml" data="https://badgen.net/runkit/evelynhathaway/5f0021fbf94b97001ad16899?cache=300" />
					</figure>
				</div>
				<p><em>Projects update every ~5 min.</em></p>
				<p>I&apos;m a gal living it up in the Greater Seattle Area enjoying greenery and rain. I started a position as a software engineer at Blue Origin on May 4, 2020</p>

				<h2><Emoji symbol="👩‍💻" label="Woman coding" /> I&apos;m currently working on...</h2>
				<p>Overengineering my portfolio! Fun fact, the background header image is generated using an offscreen canvas using the user agent string, so take a peek at it on a few devices!</p>
				<p><a href="https://github.com/rocketryjs">Rocketry.js</a> is my mega project where I control RGB lights and buttons on MIDI controllers. It&apos;s a exciting take on hardware control using TypeScript.</p>
				<p>Occasionally I will also work on my glitch art style <a href="https://github.com/evelynhathaway/pixel-sort">pixel sorting web application</a> that uses off the main thread scripting in React.</p>

				<h2><Emoji symbol="💼" label="Briefcase" /> I&apos;m currently working at...</h2>
				<p><strong>Blue Origin!</strong> <Emoji symbol="🚀" label="rocket" /><Emoji symbol="🌌" label="galaxy" /> I am developing customer-focused web applications. Previously, I also built a killer web app that manages high-performance computing jobs on AWS. <a href="https://www.linkedin.com/in/evelynhathaway">Learn more on my LinkedIn</a>.</p>

				<h2><Emoji symbol="🕗" label="Clock" /> Some interesting past work...</h2>
				<p>Adding strong TypeScript typings for <a href="https://github.com/evelynhathaway/bind-deep">Bind Deep</a>. <a href="https://twitter.com/eeveedev/status/1270210745788055552">The first draft was undoubtedly a challenge, but so worth it!</a></p>
				<p><a href="https://github.com/ceoss/will-mutate">Will Mutate</a> is a Babel plugin that alerts if a mutation event occurred on inputted objects — essentially, a silly version of TypeScript read-only types... but at runtime. And <a href="https://github.com/ceoss/will-mutate/blob/master/plugin/proxify.js">oh golly does it make use of ES6 Proxies</a>.</p>
			</div>
		</Container>
	);
}
