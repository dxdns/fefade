<script lang="ts">
	import { CustomLink } from "@/lib/index.js"
</script>

<div style="width: 500px; margin: 3rem auto; line-height: 1.5;">
	<CustomLink href="https://dxdns.dev" target="_blank">
		<h1>normal</h1>
	</CustomLink>
	<br />
	<CustomLink href="https://dxdns.dev" hoverUnderline="left" target="_blank">
		<h1>left</h1>
	</CustomLink>
	<br />
	<CustomLink pathname="/" hoverUnderline="center">
		<h1>center</h1>
	</CustomLink>
	<br />
	<CustomLink pathname="/" hoverUnderline="right">
		<h1>right</h1>
	</CustomLink>
</div>
