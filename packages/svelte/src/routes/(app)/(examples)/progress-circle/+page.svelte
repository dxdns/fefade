<script lang="ts">
	import { ProgressCircle } from "@/index.js"

	function getColor(value: number) {
		if (value < 30) return "red"
		if (value < 70) return "orange"
		return "green"
	}

	const data = [
		{ value: 20, color: getColor(20) },
		{ value: 45, color: getColor(45) },
		{ value: 75, color: getColor(75) },
		{ value: 90, color: getColor(90) }
	]
</script>

<div style="display: flex; gap: 0.5rem;">
	{#each data as { value, color }}
		<ProgressCircle {value} {color}>
			<text
				x="28px"
				y="52px"
				fill={color}
				style="font-weight: bold; font-size: 21px;"
			>
				{value}%
			</text>
		</ProgressCircle>
	{/each}
</div>
