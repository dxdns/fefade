<script lang="ts">
	import { Autocomplete, Link } from "@lib/index.js"

	const data = Array.from(Array(30)).map((_, i) => ({
		id: i,
		label: `test ${i}`
	}))
</script>

<br />

<Autocomplete
	variant="contained"
	placeholder="test"
	{data}
	filter={(item) => `${item.label}`}
>
	{#snippet renderInput({ id, label })}
		<Link href="/{id}">
			{#if id === 0}
				<svg
					xmlns="http://www.w3.org/2000/svg"
					height="24px"
					viewBox="0 -960 960 960"
					width="24px"
					fill="red"
				>
					<path
						d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Z"
					/>
				</svg>
			{/if}
			{label}
		</Link>
	{/snippet}
</Autocomplete>
