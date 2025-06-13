<script lang="ts">
	import type { HTMLAttributes } from "svelte/elements"
	import type { HorizontalPositionType } from "../../types/index.js"

	interface Props extends HTMLAttributes<HTMLDivElement> {
		position: Exclude<HorizontalPositionType, "center">
	}

	let { position, children }: Props = $props()
</script>

<div class="timelineItem {position}">
	{@render children?.()}
</div>

<style>
	.timelineItem {
		padding: 10px 40px;
		position: relative;
		background: inherit;
		width: 50%;
	}

	.timelineItem::after {
		content: "";
		position: absolute;
		width: 16px;
		height: 16px;
		right: -12px;
		background: var(--ff-color-surface);
		border: 4px solid var(--ff-color-border);
		top: 15px;
		border-radius: 50%;
		z-index: 1;
	}

	.timelineItem.left {
		align-self: flex-start;
	}

	.timelineItem.right {
		align-self: flex-end;
	}

	.timelineItem.right::after {
		left: -12px;
	}

	@media screen and (max-width: 425px) {
		.timelineItem {
			width: 100%;
			padding-left: 70px;
			padding-right: 25px;
		}

		.timelineItem.left::after,
		.timelineItem.right::after {
			left: 19px;
		}
	}
</style>
