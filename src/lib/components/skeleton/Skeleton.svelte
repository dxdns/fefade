<script lang="ts">
	import { classMapUtil } from "../../utils/index.js"
	import type { HTMLAttributes } from "svelte/elements"

	interface Props extends HTMLAttributes<HTMLDivElement> {
		isLoading?: boolean
		variant?: "shimmer" | "pulse"
	}

	let {
		class: className = "",
		children,
		isLoading = false,
		variant = "shimmer",
		...rest
	}: Props = $props()
</script>

{#if isLoading}
	<div {...rest} class={classMapUtil(className, variant, "skeleton")}></div>
{:else}
	{@render children?.()}
{/if}

<style>
	.skeleton {
		background: var(--ff-color-skeleton);
		background-image: linear-gradient(
			90deg,
			var(--ff-color-skeleton),
			var(--ff-color-on-skeleton),
			var(--ff-color-skeleton)
		);
		border-radius: 5px;
		display: inline-block;
	}

	.skeleton.shimmer {
		animation: shimmer 1.5s ease-in-out infinite;
	}

	.skeleton.pulse {
		animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
	}

	@keyframes shimmer {
		0% {
			background-position: -200px 0;
		}
		100% {
			background-position: calc(200px + 100%) 0;
		}
	}

	@keyframes pulse {
		0% {
			opacity: 1;
		}
		50% {
			opacity: 0.3;
		}
		100% {
			opacity: 1;
		}
	}
</style>
