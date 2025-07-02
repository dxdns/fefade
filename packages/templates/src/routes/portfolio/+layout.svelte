<script lang="ts">
	import "./globals.css"
	import { Link, Switch, themeConfig } from "@dxdns/feflow"
	import { DarkModeIcon, LightModeIcon } from "$lib/icons"

	let { children } = $props()

	const theme = $derived(themeConfig())
</script>

<div class="container">
	{@render children()}
	<footer class="footer">
		<div>
			<span class="text-muted">
				{@html "&copy;"}
				{new Date().getFullYear()}
			</span>
			<Link href="https://dxdns.dev" target="_blank" hoverUnderline="right">
				dxdns
			</Link>
		</div>
		<Switch onclick={theme.toggle} checked={theme.mode === "dark"}>
			<DarkModeIcon height="14px" width="14px" />
			<LightModeIcon height="14px" width="14px" />
		</Switch>
	</footer>
</div>

<style>
	.container {
		padding: 3rem 0;
		width: 600px;
		margin: 0 auto;
		min-height: 100vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
		gap: 2rem;
	}

	.footer {
		margin-top: 1rem;
		border-top: 1px solid var(--feflow-color-border);
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	@media (max-width: 425px) {
		.container {
			width: 80%;
		}
	}
</style>
