import type { GalleryItemType, HTMLAttrAnchor } from "@dxdns/feflow-core/types"
import { classMapUtil, handleClickUtil } from "@dxdns/feflow-core/utils"
import { forwardRef, ImgHTMLAttributes } from "react"
import { Image } from "../image"
import styles from "@dxdns/feflow-core/styles/GalleryItem.module.css"

interface Props
	extends Omit<ImgHTMLAttributes<HTMLImageElement>, "src">,
		GalleryItemType,
		HTMLAttrAnchor {}

export default forwardRef<HTMLImageElement, Props>(
	(
		{
			className = "",
			lazy = false,
			dataSrc,
			caption,
			fallback,
			href,
			target = "_self",
			download,
			...rest
		},
		ref
	) => {
		return (
			<figure
				className={classMapUtil(
					className,
					[styles, className],
					styles.galleryItem
				)}
			>
				<Image
					{...rest}
					ref={ref}
					className={styles.image}
					lazy={lazy}
					dataSrc={dataSrc}
					fallback={fallback}
					onClick={(e) => {
						handleClickUtil({
							href,
							download,
							target,
							onClick: () => {
								rest.onClick?.(e as any)
							}
						})
					}}
				/>
				{caption && (
					<figcaption className={styles.caption}>
						<h3>{caption.title}</h3>
						<p>{caption.description}</p>
					</figcaption>
				)}
			</figure>
		)
	}
)
