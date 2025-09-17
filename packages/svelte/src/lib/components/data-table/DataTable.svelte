<script lang="ts">
	import type { HTMLAttributes } from "svelte/elements"
	import { classMapUtil } from "@fefade/core/utils"
	import styles from "./DataTable.module.css"

	interface Props extends HTMLAttributes<HTMLDivElement> {
		data: Record<string, unknown>[]
	}

	let { class: className = "", data, ...rest }: Props = $props()

	const columnsData =
		data.length > 0
			? Object.keys(data[0]).map((name) => ({
					name,
					label: name
				}))
			: []
</script>

<table
	{...rest}
	class={classMapUtil(className, [className, styles], styles.table)}
>
	<thead>
		<tr>
			{#each columnsData as item (item.name)}
				<th>{item.label}</th>
			{/each}
		</tr>
	</thead>

	<tbody>
		{#each data as row (row)}
			<tr>
				{#each columnsData as col (col.name)}
					<td>{row[col.name]}</td>
				{/each}
			</tr>
		{/each}
	</tbody>
</table>
