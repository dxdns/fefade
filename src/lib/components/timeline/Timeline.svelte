<script lang="ts">
	import type { HTMLAttributes } from "svelte/elements"

	interface Props extends HTMLAttributes<HTMLDivElement> {}

	let { children }: Props = $props()
</script>

<div class="timeline">
	{@render children?.()}
</div>

<style>
	.timeline {
		position: relative;
		display: flex;
		flex-direction: column;
	}

	.timeline::after {
		content: "";
		position: absolute;
		width: 6px;
		background: var(--ff-color-surface);
		top: 0;
		bottom: 0;
		left: 50%;
		margin-left: -3px;
	}

	@media screen and (max-width: 425px) {
		.timeline::after {
			left: 31px;
		}
	}
</style>
