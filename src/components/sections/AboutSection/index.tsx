import React from "react";
import Emoji from "a11y-react-emoji";
import Container from "../../utils/Container";
// import styles from "./styles.module.scss";

export default function AboutSection (): JSX.Element {
	return (
		<Container>
			<h2>About</h2>
			<blockquote>
				<p>Welcome to my portfolio! I&apos;m happy you&apos;re here!</p>
				<p>I&apos;m a software engineer specializing in JavaScript and UI development. Currently, I&apos;m having a blast using React! <Emoji symbol="⚛" label="atom" /></p>
			</blockquote>

			<h3>Now</h3>
			{/* 8ukt68axbb0e.runkit.sh */}
			<p>I&apos;m a gal living it up in the Greater Seattle Area enjoying greenery and rain. I started a position as a software engineer at Blue Origin on May 4, 2020, where I am developing a killer web app that manages high-performance computing jobs on AWS. <Emoji symbol="🚀" label="rocket" /><Emoji symbol="🌌" label="galaxy" /></p>
			<p>Recently, I&apos;ve also stepped up my game on working on my side projects, but I would love a focus week to finish the Rocketry.js rewrite to TypeScript.</p>
		</Container>
	);
}
