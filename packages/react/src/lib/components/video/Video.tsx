import { useAction } from "@/utils"
import { videoAction } from "@dxdns/feflow-core/actions"
import type { GalleryMediaType, HTMLAttrAnchor } from "@dxdns/feflow-core/types"
import { videoUtil } from "@dxdns/feflow-core/utils"
import { forwardRef, ImgHTMLAttributes } from "react"

interface Props
	extends Omit<ImgHTMLAttributes<Omit<HTMLVideoElement, "src">>, "color">,
		GalleryMediaType,
		HTMLAttrAnchor {}

export default forwardRef<HTMLVideoElement, Props>(
	({ className = "", lazy = false, dataSrc, ...rest }, _ref) => {
		const actionRef = useAction<
			HTMLVideoElement,
			Parameters<typeof videoAction>[1]
		>(videoAction, { lazy })

		const { getVideoType } = videoUtil()

		return (
			<video
				{...rest}
				ref={actionRef}
				className={className}
				preload={lazy ? "none" : undefined}
				onMouseEnter={() => {
					actionRef.current?.pause()
				}}
				onMouseLeave={() => {
					actionRef.current?.play()
				}}
				data-src={dataSrc}
			>
				<source type={`video/${getVideoType(dataSrc).replace(".", "")}`} />
			</video>
		)
	}
)
