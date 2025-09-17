<script lang="ts">
	import { Button, Timer } from "@fefade/svelte"
	import { Constants } from "@fefade/core"

	const themeColor = Constants.themeColorVar

	const defaultDuration = 10

	let duration = $state(defaultDuration)
	let stopped = $state(false)

	function reset() {
		duration = defaultDuration
	}

	function getColor(duration: number) {
		if (duration <= 5) return themeColor.onError
		if (duration <= 7) return themeColor.onWarning
		return themeColor.onSuccess
	}
</script>

<Timer
	style="color: {getColor(duration)};"
	bind:duration
	onChange={(value, valueFormated) => {
		console.log(valueFormated)
		if (value === 0) {
			stopped = true
		}
	}}
	{stopped}
/>

<Button onclick={reset}>Reset</Button>
<Button
	disabled={stopped}
	onclick={() => {
		stopped = true
	}}
>
	Stop
</Button>
<Button
	disabled={!stopped}
	onclick={() => {
		if (duration === 0) {
			reset()
		}
		stopped = false
	}}
>
	Start
</Button>
