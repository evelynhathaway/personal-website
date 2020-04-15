import React from "react";
import Layout from "../components/utils/Layout";
import SEO from "../components/utils/SEO";
import TilesSection from "../components/sections/TilesSection";
import AboutSection from "../components/sections/AboutSection";


export default function IndexPage () {
	return (
		<Layout>
			<SEO title="Home"/>
			<main>
				<TilesSection/>
				<AboutSection/>
				{/* <ProjectsSection/> */}
			</main>
		</Layout>
	);
}
