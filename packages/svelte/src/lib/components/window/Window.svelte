<script lang="ts">
	import type { HTMLAttributes } from "svelte/elements"
	import Card from "../card/index.js"
	import Badge from "../badge/index.js"
	import type { Snippet } from "svelte"
	import type { CardType, HTMLAttrAnchor } from "@navnex-kit/core/types"
	import styles from "@navnex-kit/core/styles/Window.module.css"

	interface Props
		extends HTMLAttributes<HTMLDivElement>,
			CardType,
			HTMLAttrAnchor {
		label?: string | Snippet<[]>
	}

	let { class: className = "", label, children, ...rest }: Props = $props()
</script>

<Card {...rest} class={className}>
	<div class={styles.header}>
		<div class={styles.actions}>
			<Badge class="bg-error" roundedFull size="xs"></Badge>
			<Badge class="bg-warning" roundedFull size="xs"></Badge>
			<Badge class="bg-success" roundedFull size="xs"></Badge>
		</div>
		{#if typeof label === "string"}
			{label}
		{:else}
			{@render label?.()}
		{/if}
	</div>
	{@render children?.()}
</Card>
