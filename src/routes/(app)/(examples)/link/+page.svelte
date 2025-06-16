<script lang="ts">
	import { Link } from "@/lib/index.js"
</script>

<div style="width: 500px; margin: 3rem auto; line-height: 1.5;">
	<Link href="https://dxdns.dev" target="_blank">
		<h1>normal</h1>
	</Link>
	<br />
	<Link href="https://dxdns.dev" hoverUnderline="left" target="_blank">
		<h1>left</h1>
	</Link>
	<br />
	<Link pathname="/" hoverUnderline="center">
		<h1>center</h1>
	</Link>
	<br />
	<Link pathname="/" hoverUnderline="right">
		<h1>right</h1>
	</Link>
</div>
