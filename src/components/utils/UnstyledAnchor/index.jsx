import React from "react";
import styles from "./styles.module.scss";

/*
	Warning: Use sparingly!
	- Unstyling links can have unintended side effects for accessiblity and usability. Use only for components that are visually clickable.
	- Examples: Links for buttons, chips, cards, etc.
*/

export default function UnstyledAnchor (props) {
	return (
		// eslint-disable-next-line jsx-a11y/anchor-has-content
		<a className={styles.UnstyledAnchor} {...props}/>
	);
}
