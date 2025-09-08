<script lang="ts">
	import { classMapUtil } from "@dxdns-kit/core/utils"
	import type { HTMLAttributes } from "svelte/elements"
	import Card from "../card/index.js"
	import Avatar from "../avatar/index.js"
	import { Rating } from "../rating/index.js"
	import type { Snippet } from "svelte"
	import type { CardType, HTMLAttrAnchor } from "@dxdns-kit/core/types"

	interface Props
		extends Omit<HTMLAttributes<HTMLDivElement>, "color">,
			CardType,
			HTMLAttrAnchor {
		name: string
		role?: string
		avatarUrl?: string
		rating: number
		comment: string | Snippet<[]>
	}

	let {
		class: className = "",
		name,
		avatarUrl,
		role,
		rating,
		comment,
		...rest
	}: Props = $props()
</script>

<Card {...rest} class={classMapUtil(className, "testimonial")}>
	<div class="header">
		<div class="headerContent">
			<Avatar textFallback={name} src={avatarUrl} />
			<p style="margin: 0;">
				<strong>{name}</strong>
				{#if role}
					<br />
					<span class="muted">{role}</span>
				{/if}
			</p>
		</div>
		<Rating startIn={rating} style="font-size: 24px;" disabled />
	</div>

	{#if typeof comment === "string"}
		<p>
			<i>{comment}</i>
		</p>
	{:else}
		{@render comment?.()}
	{/if}
</Card>

<style>
	.header {
		display: flex;
		gap: 1rem;
		align-items: center;
		flex-wrap: wrap;
		justify-content: space-between;
	}

	.headerContent {
		display: flex;
		gap: 1rem;
		align-items: center;
		flex-wrap: wrap;
	}
</style>
