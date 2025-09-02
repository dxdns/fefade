<script lang="ts">
	import { Button, Timer } from "@/index.js"
	import { Constants } from "@dxdns-kit/core"

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
	onChange={(_, valueFormated) => {
		console.log(valueFormated)
	}}
	{stopped}
/>

<Button onclick={reset}>Reset</Button>
<Button
	onclick={() => {
		stopped = true
	}}
>
	Stop
</Button>
<Button
	onclick={() => {
		stopped = false
	}}
>
	Start
</Button>
