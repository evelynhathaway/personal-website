import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import {withStyles} from "@material-ui/core/styles";
import Link from "next/link";


const styles = theme => ({
	root: {
		textAlign: "center",
	},
});

function About(props) {
	const {classes} = props;

	return (
		<div className={classes.root}>
			<Typography variant="h4" gutterBottom>
				Material-UI
			</Typography>
			<Typography variant="subtitle1" gutterBottom>
				about page
			</Typography>
			<Typography gutterBottom>
				<Link href="/">
					<a>Go to the main page</a>
				</Link>
			</Typography>
			<Typography gutterBottom>
				<Link href="/hello">
					<a>Go to the MDX hello page</a>
				</Link>
			</Typography>
			<Button variant="contained" color="primary">
				Do nothing button
			</Button>
		</div>
	);
}

About.headProps = {
	title: "About",
};

About.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(About);
