<script lang="ts">
	import type { ClassValue, HTMLAttributes } from "svelte/elements"
	import classMapUtil from "../../utils/classMapUtil.js"
	import Avatar from "../avatar/index.js"
	import styles from "./TopBar.module.css"
	import IconButton from "../icon-button/index.js"
	import type { SvelteComponent } from "svelte"

	interface Props extends HTMLAttributes<HTMLDivElement> {
		class?: ClassValue
		username: string
		userRole: string
		imageUrl?: string
		handleClick: () => void
		menuIcon: typeof SvelteComponent
	}

	let {
		class: className = "",
		username,
		userRole,
		imageUrl,
		handleClick,
		menuIcon,
		...rest
	}: Props = $props()
</script>

<div
	class={classMapUtil({
		[className as string]: true,
		[styles.topBar]: true
	})}
	{...rest}
>
	<IconButton id={styles.menuBtn} onclick={handleClick}>
		{@html menuIcon}
	</IconButton>
	<div class={styles.profile}>
		<div class={styles.info}>
			<p>
				Hey, <b>{username}</b>
			</p>
			<small class="text-muted">{userRole}</small>
		</div>
		<Avatar src={imageUrl} textFallback="test" />
	</div>
</div>
