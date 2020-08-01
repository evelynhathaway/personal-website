import React from "react";
import clsx from "clsx";
import {ButtonAnchor} from "../Button";
import styles from "./styles.module.scss";


export interface NavigationProps {
	center?: boolean;
}

export default function Navigation ({center}: NavigationProps): JSX.Element {
	return (
		// TODO: Use `<NavLink>`s, possible change the buttons to be composed with any component
		<nav
			aria-label="Main navigation" className={clsx(
				styles.Navigation,
				center && styles.center,
			)}
		>
			<span className={styles.navContainer}>
				<ButtonAnchor outline color="white" href="/">Home</ButtonAnchor>
				<ButtonAnchor outline color="white" href="/about">About</ButtonAnchor>
				<ButtonAnchor outline color="white" href="/blog">Blog</ButtonAnchor>
				<ButtonAnchor outline color="white" href="/work">Work</ButtonAnchor>
			</span>
		</nav>
	);
}
