<script lang="ts">
	import type { HTMLInputAttributes } from "svelte/elements"
	import styles from "./Wrapper.module.css"
	import { classMapUtil } from "@dxdns/feflow-core/utils"

	interface Props extends HTMLInputAttributes {
		ref?: HTMLInputElement
	}

	let { class: className = "", ref, children, ...rest }: Props = $props()
</script>

<input
	{...rest}
	class={classMapUtil(className, styles.controller)}
	type="checkbox"
	id={rest.id ?? "checkbox"}
	bind:this={ref}
	hidden
/>

<label class={styles.container} for={rest.id ?? "checkbox"}>
	{@render children?.()}
</label>
