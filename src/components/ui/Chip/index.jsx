import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import materialStyles from "../../../styles/material.module.scss";
import styles from "./styles.module.scss";


export {default as ChipAnchor} from "./ChipAnchor";

export default function Chip ({thumbnail, thumbnailSize, text, color, shade, raised, className}) {
	return (
		<div
			className={classNames(
				materialStyles.material,
				color && materialStyles[color || "white"],
				shade && materialStyles[`${shade}Shade`],
				raised && materialStyles.raised,
				styles.Chip,
				className,
			)}
		>
			{/* Add image/icon if there is one */}
			{thumbnail && (
				<span
					className={classNames(
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

Chip.propTypes = {
	thumbnail: PropTypes.node,
	thumbnailSize: PropTypes.oneOf(["full"]),
	text: PropTypes.node.isRequired,
	color: PropTypes.string,
	shade: PropTypes.string,
	raised: PropTypes.bool,
	className: PropTypes.string,
};
