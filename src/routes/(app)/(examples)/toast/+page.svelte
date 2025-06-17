<script lang="ts">
	import { Button, toast } from "@/lib/index.js"
</script>

<Button
	onclick={() => {
		toast({ message: "test", color: "error" })
	}}
>
	Error
</Button>

<Button
	onclick={() => {
		toast({ message: "test", color: "success" })
	}}
>
	Success
</Button>

<Button
	onclick={() => {
		toast({ message: "test", color: "warning" })
	}}
>
	Warning
</Button>

<br />
<br />

<Button
	onclick={() => {
		toast({ message: "test", position: "top-left" })
	}}
>
	Top-Left
</Button>

<Button
	onclick={() => {
		toast({ message: "test", position: "bottom-left" })
	}}
>
	Bottom-Left
</Button>

<Button
	onclick={() => {
		toast({ message: "test", position: "top-right" })
	}}
>
	Top-Right
</Button>

<Button
	onclick={() => {
		toast({ message: "test", position: "bottom-right" })
	}}
>
	Bottom-Right
</Button>

<Button
	onclick={() => {
		toast({ message: "test", position: "bottom-center" })
	}}
>
	Bottom-Center
</Button>

<Button
	onclick={() => {
		toast({ message: "test", position: "top-center" })
	}}
>
	Top-Center
</Button>

<br />
<br />

<Button
	onclick={() => {
		toast({ message: "test", duration: 15000 })
	}}
>
	Duration: 15000
</Button>

<Button
	onclick={() => {
		toast({ message: "test", isClosable: true })
	}}
>
	Closable
</Button>
