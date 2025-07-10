<script lang="ts">
	import { Button } from "@lib/index.js"
</script>

<br />
<br />
<h1>loading</h1>
<br />
<Button isLoading></Button>
<br />
<br />
<Button isLoading variant="outlined"></Button>
<br />
<br />
<Button isLoading variant="text"></Button>
<br />
<br />
<Button variant="text">Text</Button>
<br />
<br />
<Button variant="outlined">Outlined</Button>
<br />
<br />
<Button variant="contained">Contained</Button>
<br />
<br />
<Button href="https://dxdns.dev" target="_blank">link</Button>
<br />
<br />
<h1>disabled</h1>
<br />
<Button disabled>Contained Disabled</Button>
<br />
<br />
<Button disabled variant="outlined">Outlined Disabled</Button>
<br />
<br />
<Button disabled variant="text">Text Disabled</Button>
<br />
<br />
<h1>colors</h1>
<br />
<Button class="bg-error text-on-error">error</Button>
<Button class="bg-success text-on-success">success</Button>
<Button class="bg-warning text-on-warning">warning</Button>
<Button class="bg-info text-on-info">info</Button>
<Button class="bg-primary text-on-primary">primary</Button>
<br />
<br />
<h1>with icon</h1>
<br />
<Button>
	<svg
		xmlns="http://www.w3.org/2000/svg"
		height="16px"
		viewBox="0 -960 960 960"
		width="16px"
		fill="red"
	>
		<path
			d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Z"
		/>
	</svg>
	heart
</Button>
