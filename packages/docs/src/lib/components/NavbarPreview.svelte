<script lang="ts">
	import {
		Card,
		Drawer,
		HoverFollower,
		Navbar,
		themeConfig,
		useMediaQuery,
		Window
	} from "@dxdns/feflow"
	import { onDestroy } from "svelte"

	let isOpen = $state({
		1: false,
		2: false
	})

	const isMd = $derived(useMediaQuery("max-width", "md"))
	const theme = $derived(themeConfig())

	onDestroy(() => {
		isMd.destroy()
	})
</script>

{#snippet logo()}
	<h4 style="margin: 0;">Lo<span style="color: aqua;">Go</span></h4>
{/snippet}

{#snippet contentMain(s: string)}
	<main style="min-height: 100vh; width: 80%; margin: 3rem auto;">
		<h2>{s}</h2>
		<p>
			Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam tenetur
			voluptates odit illum, autem, alias perspiciatis numquam tempora sequi
			voluptate, iste recusandae nesciunt suscipit. Quasi ipsa dolore tempora ea
			tempore!
		</p>
	</main>
{/snippet}

{#snippet navItems()}
	<HoverFollower
		bgColor={theme.colors.success}
		style="flex-direction: {isMd.value ? 'column' : 'row'} !important;"
	>
		<Navbar.Item aria-current="page">active</Navbar.Item>
		<Navbar.Item>test1</Navbar.Item>
		<Navbar.Item>test2</Navbar.Item>
	</HoverFollower>
{/snippet}

<Window
	style="
	max-width: 500px; 
	overflow: auto; 
	position: relative;
	"
>
	<Drawer.Overlay
		isOpen={isOpen[1]}
		style="position: absolute; z-index: 1;"
		onclick={() => {
			isOpen[1] = false
		}}
	/>
	<Drawer isOpen={isOpen[1]} style="position: absolute; z-index: 2;">
		<Drawer.Content style="overflow: hidden; min-height: 100vh;">
			{@render navItems()}
		</Drawer.Content>
	</Drawer>

	<Navbar
		id="navFree"
		style="
        display: flex; 
        align-items: center; 
        gap: 1rem;
        margin: 0;
        "
	>
		{@render logo?.()}

		<div style="flex:1;"></div>

		{#if !isMd.value}
			{@render navItems()}
		{/if}

		<Navbar.Toggler
			id="toggler-1"
			onchange={() => {
				isOpen[1] = !isOpen[1]
			}}
			checked={isOpen[1]}
		/>
	</Navbar>
	{@render contentMain?.("navFree")}
</Window>

<Window
	style="
	max-height: 500px; 
	max-width: 500px; 
	overflow: auto; 
	position: relative;
	"
>
	<div style="text-align: center; margin: 5rem 0;">
		<h2>Scroll Down</h2>
		<p>Scroll down to see the sticky effect.</p>
	</div>

	<Drawer.Overlay
		isOpen={isOpen[2]}
		style="
		position: absolute; 
		min-height: calc(100vh + 550px); 
		z-index: 2;
		"
		onclick={() => {
			isOpen[2] = false
		}}
	/>
	<Drawer
		isOpen={isOpen[2]}
		style="
		position: absolute; 
		min-height: calc(100vh + 550px); 
		z-index: 3;
		width: 100%;
		"
	>
		<Drawer.Header
			handleClose={() => {
				isOpen[2] = false
			}}
		>
			<h4>header</h4>
		</Drawer.Header>
		<Drawer.Content style="overflow: hidden;">
			{@render navItems()}
		</Drawer.Content>
	</Drawer>

	<Navbar
		id="navSticky"
		style="
        position: sticky; 
        top: 0; 
        display: flex; 
        align-items: center; 
        gap: 1rem;
        margin: 0;
        z-index: 1;
        "
		isTranslucent
	>
		<Navbar.Toggler
			id="toggler-2"
			onchange={() => {
				isOpen[2] = !isOpen[2]
			}}
			checked={isOpen[2]}
		/>
		{#if !isMd.value}
			{@render navItems()}
		{/if}
		<div style="flex: 1;"></div>
		{@render logo?.()}
	</Navbar>

	<Card style="background: {theme.colors.warning};">
		{@render contentMain?.("navSticky")}
	</Card>
</Window>
