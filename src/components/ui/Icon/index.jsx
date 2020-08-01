import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import styles from "./styles.module.scss";


export default function Icon ({material, svg, label, decorative, className}) {
	label = label || material?.replace(/_/g, " ");
	return (
		<span
			className={classNames(
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

Icon.propTypes = {
	material: PropTypes.string,
	svg: PropTypes.string,
	label: PropTypes.string,
	className: PropTypes.string,
};
