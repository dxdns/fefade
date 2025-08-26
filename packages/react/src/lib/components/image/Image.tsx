import type {
	GalleryItemType,
	HTMLAttrAnchor,
	ImageType
} from "@navnex-kit/core/types"
import { forwardRef, ImgHTMLAttributes } from "react"
import { useAction } from "../../utils"
import { imageAction } from "@navnex-kit/core/actions"

interface Props
	extends Omit<ImgHTMLAttributes<Omit<HTMLImageElement, "src">>, "color">,
		GalleryItemType,
		ImageType,
		HTMLAttrAnchor {}

export default forwardRef<HTMLImageElement, Props>(
	({ className = "", lazy = false, dataSrc, fallback, ...rest }, _ref) => {
		const actionRef = useAction<
			HTMLImageElement,
			Parameters<typeof imageAction>[1]
		>(imageAction, { lazy })

		return (
			<img
				{...rest}
				ref={actionRef}
				className={className}
				data-src={dataSrc}
				data-fallback={fallback}
				loading={lazy ? "lazy" : undefined}
				decoding={lazy ? "async" : undefined}
			/>
		)
	}
)
