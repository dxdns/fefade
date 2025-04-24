<script lang="ts">
	import { Button, InputSearch } from "../lib/index.js"
</script>

<h1>Welcome to your library project</h1>
<p>
	Create your package using @sveltejs/package and preview/showcase your work
	with SvelteKit
</p>
<p>
	Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the
	documentation
</p>
{#snippet iconSnippet()}
	<span>icon</span>
{/snippet}
<InputSearch variant={"contained"} iconSearch={iconSnippet} />
<Button variant="contained">hello</Button>
