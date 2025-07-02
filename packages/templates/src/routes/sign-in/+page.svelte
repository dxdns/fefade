<script lang="ts">
	import { FacebookIcon, GoogleIcon } from "@/lib/icons"
	import {
		Button,
		Card,
		Checkbox,
		Link,
		PasswordInput,
		Separator,
		TextField
	} from "@dxdns/feflow"
	import type { PageData } from "./$types"

	let { data }: { data: PageData } = $props()
</script>

<svelte:head>
	<title>Sign in | {data.title}</title>
	<meta
		name="description"
		content="feflow svelte components ui - Sign in demo example"
	/>
</svelte:head>

<div class="container">
	<Card
		style="
		display: flex; 
		flex-direction: column; 
		gap: 1rem;
		width: 100%;
		"
	>
		<h1>Sign in</h1>
		<TextField label="Email" />
		<PasswordInput label="Password" />
		<label
			for="remember"
			style="display: flex; gap: 0.5rem; align-items: center;"
		>
			<Checkbox id="remember" />
			Remember me
		</label>
		<Button>Sign in</Button>
		<Link href="#" style="text-decoration: underline;">
			Forgot your password?
		</Link>
		<div style="display: flex; gap: 0.5rem; align-items: center;">
			<Separator style="flex: 1;" />
			<p style="flex-shrink: 0;">or</p>
			<Separator style="flex: 1;" />
		</div>
		<Button variant="outlined">
			<GoogleIcon />
			Sign in with Google
		</Button>
		<Button variant="outlined">
			<FacebookIcon />
			Sign in with Facebook
		</Button>
		<p>
			Don't have an account? <Link href="#" style="text-decoration: underline;">
				Sign up
			</Link>
		</p>
	</Card>
</div>

<style>
	.container {
		display: flex;
		margin: 0 auto;
		min-height: 100vh;
		justify-content: center;
		align-items: center;
		user-select: none;
		padding: 16px;
		max-width: 350px;
	}
</style>
