<script>
	import {
		DarkModeIcon,
		GithubIcon,
		LightModeIcon,
		MailIcon,
		RedditIcon
	} from "@/icons/index.js"
	import {
		Accordion,
		Badge,
		Button,
		Card,
		HoverFollower,
		Link,
		Navbar,
		Switch,
		themeConfig,
		useMediaQuery
	} from "@dxdns/feflow"
	import { onDestroy } from "svelte"

	const theme = $derived(themeConfig())
	const isMd = $derived(useMediaQuery("max-width", "md"))

	onDestroy(() => {
		isMd.destroy()
	})
</script>

<div class="ads-top">
	<h5>Ship faster with beautiful components</h5>
	<Badge size="md">feflow</Badge>
</div>

<div style="width: 80%; margin: 0 auto;">
	<Navbar
		style="
			background: none; 
			display: flex;
			align-items: center;
			justify-content: space-between;
            margin: 0;
			"
	>
		<h1 style="margin: 0;">feflow</h1>
		<div style="flex: 1;"></div>
		{#if !isMd.value}
			<div style="display: flex; gap: 0.5rem; align-items: center;">
				<Navbar.Item>Docs</Navbar.Item>
				<Navbar.Item>Components</Navbar.Item>
				<Navbar.Item>Figma</Navbar.Item>
				<Navbar.Item>Blog</Navbar.Item>
				<Navbar.Item>Theme</Navbar.Item>
				<Navbar.Item
					class="bg-warning text-on-warning"
					href="https://github.com/dxdns/feflow/tree/main/packages/templates/src/routes/landing-page"
					target="_blank"
				>
					Download
				</Navbar.Item>
				<Navbar.Item style="background: none;">
					<Switch checked={theme.mode === "dark"} onchange={theme.toggle}>
						<DarkModeIcon width="14px" height="14px" />
						<LightModeIcon width="14px" height="14px" />
					</Switch>
				</Navbar.Item>
			</div>
		{/if}
		<Navbar.Toggler id="toggler-1" />
	</Navbar>

	<main>
		<section id="section-one">
			<div class="content">
				<div class="first">
					<div class="left">
						<h1>
							Make beautiful websites regardless of your design experience.
						</h1>
						<p>
							Beautiful, fast and modern React UI library for building
							accessible and customizable web applications.
						</p>
						<div>
							<Button size="md">Get Started</Button>
						</div>
					</div>
					<div class="right"></div>
				</div>
				<HoverFollower
					orientation="horizontal"
					style="flex-wrap: wrap; justify-content: center;"
					bgColor="#ff9900"
				>
					{#each Array.from(Array(9)) as _, i}
						<Card style="min-width: 250px;">
							<h5>Card {i + 1}</h5>
							<p>This is a description for card {i + 1}.</p>
						</Card>
					{/each}
				</HoverFollower>
			</div>
		</section>

		<section id="section-two">
			<p>Supported and backed by</p>
			<div
				style="display: flex; justify-content: center; gap: 2rem; flex-wrap: wrap; align-items: baseline;"
			>
				{#each ["a", "b", "c"] as value, i}
					<Card
						glowOnHover
						style="
					width: 150px; 
					height: 80px; 
					background: linear-gradient({45 * i}deg, #ff7f32, #ff{25 * (i + 1)}33);
                    text-align: center;
                    justify-content: center;
                    display: flex;
                    align-items: center;
					"
					>
						<h5>Company {value.toUpperCase()}</h5>
					</Card>
				{/each}
			</div>
		</section>

		<section id="section-three">
			<div class="content">
				<div class="first">
					<div class="left">
						<div>
							<Badge size="lg">PRO</Badge>
						</div>
						<h1>Ship faster with beautiful components</h1>
						<p>
							Premade templates of over 210+ beautiful and responsive
							components.
						</p>
						<ul>
							<li>210 + Components</li>
							<li>Lifetime Access</li>
							<li>Free Updates</li>
							<li>Figma Files Included</li>
						</ul>
						<div>
							<Button>Explore</Button>
						</div>
					</div>
					<div class="right"></div>
				</div>
			</div>
		</section>

		<section id="section-four">
			<h1>Frequently Asked Questions</h1>
			<br />
			<Accordion id="faq1" variant="text" label="How do I start with feflow?">
				<p>
					To get started, check out our documentation and tutorials on the docs
					page.
				</p>
			</Accordion>

			<Accordion
				id="faq2"
				variant="text"
				label="Can I use feflow for commercial projects?"
			>
				<p>
					Yes, feflow is licensed for both personal and commercial projects. You
					can use it freely.
				</p>
			</Accordion>

			<Accordion
				id="faq3"
				variant="text"
				label="Does feflow support responsive design?"
			>
				<p>
					Yes, all components in feflow are built with responsive design
					principles, ensuring they work on any device.
				</p>
			</Accordion>
		</section>
	</main>

	<footer style="text-align: center; padding: 3rem;">
		<h1>Connect</h1>
		<div
			style="
			display: flex; 
			gap: 1rem;
			justify-content: center;
			"
		>
			<Link
				href="https://github.com/dxdns/feflow/tree/main/packages/templates/src/routes/landing-page"
				target="_blank"
			>
				<GithubIcon />
			</Link>
			<Link href="#">
				<RedditIcon />
			</Link>
			<Link href="#">
				<MailIcon />
			</Link>
		</div>
		<p style="margin-top: 2rem;">© 2025 feflow. All rights reserved.</p>
	</footer>
</div>

<style>
	:global([data-theme="dark"] > body) {
		line-height: 1.2;
		overflow-x: hidden;
		background-image: radial-gradient(
			ellipse 80% 50% at 50% -20%,
			hsl(36deg 100% 50%),
			transparent
		);
	}

	:global(.sl-container > h1) {
		display: none;
	}

	:global(.content-panel) {
		border-top: 0;
		padding: 0;
	}

	.ads-top {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 0.5rem;
		font-size: 14px;
		border-bottom: 1px solid #ccc;
		margin-bottom: 1rem;
		flex-wrap: wrap;
		padding: 0.5rem 2rem;
		margin-top: 0;
	}

	section {
		margin-top: 3rem;
		padding: 2rem;
	}

	#section-one .content,
	#section-three .content {
		display: flex;
		flex-direction: column;
		gap: 10rem;
	}

	#section-one .first,
	#section-three .first {
		display: flex;
		align-items: center;
		gap: 3rem;
		justify-content: space-between;
		flex-wrap: wrap;
	}

	#section-one .left,
	#section-three .left {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		text-align: left;
		width: 500px;
	}

	#section-one .right,
	#section-three .right {
		position: relative;
		width: 150px;
		height: 150px;
		background: rgba(255, 166, 0, 0.274);
		border-radius: 50%;
	}

	#section-two {
		text-align: center;
	}

	#section-four {
		padding: 2rem;
	}
</style>
