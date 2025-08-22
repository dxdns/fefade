import { type Ref, ref, onMounted, onBeforeUnmount, watch } from "vue"

export type ActionType<T extends HTMLElement = HTMLElement, P = any> = (
	node: T,
	props?: P
) => {
	update?: (props: P) => void
	destroy?: () => void
} | void

export default function actionUtil<
	T extends HTMLElement = HTMLElement,
	P = any
>(
	action: ActionType<T, P>,
	props?: P,
	externalRef?: Ref<T | null>
): Ref<T | null> {
	const internalRef = ref<T>(null!)
	const elementRef = externalRef ?? internalRef
	const actionResult = ref<ReturnType<ActionType<T, P>> | void>(undefined)

	onMounted(() => {
		const el = elementRef.value
		if (!el || typeof action !== "function") return

		actionResult.value = action(el, props)
	})

	onBeforeUnmount(() => {
		if (
			actionResult.value &&
			typeof actionResult.value.destroy === "function"
		) {
			actionResult.value.destroy()
		}
		actionResult.value = undefined
	})

	watch(
		() => props,
		(newProps) => {
			if (
				actionResult.value &&
				typeof actionResult.value.update === "function"
			) {
				actionResult.value.update(newProps!)
			}
		},
		{ deep: true, immediate: true }
	)

	return elementRef as Ref<T | null>
}
