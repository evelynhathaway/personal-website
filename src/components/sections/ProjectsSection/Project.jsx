import React, {useState, useRef} from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import GitHubIcon from "../../../assets/images/icons/github.inline.svg";
import materialStyles from "../../../styles/material.module.scss";
import Icon from "../../ui/Icon";
import UnstyledAnchor from "../../utils/UnstyledAnchor";
import styles from "./styles.module.scss";


export default function Project ({
	iconProject,
	overlayColor,
	link,
	title,
	description,
	image,
}) {
	const descriptionRef = useRef();
	const [isHovered, setIsHovered] = useState(false);
	const [isFocused, setIsFocused] = useState(false);
	const [isTouched, setIsTouched] = useState(false);

	const hover = setIsHovered.bind(undefined, true);
	const unhover = setIsHovered.bind(undefined, false);
	const focus = setIsFocused.bind(undefined, true);
	const unfocus = setIsFocused.bind(undefined, false);
	const touch = setIsTouched.bind(undefined, true);
	const untouch = setIsTouched.bind(undefined, false);

	return (
		<UnstyledAnchor
			href={link}
			target="_blank"
			rel="noopener noreferrer"
			onFocus={focus}
			onBlur={unfocus}
			onMouseEnter={hover}
			onMouseLeave={unhover}
			onTouchStart={touch}
			onTouchEnd={untouch}
			className={classNames(
				materialStyles.material,
				materialStyles.raised,
				materialStyles.whiteShade,
				overlayColor && styles[overlayColor],
				styles.card,
				iconProject && styles.iconProject,
				(isHovered || isFocused || isTouched) && styles.isHover,
			)}
		>
			<article>
				<div className={styles.overlay}>
					<p className={classNames(styles.overlayText, styles.viewOn)}>
						<Icon svg={<GitHubIcon />} />
						<span>View on GitHub</span>
					</p>
					<h3 className={styles.overlayText}>{title}</h3>
					<p
						className={styles.overlayText}
						ref={descriptionRef}
						style={isHovered || isFocused || isTouched ? {
							marginBottom: -descriptionRef.current.getBoundingClientRect().height - 12,
						} : undefined}
					>
						{description}
					</p>
				</div>

				<div className={styles.image}>{image}</div>
			</article>
		</UnstyledAnchor>
	);
}


Project.propTypes = {
	iconProject: PropTypes.bool,
	overlayColor: PropTypes.string.isRequired,
	link: PropTypes.string.isRequired,
	title: PropTypes.node.isRequired,
	description: PropTypes.node.isRequired,
	image: PropTypes.node.isRequired,
};
