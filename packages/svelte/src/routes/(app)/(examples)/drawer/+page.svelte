<script lang="ts">
	import { Button, Drawer, Navbar, Window } from "@lib/index.js"

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

{#snippet header(handleClose?: () => void)}
	<Drawer.Header {handleClose}>
		<span>logo</span>
	</Drawer.Header>
{/snippet}

{#snippet content()}
	<Drawer.Content>
		<a href="/">label</a>
	</Drawer.Content>
{/snippet}

<Drawer isOpen={isOpenFixed} position="right">
	{@render header()}
	{@render content()}
</Drawer>
<Button
	onclick={() => {
		isOpenFixed = !isOpenFixed
	}}
>
	Right Fixed
</Button>

<Window style="height: 500px; width: 500px; position: relative;">
	<Drawer.Overlay
		isOpen={drawerStates.top}
		onclick={() => {
			handleClose("top")
		}}
		style="position: absolute;"
	/>
	<Drawer isOpen={drawerStates.top} position="top" style="position: absolute;">
		{@render header(() => {
			handleClose("top")
		})}
		{@render content()}
	</Drawer>

	<Drawer.Overlay
		isOpen={drawerStates.left}
		onclick={() => {
			handleClose("left")
		}}
		style="position: absolute;"
	/>
	<Drawer
		isOpen={drawerStates.left}
		position="left"
		style="position: absolute;"
	>
		{@render header(() => {
			handleClose("left")
		})}
		{@render content()}
	</Drawer>

	<Drawer
		isOpen={drawerStates.right}
		position="right"
		style="position: absolute;"
	>
		{@render header(() => {
			handleClose("right")
		})}
		{@render content()}
	</Drawer>

	<Drawer
		isOpen={drawerStates.bottom}
		position="bottom"
		style="position: absolute;"
	>
		{@render header(() => {
			handleClose("bottom")
		})}
		{@render content()}
	</Drawer>
	<Button onclick={() => handleToggle("top")}>Top With Overlay</Button>
	<Button onclick={() => handleToggle("left")}>Left With Overlay</Button>
	<Button onclick={() => handleToggle("right")}>Right</Button>
	<Button onclick={() => handleToggle("bottom")}>Bottom</Button>
</Window>

<Window style="height: 500px; width: 500px;">
	<div
		class="container"
		style="--size: {isOpen ? 'auto' : '0'}; overflow: hidden;"
	>
		<Drawer {isOpen} variant="permanent">
			<Drawer.Header
				handleClose={() => {
					isOpen = false
				}}
			>
				<span>header</span>
			</Drawer.Header>
			<Drawer.Content>
				<span>test</span>
			</Drawer.Content>
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
