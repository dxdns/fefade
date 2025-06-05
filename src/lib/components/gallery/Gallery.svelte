<script lang="ts">
	import type { HTMLAttributes } from "svelte/elements"
	import styles from "./Gallery.module.css"
	import { classMapUtil } from "../../utils/index.js"

	interface Props extends HTMLAttributes<HTMLDivElement> {}

	let { class: className = "", children, ...rest }: Props = $props()
</script>

<div {...rest} class={classMapUtil(className, styles.gallery)}>
	{@render children?.()}
</div>
