<script lang="ts">
	import { classMapUtil } from "@dxdns/feflow-core/utils"
	import type { HTMLInputAttributes } from "svelte/elements"
	import styles from "@dxdns/feflow-core/styles/ColorPicker.module.css"

	interface Props extends Omit<HTMLInputAttributes, "type"> {}

	let { class: className = "", ...rest }: Props = $props()
</script>

<input
	{...rest}
	class={classMapUtil(className, [className, styles], styles.colorPicker)}
	defaultValue="#ffffff"
	type="color"
/>
