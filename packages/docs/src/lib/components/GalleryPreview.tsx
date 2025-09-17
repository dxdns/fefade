import { Gallery, Text } from "@fefade/react"
import { videoUtil } from "@fefade/core/utils"

export default function () {
	const sizes = [200, 250, 650, 750, 850, 950, 300, 350, 450, 550]

	const { isVideo } = videoUtil()

	return (
		<div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
			<div>
				<h1>columns</h1>
				<Gallery columns={1}>
					{sizes.slice(0, 6).map((size, i) => {
						const src = `https://dummyjson.com/image/${size}`
						return (
							<Gallery.Image
								key={`${size}-${i}`}
								lazy
								dataSrc={src}
								alt={`Image ${size}px`}
								width={size}
								height={size}
							/>
						)
					})}
				</Gallery>
			</div>

			<div>
				<h1>masonry</h1>
				<Gallery variant="masonry" gap={4}>
					{sizes.map((size, i) => {
						const src =
							i === 0
								? "https://res.cloudinary.com/dkufrbqih/video/upload/v1754577218/4_-_J5bdBP9_tifpyb.mp4"
								: `https://dummyjson.com/image/${size}`

						if (isVideo(src)) {
							return (
								<Gallery.Video
									key={src}
									lazy
									autoPlay
									muted
									loop
									dataSrc={src}
									viewer={{
										controls: true,
										style: {
											objectFit: "cover",
											background: "black",
											padding: "2rem",
											height: "300px"
										}
									}}
								>
									<Text as={"h4"} lines={1}>
										Lorem ipsum dolor sit amet consectetur adipisicing elit.
										Totam cupiditate optio quisquam iusto quod vel esse
										corporis, beatae alias unde quos nulla possimus vitae natus
										animi sequi ab. Debitis, facilis?
									</Text>

									<Text as={"p"} lines={2}>
										Lorem ipsum dolor sit amet consectetur adipisicing elit.
										Voluptas omnis totam minus sequi dolorem reprehenderit
										architecto fugiat! Consequuntur recusandae, sequi ut
										assumenda pariatur accusamus nihil. Illo eligendi autem quis
										deserunt!
									</Text>
								</Gallery.Video>
							)
						} else {
							return (
								<Gallery.Image
									key={src}
									lazy
									dataSrc={src}
									alt={`Image ${size}px`}
									viewer={{ width: 500 }}
								>
									<h4>{`Image ${size}px`}</h4>
									<p>description</p>
								</Gallery.Image>
							)
						}
					})}
				</Gallery>
			</div>
		</div>
	)
}
