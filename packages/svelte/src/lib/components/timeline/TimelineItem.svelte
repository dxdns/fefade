<script lang="ts">
	import type { HTMLAttributes } from "svelte/elements"
	import type { HorizontalPositionType } from "@dxdns/feflow-core/types"
	import { classMapUtil } from "@dxdns/feflow-core/utils"

	interface Props extends HTMLAttributes<HTMLDivElement> {
		position: Exclude<HorizontalPositionType, "center">
	}

	let { class: className = "", position, children, ...rest }: Props = $props()
</script>

<div {...rest} class={classMapUtil(className, "timelineItem", position)}>
	{@render children?.()}
</div>

<style>
	.timelineItem {
		padding: 10px 40px;
		position: relative;
		background: inherit;
		width: 50%;
		box-sizing: border-box;
	}

	.timelineItem::after {
		content: "";
		position: absolute;
		width: 16px;
		height: 16px;
		background: var(--ff-surface);
		border: 4px solid var(--ff-border);
		top: 15px;
		border-radius: 50%;
		z-index: 1;
		box-sizing: border-box;
	}

	.timelineItem.right {
		align-self: flex-end;
	}

	.timelineItem.right::after {
		left: 0;
		transform: translate(-50%, 0);
	}

	.timelineItem.left::after {
		right: 0;
		transform: translate(50%, 0);
	}

	.timelineItem.left {
		align-self: flex-start;
	}

	@media screen and (max-width: 425px) {
		.timelineItem {
			width: 100%;
			padding-left: 70px;
			padding-right: 25px;
		}

		.timelineItem.right::after,
		.timelineItem.left::after {
			left: 0;
			transform: translate(100%, 0);
		}
	}
</style>
