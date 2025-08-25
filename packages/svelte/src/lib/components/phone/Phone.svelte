<script lang="ts">
	import { classMapUtil } from "@feflow-ui/core/utils"
	import type { Snippet } from "svelte"
	import type { HTMLAttributes } from "svelte/elements"

	interface Props extends Omit<HTMLAttributes<HTMLDivElement>, "color"> {
		notch?: Snippet<[]>
	}

	let { class: className = "", notch, children, ...rest }: Props = $props()
</script>

<div {...rest} class={classMapUtil(className, "phone")}>
	<div class="side-button short top1"></div>
	<div class="side-button medium top2"></div>
	<div class="side-button medium top3"></div>
	<div class="side-button long top4 right"></div>

	{@render notch?.()}

	<div class="side-button long top4 right"></div>

	<div class="screen-wrapper">
		<div class="screen">
			{@render children?.()}
		</div>
	</div>
</div>

<style>
	.phone {
		background: var(--ff-primary);
		position: relative;
		isolation: isolate;
		aspect-ratio: 350 / 712;
		height: 712px;
		width: 350px;
		max-width: 100%;
		border-radius: 60px;
	}

	.side-button {
		background: var(--ff-on-secondary);
		position: absolute;
		width: 3px;
		border-radius: 4px;
	}

	.side-button.short {
		height: 32px;
		top: 80px;
		left: -2px;
	}

	.side-button.medium {
		height: 56px;
		left: -3px;
	}

	.top2 {
		top: 140px;
	}

	.top3 {
		top: 210px;
	}

	.side-button.long {
		height: 80px;
		right: -3px;
	}

	.top4 {
		top: 180px;
	}

	.side-button.right {
		left: auto;
		right: -3px;
	}

	.screen-wrapper {
		position: absolute;
		inset: 0;
		height: 100%;
		width: 100%;
		padding: 12px;
		box-sizing: border-box;
	}

	.screen {
		background-color: var(--ff-secondary);
		position: relative;
		height: 100%;
		width: 100%;
		overflow: hidden;
		border-radius: 50px;
	}
</style>
