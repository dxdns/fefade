<script lang="ts">
	import type { HTMLAttributes } from "svelte/elements"
	import { classMapUtil } from "@fefade/core/utils"
	import styles from "@fefade/core/styles/CodeItem.module.css"

	interface Props extends HTMLAttributes<HTMLPreElement> {
		lineNumber: number
	}

	let { class: className = "", lineNumber, children, ...rest }: Props = $props()
</script>

<pre
	{...rest}
	class={classMapUtil(className, [className, styles], styles.codeItem)}
	data-prefix={lineNumber}>
    <code class={styles.content}>{@render children?.()}</code>
</pre>
