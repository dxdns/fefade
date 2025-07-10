import { RefObject, useEffect, useRef } from "react"

export type Action<T extends HTMLElement = HTMLElement, P = any> = (
  node: T,
  props?: P
) => {
  update?: (props: P) => void
  destroy?: () => void
} | void

export default function actionUtil<T extends HTMLElement = HTMLElement, P = any>(
  action: Action<T, P>,
  props?: P,
  externalRef?: RefObject<T>
): RefObject<T> {
  const internalRef = useRef<T>(null!)
  const ref = externalRef ?? internalRef
  const actionResult = useRef<ReturnType<Action<T, P>> | void>(null)

  useEffect(() => {
    const el = ref.current
    if (!el || typeof action !== "function") return

    actionResult.current = action(el, props)

    return () => {
      if (actionResult.current && typeof actionResult.current.destroy === "function") {
        actionResult.current.destroy()
      }
      actionResult.current = undefined
    }
  }, [ref, action])

  useEffect(() => {
    if (actionResult.current && typeof actionResult.current.update === "function") {
      actionResult.current.update(props!)
    }
  }, [props])

  return ref
}
