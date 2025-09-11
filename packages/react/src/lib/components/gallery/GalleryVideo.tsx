import type {
	GalleryItemType,
	HTMLAttrAnchor,
	VideoType
} from "@dxdns-kit/core/types"
import { classMapUtil, handleClickUtil } from "@dxdns-kit/core/utils"
import {
	CSSProperties,
	forwardRef,
	MouseEvent,
	ReactNode,
	useState,
	VideoHTMLAttributes
} from "react"
import { Video } from "../video"
import { createPortal } from "react-dom"
import Modal from "../modal"
import styles from "@dxdns-kit/core/styles/GalleryItem.module.css"

type HTMLVideoAttr = Omit<VideoHTMLAttributes<HTMLVideoElement>, "src">

interface Props
	extends HTMLVideoAttr,
		GalleryItemType<CSSProperties, HTMLVideoAttr>,
		HTMLAttrAnchor,
		VideoType {}

export default forwardRef<HTMLVideoElement, Props>(
	(
		{
			className = "",
			lazy = false,
			dataSrc,
			href,
			target = "_self",
			download,
			viewer,
			captionStyle,
			children,
			...rest
		},
		ref
	) => {
		const [isOpen, setIsOpen] = useState(false)
		const [selectedEl, setSelectedEl] = useState<ReactNode>(null)

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

		function handleVideoClick(e: MouseEvent<HTMLVideoElement>) {
			if (viewer) {
				const el = e.currentTarget

				const clonedVideo = (
					<video
						{...rest}
						{...viewer}
						src={el.src || el.querySelector("source")?.src || ""}
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
						styles.galleryItem,
						{
							["clickable"]: rest.onClick || viewer
						}
					)}
				>
					<Video
						{...rest}
						ref={ref}
						className={styles.thumbnail}
						lazy={lazy}
						dataSrc={dataSrc}
						onClick={handleVideoClick}
					/>

					<figcaption className={styles.caption} style={captionStyle}>
						{children}
					</figcaption>
				</figure>
			</>
		)
	}
)
