<script lang="ts">
	import { onScrollEndAction } from "../../actions/index.js"
	import type { HTMLAttributes } from "svelte/elements"

	interface Props extends HTMLAttributes<HTMLDivElement> {
		callback: () => void
	}

	let { class: className = "", callback, children, ...rest }: Props = $props()
</script>

<div {...rest} use:onScrollEndAction={callback}>
	{@render children?.()}
</div>
