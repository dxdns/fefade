<script lang="ts">
	import { Button, ProgressLoader } from "@lib/index.js"

	let progress = $state(0)

	let interval: ReturnType<typeof setInterval>

	function startProgress() {
		clearInterval(interval)
		progress = 0
		interval = setInterval(() => {
			if (progress < 100) {
				progress += 1
			} else {
				clearInterval(interval)
			}
		}, 100)
	}
</script>

<ProgressLoader {progress} />
<br />
<Button onclick={startProgress}>Iniciar Progresso</Button>
<br />
