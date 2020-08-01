import React from "react";
import UnstyledAnchor from "../../utils/UnstyledAnchor";
import Button, {ButtonProps} from "./index";


export interface ButtonAnchorProps extends ButtonProps, Omit<React.ComponentPropsWithoutRef<"a">, "children" | "color"> {}

export default function ButtonAnchor ({outline, color, shade, raised, className, children, ...anchorProps}: ButtonAnchorProps): JSX.Element {
	return (
		<UnstyledAnchor {...anchorProps}>
			<Button outline={outline} color={color} shade={shade} raised={raised} className={className}>{children}</Button>
		</UnstyledAnchor>
	);
}
