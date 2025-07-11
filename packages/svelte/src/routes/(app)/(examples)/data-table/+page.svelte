<script lang="ts">
	import { DataTable } from "@/index.js"

	const _data = Array.from(Array(10)).map((_, index) => ({
		id: index,
		label: `test-${index}`
	}))
</script>

<div style="width:1000px; margin: 5rem auto;">
	<DataTable data={_data} />
</div>
