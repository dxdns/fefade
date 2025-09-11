<script lang="ts">
	import { Button, themeConfig, Separator, Tab, Card } from "@dxdns-kit/svelte"
	import { fade, fly } from "svelte/transition"

	const theme = $derived(themeConfig())

	let activeTab = $state({
		tab1: "1",
		tab2: "1",
		tab3: "1",
		tab4: "1",
		tab5: "1"
	})

	const tabs = Array.from({ length: 10 }, (_, i) => {
		const id = (i + 1).toString()
		return {
			id,
			label: `label${id}`,
			content: `test${id}`,
			...(i === 0 && {
				icon: String.fromCharCode(9734)
			})
		}
	})

	function handle(tab: keyof typeof activeTab, id: string) {
		activeTab[tab] = id
	}
</script>

{#snippet content(isActive: boolean, content: unknown)}
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
	<span style="font-size: 20px;">{s}</span>
{/snippet}

<div style="max-width:800px; margin: 3rem auto;">
	<Card>
		<Tab id="tab1">
			<Tab.List
				scrollable={false}
				lineStyle={{
					color: theme.colors.error
				}}
			>
				{#each tabs.slice(0, 2) as tab (tab.id)}
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

			{#each tabs as tab (tab.id)}
				{@render content(activeTab.tab1 === tab.id, tab.content)}
			{/each}
		</Tab>
	</Card>

	<Tab id="tab2" style="background: transparent;">
		<Tab.List
			hoverFollower={{
				bgColor: theme.colors.success
			}}
		>
			{#each tabs as tab (tab.id)}
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

		{#each tabs as tab (tab.id)}
			{@render content(activeTab.tab2 === tab.id, tab.content)}
		{/each}
	</Tab>

	<Tab id="tab3" orientation="vertical">
		<Tab.List
			class="border-0"
			orientation="vertical"
			hoverFollower={{
				bgColor: theme.colors.muted
			}}
		>
			{#each tabs.slice(0, 5) as tab (tab.id)}
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
		{#each tabs.slice(0, 5) as tab (tab.id)}
			{@render content(activeTab.tab5 === tab.id, tab.content)}
		{/each}
	</Tab>
</div>
