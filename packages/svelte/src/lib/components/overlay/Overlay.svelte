<script lang="ts">
	import type { HTMLButtonAttributes } from "svelte/elements"
	import { classMapUtil } from "@dxdns-kit/core/utils"
	import styles from "@dxdns-kit/core/styles/Overlay.module.css"

	interface Props extends HTMLButtonAttributes {
		isOpen: boolean
	}

	let { class: className = "", isOpen = false, ...rest }: Props = $props()
</script>

{#if isOpen}
	<button
		{...rest}
		class={classMapUtil(className, [className, styles], styles.overlay)}
		type="button"
		aria-labelledby="overlay"
		aria-label="Close overlay"
		onclick={(e) => {
			document.body.style.overflowY = "auto"
			rest.onclick?.(e)
		}}
	>
	</button>
{/if}
