import React from "react";
import Navigation from "../components/ui/Navigation";
import Layout from "../components/utils/Layout";
import SEO from "../components/utils/SEO";


export default function BlogPage (): JSX.Element {
	return (
		<Layout>
			<SEO title="Blog" />
			<header>
				<Navigation />
			</header>
			<main />
		</Layout>
	);
}
