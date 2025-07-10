<script lang="ts">
	import { checkVisibilityAction } from "@dxdns/feflow-core/actions"
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
