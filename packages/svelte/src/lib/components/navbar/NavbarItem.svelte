<script lang="ts">
	import { classMapUtil } from "@fefade/core/utils"
	import type { HTMLAnchorAttributes } from "svelte/elements"
	import Link from "../link/index.js"
	import type { LinkType, VariantType } from "@fefade/core/types"
	import styles from "@fefade/core/styles/NavbarItem.module.css"

	interface Props extends Omit<HTMLAnchorAttributes, "class">, LinkType {
		variant?: VariantType
	}

	let { children, ...rest }: Props = $props()
</script>

<Link {...rest} class={classMapUtil(rest.className, styles.navbarItem)}>
	{@render children?.()}
</Link>
