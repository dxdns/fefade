<script lang="ts">
	import { classMapUtil } from "@dxdns-kit/core/utils"
	import type { HTMLInputAttributes } from "svelte/elements"
	import type { SizeType } from "@dxdns-kit/core/types"
	import { checkmarkIcon } from "@dxdns-kit/core/icons"
	import styles from "@dxdns-kit/core/styles/Checkbox.module.css"

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
	<input {...rest} readonly={rest.readonly ?? rest.checked} type="checkbox" />
	<div class={styles.wrapper}>
		<div class={styles.bg}></div>
		<svg
			class={styles.icon}
			viewBox="0 0 24 24"
			style="
			display: inline-block; 
			vertical-align: middle;
			width: 24px;
			height: 24px;
			"
		>
			<path
				stroke-linejoin="round"
				stroke-linecap="round"
				stroke-width="3"
				stroke="currentColor"
				d={checkmarkIcon}
			></path>
		</svg>
	</div>
	{rest["aria-label"]}
</label>
