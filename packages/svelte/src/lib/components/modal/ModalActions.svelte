<script lang="ts">
	import type { HTMLAttributes } from "svelte/elements"
	import { classMapUtil, mergeStyleUtil } from "@feflow/core/utils"
	import type { AlignType } from "@feflow/core/types"

	export interface ModalActionsProps {
		align?: AlignType
	}

	interface Props extends ModalActionsProps, HTMLAttributes<HTMLDivElement> {}

	let {
		class: className = "",
		align = "end",
		children,
		...rest
	}: Props = $props()
</script>

<div
	{...rest}
	class={classMapUtil(className, "actions")}
	style={mergeStyleUtil(`--align: ${align};`, rest.style)}
>
	{@render children?.()}
</div>

<style>
	.actions {
		display: flex;
		justify-content: var(--align, flex-end);
		gap: 0.5rem;
		padding: 0.75rem 1rem;
		border-top: 1px solid var(--ff-border);
		flex-wrap: wrap;
		margin-top: 0;
	}

	.actions.border-0 {
		border-top: none;
	}
</style>
