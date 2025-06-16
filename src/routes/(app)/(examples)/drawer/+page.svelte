<script lang="ts">
	import { Button, Drawer, Navbar, Window } from "@/lib/index.js"

	type PositionType = "top" | "left" | "right" | "bottom"

	let drawerStates = $state({
		top: false,
		left: false,
		right: false,
		bottom: false
	})

	let isOpen = $state(false)

	let isOpenFixed = $state(false)

	function handleToggle(position: PositionType) {
		drawerStates[position] = !drawerStates[position]
	}

	function handleClose(position: PositionType) {
		drawerStates[position] = false
	}
</script>

{#snippet header()}
	<Drawer.Header>
		{#snippet content()}
			<span>logo</span>
		{/snippet}
	</Drawer.Header>
{/snippet}

{#snippet content()}
	<a href="/">label</a>
{/snippet}

<Drawer
	isOpen={isOpenFixed}
	position="right"
	handleClose={() => {
		isOpenFixed = false
	}}
	{header}
	{content}
/>
<Button
	onclick={() => {
		isOpenFixed = !isOpenFixed
	}}
>
	Right Fixed
</Button>

<Window style="height: 500px; width: 500px; position: relative;">
	<Drawer
		isOpen={drawerStates.top}
		position="top"
		style="position: absolute;"
		handleClose={() => handleClose("top")}
		{header}
		{content}
	/>

	<Drawer
		isOpen={drawerStates.left}
		position="left"
		handleClose={() => handleClose("left")}
		{header}
		{content}
	/>

	<Drawer
		isOpen={drawerStates.right}
		position="right"
		handleClose={() => handleClose("right")}
		{header}
		{content}
	/>

	<Drawer
		isOpen={drawerStates.bottom}
		position="bottom"
		handleClose={() => handleClose("bottom")}
		{header}
		{content}
	/>
	<Button onclick={() => handleToggle("top")}>Top</Button>
	<Button onclick={() => handleToggle("left")}>Left</Button>
	<Button onclick={() => handleToggle("right")}>Right</Button>
	<Button onclick={() => handleToggle("bottom")}>Bottom</Button>
</Window>

<Window style="height: 500px; width: 500px;">
	<div
		class="container"
		style="--size: {isOpen ? 'auto' : '0'}; overflow: hidden;"
	>
		<Drawer
			{isOpen}
			variant="permanent"
			handleClose={() => {
				isOpen = false
			}}
		>
			{#snippet header()}
				<Drawer.Header
					handleClose={() => {
						isOpen = false
					}}
				>
					{#snippet content()}
						<span>header</span>
					{/snippet}
				</Drawer.Header>
			{/snippet}
			{#snippet content()}
				<span>test</span>
			{/snippet}
		</Drawer>

		<Navbar>
			{#if !isOpen}
				<Button
					onclick={() => {
						isOpen = !isOpen
					}}
				>
					Left
				</Button>
			{/if}

			<span>Menu</span>
		</Navbar>
	</div>
</Window>

<style>
	.container {
		display: grid;
		grid-template-columns: var(--size) 1fr;
	}
</style>
