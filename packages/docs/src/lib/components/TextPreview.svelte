<script lang="ts">
	import { Text } from "@fefade/svelte"
</script>

<div
	style="
    max-width: 500px; 
    margin: 1rem auto; 
    display: flex; 
    flex-direction: column; 
    gap: 1rem;
    "
>
	<Text as="h1" style="color: aqua;">Main Title</Text>

	<Text as="h2" style="font-weight: bold;">Subtitle Bold</Text>

	<Text as="p" lines={2}>
		Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
		tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
		quis nostrud.
	</Text>

	<Text as="span" style="font-style: italic; color: purple;">
		Italic Span Text
	</Text>

	<Text as="small" style="color: gray;">Small caption or note</Text>
</div>
