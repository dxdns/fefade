<script lang="ts">
	import { onScrollEndAction } from "@dxdns-kit/core/actions"
	import type { HTMLAttributes } from "svelte/elements"

	interface Props extends HTMLAttributes<HTMLDivElement> {
		callback: () => void
	}

	let { class: className = "", callback, children, ...rest }: Props = $props()
</script>

<div {...rest} class={className} use:onScrollEndAction={callback}>
	{@render children?.()}
</div>
