<script lang="ts">
	import { actionUtil, classMapUtil } from "@fefade/core/utils"
	import { hoverFollowerAction } from "@fefade/core/actions"
	import type { ActionEntryType, OrientationType } from "@fefade/core/types"
	import type { HTMLAttributes } from "svelte/elements"

	interface Props extends Omit<HTMLAttributes<HTMLDivElement>, "color"> {
		orientation?: OrientationType
		bgColor?: string
		actions?: ActionEntryType<HTMLElement>[]
		startIn?: number
	}

	let {
		class: className = "",
		bgColor,
		orientation = "vertical",
		actions,
		startIn = 0,
		children,
		...rest
	}: Props = $props()
</script>

<div
	{...rest}
	class={classMapUtil(className, "hoverFollower", orientation)}
	use:hoverFollowerAction={{
		orientation,
		bgColor,
		startIn
	}}
	use:actionUtil={actions}
>
	{@render children?.()}
</div>

<style>
	.hoverFollower {
		position: relative;
		display: flex;
		gap: 0.5rem;
	}

	.hoverFollower.horizontal {
		flex-direction: row;
	}

	.hoverFollower.vertical {
		flex-direction: column;
	}
</style>
