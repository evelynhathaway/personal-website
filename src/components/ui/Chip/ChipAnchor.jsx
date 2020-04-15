import React from "react";
import PropTypes from "prop-types";
import Chip from "./index";
import UnstyledAnchor from "../../utils/UnstyledAnchor";

export default function ChipAnchor({thumbnail, thumbnailSize, text, color, shade, raised, className, ...anchorProps}) {
	return (
		<UnstyledAnchor {...anchorProps}>
			<Chip thumbnail={thumbnail} thumbnailSize={thumbnailSize} text={text} color={color} shade={shade} raised={raised} className={className}/>
		</UnstyledAnchor>
	);
}

ChipAnchor.propTypes = {
	thumbnail: PropTypes.node,
	thumbnailSize: PropTypes.oneOf(["full"]),
	text: PropTypes.node.isRequired,
	color: PropTypes.string,
	shade: PropTypes.string,
	raised: PropTypes.bool,
	className: PropTypes.string,
	anchorProps: PropTypes.any,
};
