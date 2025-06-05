<script lang="ts">
	import { ShortcutListener } from "@/lib/index.js"

	function handleShortcut(event: KeyboardEvent) {
		console.log("Shortcut pressed!", event)
	}
</script>

<ShortcutListener keys={["Control", "F"]} callback={handleShortcut}>
	Press Ctrl + F
</ShortcutListener>
