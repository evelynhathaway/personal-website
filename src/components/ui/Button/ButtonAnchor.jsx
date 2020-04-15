import React from "react";
import PropTypes from "prop-types";
import Button from "./index";
import UnstyledAnchor from "../../utils/UnstyledAnchor";

export default function ButtonAnchor({outline, color, shade, raised, active, className, children, ...anchorProps}) {
	return (
		<UnstyledAnchor {...anchorProps}>
			<Button outline={outline} color={color} shade={shade} raised={raised} className={className}>{children}</Button>
		</UnstyledAnchor>
	);
}

ButtonAnchor.propTypes = {
	outline: PropTypes.bool,
	color: PropTypes.string,
	shade: PropTypes.string,
	raised: PropTypes.bool,
	className: PropTypes.string,
	children: PropTypes.node,
	anchorProps: PropTypes.any,
};
