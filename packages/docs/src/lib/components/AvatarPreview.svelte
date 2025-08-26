<script lang="ts">
	import {
		Avatar,
		Card,
		Status,
		themeConfig,
		Tooltip
	} from "@navnex-kit/svelte"

	const theme = $derived(themeConfig())
</script>

{#snippet avatarOn()}
	<div style="position: relative; display: inline-block;">
		<Avatar
			src="https://avatars.githubusercontent.com/u/26321303?v=4"
			textFallback="test"
			width="150px"
			height="150px"
		/>
		<Status
			color="green"
			size="24px"
			style="
			position: absolute; 
			top: 0; 
			right: 5px; 
			border: 2px solid {theme.colors.bg};
			"
		/>
	</div>
{/snippet}

<Avatar textFallback="test" />
<br />
<Avatar
	src="https://img.odcdn.com.br/cdn-cgi/image/width=1200,height=1200,fit=cover/wp-content/uploads/2023/01/Avatar-Loak.jpg"
	textFallback="test"
/>
<br />

{@render avatarOn?.()}

<Card
	class="rounded-full"
	style="width: 158px; height: 158px; padding: 0;"
	animatedBorder={{
		width: "4px",
		primaryColor: "#FF007F",
		secondaryColor: "#8000FF"
	}}
>
	{@render avatarOn?.()}
</Card>

<br />

<Avatar.Group>
	{#each ["a", "b", "c", "d"] as value (value)}
		<Avatar grouped textFallback={value} size="lg" />
	{/each}
</Avatar.Group>

<br />

<Avatar.Group>
	{#each ["a", "b", "c", "d"] as value (value)}
		<Tooltip label={value}>
			{#if value === "d"}
				<Avatar grouped size="lg" style="margin-top: 1.2rem;">
					<span>+99</span>
				</Avatar>
			{:else}
				<Avatar
					grouped
					textFallback={value}
					size="lg"
					style="margin-top: 1.2rem;"
				/>
			{/if}
		</Tooltip>
	{/each}
</Avatar.Group>
