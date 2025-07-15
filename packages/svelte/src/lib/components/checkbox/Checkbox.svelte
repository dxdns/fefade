<script lang="ts">
	import { classMapUtil } from "@dxdns/feflow-core/utils"
	import type { HTMLInputAttributes } from "svelte/elements"
	import type { SizeType } from "@dxdns/feflow-core/types"
	import styles from "@dxdns/feflow-core/styles/Checkbox.module.css"
	import { CheckmarkIcon } from "../../icons/index.js"

	interface Props extends Omit<Omit<HTMLInputAttributes, "size">, "type"> {
		size?: SizeType
	}

	let { class: className = "", size = "sm", ...rest }: Props = $props()
</script>

<label
	class={classMapUtil(
		className,
		[className, styles],
		styles.checkbox,
		[size, styles],
		{
			["text-muted"]: rest.disabled
		}
	)}
>
	<input {...rest} type="checkbox" />
	<div class={styles.wrapper}>
		<div class={styles.bg}></div>
		<CheckmarkIcon class={styles.icon} />
	</div>
	{rest["aria-label"]}
</label>
