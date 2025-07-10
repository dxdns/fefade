<script lang="ts">
	import { CloseIcon, MenuIcon } from "../../icons/index.js"
	import { classMapUtil } from "@feflow/core/utils"
	import type { HTMLInputAttributes } from "svelte/elements"
	import styles from "./NavbarToggler.module.css"
	import type { SizeType } from "@feflow/core/types"

	interface Props extends HTMLInputAttributes {
		visibleInSize?: SizeType
	}

	let {
		class: className = "",
		visibleInSize = "md",
		children,
		...rest
	}: Props = $props()
</script>

<div
	class={classMapUtil(
		className,
		[className, styles],
		[visibleInSize, styles],
		styles.toggler
	)}
>
	<input
		{...rest}
		class={styles.controller}
		type="checkbox"
		name={rest.id ?? "toggler"}
		id={rest.id ?? "toggler"}
		style={undefined}
	/>
	<label class={styles.container} for={rest.id ?? "toggler"}>
		<MenuIcon class={styles.menuIcon} />
		<CloseIcon class={styles.closeIcon} />
	</label>
</div>
