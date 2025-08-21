<script lang="ts">
	import type { HTMLAttributes } from "svelte/elements"
	import type { GridType } from "@feflow-ui/core/types"
	import { Grid } from "../grid/index.js"

	interface Props extends HTMLAttributes<HTMLDivElement>, GridType {}

	let { children, ...rest }: Props = $props()
</script>

<Grid {...rest}>
	{@render children?.()}
</Grid>
