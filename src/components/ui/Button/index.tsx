import React from "react";
import clsx from "clsx";
import materialStyles from "../../../styles/material.module.scss";
import styles from "./styles.module.scss";


export {default as ButtonAnchor} from "./ButtonAnchor";
export {default as ButtonLink} from "./ButtonLink";

export interface ButtonProps {
	outline?: boolean;
	color?: "white" | "gray" | "grayDark" | "grayExtraDark" | "orange" | "blue" | "pink" | "lilac" | "mint" | "orangeDark" | "blueDark" | "pinkDark" | "lilacDark" | "mintDark" | "orangeExtraDark" | "blueExtraDark" | "pinkExtraDark" | "lilacExtraDark" | "mintExtraDark",
	shade?: "warm" | "cool" | "hot" | "fresh",
	raised?: boolean;
	className?: string;
	children: React.ReactNode;
}

export default function Button ({outline, color, shade, raised, className, children}: ButtonProps): JSX.Element {
	return (
		<div
			className={clsx(
				materialStyles.material,
				color && materialStyles[color || "white"],
				shade && materialStyles[`${shade}Shade` as "warmShade" | "coolShade" | "hotShade" | "freshShade"],
				raised && materialStyles.raised,
				styles.Button,
				outline && styles.outline,
				className,
			)}
		>
			{children}
		</div>
	);
}
