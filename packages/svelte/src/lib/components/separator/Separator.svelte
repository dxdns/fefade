<script lang="ts">
	import { classMapUtil, mergeStyleUtil } from "@dxdns/feflow-core/utils"
	import type { OrientationType, SizeType } from "@dxdns/feflow-core/types"
	import type { HTMLAttributes } from "svelte/elements"

	interface Props extends HTMLAttributes<HTMLDivElement> {
		orientation?: OrientationType
		variant?: "solid" | "dashed" | "dotted"
		size?: SizeType
		height?: string
	}

	let {
		orientation = "horizontal",
		variant = "solid",
		size = "xs",
		height = "5px",
		...rest
	}: Props = $props()

	const sizes: Record<typeof size, number> = {
		xs: 1,
		sm: 2,
		md: 4,
		lg: 6,
		xl: 8
	}

	const style = mergeStyleUtil(
		`border-style: ${variant};`,
		`--size: ${sizes[size]}px;`,
		`--height: ${height};`,
		rest.style
	)
</script>

<div {...rest} class={classMapUtil("separator", orientation)} {style}></div>

<style>
	.separator {
		border-color: var(--ff-border);
		border-right-width: 0;
		border-bottom-width: 0;
		border-left-width: 0;
		display: block;
	}

	.separator.horizontal {
		border-top-width: var(--size);
	}

	.separator.vertical {
		height: var(--height);
		border-inline-start-width: var(--size);
		border-top-width: 0;
	}
</style>
