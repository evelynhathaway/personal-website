import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import styles from "./styles.module.scss";
import materialStyles from "../../../styles/material.module.scss";

export {default as ButtonAnchor} from "./ButtonAnchor";

export default function Button({outline, color, shade, raised, className, children}) {
	return (
		<div className={
			classNames(
				materialStyles.material,
				color && materialStyles[color || "white"],
				shade && materialStyles[`${shade}Shade`],
				raised && materialStyles.raised,
				styles.Button,
				outline && styles.outline,
				className,
			)
		}>
			{children}
		</div>
	);
}

Button.propTypes = {
	outline: PropTypes.bool,
	color: PropTypes.string,
	shade: PropTypes.string,
	raised: PropTypes.bool,
	className: PropTypes.string,
	children: PropTypes.node,
};
