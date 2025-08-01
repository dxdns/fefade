<script lang="ts">
	import { lazyLoadAction } from "@dxdns/feflow-core/actions"
	import type { HTMLImgAttributes } from "svelte/elements"
	import type { ImageType } from "@dxdns/feflow-core/types"

	interface Props extends Omit<HTMLImgAttributes, "src">, ImageType {}

	let {
		class: className = "",
		lazy = false,
		dataSrc,
		fallback,
		...rest
	}: Props = $props()

	let hasError = $state(false)

	function handleError() {
		hasError = true
	}
</script>

{#if lazy}
	<img
		{...rest}
		class={className}
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
