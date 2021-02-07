import clsx from "clsx";
import {GatsbyLinkProps, Link} from "gatsby";
import React from "react";
import styles from "../../utils/UnstyledAnchor/styles.module.scss";
import Button, {ButtonProps} from "./index";


export interface ButtonLinkProps extends ButtonProps, Omit<GatsbyLinkProps<unknown>, "ref" | "children" | "color"> {}

export default function ButtonLink ({outline, color, shade, raised, className, children, ...linkProps}: ButtonLinkProps): JSX.Element {
	return (
		<Link className={clsx(styles.UnstyledAnchor, className)} {...linkProps}>
			<Button outline={outline} color={color} shade={shade} raised={raised}>{children}</Button>
		</Link>
	);
}
