import React from "react";
import UnstyledAnchor from "../../utils/UnstyledAnchor";
import Chip, {ChipProps} from "./index";


export interface ChipAnchorProps extends ChipProps, Omit<React.ComponentPropsWithoutRef<"a">, "children" | "color"> {}

export default function ChipAnchor ({thumbnail, thumbnailSize, text, color, shade, raised, className, ...anchorProps}: ChipAnchorProps): JSX.Element {
	return (
		<UnstyledAnchor {...anchorProps}>
			<Chip thumbnail={thumbnail} thumbnailSize={thumbnailSize} text={text} color={color} shade={shade} raised={raised} className={className}/>
		</UnstyledAnchor>
	);
}
