<script lang="ts">
	import { Rating } from "@feflow-ui/svelte"
</script>

<h4>default</h4>
<br />
<Rating
	onChange={(index) => {
		console.log(index)
	}}
/>

<h4>custom</h4>
<br />
<Rating startIn={4} color="red">
	<svg
		xmlns="http://www.w3.org/2000/svg"
		height="24px"
		viewBox="0 -960 960 960"
		width="24px"
		fill="#e3e3e3"
	>
		<path
			d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Z"
		/>
	</svg>
</Rating>

<h4>vertical</h4>
<br />
<Rating style="flex-direction: column;" />

<h4>n stars</h4>
<br />
<Rating color="red" length={3} startIn={3} />

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
{#each [13, "2rem", "48px"] as size, i (i)}
	<Rating startIn={i + 1} {size} />
	<br />
{/each}
