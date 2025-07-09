<script lang="ts">
	import type { HTMLAttributes } from "svelte/elements"
	import { scrollSectionAction } from "../../actions/index.js"

	interface Props extends HTMLAttributes<HTMLElement> {}

	let { class: className, children, ...rest }: Props = $props()
</script>

<section {...rest} class={className} use:scrollSectionAction>
	{@render children?.()}
</section>
