<script lang="ts">
	import { Button } from "@feflow/svelte"

	const variants = ["outlined", "text", "contained"]
	const colors = ["error", "success", "warning", "info", "primary"]
</script>

<div
	style="
    display: flex; 
    flex-wrap: wrap;
    gap: 1rem;
    align-items: flex-end;
    padding: 1rem;
"
>
	<Button isLoading></Button>

	{#each variants as variant}
		<Button variant={variant as any}>{variant}</Button>
	{/each}
	<Button href="https://dxdns.dev" target="_blank">link</Button>

	{#each variants as variant}
		<Button disabled variant={variant as any}>{variant} disabled</Button>
	{/each}

	<div style="display:flex; align-items: baseline; gap: 1rem; flex-wrap: wrap;">
		{#each colors as color}
			<Button class="bg-{color} text-on-{color}">{color}</Button>
		{/each}
	</div>

	<Button>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			height="16px"
			viewBox="0 -960 960 960"
			width="16px"
			fill="red"
		>
			<path
				d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Z"
			/>
		</svg>
		heart
	</Button>
</div>
