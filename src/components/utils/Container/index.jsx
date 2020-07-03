import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.module.scss";


export default function Container ({children}) {
	return (
		<div className={styles.Container}>
			<div className={styles.inner}>
				{children}
			</div>
		</div>
	);
}

Container.propTypes = {
	children: PropTypes.node.isRequired,
};
