import { Gallery } from "@feflow-ui/react"
import type { VideoHTMLAttributes } from "react"
import { videoUtil } from "@feflow-ui/core/utils"

export default function () {
	const sizes = [200, 250, 650, 750, 850, 950, 300, 350, 450, 550]

	const { isVideo } = videoUtil()

	return (
		<>
			<h1>default</h1>
			<Gallery>
				{sizes.slice(0, 4).map((size) => {
					const src = `https://dummyjson.com/image/${size}`
					return (
						<Gallery.Item
							key={size}
							lazy
							dataSrc={src}
							alt={`Image ${size}px`}
							width={size}
							height={size}
							href={src}
							target="_blank"
							style={{ cursor: "pointer" }}
						/>
					)
				})}
			</Gallery>

			<br />
			<h1>columns</h1>
			<Gallery columns={1}>
				{sizes.slice(0, 6).map((size, i) => {
					const src = `https://dummyjson.com/image/${size}`
					return (
						<Gallery.Item
							key={`${size}-${i}`}
							lazy
							caption={{
								label: { text: `title ${size}` },
								description: { text: `description ${size}` }
							}}
							dataSrc={src}
							alt={`Image ${size}px`}
							width={size}
							height={size}
							href={src}
							target="_blank"
							style={{ cursor: "pointer" }}
						/>
					)
				})}
			</Gallery>

			<br />
			<h1>masonry</h1>
			<Gallery variant="masonry" gap="1rem">
				{sizes.map((size, i) => {
					const src =
						i === 0
							? "https://res.cloudinary.com/dkufrbqih/video/upload/v1754577218/4_-_J5bdBP9_tifpyb.mp4"
							: `https://dummyjson.com/image/${size}`
					return (
						<Gallery.Item
							key={`${size}-${i}`}
							lazy
							{...(isVideo(src)
								? ({
										autoPlay: true,
										muted: true,
										loop: true,
										href: src,
										target: "_blank"
									} as VideoHTMLAttributes<HTMLVideoElement>)
								: {})}
							caption={{
								label: {
									text: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio doloremque magnam sed aliquam assumenda! ${size}`,
									lines: 1
								},
								description: {
									text: `Praesentium adipisci, illo, atque non optio sit necessitatibus placeat, sunt ut distinctio repellendus ullam repudiandae! Quaerat. ${size}`,
									lines: 1
								}
							}}
							dataSrc={src}
							alt={`Image ${size}px`}
							width={size}
							height={size}
							style={{ cursor: "pointer" }}
						/>
					)
				})}
			</Gallery>
		</>
	)
}
