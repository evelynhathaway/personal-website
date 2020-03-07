import {withStyles} from "@material-ui/core/styles";

const styles = {
	banner: {
		position: "absolute",
		top: 0,
		left: 0,
		right: 0,
		zIndex: -1,
		imageRendering: "-moz-crisp-edges",
		imageRendering: "-webkit-crisp-edges",
		imageRendering: "pixelated",
		imageRendering: "-webkit-optimize-contrast",
		imageRendering: "crisp-edges",
		width: "100%",
		display: "block",
	},
};

const Tiles = (props) => {
	const {classes} = props;
	return (
		<canvas className={classes.banner}></canvas>
	);
};

export default withStyles(styles)(Tiles);
