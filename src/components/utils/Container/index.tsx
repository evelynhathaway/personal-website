import React from "react";
import styles from "./styles.module.scss";


export default function Container ({children}: {children: React.ReactNode}): JSX.Element {
	return (
		<div className={styles.Container}>
			<div className={styles.inner}>
				{children}
			</div>
		</div>
	);
}
