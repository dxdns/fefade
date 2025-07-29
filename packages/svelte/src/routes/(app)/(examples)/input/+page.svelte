<script lang="ts">
	import {
		Badge,
		Button,
		FileInput,
		NumberInput,
		PasswordInput,
		RangeInput,
		SearchInput,
		TextField
	} from "@/index.js"

	let filesData: File[] = $state([])
	let quantity = $state(0)

	async function handleChange(files: File[]) {
		filesData = files
	}

	const homeIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="red"><path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z"/></svg>`

	let rangeInputValue = $state(0)
</script>

<div style="width:500px; height:350px; margin: 5rem auto;">
	<div style="display:flex; align-items: center; gap: 1rem;">
		<span>bindable</span>
		<RangeInput bind:value={rangeInputValue} step="10" />
		<Badge roundedFull size="lg">
			<span>{rangeInputValue}</span>
		</Badge>
	</div>
	<br />
	<br />
	<RangeInput bind:value={rangeInputValue} step="10" />
	<br />
	<br />
	<RangeInput step="50" />
	<br />
	<br />
	<RangeInput icon={homeIcon} />
	<br />
	<br />
	<h2>sizes</h2>
	{#each ["xs", "sm", "md", "lg", "xl"] as size (size)}
		<RangeInput size={size as any} />
		<br />
		<br />
	{/each}
	<PasswordInput label="password" />
	<br />
	<br />
	<PasswordInput variant="contained" label="contained" />
	<br />
	<br />
	<PasswordInput variant="text" label="text" />
	<br />
	<br />
	<TextField />
	<br />
	<br />
	<SearchInput variant="contained" placeholder="test" />
	<br />
	<br />
	<SearchInput placeholder="test" />
	<br />
	<br />
	<SearchInput variant="outlined" placeholder="test" />
	<br />
	<br />
	<NumberInput
		readonly
		variant="outlined"
		bind:value={quantity}
		min={0}
		max={10}
	/>
	<br />
	<br />
	<FileInput multiple accept="image/*,.pdf" onDropEvent={handleChange}>
		<svg viewBox="0 0 640 512" height="50px" fill="rgb(82, 82, 82)">
			<path
				d="M144 480C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9c-.1-2.7-.2-5.4-.2-8.1c0-88.4 71.6-160 160-160c59.3 0 111 32.2 138.7 80.2C409.9 102 428.3 96 448 96c53 0 96 43 96 96c0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 70.7-57.3 128-128 128H144zm79-217c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l39-39V392c0 13.3 10.7 24 24 24s24-10.7 24-24V257.9l39 39c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-80-80c-9.4-9.4-24.6-9.4-33.9 0l-80 80z"
			>
			</path>
		</svg>
		<p>Drag and Drop</p>
		<p>or</p>
		<br />
		<Button variant="outlined">Browse file</Button>
	</FileInput>

	<br />
	{#each filesData as file (file.name)}
		<p>{file.name}</p>
	{/each}

	<h1>sizes</h1>
	<br />
	{#each ["xs", "sm", "md", "lg", "xl"] as size, i (size)}
		<TextField
			label={size}
			variant={i % 2 ? "contained" : "text"}
			size={size as any}
		/>
		<br />
		<br />
	{/each}
</div>
