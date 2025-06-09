<script lang="ts">
	import { lazyLoadAction } from "../../actions/index.js"
	import type { HTMLImgAttributes } from "svelte/elements"
	import { mergeStyleUtil, classMapUtil } from "../../utils/index.js"

	interface Props extends Omit<HTMLImgAttributes, "src"> {
		lazy?: boolean
		dataSrc: string
		hover?: { transition?: "none" | "scale" }
	}

	let {
		class: className = "",
		lazy = false,
		dataSrc,
		hover = { transition: "none" },
		children,
		...rest
	}: Props = $props()

	const hasTransition = hover && hover.transition !== "none"
	const transitionDefault = "opacity 1s ease-in-out"
	const transitionKey = "--transition"

	const style = mergeStyleUtil(
		hasTransition
			? `${transitionKey}: ${transitionDefault}, ${hover?.transition} 0.3s ease-in-out;`
			: `${transitionKey}: ${transitionDefault}`,
		`transition: var(${transitionKey});`,
		rest.style
	)
</script>

{#if lazy}
	<img
		{...rest}
		class={classMapUtil(className, {
			[hover.transition!]: hasTransition
		})}
		{style}
		data-src={dataSrc}
		use:lazyLoadAction
		loading="lazy"
		decoding="async"
	/>
{:else}
	<img {...rest} class={className} src={dataSrc} />
{/if}

<style>
	.scale:hover {
		scale: 1.125;
	}
</style>
