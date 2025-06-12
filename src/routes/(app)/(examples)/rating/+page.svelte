<script lang="ts">
	import { Rating } from "@/lib/index.js"
</script>

<h1>default</h1>
<Rating id="one" />

<br />
<h1>n stars</h1>
<Rating id="two" color="red" stars={3} startIn={3} />

<br />
<h1>Start in</h1>
{#each Array.from(Array(5)) as _, i}
	<Rating id={`one-${i}`} startIn={i + 1} color="blue" />
{/each}

<br />
<h1>Colors</h1>
{#each ["aqua", "red", "green"] as color, i}
	<Rating id={`two-${i}`} startIn={i + 1} {color} />
{/each}

<br />
<h1>Sizes</h1>
{#each [13, "2rem", "48px"] as size, i}
	<Rating id={`three-${i}`} startIn={i + 1} {size} />
	<br />
{/each}
