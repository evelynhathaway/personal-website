const white = "#FFFFFF";
const oranges = [
	"#FEC3A6",
	"#FDA679",
	"#FD884D",
	"#FF7D3D",
	"#FC6A20",
	"#BD5018",
	"#7E3510",
];
const blues = [
	"#D9F7FF",
	"#B2EFFF",
	"#8CE8FF",
	"#65E0FF",
	"#3FD8FF",
	"#2FA2BF",
	"#206C80",
];


const ua = navigator.userAgent;
const charCodesFromUA = ua.split("").map(c => c.charCodeAt(0));
const min = Math.min(...charCodesFromUA);
const max = Math.max(...charCodesFromUA);
const diff = max - min;

// const {availWidth, availHeight} = window.screen;
const {innerWidth, innerHeight} = window;

// 25% of the window height plus a tile worthof spacing on either side (TODO: small height on far screens, i.e. small window)
// 60px tiles on mobile, 80px tiles on desktop, should switch to isMobile the same time the navbar, banner, etc. does
isMobile = true;
const tileSize = isMobile ? 60 : 80;
const tiles = Array(Math.ceil(innerWidth / tileSize)).fill(Array(Math.ceil(innerHeight * 0.25 / tileSize) + 2).fill());

tiles.forEach((column, x) => column.forEach((tile, y) => {
	column[y] = tile = document.createElement("div");

	// Position
	tile.style.position = "absolute";
	tile.style.left = `${x * tileSize}px`;
	tile.style.top = `${y * tileSize}px`;
	tile.style.width = `${tileSize}px`;
	tile.style.height = `${tileSize}px`;

	// Color
	const at = (x * column.length + y) % charCodesFromUA.length;
	const num = charCodesFromUA[at];
	tile.title = `${String.fromCharCode(num)} ${(num-min)/ (diff / oranges.length)} ${num}`;
	tile.style.backgroundColor = oranges[Math.floor((num - min) / ((diff + 1) / oranges.length))];

	document.body.appendChild(tile);
}));
