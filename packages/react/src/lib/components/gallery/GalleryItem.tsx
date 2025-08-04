import type {
	GalleryCaptionType,
	GalleryItemType,
	HTMLAttrAnchor
} from "@dxdns/feflow-core/types"
import {
	classMapUtil,
	handleClickUtil,
	hasKeysUtil
} from "@dxdns/feflow-core/utils"
import { forwardRef, ImgHTMLAttributes, isValidElement, ReactNode } from "react"
import { Image } from "../image"
import styles from "@dxdns/feflow-core/styles/GalleryItem.module.css"

interface Props
	extends Omit<ImgHTMLAttributes<HTMLImageElement>, "src">,
		GalleryItemType<ReactNode | GalleryCaptionType | undefined>,
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
			children,
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
				{children ? (
					children
				) : caption && hasKeysUtil<GalleryCaptionType>(caption) ? (
					<figcaption className={styles.caption}>
						<div>
							<h3>{caption.title}</h3>
							<p>{caption.description}</p>
						</div>
					</figcaption>
				) : (
					isValidElement(caption) && caption
				)}
			</figure>
		)
	}
)
