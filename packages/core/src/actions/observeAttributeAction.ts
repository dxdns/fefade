type Props = {
	attr: string
	updateValue: (value: string | null) => void
}

export default function observeAttributeAction(
	node: HTMLElement,
	{ attr, updateValue }: Props
) {
	function handleAttributeChange() {
		const value = node.getAttribute(attr)
		updateValue(value)
	}

	const observer = new MutationObserver((mutations) => {
		for (const mutation of mutations) {
			if (mutation.type === "attributes" && mutation.attributeName === attr) {
				handleAttributeChange()
			}
		}
	})

	observer.observe(node, {
		attributes: true,
		attributeFilter: [attr]
	})

	handleAttributeChange()

	return {
		destroy() {
			observer.disconnect()
		},
		update(params: Props) {
			if (params.attr !== attr) {
				observer.disconnect()
				observer.observe(node, {
					attributes: true,
					attributeFilter: [params.attr]
				})
			}
		}
	}
}
