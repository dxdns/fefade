<script lang="ts">
	import { Separator } from "@/index.js"
</script>

<div
	style="width: 500px; margin: 3rem auto; display: flex; flex-direction: column; gap: 1rem;"
>
	<h1>sizes horizontal</h1>
	<Separator size="xs" variant="dotted" />
	<Separator size="sm" variant="dashed" />
	<Separator size="md" variant="solid" />
	<Separator size="lg" />
	<Separator size="xl" />

	<h1>sizes vertical</h1>
	<Separator height="1rem" orientation="vertical" size="xs" variant="dotted" />
	<Separator orientation="vertical" size="sm" variant="dashed" />
	<Separator height="1rem" orientation="vertical" size="md" variant="solid" />
	<Separator orientation="vertical" size="lg" />
	<Separator height="1rem" orientation="vertical" size="xl" />

	<h1>others</h1>
	<div style="display: flex; gap: 0.5rem; align-items: center;">
		<p style="flex-shrink: 0;">Label (start)</p>
		<Separator style="flex: 1;" />
	</div>
	<div style="display: flex; gap: 0.5rem; align-items: center;">
		<Separator style="flex: 1;" />
		<p style="flex-shrink: 0;">Label (end)</p>
	</div>
	<div style="display: flex; gap: 0.5rem; align-items: center;">
		<Separator style="flex: 1;" />
		<p style="flex-shrink: 0;">Label (center)</p>
		<Separator style="flex: 1;" />
	</div>
</div>
