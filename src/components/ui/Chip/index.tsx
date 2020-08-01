import React from "react";
import clsx from "clsx";
import materialStyles from "../../../styles/material.module.scss";
import styles from "./styles.module.scss";


export {default as ChipAnchor} from "./ChipAnchor";

export interface ChipProps {
	thumbnail?: React.ReactNode,
	thumbnailSize?: "normal" | "full",
	text: React.ReactNode,
	color?: "white" | "gray" | "grayDark" | "grayExtraDark" | "orange" | "blue" | "pink" | "lilac" | "mint" | "orangeDark" | "blueDark" | "pinkDark" | "lilacDark" | "mintDark" | "orangeExtraDark" | "blueExtraDark" | "pinkExtraDark" | "lilacExtraDark" | "mintExtraDark",
	shade?: "warm" | "cool" | "hot" | "fresh",
	raised?: boolean,
	className?: string,
}

export default function Chip ({thumbnail, thumbnailSize, text, color, shade, raised, className}: ChipProps): JSX.Element {
	return (
		<div
			className={clsx(
				materialStyles.material,
				color && materialStyles[color || "white"],
				shade && materialStyles[`${shade}Shade` as "warmShade" | "coolShade" | "hotShade" | "freshShade"],
				raised && materialStyles.raised,
				styles.Chip,
				className,
			)}
		>
			{/* Add image/icon if there is one */}
			{thumbnail && (
				<span
					className={clsx(
						styles.thumbnail,
						thumbnailSize === "full" && styles.fullSize,
					)}
				>
					{thumbnail}
				</span>
			)}
			<span className={styles.text}>
				{text}
			</span>
		</div>
	);
}
