<script lang="ts">
	import { onShortcutAction } from "@navnex-kit/core/actions"
	import type { HTMLAttributes } from "svelte/elements"

	interface Props extends HTMLAttributes<HTMLDivElement> {
		keys: string[]
		callback: (event: KeyboardEvent) => void
		preventDefault?: boolean
	}

	let {
		class: className = "",
		keys,
		callback,
		preventDefault = true,
		children,
		...rest
	}: Props = $props()
</script>

<div
	{...rest}
	class={className}
	use:onShortcutAction={{
		keys,
		callback,
		preventDefault
	}}
>
	{@render children?.()}
</div>
