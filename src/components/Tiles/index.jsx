import React, {useEffect, useState} from "react";
import classNames from "classnames";
import styles from "./styles.module.scss";
import Worker from "./offscreenCanvas.worker";
import {render} from "./render";


const setUpCanvas = function ({current: canvasElement}, {current: containerElement}, setRendered) {
	const hasOffscreen = "OffscreenCanvas" in window;
	let worker, offscreenCanvas, canvasContext;
	if (hasOffscreen) {
		// Transfer to a worker if there is support to handle off the main thread
		worker = new Worker();
		offscreenCanvas = canvasElement.transferControlToOffscreen();
		worker.postMessage({offscreenCanvas}, [offscreenCanvas]);
	} else {
		// New canvas context, allow alpha for initial styles
		canvasContext = canvasElement.getContext("2d");
	}


	const renderHandoff = function () {
		// Using `getBoundingClientRect` and styling the parent element to have a height of 100% instead of `clientHeight` for extra precision.
		// - This helps with sub-pixel issues.
		const {width, height} = containerElement.getBoundingClientRect();

		// Canvas scale from devicepixel:csspixel
		// - Can change on zoom or when moved between screens, see the resize event listener
		const scale = window.devicePixelRatio;

		// Call render function in worker or on the main thread
		hasOffscreen ? worker.postMessage({width, height, scale}) :
			render({width, height, scale, canvasElement, canvasContext});
	};
	const initialRender = function () {
		// Start the rendering process
		renderHandoff();
		// Rerender the component with classname to make visable
		setRendered(true);
	};

	// Trigger on page load
	// - Won't have scrollbar which may cause a jump
	//	or subpixel issues (mitigated by `tileSize + 1`)
	// initialRender();

	// Trigger on window resized, zoomed, device rotated, moved to another screens, etc.
	// - `requestAnimationFrame` delays the call by ~0.5ms on x6 slow down on a clean environment but may improve the performance when multiple resize events occur at once. This occurance is rare since `render()` is quicker than a layout reflow, which occurs after requesting the frame, but I still want to protect against this edge case.
	// - I can't pinpoint any negative effects because the system must already be impacted to be noticable (e.g. large canvas, x6 CPU slowdown, no offscreencanvas, and a lot of other tabs in the same process), and even then V8 optimises the calls very quickly
	// - Basically, the reflow from all of the responsive styles of other elements have a larger impact than this component
	// If you have more information on the performance of this component, I'd love to chat :D
	window.addEventListener("resize", () => requestAnimationFrame(renderHandoff));

	// Trigger on DOM content loaded (interactive DOM, not all resources)
	// - Allows scrollbar to be included in the calculations in most cases
	if (document.readyState === "loading") {
		// Loading hasn't finished yet
		document.addEventListener("DOMContentLoaded", initialRender);
	} else {
		// `DOMContentLoaded` has already fired
		initialRender();
	}

	// Tripper after all resources (fonts, styles, images) are loaded for the last initial paint
	// - In case a layout update occurred after the first-to-the-punch `DOMContentLoaded`
	if (document.readyState !== "complete") {
		// Loading hasn't finished yet
		window.addEventListener("load", renderHandoff);
	}
};


export default function Tiles () {
	// Create ref for canvas
	const canvasRef = React.createRef();
	const containerRef = React.createRef();

	// Store rendered state for making the element visable
	const [rendered, setRendered] = useState(false);
	// Setup canvas on first render
	useEffect(() => setUpCanvas(canvasRef, containerRef, setRendered), []);

	return (
		<div className={styles.Tiles} ref={containerRef}>
			<canvas className={
				classNames(
					styles.canvas,
					rendered && styles.rendered
				)
			} ref={canvasRef} role="presentation"></canvas>
		</div>
	);
}
