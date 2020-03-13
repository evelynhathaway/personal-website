import Typography from "typography";

const typography = new Typography(
	{
		// Match against typography.scss
		baseLineHeight: 1.7,
		headerWeight: 900,
		headerFontFamily: ["Gilroy", "Manrope", "Arial", "sans-serif"],
		bodyFontFamily: ["Manrope", "Helvetica", "Arial", "sans-serif"],
	},
);

export default typography;
