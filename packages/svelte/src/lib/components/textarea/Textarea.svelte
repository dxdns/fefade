<script lang="ts">
	import { classMapUtil } from "@dxdns-kit/core/utils"
	import type { HTMLTextareaAttributes } from "svelte/elements"
	import styles from "@dxdns-kit/core/styles/Textarea.module.css"

	interface Props extends HTMLTextareaAttributes {}

	let { class: className = "", ...rest }: Props = $props()
</script>

<textarea {...rest} class={classMapUtil(className, styles.textarea)}>
</textarea>
