import { Constants } from "@fefade/core"
import { Accordion } from "@fefade/react"

export default function () {
	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				gap: "1rem"
			}}
		>
			{Constants.variants.map((variant, i) => (
				<Accordion
					id={`sec${i}`}
					key={`sec${i}`}
					variant={variant}
					label={variant ?? "no variant"}
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
