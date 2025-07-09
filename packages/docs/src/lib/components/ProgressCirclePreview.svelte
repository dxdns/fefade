<script lang="ts">
	import { ProgressCircle, themeConfig } from "feflow-svelte"

	const { colors } = $derived(themeConfig())

	function getColor(value: number) {
		if (value < 30) return colors.onError
		if (value < 70) return colors.onWarning
		return colors.onSuccess
	}

	const data = [20, 45, 75, 90].map((v) => ({ value: v, color: getColor(v) }))
</script>

<div
	style="
    display: flex; 
    gap: 0.5rem; 
    flex-wrap: wrap; 
    align-items: baseline;
	justify-content: center;
    "
>
	{#each data as { value, color }}
		<ProgressCircle {value} {color}>
			<text
				x={"28px"}
				y={"52px"}
				fill={color}
				style="font-weight: bold; font-size: 18px;"
			>
				{value}%
			</text>
		</ProgressCircle>
	{/each}
</div>
