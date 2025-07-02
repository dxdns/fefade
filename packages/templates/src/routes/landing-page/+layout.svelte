<script lang="ts">
	let { children } = $props()
</script>

<svelte:head>
	<title>Home</title>
	<style>
		html {
			font-size: 18px !important;
		}
		
		[data-theme="dark"] {
			body {
				background-image: radial-gradient(ellipse 80% 50% at 50% -20%, hsl(36deg 100% 50%), transparent);
			}
		}
	</style>
</svelte:head>

{@render children()}
