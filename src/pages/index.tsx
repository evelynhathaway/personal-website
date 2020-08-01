import React from "react";
import ProjectsSection from "../components/sections/ProjectsSection";
import TilesSection from "../components/sections/TilesSection";
import Layout from "../components/utils/Layout";
import SEO from "../components/utils/SEO";


export default function IndexPage (): JSX.Element {
	return (
		<Layout>
			<SEO title="Home"/>
			<header>
				<TilesSection/>
			</header>
			<main>
				<ProjectsSection/>
			</main>
		</Layout>
	);
}
