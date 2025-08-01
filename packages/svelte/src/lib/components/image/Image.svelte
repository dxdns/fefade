<script lang="ts">
	import { lazyLoadAction } from "@dxdns/feflow-core/actions"
	import type { HTMLImgAttributes } from "svelte/elements"
	import { mergeStyleUtil, classMapUtil } from "@dxdns/feflow-core/utils"
	import type { ImageType } from "@dxdns/feflow-core/types"

	interface Props extends Omit<HTMLImgAttributes, "src">, ImageType {}

	let {
		class: className = "",
		lazy = false,
		dataSrc,
		hover = { transition: "none" },
		fallback,
		...rest
	}: Props = $props()

	let hasError = $state(false)

	function handleError() {
		hasError = true
	}

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
		data-fallback={fallback}
		use:lazyLoadAction
		loading="lazy"
		decoding="async"
		onerror={handleError}
	/>
{:else}
	<img
		{...rest}
		class={className}
		src={hasError ? (fallback ?? dataSrc) : dataSrc}
		onerror={handleError}
	/>
{/if}

<style>
	.scale:hover {
		scale: 1.125;
	}
</style>
