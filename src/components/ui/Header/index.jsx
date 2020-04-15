import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.module.scss";
import Navigation from "../Navigation";

export default function Header({title}) {
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
