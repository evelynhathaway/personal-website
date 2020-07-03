import React from "react";
import PropTypes from "prop-types";
import "../../styles/global.scss";


export default function Layout ({children}) {
	return (
		// eslint-disable-next-line react/jsx-no-useless-fragment
		<>
			{children}
		</>
	);
}

Layout.propTypes = {
	children: PropTypes.node.isRequired,
};
