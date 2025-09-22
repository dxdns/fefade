<script lang="ts">
	import { classMapUtil } from "@fefade/core/utils"
	import type { HTMLAnchorAttributes } from "svelte/elements"
	import Link from "../link/index.js"
	import styles from "@fefade/core/styles/NavbarItem.module.css"
	import type { VariantType } from "@fefade/core/types"

	interface Props extends HTMLAnchorAttributes {
		variant?: VariantType
	}

	let { class: className = "", children, ...rest }: Props = $props()
</script>

<Link
	{...rest}
	class={classMapUtil(className, [className, styles], styles.navbarItem)}
>
	{@render children?.()}
</Link>
