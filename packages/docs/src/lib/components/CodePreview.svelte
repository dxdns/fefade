<script lang="ts">
	import { Code } from "@dxdns/feflow"

	const data = `
        .card {
            width: 400px;
            padding: 20px;
            border: 1px solid #0d1117;
            border-radius: 10px;
            background-color: #000;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            cursor: pointer;
        }`
</script>

<Code>
	{#each data.split("\n").filter((l) => l.trim() !== "") as text, i}
		<pre data-prefix={i}>
			<code>{text.trim()}</code>
		</pre>
	{/each}
</Code>
