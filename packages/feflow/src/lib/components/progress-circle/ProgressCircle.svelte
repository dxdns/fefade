<script lang="ts">
	import type { SVGAttributes } from "svelte/elements"
	import styles from "./ProgressCircle.module.css"
	import { classMapUtil } from "@dxdns/feflow-core/utils"
	import type { SizeType } from "../../types/index.js"

	interface Props extends SVGAttributes<SVGSVGElement> {
		value: number
		size?: SizeType
	}

	let {
		class: className = "",
		value,
		color = "var(--ff-primary)",
		size = "sm",
		children,
		...rest
	}: Props = $props()

	let strokeDasharray = $state("0")
	let el: SVGSVGElement

	$effect(() => {
		const roundCircum = 2 * 36 * Math.PI
		const roundDraw = (value * roundCircum) / 100
		strokeDasharray = `${roundDraw} 999`
	})
</script>

<div
	class={classMapUtil(className, [className, styles], styles.progressCircle, [
		size,
		styles
	])}
>
	<svg
		{...rest}
		bind:this={el}
		stroke-dasharray={strokeDasharray}
		viewBox="-11.5 -11.5 115 115"
	>
		<circle
			r="36"
			cx="46"
			cy="46"
			fill="transparent"
			stroke="var(--ff-border)"
			stroke-dasharray="0"
		>
		</circle>
		<circle
			r="36"
			cx="46"
			cy="46"
			stroke={color}
			stroke-width="10px"
			fill="transparent"
		>
		</circle>
		{@render children?.()}
	</svg>
</div>
