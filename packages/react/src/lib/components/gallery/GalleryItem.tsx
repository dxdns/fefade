import type {
	GalleryCaptionType,
	GalleryItemType,
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

type HTMLImageAttr = Omit<ImgHTMLAttributes<HTMLImageElement>, "src">
type HTMLVideoAttr = Omit<VideoHTMLAttributes<HTMLVideoElement>, "src">

interface BaseProps
	extends GalleryItemType<ReactNode | GalleryCaptionType | undefined>,
		HTMLAttrAnchor,
		ImageType {}

type ImgProps = HTMLImageAttr & BaseProps & ImageType
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
			viewer,
			children,
			...rest
		},
		ref
	) => {
		const [isOpen, setIsOpen] = useState(false)
		const [selectedEl, setSelectedEl] = useState<ReactNode>(null)

		const { isVideo } = videoUtil()

		function handleOpen() {
			setIsOpen(true)
		}

		function handleClose() {
			setIsOpen(false)
			setSelectedEl(null)
		}

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

		function handleImageClick(e: MouseEvent<HTMLImageElement>) {
			if (viewer) {
				const el = e.currentTarget

				const clonedImage = (
					<img
						{...(rest as HTMLImageAttr)}
						src={el.dataset.dataSrc ?? el.src}
						height={viewer.height}
						width={viewer.width}
					/>
				)

				setSelectedEl(clonedImage)
				handleOpen()
			}

			handleClick(e)
		}

		function handleVideoClick(e: MouseEvent<HTMLVideoElement>) {
			if (viewer) {
				const el = e.currentTarget

				const clonedVideo = (
					<video
						{...(rest as HTMLVideoAttr)}
						src={el.src || el.querySelector("source")?.src || ""}
						height={viewer.height}
						width={viewer.width}
					/>
				)

				setSelectedEl(clonedVideo)
				handleOpen()
			}

			handleClick(e)
		}

		return (
			<>
				{viewer &&
					isOpen &&
					selectedEl &&
					createPortal(
						<Modal
							isOpen={isOpen}
							style={{ border: "none" }}
							handleClose={handleClose}
						>
							<Modal.Content
								style={{
									textAlign: "center",
									overflow: "hidden",
									padding: 0
								}}
							>
								{selectedEl}
							</Modal.Content>
						</Modal>,
						document.body
					)}

				<figure
					className={classMapUtil(
						className,
						[className, styles],
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
