import React from "react";
import AboutSection from "../components/sections/AboutSection";
import ProjectsSection from "../components/sections/ProjectsSection";
import TilesSection from "../components/sections/TilesSection";
import Layout from "../components/utils/Layout";
import SEO from "../components/utils/SEO";


export default function IndexPage () {
	return (
		<Layout>
			<SEO title="Home"/>
			<main>
				<TilesSection/>
				<AboutSection/>
				<ProjectsSection/>
			</main>
		</Layout>
	);
}
