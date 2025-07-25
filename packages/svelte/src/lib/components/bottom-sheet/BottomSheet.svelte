<script lang="ts">
	import { bottomSheetAction } from "@dxdns/feflow-core/actions"
	import { classMapUtil } from "@dxdns/feflow-core/utils"
	import { tick } from "svelte"
	import type { HTMLAttributes } from "svelte/elements"

	interface Props extends HTMLAttributes<HTMLDivElement> {
		isOpen: boolean
		handleClose: () => void
	}

	let {
		class: className = "",
		isOpen,
		handleClose,
		children,
		...rest
	}: Props = $props()

	async function handleOpen() {
		if (isOpen) {
			await tick()
			document.body.style.overflowY = "hidden"
		}
	}

	$effect(() => {
		handleOpen()
	})
</script>

<div
	{...rest}
	use:bottomSheetAction={{ handleClose }}
	class={classMapUtil(className, "bottomSheet", {
		show: isOpen
	})}
>
	<div class="content">
		<div class="header">
			<div class="dragIcon">
				<span></span>
			</div>
		</div>

		<div class="body">
			{@render children?.()}
		</div>
	</div>
</div>

<style>
	.bottomSheet {
		position: fixed;
		width: 100%;
		display: flex;
		align-items: center;
		flex-direction: column;
		justify-content: flex-end;
		transition: 0.1s linear;
		z-index: 999;
		margin: 0;
		left: 0;
		right: 0;
		bottom: 0;
		box-sizing: initial;
		pointer-events: none;
	}

	.bottomSheet.show {
		opacity: 1;
		pointer-events: auto;
	}

	.bottomSheet .content {
		width: 100%;
		position: relative;
		background: var(--ff-surface);
		color: var(--ff-on-surface);
		max-height: 100vh;
		height: 50vh;
		max-width: 1150px;
		padding: 1.5rem 2rem;
		transform: translateY(100%);
		border-radius: var(--radius-lg) var(--radius-lg) 0 0;
		box-shadow: 0 10px 15px rgba(0, 0, 0, 0.15);
		transition: 0.3s ease;
		border-top-left-radius: 15px;
		border-top-right-radius: 15px;
	}

	.bottomSheet.show .content {
		transform: translateY(0%);
	}

	.bottomSheet.dragging .content {
		transition: none;
	}

	.bottomSheet.fullscreen {
		top: 0;
	}

	.bottomSheet.fullscreen .content {
		overflow-y: hidden;
	}

	.bottomSheet .header {
		display: flex;
		justify-content: center;
	}

	.header .dragIcon {
		cursor: grab;
		user-select: none;
		padding: 0.75rem;
		margin-top: 0.75rem;
	}

	.header .dragIcon span {
		height: 4px;
		width: 40px;
		display: block;
		background: var(--ff-primary);
		border-radius: var(--radius-pill);
	}

	.bottomSheet .body {
		height: 100%;
		overflow-y: auto;
		padding: 1rem 0 1.5rem;
		scrollbar-width: none;
	}

	.bottomSheet .body::-webkit-scrollbar {
		width: 0;
	}
</style>
