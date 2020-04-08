import React from "react";
import classNames from "classnames";
import styles from "./styles.module.scss";

export default function Icon({material, svg, label, className}) {
	label = label || material?.replace(/_/g, " ");
	return (
		<span
			className={classNames(
				styles.Icon,
				material && styles.material,
				className,
			)}
			aria-label={label}
		>
			{material || <svg viewBox="0 0 24 24"><path fill="currentColor" d={svg}/></svg>}
		</span>
	);
}
