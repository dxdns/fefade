<script lang="ts">
	import type { PositionNoCenterType } from "@dxdns-kit/core/types"
	import {
		classMapUtil,
		mergeStyleUtil,
		normalizeSizeUtil
	} from "@dxdns-kit/core/utils"
	import type { HTMLAttributes } from "svelte/elements"

	interface Props extends Omit<HTMLAttributes<HTMLDivElement>, "color"> {
		fade?: boolean
		direction?: PositionNoCenterType
		delay?: number
		maxHeight?: number
		scrollDistanceX?: number
		scrollDistanceY?: number
	}

	let {
		class: className = "",
		direction = "bottom",
		fade = false,
		delay = 60,
		maxHeight = 300,
		scrollDistanceX = 50,
		scrollDistanceY = 50,
		children,
		...rest
	}: Props = $props()
</script>

<div
	class={classMapUtil(className, "autoScroll", {
		fade,
		vertical: (fade && direction === "top") || direction === "bottom",
		horizontal: (fade && direction === "left") || direction === "right"
	})}
	style="max-height: {normalizeSizeUtil(maxHeight)};"
>
	<div
		{...rest}
		class={classMapUtil("wrapper", direction)}
		style={mergeStyleUtil(
			`--delay: ${delay}s;`,
			`--scrollDistanceX: ${scrollDistanceX}%;`,
			`--scrollDistanceY: ${scrollDistanceY}%;`,
			rest.style
		)}
	>
		{@render children?.()}
	</div>
</div>

<style>
	:root {
		--delay: 60s;
		--fade-size: 10%;
	}

	.autoScroll {
		overflow: hidden;
		max-width: 100%;
		position: relative;
	}

	.autoScroll.fade.vertical {
		-webkit-mask-image: linear-gradient(
			to bottom,
			transparent 0%,
			white var(--fade-size),
			white calc(100% - var(--fade-size)),
			transparent 100%
		);
		mask-image: linear-gradient(
			to bottom,
			transparent 0%,
			white var(--fade-size),
			white calc(100% - var(--fade-size)),
			transparent 100%
		);
	}

	.autoScroll.fade.horizontal {
		-webkit-mask-image: linear-gradient(
			to right,
			transparent 0%,
			white var(--fade-size),
			white calc(100% - var(--fade-size)),
			transparent 100%
		);
		mask-image: linear-gradient(
			to right,
			transparent 0%,
			white var(--fade-size),
			white calc(100% - var(--fade-size)),
			transparent 100%
		);
	}

	.wrapper {
		display: flex;
		gap: 1rem;
		will-change: transform;
	}

	.wrapper:hover {
		animation-play-state: paused;
	}

	.top,
	.bottom {
		flex-direction: column;
	}

	.left,
	.right {
		flex-direction: row;
	}

	.top {
		animation: scroll-top var(--delay) linear infinite;
	}

	.bottom {
		animation: scroll-bottom var(--delay) linear infinite;
	}

	.left {
		animation: scroll-left var(--delay) linear infinite;
	}

	.right {
		animation: scroll-right var(--delay) linear infinite;
	}

	@keyframes scroll-top {
		0% {
			transform: translateY(var(--scrollDistanceY));
		}
		100% {
			transform: translateY(calc(var(--scrollDistanceY) * -1));
		}
	}

	@keyframes scroll-bottom {
		0% {
			transform: translateY(calc(var(--scrollDistanceY) * -1));
		}
		100% {
			transform: translateY(var(--scrollDistanceY));
		}
	}

	@keyframes scroll-right {
		0% {
			transform: translateX(calc(var(--scrollDistanceX) * -1));
		}
		100% {
			transform: translateX(var(--scrollDistanceX));
		}
	}

	@keyframes scroll-left {
		0% {
			transform: translateX(var(--scrollDistanceX));
		}
		100% {
			transform: translateX(calc(var(--scrollDistanceX) * -1));
		}
	}
</style>
