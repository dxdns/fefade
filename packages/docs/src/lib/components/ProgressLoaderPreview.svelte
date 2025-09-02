<script lang="ts">
	import { Button, ProgressLoader } from "@feflow-ui/svelte"

	let progress = $state(0)

	let interval: ReturnType<typeof setInterval>

	function startProgress() {
		interval = setInterval(() => {
			if (progress < 100) {
				progress += 1
			} else {
				clearInterval(interval)
				progress = 0
			}
		}, 100)
	}
</script>

<div style="line-height: 5; padding: 1rem;">
	<ProgressLoader value={progress} color="success" />
	<Button disabled={progress > 0} onclick={startProgress}>
		start progress
	</Button>
</div>
