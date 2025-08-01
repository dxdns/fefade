import { Gallery } from "@dxdns/feflow-react"

export default function () {
	const sizes = [200, 250, 650, 750, 850, 950, 300, 350, 450, 550]

	return (
		<>
			<h1>default</h1>
			<Gallery>
				{sizes.slice(0, 4).map((size) => {
					const src = `https://dummyjson.com/image/${size}`
					return (
						<button key={size} style={{ all: "unset", cursor: "pointer" }}>
							<Gallery.Item
								lazy
								dataSrc={src}
								alt={`Image ${size}px`}
								width={size}
								height={size}
							/>
						</button>
					)
				})}
			</Gallery>

			<br />
			<h1>columns</h1>
			<Gallery columns={1}>
				{sizes.slice(0, 6).map((size) => {
					const src = `https://dummyjson.com/image/${size}`
					return (
						<button key={size} style={{ all: "unset", cursor: "pointer" }}>
							<Gallery.Item
								lazy
								caption={{
									title: `title ${size}`,
									description: `description ${size}`
								}}
								dataSrc={src}
								alt={`Image ${size}px`}
								width={size}
								height={size}
							/>
						</button>
					)
				})}
			</Gallery>

			<br />
			<h1>masonry</h1>
			<Gallery variant="masonry" gap="1rem">
				{sizes.map((size) => {
					const src = `https://dummyjson.com/image/${size}`
					return (
						<button key={size} style={{ all: "unset", cursor: "pointer" }}>
							<Gallery.Item
								lazy
								caption={{
									title: `title ${size}`,
									description: `description ${size}`
								}}
								dataSrc={src}
								alt={`Image ${size}px`}
								width={size}
								height={size}
							/>
						</button>
					)
				})}
			</Gallery>
		</>
	)
}
