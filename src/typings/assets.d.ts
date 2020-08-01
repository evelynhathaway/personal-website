declare module "*.inline.svg" {
	import {HTMLAttributes} from "react";
	const value: React.ComponentType<HTMLAttributes<SVGElement>>;
	export default value;
}


declare module "*.svg" {
	const content: string;
	export default content;
}

declare module "*.png" {
	const content: string;
	export default content;
}
