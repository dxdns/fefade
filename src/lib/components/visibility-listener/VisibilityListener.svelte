<script lang="ts">
	import { checkVisibilityAction } from "../../actions/index.js"
	import type { HTMLAttributes } from "svelte/elements"

	interface Props extends HTMLAttributes<HTMLDivElement> {
		callback: () => void
		preventDefault?: boolean
	}

	let {
		class: className = "",
		callback,
		preventDefault = true,
		children,
		...rest
	}: Props = $props()
</script>

<div
	{...rest}
	class={className}
	use:checkVisibilityAction={{
		callback
	}}
>
	{@render children?.()}
</div>
