import React from "react";
import classNames from "classnames";
import styles from "./styles.module.scss";
import materialStyles from "../../../styles/material.module.scss";

export default function Chip({thumbnail, thumbnailSize, text, color, shade, className}) {
	return (
		<div className={
			classNames(
				materialStyles.material,
				color && materialStyles[color || "white"],
				shade && materialStyles[`${shade}Shade`],
				styles.Chip,
				className,
			)
		}>
			{/* Add image/icon if there is one */}
			{thumbnail && (
				<span className={
					classNames(
						styles.thumbnail,
						thumbnailSize === "full" && styles.fullSize,
					)}>
					{thumbnail}
				</span>
			)}
			<span className={styles.text}>
				{text}
			</span>
		</div>
	);
}
