<script lang="ts">
	import { Button, useMediaQuery } from "@fefade/svelte"
	import type { Snippet } from "svelte"

	type DeviceType = "mobile" | "tablet" | "desktop"

	interface Props {
		children: Snippet<[]>
	}

	let { children }: Props = $props()

	const resolutions: Record<DeviceType, number> = {
		mobile: 425,
		tablet: 768,
		desktop: 1280
	}

	const iconsData: Record<DeviceType, string> = {
		mobile: `
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" height="24px" width="24px">
			<path d="M144 128C144 92.7 172.7 64 208 64L432 64C467.3 64 496 92.7 496 128L496 512C496 547.3 467.3 576 432 576L208 576C172.7 576 144 547.3 144 512L144 128zM208 128L208 432L432 432L432 128L208 128zM320 536C337.7 536 352 521.7 352 504C352 486.3 337.7 472 320 472C302.3 472 288 486.3 288 504C288 521.7 302.3 536 320 536z"/>
		</svg>
		`,
		tablet: `
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" height="24px" width="24px">
			<path d="M96 128C96 92.7 124.7 64 160 64L480 64C515.3 64 544 92.7 544 128L544 512C544 547.3 515.3 576 480 576L160 576C124.7 576 96 547.3 96 512L96 128zM352 496C352 478.3 337.7 464 320 464C302.3 464 288 478.3 288 496C288 513.7 302.3 528 320 528C337.7 528 352 513.7 352 496zM480 128L160 128L160 416L480 416L480 128z"/>
		</svg>
		`,
		desktop: `
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" height="24px" width="24px">
			<path d="M128 96C92.7 96 64 124.7 64 160L64 416C64 451.3 92.7 480 128 480L272 480L256 528L184 528C170.7 528 160 538.7 160 552C160 565.3 170.7 576 184 576L456 576C469.3 576 480 565.3 480 552C480 538.7 469.3 528 456 528L384 528L368 480L512 480C547.3 480 576 451.3 576 416L576 160C576 124.7 547.3 96 512 96L128 96zM160 160L480 160C497.7 160 512 174.3 512 192L512 352C512 369.7 497.7 384 480 384L160 384C142.3 384 128 369.7 128 352L128 192C128 174.3 142.3 160 160 160z"/>
		</svg>
		`
	}

	let widthSelected = $state(resolutions.desktop)

	const isLg = useMediaQuery("min-width", "lg")
</script>

{#if isLg.value}
	<div
		style="
			display: flex;
			align-items: center;
			gap: 1rem;
			"
	>
		{#each Object.keys(resolutions) as device (device)}
			{@const width = resolutions[device as DeviceType]}
			<Button
				disabled={widthSelected === width}
				onclick={() => {
					widthSelected = width
				}}
			>
				{@html iconsData[device as DeviceType]}
			</Button>
		{/each}
	</div>
{/if}

<div
	style="
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 1rem;
		"
>
	<div
		style="
			width: {widthSelected}px;
			transition: width 0.3s ease, height 0.3s ease;
			"
	>
		{@render children?.()}
	</div>
</div>
