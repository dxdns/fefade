import type { ActionEntryType } from "../types/index.js"

export default function actionUtil<T extends HTMLElement>(
	node: T,
	actionsList: ActionEntryType<T>[] = []
) {
	let destroyFns: (() => void)[] = []

	function applyActions(list: ActionEntryType<T>[]) {
		destroyFns = list
			.map(([action, params]) => {
				const result = action(node, params)
				return result?.destroy
			})
			.filter((destroy): destroy is () => void => typeof destroy === "function")
	}

	applyActions(actionsList)

	return {
		update(newList: ActionEntryType<T>[]) {
			destroyFns.forEach((fn) => fn())
			applyActions(newList)
		},
		destroy() {
			destroyFns.forEach((fn) => fn())
		}
	}
}
