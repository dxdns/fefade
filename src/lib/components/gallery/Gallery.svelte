<script lang="ts">
	import type { HTMLAttributes } from "svelte/elements"
	import styles from "./Gallery.module.css"

	interface Props extends HTMLAttributes<HTMLDivElement> {}

	let { class: className = "", children, ...rest }: Props = $props()
</script>

<div {...rest} class={styles.gallery}>
	{@render children?.()}
</div>
