import React from "react";
import Layout from "../components/utils/Layout";
import SEO from "../components/utils/SEO";
import TilesSection from "../components/sections/TilesSection";
import AboutSection from "../components/sections/AboutSection";
import Navigation from "../components/ui/Navigation";


export default function IndexPage () {
	return (
		<Layout>
			<SEO title="Home"/>
			<main>
				<TilesSection/>
				<Navigation center/>
				<AboutSection/>
				{/* <ProjectsSection/> */}
			</main>
		</Layout>
	);
}
