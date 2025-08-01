<script lang="ts">
	import { CloseIcon, MenuIcon } from "../../icons/index.js"
	import { classMapUtil } from "@dxdns/feflow-core/utils"
	import type { HTMLInputAttributes } from "svelte/elements"
	import type { SizeType } from "@dxdns/feflow-core/types"
	import styles from "@dxdns/feflow-core/styles/NavbarToggler.module.css"

	interface Props extends HTMLInputAttributes {
		visibleInSize?: SizeType
	}

	let { class: className = "", visibleInSize = "md", ...rest }: Props = $props()
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
