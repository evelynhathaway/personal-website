import React from "react";
import styles from "./styles.module.scss";

export default function Chip({slotThumbnail, text}) {
	return (
		<div className={styles.root}>
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
