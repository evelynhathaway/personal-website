import React from "react";
import Navigation from "../components/ui/Navigation";
import Layout from "../components/utils/Layout";
import SEO from "../components/utils/SEO";


export default function WorkPage (): JSX.Element {
	return (
		<Layout>
			<SEO title="Work" />
			<header>
				<Navigation />
			</header>
			<main />
		</Layout>
	);
}
