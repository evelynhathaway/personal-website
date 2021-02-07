import clsx from "clsx";
import React from "react";
import styles from "./styles.module.scss";

export interface ContainerProps {
	className?: string;
	children: React.ReactNode;
}

export default function Container ({children, className}: ContainerProps): JSX.Element {
	return (
		<div className={clsx(styles.Container, className)}>
			<div className={styles.inner}>
				{children}
			</div>
		</div>
	);
}
