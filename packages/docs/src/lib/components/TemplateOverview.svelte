<script lang="ts">
	import { Badge, Button, Separator } from "@feflow-ui/svelte"

	interface Props {
		data: {
			title: string
			description: string
			tags: string[]
			codeUrl: string
			previewUrl: string
		}
	}

	let { data }: Props = $props()

	function getClassNames(s: string) {
		switch (s.toLowerCase()) {
			case "react":
				return "bg-info text-on-info"
			case "svelte":
				return "bg-warning text-on-warning"
			case "vue":
				return "bg-success text-on-success"
			case "typescript":
				return "bg-info text-on-info"
			default:
				return undefined
		}
	}
</script>

<div style="display:flex; gap: 1rem; flex-wrap: wrap; justify-content: center;">
	<div style="flex: 1; min-width: 300px;">
		<h2>{data.title}</h2>
		<p>{data.description}</p>
	</div>
	<div style="display: flex; gap: 1rem;">
		<Separator height="auto" orientation="vertical" />
		<div
			style="display: flex; flex-direction: column; gap: 1rem; justify-content: center;"
		>
			<div style="display: flex; gap: 1rem; flex-wrap: wrap;">
				{#each data.tags as tag (tag)}
					<Badge variant="outlined" size="md" class={getClassNames(tag)}>
						{tag}
					</Badge>
				{/each}
			</div>
			<Button variant="outlined" href={data.codeUrl} target="_blank">
				Check out the code
			</Button>
			<Button href={data.previewUrl} target="_blank">Preview</Button>
		</div>
	</div>
</div>
