import React from "react";
import classNames from "classnames";
import styles from "./styles.module.scss";

export default function Icon({icon, label, style}) {
	label = label || icon.replace(/_/g, " ");
	return (
		<span className={styles.icon} aria-label={label}>{icon}</span>
	);
}
