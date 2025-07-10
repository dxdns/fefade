<script lang="ts">
	import type { HTMLAttributes } from "svelte/elements"
	import { classMapUtil } from "@dxdns/feflow-core/utils"
	import type { SizeType } from "@dxdns/feflow-core/types"

	interface Props extends HTMLAttributes<HTMLElement> {
		size?: SizeType
	}

	let {
		class: className = "",
		size = "md",
		children,
		...rest
	}: Props = $props()
</script>

<kbd {...rest} class={classMapUtil(className, size)}>{@render children?.()}</kbd
>

<style>
	kbd {
		background: var(--ff-surface, #f9f9f9);
		color: var(--ff-text, #333);
		border: 1px solid var(--ff-border, #b4b4b4);
		border-radius: 6px;
		padding: 0.2em 0.5em;
		font-family: inherit;
		font-weight: 600;
		line-height: 1;
		white-space: nowrap;
		user-select: none;
		box-shadow:
			0 1px 1px rgba(0, 0, 0, 0.2),
			inset 0 2px 0 rgba(255, 255, 255, 0.7);
		border-bottom: 4px solid
			color-mix(in srgb, var(--ff-border, #b4b4b4) 90%, gray);
	}

	kbd.xs,
	kbd.sm {
		border-bottom-width: 2px;
	}

	kbd.xs {
		font-size: 0.625rem;
		padding: 0.1em 0.3em;
	}

	kbd.sm {
		font-size: 0.75rem;
		padding: 0.15em 0.4em;
	}

	kbd.md {
		font-size: 1rem;
	}

	kbd.lg {
		font-size: 1.5rem;
		padding: 0.25em 0.6em;
	}

	kbd.xl {
		font-size: 2rem;
		padding: 0.3em 0.75em;
	}
</style>
