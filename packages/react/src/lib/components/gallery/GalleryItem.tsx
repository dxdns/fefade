import type {
	GalleryCaptionType,
	GalleryItemType,
	GalleryMediaType,
	HTMLAttrAnchor,
	ImageType
} from "@navnex-kit/core/types"
import {
	classMapUtil,
	cssToObjectUtil,
	handleClickUtil,
	hasKeysUtil,
	videoUtil
} from "@navnex-kit/core/utils"
import {
	CSSProperties,
	forwardRef,
	ImgHTMLAttributes,
	isValidElement,
	ReactNode,
	Ref,
	VideoHTMLAttributes
} from "react"
import { Image } from "../image"
import styles from "@navnex-kit/core/styles/GalleryItem.module.css"
import { Video } from "../video"

interface BaseProps
	extends GalleryItemType<ReactNode | GalleryCaptionType | undefined>,
		HTMLAttrAnchor,
		GalleryMediaType {}

type HTMLImageAttr = Omit<ImgHTMLAttributes<HTMLImageElement>, "src">
type ImgProps = HTMLImageAttr & BaseProps & ImageType

type HTMLVideoAttr = Omit<VideoHTMLAttributes<HTMLVideoElement>, "src">
type VideoProps = HTMLVideoAttr & BaseProps

type Props = ImgProps | VideoProps

export default forwardRef<HTMLImageElement | HTMLVideoElement, Props>(
	(
		{
			className = "",
			lazy = false,
			dataSrc,
			caption,
			href,
			target = "_self",
			download,
			children,
			...rest
		},
		ref
	) => {
		const { isVideo } = videoUtil()

		function handleClick(e: any) {
			handleClickUtil({
				href,
				download,
				target,
				onClick: () => {
					rest.onClick?.(e)
				}
			})
		}

		return (
			<figure
				className={classMapUtil(
					className,
					[styles, className],
					styles.galleryItem
				)}
			>
				{isVideo(dataSrc) ? (
					<Video
						{...(rest as HTMLVideoAttr)}
						ref={ref as Ref<HTMLVideoElement>}
						className={styles.thumbnail}
						lazy={lazy}
						dataSrc={dataSrc}
						onClick={handleClick}
					/>
				) : (
					<Image
						{...(rest as HTMLImageAttr)}
						ref={ref as Ref<HTMLImageElement>}
						className={styles.thumbnail}
						lazy={lazy}
						dataSrc={dataSrc}
						onClick={handleClick}
					/>
				)}

				{children ? (
					children
				) : caption && hasKeysUtil<GalleryCaptionType>(caption) ? (
					<figcaption
						className={styles.caption}
						style={caption.style ? cssToObjectUtil(caption.style) : undefined}
					>
						<div>
							<h3
								style={
									{
										["--label-lines"]: caption.label.lines ?? 3
									} as CSSProperties
								}
							>
								{caption.label.text}
							</h3>
							{caption.description && (
								<p
									style={
										{
											["--description-lines"]: caption.description.lines ?? 2
										} as CSSProperties
									}
								>
									{caption.description.text}
								</p>
							)}
						</div>
					</figcaption>
				) : (
					isValidElement(caption) && caption
				)}
			</figure>
		)
	}
)
