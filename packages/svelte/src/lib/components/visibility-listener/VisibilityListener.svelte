<script lang="ts">
	import { checkVisibilityAction } from "@feflow-ui/core/actions"
	import type { HTMLAttributes } from "svelte/elements"
	import type { VisibilityListenerType } from "@feflow-ui/core/types"

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
