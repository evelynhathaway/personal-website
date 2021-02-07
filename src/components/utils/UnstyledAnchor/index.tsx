import React from "react";
import clsx from "clsx";
import styles from "./styles.module.scss";

/*
	Warning: Use sparingly!
	- Unstyling links can have unintended side effects for accessibility and usability. Use only for components that are visually clickable.
	- Examples: Links for buttons, chips, cards, etc.
*/

export default function UnstyledAnchor ({className, ...otherProps}: React.ComponentPropsWithoutRef<"a">): JSX.Element {
	return (
		// eslint-disable-next-line jsx-a11y/anchor-has-content
		<a className={clsx(styles.UnstyledAnchor, className)} {...otherProps}/>
	);
}
