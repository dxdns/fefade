<script lang="ts">
	import type { HTMLSelectAttributes } from "svelte/elements"
	import { classMapUtil } from "core/utils"
	import styles from "./Select.module.css"
	import { KeyboardArrowDownIcon } from "../../icons/index.js"

	interface Props extends HTMLSelectAttributes {}

	let { class: className = "", children, ...rest }: Props = $props()
</script>

<div
	class={classMapUtil(className, [className, styles], styles.select)}
	style={rest.style}
>
	<select {...rest} style={undefined}>
		{@render children?.()}
	</select>
	<KeyboardArrowDownIcon class={styles.icon} height="24px" width="24px" />
</div>
