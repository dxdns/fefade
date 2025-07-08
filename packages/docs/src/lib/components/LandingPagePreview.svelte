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
		useMediaQuery,
		Drawer
	} from "@dxdns/feflow"
	import { onDestroy } from "svelte"

	let isOpen = $state(false)
	const theme = $derived(themeConfig())
	const isMd = $derived(useMediaQuery("max-width", "md"))
	const featuresData = [
		{
			icon: "💪",
			title: "Strength Training",
			desc: "Build muscle with progressive overload"
		},
		{
			icon: "🏃‍♂️",
			title: "Cardio Workouts",
			desc: "Burn calories and improve endurance"
		},
		{
			icon: "🧘‍♀️",
			title: "Yoga & Flexibility",
			desc: "Increase mobility and reduce stress"
		},
		{
			icon: "🥗",
			title: "Nutrition Tracking",
			desc: "Track macros and calories effortlessly"
		},
		{
			icon: "📊",
			title: "Progress Analytics",
			desc: "Monitor your fitness journey"
		},
		{
			icon: "🎯",
			title: "Goal Setting",
			desc: "Set and achieve personalized targets"
		}
	]

	function handleOpen() {
		isOpen = !isOpen
	}

	function handleClose() {
		isOpen = false
	}

	onDestroy(() => {
		isMd.destroy()
	})
</script>

