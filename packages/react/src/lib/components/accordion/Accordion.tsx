import { forwardRef, HTMLAttributes, PropsWithChildren } from "react"
import { VariantType } from "@feflow/core/types"
import { classMapUtil } from "@feflow/core/utils"
import styles from "@feflow/core/styles/Accordion.module.css"

type Props = Omit<HTMLAttributes<HTMLDivElement>, "id"> & PropsWithChildren & {
    id: string
    label: string
    variant?: VariantType
}

export default forwardRef<HTMLDivElement, Props>(
    ({
        className,
        label,
        variant,
        children,
        ...rest
    }, ref) => {
        return (
            <div
                ref={ref}
                className={classMapUtil(
                    className,
                    [className, styles],
                    [variant, styles],
                    styles.accordion
                )}
                style={rest.style}
            >
                <input
                    {...rest}
                    className={styles.controller}
                    type="radio"
                    id={rest.id}
                    name="accordion"
                    hidden
                    style={undefined}
                />
                <label htmlFor={rest.id} className={styles.header}>
                    <label htmlFor={rest.id}>{label}</label>
                    <div className={styles.icon}>
                        <span>icon</span>
                    </div>
                </label>
                <div className={styles.content}>
                    {children}
                </div>
            </div>
        )
    }
)
