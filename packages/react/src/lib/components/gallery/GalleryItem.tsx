import type {
	GalleryCaptionType,
	GalleryItemType,
	GalleryMediaType,
	HTMLAttrAnchor,
	ImageType
} from "@dxdns-kit/core/types"
import {
	classMapUtil,
	cssToObjectUtil,
	handleClickUtil,
	hasKeysUtil,
	videoUtil
} from "@dxdns-kit/core/utils"
import {
	CSSProperties,
	forwardRef,
	ImgHTMLAttributes,
	isValidElement,
	MouseEvent,
	ReactNode,
	Ref,
	useState,
	VideoHTMLAttributes
} from "react"
import { Image } from "../image"
import styles from "@dxdns-kit/core/styles/GalleryItem.module.css"
import { Video } from "../video"
import { createPortal } from "react-dom"
import Modal from "../modal"

interface BaseProps
	extends GalleryItemType<ReactNode | GalleryCaptionType | undefined>,
		HTMLAttrAnchor,
		GalleryMediaType {
	modal?: {
		height?: number
		width?: number
	}
}

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
			modal,
			children,
			...rest
		},
		ref
	) => {
		const { isVideo } = videoUtil()

		const [openModal, setOpenModal] = useState(false)
		const [selectedEl, setSelectedEl] = useState<ReactNode>(null)

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

		const handleImageClick = (e: MouseEvent<HTMLImageElement>) => {
			if (modal) {
				const el = e.currentTarget

				const clonedImage = (
					<img
						{...(rest as HTMLImageAttr)}
						src={el.dataset.dataSrc ?? el.src}
						height={modal.height}
						width={modal.width}
					/>
				)

				setSelectedEl(clonedImage)
				setOpenModal(true)
			}

			handleClick(e)
		}

		const handleVideoClick = (e: MouseEvent<HTMLVideoElement>) => {
			if (modal) {
				const el = e.currentTarget

				const clonedVideo = (
					<video
						{...(rest as HTMLVideoAttr)}
						src={el.src || el.querySelector("source")?.src || ""}
						height={modal.height}
						width={modal.width}
					/>
				)

				setSelectedEl(clonedVideo)
				setOpenModal(true)
			}

			handleClick(e)
		}

		return (
			<>
				{modal &&
					openModal &&
					selectedEl &&
					createPortal(
						<Modal
							isOpen={openModal}
							handleClose={() => {
								setOpenModal(false)
								setSelectedEl(null)
							}}
						>
							{selectedEl}
						</Modal>,
						document.body
					)}

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
							onClick={handleVideoClick}
						/>
					) : (
						<Image
							{...(rest as HTMLImageAttr)}
							ref={ref as Ref<HTMLImageElement>}
							className={styles.thumbnail}
							lazy={lazy}
							dataSrc={dataSrc}
							onClick={handleImageClick}
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
			</>
		)
	}
)
