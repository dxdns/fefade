<script lang="ts">
	import { FacebookIcon, GoogleIcon } from "@/icons"
	import {
		Button,
		Card,
		Checkbox,
		Link,
		PasswordInput,
		Separator,
		TextField
	} from "@dxdns/feflow-svelte"
</script>

<div class="container">
	<Card
		glowOnHover
		style="
		display: flex; 
		flex-direction: column; 
		gap: 1rem;
		width: clamp(300px, 90vw, 480px);
		padding: 2rem;
		"
	>
		<h1>Sign in</h1>
		<br />
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
	:global(.sl-container > h1) {
		display: none;
	}

	:global(.content-panel) {
		border-top: 0;
		padding: 0;
	}

	:global(footer.sl-flex) {
		display: none;
	}

	.container {
		display: flex;
		margin: 0 auto;
		min-height: 100vh;
		justify-content: center;
		align-items: center;
		user-select: none;
		padding: 16px;
	}
</style>
