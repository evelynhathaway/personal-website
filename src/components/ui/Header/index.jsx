import React from "react";
import PropTypes from "prop-types";
import Navigation from "../Navigation";
import styles from "./styles.module.scss";


export default function Header ({title}) {
	return (
		<header className={styles.Header}>
			{/* Picture */}
			{title}
			<Navigation />
		</header>
	);
}

Header.propTypes = {
	title: PropTypes.string,
};
