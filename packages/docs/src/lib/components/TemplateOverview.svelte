<script lang="ts">
	import {
		Badge,
		Button,
		Gallery,
		Select,
		Separator,
		Text
	} from "@fefade/svelte"

	interface Props {
		data: {
			title: string
			description: string
			tags: string[]
			codeUrl: string
			name: string
			image: string
		}
	}

	let { data }: Props = $props()

	let frameworkSelected = $state("svelte")

	const href = $derived(`/templates/${frameworkSelected}/${data.name}`)

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
			case "free":
				return "bg-success text-on-success"
			default:
				return undefined
		}
	}
</script>

<Gallery.Image
	lazy
	dataSrc={data.image}
	alt={data.title}
	{href}
	style="max-height: 300px; filter: blur(1px);"
	target="_blank"
	captionStyle={{ background: "linear-gradient(#0000009e 0%, #000000)" }}
>
	<Text as="h3" style="color: white;">
		{data.title}
	</Text>
</Gallery.Image>

<div style="display:flex; gap: 1rem; flex-wrap: wrap; justify-content: center;">
	<div style="flex: 1; min-width: 300px;">
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
			<Select
				style="width: auto;"
				onchange={(e) => {
					const { value } = e.currentTarget
					frameworkSelected = value
				}}
				value={frameworkSelected}
			>
				<option value="react" disabled>React</option>
				<option value="vue" disabled>Vue</option>
				<option value="svelte">Svelte</option>
			</Select>
			<Button variant="outlined" href={data.codeUrl} target="_blank">
				Check out the code
			</Button>
			<Button {href} target="_blank">Preview</Button>
		</div>
	</div>
</div>
