const Tiles = (props) => {
	return (
		<div style={{position: "absolute", top: 0, left: 0, right: 0, zIndex: -1}}>
			<style jsx>{`
				svg {shape-rendering: crispedges; x: 0px; y: 0px;}
				rect {transition: fill 2s ease-in;}
				.w {fill: #FFFFFF;}
				.o1 {fill: #FEC3A6;}
				.o2 {fill: #FDA679;}
				.o3 {fill: #FD884D;}
				.o4 {fill: #FF7D3D;}
				.o5 {fill: #FC6A20;}
				.o6 {fill: #BD5018;}
				.o7 {fill: #7E3510;}
				.b1 {fill: #D9F7FF;}
				.b2 {fill: #B2EFFF;}
				.b3 {fill: #8CE8FF;}
				.b4 {fill: #65E0FF;}
				.b5 {fill: #3FD8FF;}
				.b6 {fill: #2FA2BF;}
				.b7 {fill: #206C80;}
			`}</style>
			<svg viewBox="0 0 192 192">
				<rect height="12" width="12" x="180" y="180" className="o4"/>
				<rect height="12" width="12" x="180" y="168" className="o4"/>
				<rect height="12" width="12" x="180" y="156" className="o1"/>
				<rect height="12" width="12" x="180" y="144" className="b3"/>
				<rect height="12" width="12" x="180" y="132" className="b5"/>
				<rect height="12" width="12" x="180" y="120" className="w"/>
				<rect height="12" width="12" x="180" y="108" className="b4"/>
				<rect height="12" width="12" x="180" y="96" className="b2"/>
				<rect height="12" width="12" x="180" y="84" className="b4"/>
				<rect height="12" width="12" x="180" y="72" className="b6"/>
				<rect height="12" width="12" x="180" y="60" className="b5"/>
				<rect height="12" width="12" x="180" y="48" className="b5"/>
				<rect height="12" width="12" x="180" y="36" className="w"/>
				<rect height="12" width="12" x="180" y="24" className="b4"/>
				<rect height="12" width="12" x="180" y="12" className="b5"/>
				<rect height="12" width="12" x="180" className="b2"/>
				<rect height="12" width="12" x="168" y="180" className="w"/>
				<rect height="12" width="12" x="168" y="168" className="o4"/>
				<rect height="12" width="12" x="168" y="156" className="o2"/>
				<rect height="12" width="12" x="168" y="144" className="w"/>
				<rect height="12" width="12" x="168" y="132" className="b3"/>
				<rect height="12" width="12" x="168" y="120" className="b5"/>
				<rect height="12" width="12" x="168" y="108" className="w"/>
				<rect height="12" width="12" x="168" y="96" className="b2"/>
				<rect height="12" width="12" x="168" y="84" className="b5"/>
				<rect height="12" width="12" x="168" y="72" className="b7"/>
				<rect height="12" width="12" x="168" y="60" className="b5"/>
				<rect height="12" width="12" x="168" y="48" className="b6"/>
				<rect height="12" width="12" x="168" y="36" className="b7"/>
				<rect height="12" width="12" x="168" y="24" className="b5"/>
				<rect height="12" width="12" x="168" y="12" className="w"/>
				<rect height="12" width="12" x="168" className="b5"/>
				<rect height="12" width="12" x="156" y="180" className="o4"/>
				<rect height="12" width="12" x="156" y="168" className="o6"/>
				<rect height="12" width="12" x="156" y="156" className="o7"/>
				<rect height="12" width="12" x="156" y="144" className="w"/>
				<rect height="12" width="12" x="156" y="132" className="o4"/>
				<rect height="12" width="12" x="156" y="120" className="b3"/>
				<rect height="12" width="12" x="156" y="108" className="b4"/>
				<rect height="12" width="12" x="156" y="96" className="w"/>
				<rect height="12" width="12" x="156" y="84" className="w"/>
				<rect height="12" width="12" x="156" y="72" className="b5"/>
				<rect height="12" width="12" x="156" y="60" className="b6"/>
				<rect height="12" width="12" x="156" y="48" className="b5"/>
				<rect height="12" width="12" x="156" y="36" className="b5"/>
				<rect height="12" width="12" x="156" y="24" className="b4"/>
				<rect height="12" width="12" x="156" y="12" className="b5"/>
				<rect height="12" width="12" x="156" className="b2"/>
				<rect height="12" width="12" x="144" y="180" className="o4"/>
				<rect height="12" width="12" x="144" y="168" className="w"/>
				<rect height="12" width="12" x="144" y="156" className="w"/>
				<rect height="12" width="12" x="144" y="144" className="o4"/>
				<rect height="12" width="12" x="144" y="132" className="o1"/>
				<rect height="12" width="12" x="144" y="120" className="w"/>
				<rect height="12" width="12" x="144" y="108" className="b5"/>
				<rect height="12" width="12" x="144" y="96" className="b7"/>
				<rect height="12" width="12" x="144" y="84" className="b6"/>
				<rect height="12" width="12" x="144" y="72" className="b5"/>
				<rect height="12" width="12" x="144" y="60" className="b7"/>
				<rect height="12" width="12" x="144" y="48" className="b7"/>
				<rect height="12" width="12" x="144" y="36" className="b5"/>
				<rect height="12" width="12" x="144" y="24" className="w"/>
				<rect height="12" width="12" x="144" y="12" className="w"/>
				<rect height="12" width="12" x="144" className="b6"/>
				<rect height="12" width="12" x="132" y="180" className="w"/>
				<rect height="12" width="12" x="132" y="168" className="o6"/>
				<rect height="12" width="12" x="132" y="156" className="o7"/>
				<rect height="12" width="12" x="132" y="144" className="o6"/>
				<rect height="12" width="12" x="132" y="132" className="o1"/>
				<rect height="12" width="12" x="132" y="120" className="o4"/>
				<rect height="12" width="12" x="132" y="108" className="b3"/>
				<rect height="12" width="12" x="132" y="96" className="b5"/>
				<rect height="12" width="12" x="132" y="84" className="w"/>
				<rect height="12" width="12" x="132" y="72" className="b4"/>
				<rect height="12" width="12" x="132" y="60" className="b5"/>
				<rect height="12" width="12" x="132" y="48" className="b6"/>
				<rect height="12" width="12" x="132" y="36" className="b5"/>
				<rect height="12" width="12" x="132" y="24" className="b5"/>
				<rect height="12" width="12" x="132" y="12" className="b4"/>
				<rect height="12" width="12" x="132" className="b7"/>
				<rect height="12" width="12" x="120" y="180" className="o2"/>
				<rect height="12" width="12" x="120" y="168" className="o4"/>
				<rect height="12" width="12" x="120" y="156" className="o3"/>
				<rect height="12" width="12" x="120" y="144" className="o4"/>
				<rect height="12" width="12" x="120" y="132" className="o4"/>
				<rect height="12" width="12" x="120" y="120" className="o2"/>
				<rect height="12" width="12" x="120" y="108" className="w"/>
				<rect height="12" width="12" x="120" y="96" className="b3"/>
				<rect height="12" width="12" x="120" y="84" className="b5"/>
				<rect height="12" width="12" x="120" y="72" className="b6"/>
				<rect height="12" width="12" x="120" y="60" className="b7"/>
				<rect height="12" width="12" x="120" y="48" className="b5"/>
				<rect height="12" width="12" x="120" y="36" className="b6"/>
				<rect height="12" width="12" x="120" y="24" className="w"/>
				<rect height="12" width="12" x="120" y="12" className="b4"/>
				<rect height="12" width="12" x="120" className="b5"/>
				<rect height="12" width="12" x="108" y="180" className="o4"/>
				<rect height="12" width="12" x="108" y="168" className="o5"/>
				<rect height="12" width="12" x="108" y="156" className="o4"/>
				<rect height="12" width="12" x="108" y="144" className="w"/>
				<rect height="12" width="12" x="108" y="132" className="o4"/>
				<rect height="12" width="12" x="108" y="120" className="o5"/>
				<rect height="12" width="12" x="108" y="108" className="o4"/>
				<rect height="12" width="12" x="108" y="96" className="o1"/>
				<rect height="12" width="12" x="108" y="84" className="b3"/>
				<rect height="12" width="12" x="108" y="72" className="b5"/>
				<rect height="12" width="12" x="108" y="60" className="b2"/>
				<rect height="12" width="12" x="108" y="48" className="b4"/>
				<rect height="12" width="12" x="108" y="36" className="w"/>
				<rect height="12" width="12" x="108" y="24" className="b7"/>
				<rect height="12" width="12" x="108" y="12" className="b5"/>
				<rect height="12" width="12" x="108" className="b7"/>
				<rect height="12" width="12" x="96" y="180" className="o3"/>
				<rect height="12" width="12" x="96" y="168" className="o2"/>
				<rect height="12" width="12" x="96" y="156" className="o3"/>
				<rect height="12" width="12" x="96" y="144" className="o4"/>
				<rect height="12" width="12" x="96" y="132" className="w"/>
				<rect height="12" width="12" x="96" y="120" className="o4"/>
				<rect height="12" width="12" x="96" y="108" className="o2"/>
				<rect height="12" width="12" x="96" y="96" className="w"/>
				<rect height="12" width="12" x="96" y="84" className="b3"/>
				<rect height="12" width="12" x="96" y="72" className="w"/>
				<rect height="12" width="12" x="96" y="60" className="b5"/>
				<rect height="12" width="12" x="96" y="48" className="b7"/>
				<rect height="12" width="12" x="96" y="36" className="b4"/>
				<rect height="12" width="12" x="96" y="24" className="b5"/>
				<rect height="12" width="12" x="96" y="12" className="b4"/>
				<rect height="12" width="12" x="96" className="b6"/>
				<rect height="12" width="12" x="84" y="180" className="o2"/>
				<rect height="12" width="12" x="84" y="168" className="o4"/>
				<rect height="12" width="12" x="84" y="156" className="w"/>
				<rect height="12" width="12" x="84" y="144" className="o4"/>
				<rect height="12" width="12" x="84" y="132" className="o4"/>
				<rect height="12" width="12" x="84" y="120" className="o2"/>
				<rect height="12" width="12" x="84" y="108" className="o3"/>
				<rect height="12" width="12" x="84" y="96" className="o3"/>
				<rect height="12" width="12" x="84" y="84" className="w"/>
				<rect height="12" width="12" x="84" y="72" className="b5"/>
				<rect height="12" width="12" x="84" y="60" className="b5"/>
				<rect height="12" width="12" x="84" y="48" className="b6"/>
				<rect height="12" width="12" x="84" y="36" className="b5"/>
				<rect height="12" width="12" x="84" y="24" className="w"/>
				<rect height="12" width="12" x="84" y="12" className="b5"/>
				<rect height="12" width="12" x="84" className="b4"/>
				<rect height="12" width="12" x="72" y="180" className="o4"/>
				<rect height="12" width="12" x="72" y="168" className="w"/>
				<rect height="12" width="12" x="72" y="156" className="o6"/>
				<rect height="12" width="12" x="72" y="144" className="o7"/>
				<rect height="12" width="12" x="72" y="132" className="o3"/>
				<rect height="12" width="12" x="72" y="120" className="o2"/>
				<rect height="12" width="12" x="72" y="108" className="o3"/>
				<rect height="12" width="12" x="72" y="96" className="o1"/>
				<rect height="12" width="12" x="72" y="84" className="o4"/>
				<rect height="12" width="12" x="72" y="72" className="o1"/>
				<rect height="12" width="12" x="72" y="60" className="b5"/>
				<rect height="12" width="12" x="72" y="48" className="w"/>
				<rect height="12" width="12" x="72" y="36" className="b2"/>
				<rect height="12" width="12" x="72" y="24" className="b6"/>
				<rect height="12" width="12" x="72" y="12" className="w"/>
				<rect height="12" width="12" x="72" className="b5"/>
				<rect height="12" width="12" x="60" y="180" className="o7"/>
				<rect height="12" width="12" x="60" y="168" className="o6"/>
				<rect height="12" width="12" x="60" y="156" className="o4"/>
				<rect height="12" width="12" x="60" y="144" className="o4"/>
				<rect height="12" width="12" x="60" y="132" className="w"/>
				<rect height="12" width="12" x="60" y="120" className="o3"/>
				<rect height="12" width="12" x="60" y="108" className="o4"/>
				<rect height="12" width="12" x="60" y="96" className="o4"/>
				<rect height="12" width="12" x="60" y="84" className="o5"/>
				<rect height="12" width="12" x="60" y="72" className="o4"/>
				<rect height="12" width="12" x="60" y="60" className="w"/>
				<rect height="12" width="12" x="60" y="48" className="b5"/>
				<rect height="12" width="12" x="60" y="36" className="w"/>
				<rect height="12" width="12" x="60" y="24" className="b7"/>
				<rect height="12" width="12" x="60" y="12" className="b5"/>
				<rect height="12" width="12" x="60" className="w"/>
				<rect height="12" width="12" x="48" y="180" className="w"/>
				<rect height="12" width="12" x="48" y="168" className="o4"/>
				<rect height="12" width="12" x="48" y="156" className="o5"/>
				<rect height="12" width="12" x="48" y="144" className="o5"/>
				<rect height="12" width="12" x="48" y="132" className="o4"/>
				<rect height="12" width="12" x="48" y="120" className="o6"/>
				<rect height="12" width="12" x="48" y="108" className="w"/>
				<rect height="12" width="12" x="48" y="96" className="o3"/>
				<rect height="12" width="12" x="48" y="84" className="o4"/>
				<rect height="12" width="12" x="48" y="72" className="o2"/>
				<rect height="12" width="12" x="48" y="60" className="o4"/>
				<rect height="12" width="12" x="48" y="48" className="o1"/>
				<rect height="12" width="12" x="48" y="36" className="b5"/>
				<rect height="12" width="12" x="48" y="24" className="b4"/>
				<rect height="12" width="12" x="48" y="12" className="b6"/>
				<rect height="12" width="12" x="48" className="b7"/>
				<rect height="12" width="12" x="36" y="180" className="o4"/>
				<rect height="12" width="12" x="36" y="168" className="o5"/>
				<rect height="12" width="12" x="36" y="156" className="o5"/>
				<rect height="12" width="12" x="36" y="144" className="o2"/>
				<rect height="12" width="12" x="36" y="132" className="o3"/>
				<rect height="12" width="12" x="36" y="120" className="o7"/>
				<rect height="12" width="12" x="36" y="108" className="o4"/>
				<rect height="12" width="12" x="36" y="96" className="o7"/>
				<rect height="12" width="12" x="36" y="84" className="w"/>
				<rect height="12" width="12" x="36" y="72" className="o6"/>
				<rect height="12" width="12" x="36" y="60" className="o7"/>
				<rect height="12" width="12" x="36" y="48" className="o4"/>
				<rect height="12" width="12" x="36" y="36" className="o1"/>
				<rect height="12" width="12" x="36" y="24" className="b3"/>
				<rect height="12" width="12" x="36" y="12" className="w"/>
				<rect height="12" width="12" x="36" className="b5"/>
				<rect height="12" width="12" x="24" y="180" className="o2"/>
				<rect height="12" width="12" x="24" y="168" className="o4"/>
				<rect height="12" width="12" x="24" y="156" className="o6"/>
				<rect height="12" width="12" x="24" y="144" className="o4"/>
				<rect height="12" width="12" x="24" y="132" className="o4"/>
				<rect height="12" width="12" x="24" y="120" className="o3"/>
				<rect height="12" width="12" x="24" y="108" className="w"/>
				<rect height="12" width="12" x="24" y="96" className="o6"/>
				<rect height="12" width="12" x="24" y="84" className="o4"/>
				<rect height="12" width="12" x="24" y="72" className="w"/>
				<rect height="12" width="12" x="24" y="60" className="o2"/>
				<rect height="12" width="12" x="24" y="48" className="o4"/>
				<rect height="12" width="12" x="24" y="36" className="o4"/>
				<rect height="12" width="12" x="24" y="24" className="o2"/>
				<rect height="12" width="12" x="24" y="12" className="b4"/>
				<rect height="12" width="12" x="24" className="b3"/>
				<rect height="12" width="12" x="12" y="180" className="o4"/>
				<rect height="12" width="12" x="12" y="168" className="w"/>
				<rect height="12" width="12" x="12" y="156" className="o7"/>
				<rect height="12" width="12" x="12" y="144" className="w"/>
				<rect height="12" width="12" x="12" y="132" className="o4"/>
				<rect height="12" width="12" x="12" y="120" className="o4"/>
				<rect height="12" width="12" x="12" y="108" className="o2"/>
				<rect height="12" width="12" x="12" y="96" className="o5"/>
				<rect height="12" width="12" x="12" y="84" className="o4"/>
				<rect height="12" width="12" x="12" y="72" className="o4"/>
				<rect height="12" width="12" x="12" y="60" className="o7"/>
				<rect height="12" width="12" x="12" y="48" className="w"/>
				<rect height="12" width="12" x="12" y="36" className="o4"/>
				<rect height="12" width="12" x="12" y="24" className="o3"/>
				<rect height="12" width="12" x="12" y="12" className="b3"/>
				<rect height="12" width="12" x="12" className="b5"/>
				<rect height="12" width="12" y="180" className="o2"/>
				<rect height="12" width="12" y="168" className="o4"/>
				<rect height="12" width="12" y="156" className="o2"/>
				<rect height="12" width="12" y="144" className="o4"/>
				<rect height="12" width="12" y="132" className="w"/>
				<rect height="12" width="12" y="120" className="w"/>
				<rect height="12" width="12" y="108" className="o4"/>
				<rect height="12" width="12" y="96" className="o2"/>
				<rect height="12" width="12" y="84" className="o4"/>
				<rect height="12" width="12" y="72" className="o2"/>
				<rect height="12" width="12" y="60" className="o6"/>
				<rect height="12" width="12" y="48" className="o4"/>
				<rect height="12" width="12" y="36" className="o2"/>
				<rect height="12" width="12" y="24" className="o4"/>
				<rect height="12" width="12" y="12" className="o2"/>
				<rect height="12" width="12" className="b2"/>
			</svg>
		</div>
	);
};

export default Tiles;
