<script lang="ts">
	import { Accordion } from "@/lib/index.js"
</script>

<div style="width: 500px; margin: 3rem auto;">
	{#each Array.from(Array(10)) as _, i}
		<Accordion
			id="sec{i}"
			variant={i % 2 ? "contained" : i % 3 ? undefined : "outlined"}
			label="test {i}"
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
		<br />
	{/each}
</div>
