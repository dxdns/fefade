import { Gallery } from "@/index.js"
import { videoUtil } from "@dxdns-kit/core/utils"

export default function () {
	const sizes = [200, 250, 650, 750, 850, 950, 300, 350, 450, 550]
	const { isVideo } = videoUtil()

	return (
		<div style={{ width: 800, margin: "3rem auto", lineHeight: 2 }}>
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
								<h4>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
									cupiditate optio quisquam iusto quod vel esse corporis, beatae
									alias unde quos nulla possimus vitae natus animi sequi ab.
									Debitis, facilis?
								</h4>

								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Voluptas omnis totam minus sequi dolorem reprehenderit
									architecto fugiat! Consequuntur recusandae, sequi ut assumenda
									pariatur accusamus nihil. Illo eligendi autem quis deserunt!
								</p>
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
								<h3>{`Image ${size}px`}</h3>
								<p>description</p>
							</Gallery.Image>
						)
					}
				})}
			</Gallery>
		</div>
	)
}
