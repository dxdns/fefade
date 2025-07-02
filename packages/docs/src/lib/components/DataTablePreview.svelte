<script lang="ts">
	import { DataTable } from "@dxdns/feflow"

	const data = Array.from(Array(10)).map((_, index) => ({
		id: index,
		label: `test-${index}`
	}))
</script>

<DataTable {data} />
