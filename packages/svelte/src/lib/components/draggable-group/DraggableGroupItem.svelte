<script lang="ts">
	import type { HTMLAttributes } from "svelte/elements"
	import { classMapUtil } from "@fefade/core/utils"
	import styles from "@fefade/core/styles/DraggableGroupItem.module.css"

	interface Props extends HTMLAttributes<Omit<HTMLDivElement, "id">> {
		id: string
	}

	let { class: className = "", id, children, ...rest }: Props = $props()
</script>

<div
	{...rest}
	{id}
	draggable="true"
	class={classMapUtil(className, styles.draggableGroupItem)}
>
	{@render children?.()}
</div>
