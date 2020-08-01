import React from "react";
import "../../styles/global.scss";


export default function Layout ({children}: {children: React.ReactNode}): JSX.Element {
	return (
		// eslint-disable-next-line react/jsx-no-useless-fragment
		<>
			{children}
		</>
	);
}
