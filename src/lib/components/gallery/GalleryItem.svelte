<script lang="ts">
	import type { HTMLImgAttributes } from "svelte/elements"

	interface Props extends HTMLImgAttributes {
		caption?: {
			title: string
			description: string
		}
	}

	let { class: className = "", caption, children, ...rest }: Props = $props()
</script>

<figure>
	<img {...rest} />
	{#if caption}
		<figcaption>
			<h3>{caption.title}</h3>
			<p>{caption.description}</p>
		</figcaption>
	{/if}
</figure>

<style>
	figure {
		container: figure / inline-size;
		overflow: hidden;
		display: grid;
		grid-template-columns: minmax(0, 1fr);
		grid-template-rows: minmax(0, 1fr);
		block-size: 100%;
	}

	img {
		inline-size: 100%;
		block-size: 100%;
		max-inline-size: 100%;
		object-fit: cover;
		grid-area: 1 / 1 / -1 / -1;
		transition: scale 0.3s ease-in-out;
	}

	figure:hover img {
		scale: 1.125;
	}

	figcaption {
		grid-area: 1 / 1 / -1 / -1;
		align-self: end;
		z-index: 1;
		padding: 3em 15% 1em 1em;
		color: var(--ff-color-text);
		font-size: 0.875rem;
		line-height: 1.3;
		background: linear-gradient(transparent 25%, rgb(0 0 0 / 0.75));
		display: block;
	}

	figcaption h3 {
		font-size: 1.0625rem;
	}

	figcaption p {
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
</style>
