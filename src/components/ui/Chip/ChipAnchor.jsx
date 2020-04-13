import React from "react";
import PropTypes from "prop-types";
import Chip from "./index";
import UnstyledAnchor from "../../utils/UnstyledAnchor";

export default function ChipAnchor({thumbnail, thumbnailSize, text, color, shade, className, ...anchorProps}) {
	return (
		<UnstyledAnchor {...anchorProps}>
			<Chip thumbnail={thumbnail} thumbnailSize={thumbnailSize} text={text} color={color} shade={shade} className={className}/>
		</UnstyledAnchor>
	);
}

ChipAnchor.propTypes = {
	thumbnail: PropTypes.node,
	thumbnailSize: PropTypes.oneOf(["full"]),
	text: PropTypes.node.isRequired,
	color: PropTypes.string,
	shade: PropTypes.string,
	className: PropTypes.string,
	anchorProps: PropTypes.any,
};
