<script lang="ts">
	import type { ClassValue, HTMLAttributes } from "svelte/elements"
	import classMapUtil from "../../utils/classMapUtil.js"
	import styles from "./DrawerHeader.module.css"
	import IconButton from "../icon-button/index.js"
	import type { Snippet } from "svelte"

	interface Props extends HTMLAttributes<HTMLDivElement> {
		class?: ClassValue
		handleClick: () => void
		logo: Snippet
		closeIcon: Snippet
	}

	let {
		class: className = "",
		handleClick,
		logo,
		closeIcon,
		...rest
	}: Props = $props()
</script>

<div
	class={classMapUtil({
		[className as string]: true,
		[styles.drawerHeader]: true
	})}
	{...rest}
>
	<a href="/app" title="logo">
		{@render logo?.()}
	</a>
	<IconButton class={styles.buttonClose} onclick={handleClick}>
		{@render closeIcon?.()}
	</IconButton>
</div>
