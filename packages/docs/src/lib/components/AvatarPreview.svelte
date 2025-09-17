<script lang="ts">
	import { Constants } from "@fefade/core"
	import { Avatar, Card, Status, Tooltip } from "@fefade/svelte"
</script>

{#snippet avatarOn()}
	<div
		style="
		position: relative; 
		display: inline-block; 
		margin: 0; 
		padding: 0;
		"
	>
		<Avatar
			src="https://avatars.githubusercontent.com/u/26321303?v=4"
			textFallback="test"
			width="6rem"
			height="6rem"
		/>
		<Status
			color="green"
			size="20px"
			style="
			position: absolute; 
			top: 4px; 
			right: 5px; 
			border: 2px solid {Constants.themeColorVar.bg};
			margin: 0;
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
	animatedBorder={{
		width: "4px",
		primaryColor: "#FF007F",
		secondaryColor: "#8000FF"
	}}
	style="padding: 0; width: min-content; height: min-content;"
>
	<Avatar
		src="https://avatars.githubusercontent.com/u/26321303?v=4"
		textFallback="test"
		width="6rem"
		height="6rem"
	/>
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
