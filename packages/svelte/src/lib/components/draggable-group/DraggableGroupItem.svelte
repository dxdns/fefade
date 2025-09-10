<script lang="ts">
	import type { HTMLAttributes } from "svelte/elements"
	import { classMapUtil } from "@dxdns-kit/core/utils"
	import styles from "@dxdns-kit/core/styles/DraggableGroupItem.module.css"

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
