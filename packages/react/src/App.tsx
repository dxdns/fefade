import { Accordion } from "./lib"

function App() {
	return (
		<div>
			{Array.from(Array(10)).map((_, i) => (
				<Accordion
					key={`sec${i}`}
					id={`sec${i}`}
					variant={i % 2 ? "contained" : i % 3 ? undefined : "outlined"}
					label={`test ${i}`}
					autoFocus={i === 0}
				>
					<div style={{ lineHeight: 1.5 }}>
						<h1>test {i}</h1>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste
						recusandae a minus accusantium perspiciatis numquam fugiat officiis
						esse fugit consectetur vero natus accusamus autem quos, voluptate
						dignissimos deserunt nemo alias! Lorem ipsum, dolor sit amet
						consectetur adipisicing elit.
						<p>
							Id provident praesentium, incidunt, quisquam ullam numquam aliquid
							dolorem, quae labore dignissimos minima assumenda. Reprehenderit
							nostrum minima perferendis eos quisquam ipsa quo!
						</p>
					</div>
				</Accordion>
			))}
		</div>
	)
}

export default App
