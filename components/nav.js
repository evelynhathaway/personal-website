import Link from "next/link";
import PropTypes, {string} from "prop-types";
import {withStyles} from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";


const links = [
	{href: "/", label: "Home"},
	{href: "/about", label: "About"},
].map(link => {
	link.key = `nav-link-${link.href}-${link.label}`
	return link
});

const styles = {
	root: {
		flexGrow: 1,
	},
	toolbar: {
		flexDirection: "row",
		justifyContent: "flex-end",
	},
	active: {
		backgroundColor: "rgba(0, 0, 0, 0.1)",
	},
	button: {
		textTransform: "uppercase",
	},
};

const Nav = (props) => {
	const {classes, is} = props;

	return (
		<nav className={classes.root}>
			<Toolbar className={classes.toolbar}>
				{links.map(({key, href, label}) => {
					let className;
					if (is === label) {
						className = classes.active;
					}

					return (
						<Link key={key} href={href} prefetch>
							<Button component="a" color="inherit" className={className}>{label}</Button>
						</Link>
					);
				})}
			</Toolbar>
		</nav>
	);
};

Nav.propTypes = {
	classes: PropTypes.object.isRequired,
	is: PropTypes.string,
};

export default withStyles(styles)(Nav);
