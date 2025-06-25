<script lang="ts">
	import { Button, themeConfig, Separator, Tab, Card } from "@/lib/index.js"
	import { fade, fly } from "svelte/transition"

	const theme = $derived(themeConfig())

	let activeTab = $state({
		tab1: "1",
		tab2: "1",
		tab3: "1",
		tab4: "1",
		tab5: "1"
	})

	const tabs = Array.from({ length: 15 }, (_, i) => {
		const id = (i + 1).toString()
		return {
			id,
			label: `label${id}`,
			content: `test${id}`,
			...(i === 0 && { icon: "&#9734;" })
		}
	})

	function handle(tab: keyof typeof activeTab, id: string) {
		activeTab[tab] = id
	}
</script>

{#snippet content(isActive: boolean, content: any)}
	<Tab.Panel
		{isActive}
		transition={{
			in: [fly, { x: 300, duration: 400 }],
			out: [fade, { duration: 300 }]
		}}
	>
		{content}
	</Tab.Panel>
{/snippet}

{#snippet icon(s: string)}
	<span style="font-size: 20px;">{@html s}</span>
{/snippet}

<div style="width:800px; margin: 3rem auto;">
	<br />
	<h1>horizontal</h1>
	<br />

	<Card>
		<Tab id="tab1">
			<Tab.List scrollable={false} lineStyle={{ color: "red" }}>
				{#each tabs.slice(0, 2) as tab}
					<Button
						id={tab.id}
						title={tab.label}
						variant="text"
						style="flex:1;"
						onclick={() => {
							handle("tab1", tab.id)
						}}
					>
						{#if tab.icon}
							{@render icon(tab.icon)}
						{/if}
						{tab.label}
					</Button>
				{/each}
			</Tab.List>

			{#each tabs as tab}
				{@render content(activeTab.tab1 === tab.id, tab.content)}
			{/each}
		</Tab>
	</Card>

	<br />
	<br />

	<Tab id="tab2" style="background: transparent;">
		<Tab.List hoverFollower>
			{#each tabs as tab}
				<Button
					id={tab.id}
					title={tab.label}
					variant="text"
					style="flex:1;"
					onclick={() => {
						handle("tab2", tab.id)
					}}
				>
					{#if tab.icon}
						{@render icon(tab.icon)}
					{/if}
					{tab.label}
				</Button>
			{/each}
		</Tab.List>

		{#each tabs as tab}
			{@render content(activeTab.tab2 === tab.id, tab.content)}
		{/each}
	</Tab>

	<br />
	<br />

	<Tab id="tab3">
		<Tab.List>
			{#each tabs as tab}
				<Button
					id={tab.id}
					title={tab.label}
					variant="text"
					onclick={() => {
						handle("tab3", tab.id)
					}}
				>
					{#if tab.icon}
						{@render icon(tab.icon)}
					{/if}
					{tab.label}
				</Button>
			{/each}
		</Tab.List>

		{#each tabs as tab}
			{@render content(activeTab.tab3 === tab.id, tab.content)}
		{/each}
	</Tab>

	<br />
	<br />

	<h1>vertical</h1>
	<br />

	<Tab id="tab4" orientation="vertical">
		<Tab.List orientation="vertical">
			{#each tabs as tab}
				<Button
					id={tab.id}
					title={tab.label}
					variant="text"
					onclick={() => {
						handle("tab4", tab.id)
					}}
				>
					{#if tab.icon}
						{@render icon(tab.icon)}
					{/if}
					{tab.label}
				</Button>
			{/each}
		</Tab.List>
		<Separator orientation="vertical" height="auto" />
		{#each tabs as tab}
			{@render content(activeTab.tab4 === tab.id, tab.content)}
		{/each}
	</Tab>

	<br />
	<br />

	<Tab id="tab5" orientation="vertical">
		<Tab.List
			class="border-0"
			orientation="vertical"
			hoverFollower={{ bgColor: theme.colors.colorTextMuted }}
		>
			{#each tabs as tab}
				<Button
					id={tab.id}
					title={tab.label}
					variant="text"
					onclick={() => {
						handle("tab5", tab.id)
					}}
				>
					{#if tab.icon}
						{@render icon(tab.icon)}
					{/if}
					{tab.label}
				</Button>
			{/each}
		</Tab.List>
		<Separator orientation="vertical" height="auto" />
		{#each tabs as tab}
			{@render content(activeTab.tab5 === tab.id, tab.content)}
		{/each}
	</Tab>
</div>
