<script lang="ts">
	import { Menu, Navbar, Separator, Window } from "@/lib/index.js"

	let isOpen = $state(false)
</script>

{#snippet logo()}
	<h2>Lo<span style="color: aqua;">Go</span></h2>
{/snippet}

{#snippet contentMain(s: string)}
	<main style="min-height: 100vh; width: 80%; margin: 3rem auto;">
		<h1>{s}</h1>
	</main>
{/snippet}

<Window
	style="height: 500px; width: 500px; overflow: auto; position: relative;"
>
	<Navbar id="navFree" style="display: flex; align-items: center; gap: 1rem;">
		{@render logo?.()}

		<div style="flex:1;"></div>

		<div class={`menu ${isOpen ? "show" : ""}`}>
			<Navbar.Item
				aria-current="page"
				style={isOpen ? "width: 100%; border-radius: 0;" : ""}
			>
				active
			</Navbar.Item>
			<Navbar.Item style={isOpen ? "width: 100%; border-radius: 0;" : ""}>
				test
			</Navbar.Item>
		</div>

		<Menu id="menu-navFree">
			{#snippet anchor()}
				<Navbar.Item>Open menu</Navbar.Item>
			{/snippet}

			{#snippet items()}
				<Menu.Item>test1</Menu.Item>
				<Separator />
				<a href="/">
					<Menu.Item>test2</Menu.Item>
				</a>
				<Separator />
				<a href="/">
					<Menu.Item>test3</Menu.Item>
				</a>
			{/snippet}
		</Menu>

		<Navbar.Toggler
			checked={isOpen}
			onclick={() => {
				isOpen = !isOpen
			}}
			id="toggler-1"
		/>
	</Navbar>
	{@render contentMain?.("navFree")}
</Window>

<Window style="height: 500px; width: 500px; overflow: auto;">
	<div style="text-align: center; margin: 5rem 0;">
		<h2>Scroll Down</h2>
		<p>Scroll down to see the sticky effect.</p>
	</div>

	<Navbar
		id="navSticky"
		style="position: sticky; top: 0; display: flex; align-items: center; gap: 1rem;"
		isTranslucent
	>
		<Navbar.Toggler id="toggler-2" />
		<Navbar.Item variant="contained">test1</Navbar.Item>
		<Navbar.Item variant="outlined">test2</Navbar.Item>
		<div style="flex: 1;"></div>
		{@render logo?.()}
	</Navbar>
	{@render contentMain?.("navSticky")}
</Window>

<style>
	.menu {
		display: flex;
		align-items: center;
		gap: 1rem;
	}

	@media screen and (max-width: 768px) {
		.menu {
			opacity: 0;
			max-height: 0px;
			overflow: hidden;
			flex-direction: column;
			position: absolute;
			right: 0;
			background: rgba(0, 0, 0, 0.712);
			backdrop-filter: blur(15px);
			top: 35%;
			transform: translate(0, 35%);
			transition:
				max-height 0.3s ease,
				opacity 0.3s ease;
			gap: 0;
			border-radius: 15px;
		}

		.menu.show {
			max-height: 300px;
			opacity: 1;
			overflow: auto;
		}
	}
</style>
