import type {
	GalleryItemType,
	HTMLAttrAnchor,
	ImageType
} from "@dxdns-kit/core/types"
import { classMapUtil, handleClickUtil } from "@dxdns-kit/core/utils"
import {
	CSSProperties,
	forwardRef,
	ImgHTMLAttributes,
	MouseEvent,
	ReactNode,
	useState
} from "react"
import { createPortal } from "react-dom"
import Modal from "../modal"
import { Image } from "../image"
import styles from "@dxdns-kit/core/styles/GalleryItem.module.css"

type HTMLImageAttr = Omit<ImgHTMLAttributes<HTMLImageElement>, "src">

interface Props
	extends HTMLImageAttr,
		GalleryItemType<CSSProperties, HTMLImageAttr>,
		HTMLAttrAnchor,
		ImageType {}

export default forwardRef<HTMLImageElement, Props>(
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
							["clickable"]: rest.onClick || viewer || href
						}
					)}
				>
					<Image
						{...rest}
						ref={ref}
						className={styles.thumbnail}
						lazy={lazy}
						dataSrc={dataSrc}
						onClick={handleImageClick}
					/>
					<figcaption className={styles.caption} style={captionStyle}>
						{children}
					</figcaption>
				</figure>
			</>
		)
	}
)
