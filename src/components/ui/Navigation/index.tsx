import React from "react";
import clsx from "clsx";
import {ButtonLink} from "../Button";
import styles from "./styles.module.scss";
import {useLocation} from "@reach/router";


export interface NavigationProps {
	center?: boolean;
}

export default function Navigation ({center}: NavigationProps): JSX.Element {
	const location = useLocation();

	const isOnHome = location.pathname === "/";
	const isOnAbout = location.pathname === "/about";

	return (
		<nav
			aria-label="Main" className={clsx(
				styles.Navigation,
				center && styles.center,
			)}
		>
			<span className={styles.navContainer}>
				<ButtonLink outline={isOnHome} color="white" to="/">Home</ButtonLink>
				<ButtonLink outline={isOnAbout} color="white" to="/about">About</ButtonLink>
			</span>
		</nav>
	);
}