{#snippet logo()}
	<h3 style="margin: 0;">Fit<span class="text-on-warning">Flow</span></h3>
{/snippet}

{#snippet navItems()}
	<Navbar.Item>Features</Navbar.Item>
	<Navbar.Item>Programs</Navbar.Item>
	<Navbar.Item>Pricing</Navbar.Item>
	<Navbar.Item>Community</Navbar.Item>
	<Navbar.Item
		class="bg-warning text-on-warning"
		href="https://app.fitflow.com/signup"
		target="_blank"
	>
		Start Free Trial
	</Navbar.Item>
{/snippet}

<Drawer {isOpen} style="width: 100%;">
	<Drawer.Header {handleClose}>
		{@render logo()}
	</Drawer.Header>
	<Drawer.Content
		style="
		gap: 1rem; 
		display: flex; 
		flex-direction: column; 
		padding: 1rem;
		"
	>
		{@render navItems()}
	</Drawer.Content>
</Drawer>

<div
	style="
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
	"
>
	<h6>🔥 New: AI-Powered Workout Plans - 50% OFF This Week!</h6>
	<Badge size="xs">Limited Time</Badge>
</div>

<div style="width: 80%; margin: 0 auto;">
	<Navbar
		style="
		background: none; 
		display: flex; 
		align-items: center; 
		justify-content: space-between; 
		margin: 0; 
		padding: 1rem 0;
		"
	>
		{@render logo()}
		<div class="flex: 1;"></div>
		{#if !isMd.value}
			<div
				style="
				display: flex;
				gap: 0.5rem; 
				align-items: center;
				"
			>
				{@render navItems()}
				<Navbar.Item style="background: none;">
					<Switch checked={theme.mode === "dark"} onchange={theme.toggle}>
						<DarkModeIcon width="14px" height="14px" />
						<LightModeIcon width="14px" height="14px" />
					</Switch>
				</Navbar.Item>
			</div>
		{/if}
		<Navbar.Toggler
			id="toggler-1"
			checked={isOpen}
			onchange={() => {
				handleOpen()
			}}
		/>
	</Navbar>

	<main>
		<section id="one" style="padding: 3rem 0;">
			<div
				style="
				display: flex; 
				gap: 1rem; 
				justify-content: {isMd.value ? 'center' : 'space-between'};
				"
			>
				<div
					style="
					display: flex; 
					flex-direction: column; 
					gap: 1rem; 
					max-width: {isMd.value ? '100%' : '300px'}
					"
				>
					<h2>Transform Your Body with AI-Powered Fitness</h2>
					<p>
						Join over 2 million users who've achieved their fitness goals with
						personalized workouts, nutrition tracking, and real-time coaching
						powered by artificial intelligence.
					</p>
					<Button size="md">Get Started</Button>
				</div>
				<img
					alt="fitness-1"
					src="https://images.unsplash.com/photo-1522898467493-49726bf28798"
					style="
					border-radius: 50%; 
					overflow: hidden; 
					object-fit: cover;
					width: 310px;
					display: {isMd.value ? 'none' : 'block'};
					"
				/>
			</div>

			<HoverFollower
				orientation="horizontal"
				style="
				display: grid;
				grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
				gap: 1rem;
				"
				bgColor="#ff6b35"
			>
				{#each featuresData as feature}
					<Card style="user-select: none;">
						<div>{feature.icon}</div>
						<h5>{feature.title}</h5>
						<p>{feature.desc}</p>
					</Card>
				{/each}
			</HoverFollower>
		</section>

		<section id="two" style="padding: 3rem 0;">
			<div
				style="
				display: flex;
				gap: 1rem; 
				justify-content: {isMd.value ? 'center' : 'space-between'};
				position: relative;
				overflow: hidden;
				border-radius: 15px;
				align-items: center;
				"
			>
				<div
					style="
					display: flex; 
					flex-direction: column; 
					gap: 1rem; 
					max-width: 300px;
					text-align: {isMd.value ? 'center' : 'left'};
					align-items: center;
					padding: 1rem;
					"
				>
					<Badge size="lg" style="width: 80%;">✨ AI-Powered</Badge>
					<h2>Smart Features That Adapt to You</h2>
					<p>
						Our advanced AI learns from your progress, preferences, and goals to
						create the perfect fitness experience tailored just for you.
					</p>
					<ul class="features">
						<li>Adaptive AI Coach</li>
						<li>Smart Workout Plans</li>
						<li>Goal-Oriented Training</li>
						<li>Progress Tracking</li>
					</ul>
					<Button size="lg">Explore All Features</Button>
				</div>
				<img
					alt="fitness-1"
					src="https://images.unsplash.com/photo-1627483298606-cf54c61779a9"
					style="
					border-radius: {isMd.value ? '15px' : '50%'};
					overflow: hidden; 
					object-fit: cover;
					position: {isMd.value ? 'absolute' : 'static'};
					z-index: -1;
					opacity: {isMd.value ? 0.7 : 1};
					filter: blur({isMd.value ? '3px' : '0px'}) brightness({isMd.value
						? '0.5'
						: '1'});
					width: 100%;
					height: {isMd.value ? '100%' : '550px'};
					"
				/>
			</div>
		</section>

		<section id="three">
			<h2>Frequently Asked Questions</h2>
			<br />
			<Card>
				<Accordion id="faq1" label="How does the AI personal trainer work?">
					<p>
						Our AI analyzes your workout history, preferences, and goals to
						create personalized training plans. It continuously adapts based on
						your progress and feedback to ensure optimal results.
					</p>
				</Accordion>

				<Accordion id="faq2" label="Can I cancel my subscription anytime?">
					<p>
						Yes! You can cancel your subscription at any time. There are no
						cancellation fees, and you'll continue to have access to Pro
						features until your current billing period ends.
					</p>
				</Accordion>

				<Accordion id="faq3" label="Do I need equipment to use FitFlow?">
					<p>
						Not at all! FitFlow includes bodyweight workouts that require no
						equipment. We also have equipment-based workouts if you have access
						to a gym or home equipment.
					</p>
				</Accordion>

				<Accordion id="faq4" label="Is there a nutrition tracking feature?">
					<p>
						Yes! Pro and Elite plans include comprehensive nutrition tracking
						with macro counting, meal planning, and integration with popular
						food databases.
					</p>
				</Accordion>

				<Accordion id="faq5" label="How accurate is the calorie tracking?">
					<p>
						Our calorie tracking uses advanced algorithms and integrates with
						fitness trackers for maximum accuracy. We provide estimates based on
						your personal metrics and activity intensity.
					</p>
				</Accordion>
			</Card>
		</section>
	</main>

	<footer
		style="
		display: flex; 
		flex-direction: column; 
		gap: 1rem; 
		align-items: center;
		margin-top: 3rem;
		"
	>
		<h2>Connect</h2>
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
		<p>© 2025 FitFlow. All rights reserved.</p>
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

	:global(footer.sl-flex) {
		display: none;
	}

	.features {
		list-style: none;
		padding: 0;
		margin: 0;
	}

	.features li {
		padding: 0.5rem 0;
		border-bottom: 1px solid var(--border-color, #e0e0e0);
		font-weight: 500;
		text-align: left;
	}

	.features li:last-child {
		border-bottom: none;
	}

	.features li::before {
		content: "✓";
		color: var(--success-color, #22c55e);
		font-weight: bold;
		margin-right: 0.5rem;
	}
</style>
