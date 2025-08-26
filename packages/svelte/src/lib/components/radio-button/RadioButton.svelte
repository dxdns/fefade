<script lang="ts">
	import type { HTMLInputAttributes } from "svelte/elements"
	import styles from "./RadioButton.module.css"
	import type { SizeType } from "@navnex-kit/core/types"
	import { classMapUtil } from "@navnex-kit/core/utils"

	interface Props extends Omit<HTMLInputAttributes, "size"> {
		size?: SizeType
	}

	let { class: className = "", size = "sm", ...rest }: Props = $props()
</script>

<label class={classMapUtil(className, [className, styles], styles.radioButton)}>
	<input type="radio" {...rest} />
	<div class={classMapUtil(styles.circle, [size, styles])}></div>
	{rest["aria-label"]}
</label>
