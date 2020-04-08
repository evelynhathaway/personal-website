import React from "react";
import classNames from "classnames";
import styles from "./styles.module.scss";

export default function Icon({icon, label, className}) {
	label = label || icon.replace(/_/g, " ");
	return (
		<span className={classNames(
			styles.Icon,
			className,
		)} aria-label={label}>{icon}</span>
	);
}
