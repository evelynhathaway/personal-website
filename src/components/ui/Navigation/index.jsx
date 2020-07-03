import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import {ButtonAnchor} from "../Button";
import styles from "./styles.module.scss";


export default function Navigation ({center}) {
	return (
		// TODO: Use `<NavLink>`s, possible change the buttons to be composed with any component
		<nav
			aria-label="Main navigation" className={classNames(
				styles.Navigation,
				center && styles.center,
			)}
		>
			<span className={styles.navContainer}>
				<ButtonAnchor outline color="white" href="/work">Work</ButtonAnchor>
				<ButtonAnchor outline color="white" href="/blog">Blog</ButtonAnchor>
				<ButtonAnchor outline color="white" href="/about">About</ButtonAnchor>
				<ButtonAnchor outline color="white" href="/now">Now</ButtonAnchor>
				<ButtonAnchor outline color="white" href="/contact">Contact</ButtonAnchor>
			</span>
		</nav>
	);
}

Navigation.propTypes = {
	center: PropTypes.bool,
};
