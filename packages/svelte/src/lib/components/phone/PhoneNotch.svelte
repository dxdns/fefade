<script lang="ts">
	import { classMapUtil } from "@navnex-kit/core/utils"
	import type { HTMLAttributes } from "svelte/elements"

	interface Props extends Omit<HTMLAttributes<HTMLDivElement>, "color"> {}

	let { class: className = "", children, ...rest }: Props = $props()
</script>

<div {...rest} class={classMapUtil(className, "notch")}>
	<div class="content">
		{@render children?.()}
	</div>
</div>

<style>
	.notch {
		position: absolute;
		top: 18px;
		z-index: 10;
		width: 100%;
		display: flex;
		justify-content: center;
		margin: 0;
	}

	.content {
		height: 28px;
		width: 96px;
		border-radius: 9999px;
		background-color: black;
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>
