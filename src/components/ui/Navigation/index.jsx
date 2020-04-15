import React, {useRef} from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import styles from "./styles.module.scss";
import {ButtonAnchor} from "../Button";

export default function Navigation({center}) {
	return (
		// TODO: Use `<Link>`s, possible change the buttons to be composed with any component
		<nav aria-label="Main navigation" className={classNames(
			styles.Navigation,
			center && styles.center,
		)}>
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
