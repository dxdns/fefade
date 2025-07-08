<script lang="ts">
	import type { HTMLAttributes } from "svelte/elements"
	import { classMapUtil } from "@dxdns/feflow-core/utils"
	import Button from "../button/index.js"
	import { CloseIcon } from "../../icons/index.js"
	import type { AlignType } from "../../types/index.js"

	export interface ModalHeaderProps {
		align?: AlignType
		handleClose?: () => void
	}

	interface Props extends ModalHeaderProps, HTMLAttributes<HTMLDivElement> {}

	let {
		class: className = "",
		align = "start",
		handleClose,
		children,
		...rest
	}: Props = $props()
</script>

<div {...rest} class={classMapUtil(className, "header")}>
	<div class="content" style="justify-content: {align};">
		{@render children?.()}
	</div>
	{#if handleClose}
		<Button variant="text" onclick={handleClose}>
			<CloseIcon />
		</Button>
	{/if}
</div>

<style>
	.header {
		padding: 0 3px 0 3px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 1rem;
		height: 70px;
		border-bottom: 1px solid var(--ff-border);
		margin-bottom: 1rem;
	}

	.content {
		overflow: hidden;
		text-overflow: ellipsis;
		-webkit-box-orient: vertical;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		line-clamp: 2;
		flex: 1;
		display: flex;
		padding: 1rem;
	}
</style>
