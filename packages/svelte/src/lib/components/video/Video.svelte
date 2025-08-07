<script lang="ts">
	import type { HTMLVideoAttributes } from "svelte/elements"

	interface Props extends Omit<HTMLVideoAttributes, "src"> {
		lazy?: boolean
	}

	let {
		class: className = "",
		lazy = false,
		children,
		...rest
	}: Props = $props()
</script>

<video {...rest} class={className} preload={lazy ? "none" : undefined}>
	{@render children?.()}
</video>
