<script lang="ts">
	import { Skeleton } from "@fefade/svelte"
</script>

<div style="max-width: 200px; margin: 0 auto; ">
	<Skeleton isLoading style="width: 200px; height: 200px;">
		<span>content</span>
	</Skeleton>

	<Skeleton isLoading style="width: 200px; height: 200px; border-radius: 100%;">
		<span>content</span>
	</Skeleton>

	{#each Array.from(Array(5)) as _, i (i)}
		<Skeleton isLoading variant="pulse" style="width: 200px; height: 16px;">
			<span>content</span>
		</Skeleton>
		<br />
	{/each}
</div>
