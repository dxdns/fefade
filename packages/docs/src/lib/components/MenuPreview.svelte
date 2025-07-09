<script lang="ts">
	import { Button, Menu } from "feflow-svelte"
</script>

<div
	style="
    display: flex;
    gap: 1rem;
    justify-content: space-around;
    padding: 1rem;
    flex-wrap: wrap;
    align-items: baseline;
    "
>
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

	<div
		style="
        background: #2A7B9B;
		background: linear-gradient(90deg,rgba(42, 123, 155, 1) 0%, rgba(87, 199, 133, 1) 50%, rgba(237, 221, 83, 1) 100%);
        height: 150px; 
        border-radius: 5px; 
        padding: 1rem;
        "
	>
		<Menu id="menu2" isTranslucent>
			{#snippet anchor()}
				<Button>
					<span>isTranslucent</span>
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
	</div>

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
