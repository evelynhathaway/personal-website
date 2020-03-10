import React from "react";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import TilesSection from "../components/sections/TilesSection";
import AboutSection from "../components/sections/AboutSection";


export default function IndexPage () {
	return (
		<Layout>
			<SEO title="Home"/>
			<main>
				<TilesSection/>
				{/* <Navigation/> */}
				<AboutSection/>
				{/* <ProjectsSection/> */}
			</main>
		</Layout>
	);
}
