import React from "react";
import styles from "./styles.module.scss";

/*
	Warning: Use sparingly!
	- Unstyling links can have unintended side effects for accessiblity and usability. Use only for components that are visually clickable.
	- Examples: Links for buttons, chips, cards, etc.
*/

export default function UnstyledAnchor(props) {
	return (
		<a className={styles.UnstyledAnchor} {...props}/>
	);
}
