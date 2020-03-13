// Palette colors from lightest to darkest
import * as colors from "../../utils/colors";

// Convert type for easy scripting, remove lightest and darkest colors
const mapToTrimmedArray = (map) => [...map.values()].slice(1, -1);
const oranges = mapToTrimmedArray(colors.orange);
const blues = mapToTrimmedArray(colors.blue);

// User agent character codes to be used for color generation
// - To whomever is reading my code, isn't it a lovely easter egg?
// - Also, this is a way to get noise that prevents flashing since it is preserved in memory and wraps
const userAgent = typeof navigator === "undefined" ? "Gatsby SSR" : navigator.userAgent;
const charCodes = userAgent.split("").map(c => c.charCodeAt(0));
charCodes.min = Math.min(...charCodes);
charCodes.max = Math.max(...charCodes);
charCodes.diff = charCodes.max - charCodes.min;

export const render = function ({width, height, scale, canvasElement, canvasContext}) {
	// 60px tiles on small screens, 80px tiles on large
	const tileSize = width >= 600 ? 80 : 40;
	// The number of tile columns (horizontal space)
	// - The space needed to fill the width of the document with tiles
	const columns = Math.ceil(width / tileSize);
	// The number of tile rows (vertical space)
	const rows = Math.ceil(height / tileSize);
	// Negative offset for centering the elements in the canvas
	const horizontalOffset = - ((tileSize * columns) - width) / 2;
	const verticalOffset = - ((tileSize * rows) - height) / 2;

	// Canvas height, width, scale
	canvasElement.width = width * scale;
	canvasElement.height = rows * tileSize * scale;
	canvasContext.scale(scale, scale);

	// Is blue when above the line from (0, 0) to (lastRow, lastColumn)
	// `+ 0.5` is used to give it a visual apearence as if the line is drawn from the center of the element
	const isBlue = (x, y) => (y + 0.5) < ((rows / columns) * (x + 0.5));

	// Draw tiles in an (x, y) grid
	for (let x = 0; x < columns; x++) {
		for (let y = 0; y < rows; y++) {
			// Color
			// Get character code to find a color
			const charCode = charCodes[
				// From coordinates, make the UA repeating pattern
				(x * rows + y) % charCodes.length
			];

			// Get a color from either the blues or oranges
			const color = (isBlue(x, y) ? blues : oranges)[
				// Floor for index accessing, prefer lighter colors
				Math.floor(
					(
						// Bring the charCode range down to zero to work with easier
						charCode - charCodes.min
					) / (
						// Evenly split the range into each possible color
						(charCodes.diff + 1) / oranges.length
					)
				)
			];

			// Canvas commands
			canvasContext.fillStyle = color; // Color from UA
			canvasContext.fillRect(
				x * tileSize + horizontalOffset,
				y * tileSize + verticalOffset,
				tileSize + 1,
				tileSize + 1
			);
		}
	}
};
