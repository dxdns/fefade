<script lang="ts">
	import { Kbd, ShortcutListener } from "feflow-svelte"

	let message = $state("waiting...")

	function handleShortcut(e: KeyboardEvent) {
		const keys = []
		if (e.ctrlKey) {
			keys.push("ctrl")
			keys.push("+")
		}
		keys.push(e.key)
		message = `Shortcut ${keys.join(" ")} pressed!`
	}
</script>

<h4>{message}</h4>

<ShortcutListener keys={["Control", "C"]} callback={handleShortcut}>
	<p>Press <Kbd>Ctrl</Kbd> + <Kbd>C</Kbd></p>
</ShortcutListener>
<p>or</p>
<ShortcutListener keys={["Control", "V"]} callback={handleShortcut}>
	<p>Press <Kbd>Ctrl</Kbd> + <Kbd>V</Kbd></p>
</ShortcutListener>
