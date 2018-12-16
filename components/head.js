import NextHead from "next/head";
import {string} from "prop-types";

const defaultDescription = "";
const defaultOGURL = "";
const defaultOGImage = "";

const Head = props => (
	<NextHead>
		<title>Evelyn Hathaway{props.title && ` - ${props.title}`}</title>
		<meta
			name="description"
			content={props.description || defaultDescription}
		/>
		<link rel="icon" sizes="192x192" href="/static/touch-icon.png"/>
		<link rel="apple-touch-icon" href="/static/touch-icon.png"/>
		<link rel="icon" href="/static/favicon.ico"/>
		<meta property="og:url" content={props.url || defaultOGURL}/>
		<meta property="og:title" content={props.title || ""}/>
		<meta
			property="og:description"
			content={props.description || defaultDescription}
		/>
		<meta name="twitter:site" content={props.url || defaultOGURL}/>
		<meta name="twitter:card" content="summary_large_image"/>
		<meta name="twitter:image" content={props.ogImage || defaultOGImage}/>
		<meta property="og:image" content={props.ogImage || defaultOGImage}/>
		<meta property="og:image:width" content="1200"/>
		<meta property="og:image:height" content="630"/>
		{props.children}
	</NextHead>
);

Head.propTypes = {
	title: string,
	description: string,
	url: string,
	ogImage: string,
};

export default Head;
