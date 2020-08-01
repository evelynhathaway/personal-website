import React from "react";
import Navigation from "../Navigation";
import styles from "./styles.module.scss";


export interface HeaderProps {
	title: string;
}

export default function Header ({title}: HeaderProps): JSX.Element {
	return (
		<header className={styles.Header}>
			{/* Picture */}
			{title}
			<Navigation />
		</header>
	);
}
