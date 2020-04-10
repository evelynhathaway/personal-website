import React from "react";
import classNames from "classnames";
import styles from "./styles.module.scss";

export default function Chip({slotThumbnail, text, shade, className}) {
	return (
		<div className={
			classNames(
				styles.Chip,
				shade && styles[shade],
				className,
			)
		}>
			<span className={styles.thumbnail}>
				{/* Add image/icon if there is one */}
				{slotThumbnail ? slotThumbnail : ""}
			</span>
			<span className={styles.text}>
				{text}
			</span>
		</div>
	);
}
