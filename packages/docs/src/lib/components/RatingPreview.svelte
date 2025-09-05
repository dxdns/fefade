<script lang="ts">
	import { Rating } from "@dxdns-kit/svelte"
</script>

<h4>start in</h4>
<br />
{#each Array.from({ length: 5 }, (_, i) => 5 - i) as value (value)}
	<Rating startIn={value} color="blue" />
{/each}

<h4>colors</h4>
<br />
{#each ["aqua", "red", "green"] as color, i (i)}
	<Rating startIn={i + 1} {color} />
{/each}

<h4>sizes</h4>
<br />
{#each ["1rem", "2rem", "48px"] as size, i (i)}
	<Rating startIn={i + 1} style="font-size: {size};" />
	<br />
{/each}
