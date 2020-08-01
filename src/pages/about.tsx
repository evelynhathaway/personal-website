import React from "react";
import AboutSection from "../components/sections/AboutSection";
import Navigation from "../components/ui/Navigation";
import Layout from "../components/utils/Layout";
import SEO from "../components/utils/SEO";


export default function AboutPage (): JSX.Element {
	return (
		<Layout>
			<SEO title="About" />
			<header>
				<Navigation />
			</header>
			<main>
				<AboutSection/>
			</main>
		</Layout>
	);
}
