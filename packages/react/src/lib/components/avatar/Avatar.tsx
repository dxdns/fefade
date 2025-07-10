import { forwardRef, useState, type ImgHTMLAttributes, type PropsWithChildren } from "react"
import styles from "@feflow/core/styles/Avatar.module.css"
import { classMapUtil } from "@feflow/core/utils"

type Props = Omit<ImgHTMLAttributes<HTMLImageElement>, "width" | "height"> & PropsWithChildren & {
    textFallback?: string
    width?: string
    height?: string
}

export default forwardRef<HTMLDivElement, Props>(
    ({
        className,
        width,
        height,
        textFallback,
        ...rest }, ref) => {

        const [hasError, setHasError] = useState(false)

        function handleError() {
            setHasError(true)
        }

        return (
            <div
                ref={ref}
                className={classMapUtil(className, [className, styles], styles.avatar)}
                style={{ width, height }}
            >
                {
                    !hasError && rest.src ?
                        <img onError={handleError} {...rest} />
                        : textFallback &&
                        <span className={styles.textFallback}>
                            {textFallback.charAt(0).toUpperCase()}
                        </span>
                }
            </div>
        )
    },
)
