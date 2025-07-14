<script lang="ts">
	import type { SVGAttributes } from "svelte/elements"
	import { generateSvgElementUtil } from "@dxdns/feflow-core/utils"
	import { closeIcon } from "@dxdns/feflow-core/icons"

	interface Props extends SVGAttributes<SVGSVGElement> {}

	let { class: className, ...rest }: Props = $props()
</script>

{@html generateSvgElementUtil({ svgPath: closeIcon, className, ...rest })}
