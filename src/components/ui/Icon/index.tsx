import React from "react";
import clsx from "clsx";
import styles from "./styles.module.scss";


export interface IconProps {
	material?: string;
	svg?: React.ReactNode;
	label?: string;
	decorative?: boolean;
	className?: string;
}

export default function Icon ({material, svg, label, decorative, className}: IconProps): JSX.Element {
	label = label || material?.replace(/_/g, " ");
	return (
		<span
			className={clsx(
				styles.Icon,
				material && styles.material,
				className,
			)}
			aria-label={label}
			role="img"
			aria-hidden={decorative}
		>
			{material || svg}
		</span>
	);
}
