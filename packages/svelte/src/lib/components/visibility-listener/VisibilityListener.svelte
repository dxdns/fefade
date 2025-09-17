<script lang="ts">
	import { checkVisibilityAction } from "@fefade/core/actions"
	import type { HTMLAttributes } from "svelte/elements"
	import type { VisibilityListenerType } from "@fefade/core/types"

	interface Props
		extends HTMLAttributes<HTMLDivElement>,
			VisibilityListenerType {}

	let { class: className = "", callback, children, ...rest }: Props = $props()
</script>

<div
	{...rest}
	class={className}
	use:checkVisibilityAction={{
		callback
	}}
>
	{@render children?.()}
</div>
