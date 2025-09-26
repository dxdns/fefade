<script lang="ts">
	import { Button, Card, Code, Window } from "@fefade/svelte"

	let elCode: HTMLElement | undefined = $state()
	let copied = $state(false)

	function selectText(el: HTMLElement) {
		const range = document.createRange()
		range.selectNodeContents(el)
		const sel = window.getSelection()
		sel?.removeAllRanges()
		sel?.addRange(range)
	}

	async function copyText(el: HTMLElement) {
		await navigator.clipboard.writeText(String(el.textContent))
	}

	async function handleTextCopy() {
		if (!elCode) return
		selectText(elCode)
		await copyText(elCode)
		copied = true
		setTimeout(() => (copied = false), 2000)
	}
</script>

<Window style="display: flex; flex-direction: column; gap: 1rem;">
	<Card variant="contained">
		<Code style="max-height: 200px;">
			{@const contentFiltered = "content"
				.split("\n")
				.filter((l) => l.trim() !== "")}

			<div bind:this={elCode}>
				{#each contentFiltered as text, i (`${text}-${i}`)}
					{@const isComment = text.startsWith("--")}
					{@const muted = isComment ? "text-muted" : ""}
					<Code.Item lineNumber={i} class={muted}>{text}</Code.Item>
					{#if isComment}
						<br />
					{/if}
				{/each}
			</div>
		</Code>
	</Card>

	<Button
		disabled={copied}
		onclick={handleTextCopy}
		style="align-self: flex-end;"
	>
		{#if copied}
			<svg
				xmlns="http://www.w3.org/2000/svg"
				height="24px"
				viewBox="0 -960 960 960"
				width="24px"
				fill="currentColor"
			>
				<path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z" />
			</svg>
			<span>Copied</span>
		{:else}
			<svg
				xmlns="http://www.w3.org/2000/svg"
				height="24px"
				viewBox="0 -960 960 960"
				width="24px"
				fill="currentColor"
			>
				<path
					d="M360-240q-33 0-56.5-23.5T280-320v-480q0-33 23.5-56.5T360-880h360q33 0 56.5 23.5T800-800v480q0 33-23.5 56.5T720-240H360Zm0-80h360v-480H360v480ZM200-80q-33 0-56.5-23.5T120-160v-560h80v560h440v80H200Zm160-240v-480 480Z"
				/>
			</svg>
			<span>Copy</span>
		{/if}
	</Button>
</Window>
