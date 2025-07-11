<script lang="ts">
	import { Accordion } from "@dxdns/feflow-svelte"
</script>

<div style="display: flex; flex-direction: column; gap: 1rem;">
	{#each ["contained", "outlined", "text", undefined] as variant, i}
		<Accordion
			id="sec{i}"
			variant={variant as any}
			label={variant ?? "no variant"}
		>
			<div style="line-height: 1.5;">
				<h1>test {i}</h1>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste recusandae
				a minus accusantium perspiciatis numquam fugiat officiis esse fugit consectetur
				vero natus accusamus autem quos, voluptate dignissimos deserunt nemo alias!
				Lorem ipsum, dolor sit amet consectetur adipisicing elit.

				<p>
					Id provident praesentium, incidunt, quisquam ullam numquam aliquid
					dolorem, quae labore dignissimos minima assumenda. Reprehenderit
					nostrum minima perferendis eos quisquam ipsa quo!
				</p>
			</div>
		</Accordion>
	{/each}
</div>
