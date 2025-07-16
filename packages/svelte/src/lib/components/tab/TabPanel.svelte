<script lang="ts">
	import { fade, fly } from "svelte/transition"
	import type { TransitionEntry } from "@dxdns/feflow-core/types"
	import { transitionUtil } from "@dxdns/feflow-core/utils"
	import type { HTMLAttributes } from "svelte/elements"
	import { mergeStyleUtil } from "@dxdns/feflow-core/utils"

	export interface TabContentProps {
		isActive?: boolean
		transition?: TransitionEntry
	}

	interface Props extends TabContentProps, HTMLAttributes<HTMLDivElement> {}

	let {
		class: className = "",
		isActive = true,
		transition,
		children,
		...rest
	}: Props = $props()

	const style = mergeStyleUtil("padding: 1rem;", rest.style)
</script>

{#if isActive}
	<div
		{...rest}
		class={className}
		{style}
		use:transitionUtil={transition ?? {
			in: [fly, { x: 100, duration: 200 }],
			out: [fade, { duration: 100 }]
		}}
	>
		{@render children?.()}
	</div>
{/if}
