<script lang="ts">
	import { classMapUtil } from "@dxdns/feflow-core/utils"
	import type { HTMLAttributes } from "svelte/elements"

	interface Props extends HTMLAttributes<HTMLDivElement> {}

	let { class: className = "", children, ...rest }: Props = $props()
</script>

<div {...rest} class={classMapUtil(className, "timeline")}>
	{@render children?.()}
</div>

<style>
	.timeline {
		position: relative;
		display: flex;
		flex-direction: column;
		margin: 0;
	}

	.timeline::after {
		content: "";
		position: absolute;
		width: 6px;
		background: var(--ff-surface);
		top: 0;
		bottom: 0;
		left: 50%;
		margin-left: -3px;
	}

	@media screen and (max-width: 425px) {
		.timeline::after {
			left: 24px;
		}
	}
</style>
