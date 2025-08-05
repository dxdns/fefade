<script lang="ts">
	import { Button, Menu } from "@/index.js"
</script>

<div class="container">
	<Menu id="menu1" openOnHover>
		{#snippet anchor()}
			<Button>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					height="24px"
					viewBox="0 -960 960 960"
					width="24px"
					fill="currentColor"
				>
					<path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" />
				</svg>
				<span>open on hover</span>
			</Button>
		{/snippet}

		{#snippet items()}
			<Menu.Item
				onclick={() => {
					console.log("edit")
				}}
			>
				Edit
			</Menu.Item>
			<Menu.Item
				onclick={() => {
					console.log("print")
				}}
			>
				Print
			</Menu.Item>
		{/snippet}
	</Menu>

	<Menu id="menu2" isTranslucent>
		{#snippet anchor()}
			<Button>
				<span>open 1</span>
			</Button>
		{/snippet}

		{#snippet items()}
			<Menu.Item
				onclick={() => {
					console.log("edit")
				}}
			>
				Edit
			</Menu.Item>
			<Menu.Item
				onclick={() => {
					console.log("print")
				}}
			>
				Print
			</Menu.Item>
		{/snippet}
	</Menu>

	<Menu id="menu3">
		{#snippet anchor()}
			<Button>
				<span>open 2</span>
			</Button>
		{/snippet}

		{#snippet items()}
			<Menu.Item>Lorem ipsum dolor sit</Menu.Item>
			<Menu.Item>amet consectetur adipisicing elit</Menu.Item>
		{/snippet}
	</Menu>
</div>

<style>
	.container {
		display: flex;
		gap: 1rem;
		justify-content: space-around;
		padding: 1rem;
	}

	@media screen and (max-width: 425px) {
		.container {
			flex-direction: column;
		}
	}
</style>
