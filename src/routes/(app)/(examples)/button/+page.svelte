<script lang="ts">
	import { Button } from "@/lib/index.js"
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