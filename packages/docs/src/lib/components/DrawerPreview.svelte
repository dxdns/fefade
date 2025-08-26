<script lang="ts">
	import { Button, Drawer, Window } from "@navnex-kit/svelte"

	let drawerStates = $state({
		top: false,
		left: false,
		right: false,
		bottom: false
	})

	type DrawerPosition = keyof typeof drawerStates

	let isOpenFixed = $state(false)

	function handleToggle(position: DrawerPosition) {
		drawerStates[position] = !drawerStates[position]
	}

	function handleClose(position: DrawerPosition) {
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

<Drawer.Overlay
	isOpen={isOpenFixed}
	onclick={() => {
		isOpenFixed = false
	}}
/>
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

<Window style="position: relative; min-height: 500px;">
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
	<div style="display:flex; gap:1rem; flex-wrap: wrap;">
		<Button onclick={() => handleToggle("top")}>Top With Overlay</Button>
		<Button onclick={() => handleToggle("left")}>Left With Overlay</Button>
		<Button onclick={() => handleToggle("right")}>Right</Button>
		<Button onclick={() => handleToggle("bottom")}>Bottom</Button>
	</div>
</Window>
