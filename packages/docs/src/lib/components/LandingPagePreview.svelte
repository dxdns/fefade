<script lang="ts">
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
	} from "@dxdns-kit/svelte"

	let isOpen = $state(false)
	let el: HTMLDivElement | undefined = $state()

	const theme = $derived(themeConfig())
	const isMd = $derived(useMediaQuery("max-width", "md", el))
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
		document.body.style.overflow = isOpen ? "hidden" : "auto"
	}

	function handleClose() {
		isOpen = false
		document.body.style.overflow = "auto"
	}
</script>

{#snippet logo()}
	<h3 style="margin: 0;">
		Fit<span class="text-on-warning">Flow</span>
	</h3>
{/snippet}

{#snippet navItems()}
	<Navbar.Item>Features</Navbar.Item>
	<Navbar.Item>Programs</Navbar.Item>
	<Navbar.Item>Pricing</Navbar.Item>
	<Navbar.Item>Community</Navbar.Item>
	<Navbar.Item class="bg-warning text-on-warning">Start Free Trial</Navbar.Item>
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

<div bind:this={el} class="container">
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
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 -960 960 960"
								height="14px"
								width="14px"
								fill="currentColor"
							>
								<path
									d="M480-120q-150 0-255-105T120-480q0-150 105-255t255-105q14 0 27.5 1t26.5 3q-41 29-65.5 75.5T444-660q0 90 63 153t153 63q55 0 101-24.5t75-65.5q2 13 3 26.5t1 27.5q0 150-105 255T480-120Zm0-80q88 0 158-48.5T740-375q-20 5-40 8t-40 3q-123 0-209.5-86.5T364-660q0-20 3-40t8-40q-78 32-126.5 102T200-480q0 116 82 198t198 82Zm-10-270Z"
								/>
							</svg>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 -960 960 960"
								height="14px"
								width="14px"
								fill="currentColor"
							>
								<path
									d="M480-360q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Zm0 80q-83 0-141.5-58.5T280-480q0-83 58.5-141.5T480-680q83 0 141.5 58.5T680-480q0 83-58.5 141.5T480-280ZM200-440H40v-80h160v80Zm720 0H760v-80h160v80ZM440-760v-160h80v160h-80Zm0 720v-160h80v160h-80ZM256-650l-101-97 57-59 96 100-52 56Zm492 496-97-101 53-55 101 97-57 59Zm-98-550 97-101 59 57-100 96-56-52ZM154-212l101-97 55 53-97 101-59-57Zm326-268Z"
								/>
							</svg>
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
						max-width: {isMd.value ? '100%' : '300px'};
						text-align: {isMd.value ? 'center' : 'left'};
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
						width: 50%;
						height: 400px;
						display: {isMd.value ? 'none' : 'block'};
						"
					/>
				</div>

				<HoverFollower
					orientation="horizontal"
					style="
					display: grid;
					grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
					gap: 1rem;
					"
					bgColor="#ff6b35"
				>
					{#each featuresData as feature (feature)}
						<Card style="user-select: none; margin: 0;">
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
							Our advanced AI learns from your progress, preferences, and goals
							to create the perfect fitness experience tailored just for you.
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
						height: {isMd.value ? '100%' : '500px'};
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
							create personalized training plans. It continuously adapts based
							on your progress and feedback to ensure optimal results.
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
							equipment. We also have equipment-based workouts if you have
							access to a gym or home equipment.
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
							fitness trackers for maximum accuracy. We provide estimates based
							on your personal metrics and activity intensity.
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
				<Link href="https://github.com/dxdns/dxdns-kit" target="_blank">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 20 20"
						style="
						display: inline-block; 
						vertical-align: middle;
						fill: currentColor;
						width: 24px;
						height: 24px;
						"
					>
						<path
							d="M10 0c5.523 0 10 4.59 10 10.253 0 4.529-2.862 8.371-6.833 9.728-.507.101-.687-.219-.687-.492 0-.338.012-1.442.012-2.814 0-.956-.32-1.58-.679-1.898 2.227-.254 4.567-1.121 4.567-5.059 0-1.12-.388-2.034-1.03-2.752.104-.259.447-1.302-.098-2.714 0 0-.838-.275-2.747 1.051-.799-.227-1.655-.341-2.505-.345-.85.004-1.705.118-2.503.345-1.911-1.326-2.751-1.051-2.751-1.051-.543 1.412-.2 2.455-.097 2.714-.639.718-1.03 1.632-1.03 2.752 0 3.928 2.335 4.808 4.556 5.067-.286.256-.545.708-.635 1.371-.57.262-2.018.715-2.91-.852 0 0-.529-.985-1.533-1.057 0 0-.975-.013-.068.623 0 0 .655.315 1.11 1.5 0 0 .587 1.83 3.369 1.21.005.857.014 1.665.014 1.909 0 .271-.184.588-.683.493C2.865 18.127 0 14.283 0 9.753 0 4.09 4.478 0 10 0z"
						/>
					</svg>
				</Link>
				<Link href="#">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 48 48"
						style="
						display: inline-block; 
						vertical-align: middle;
						fill: currentColor;
						width: 24px;
						height: 24px;
						"
					>
						<path
							fill-rule="evenodd"
							clip-rule="evenodd"
							d="M24 48C10.7452 48 0 37.2548 0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24C48 37.2548 37.2548 48 24 48ZM41.6 23.6875C41.6 21.4925 39.8065 19.7065 37.6014 19.7065C36.5928 19.7065 35.6726 20.0836 34.9686 20.6993C32.4633 19.097 29.1511 18.0544 25.4832 17.8718L27.412 11.8024L32.6744 13.0362C32.7334 14.8042 34.1927 16.2259 35.9834 16.2259C37.8109 16.2259 39.2979 14.7459 39.2979 12.926C39.2979 11.1062 37.8105 9.62608 35.9834 9.62608C34.6559 9.62608 33.5117 10.4087 32.9824 11.5327L27.0691 10.1476C26.6774 10.0561 26.2795 10.2807 26.1595 10.6629L23.8762 17.8481C19.971 17.9244 16.4282 18.9744 13.7731 20.6467C13.0769 20.0614 12.1782 19.7065 11.1986 19.7065C8.99349 19.7069 7.2 21.4925 7.2 23.6875C7.2 25.0851 7.92865 26.3137 9.02555 27.0236C8.96965 27.3801 8.93955 27.7413 8.93955 28.1067C8.93955 33.7675 15.843 38.3731 24.3296 38.3731C32.8155 38.3731 39.7197 33.7675 39.7197 28.1067C39.7197 27.7677 39.6939 27.4326 39.6458 27.1011C40.8127 26.4067 41.6 25.1388 41.6 23.6875Z"
						/>
						<path
							fill-rule="evenodd"
							clip-rule="evenodd"
							d="M39.2241 25.5202C38.6615 24.0782 37.6374 22.7593 36.2664 21.6357C36.6511 21.3862 37.1092 21.2399 37.6018 21.2399C38.9575 21.2399 40.0602 22.3378 40.0602 23.6875C40.0594 24.4172 39.735 25.0718 39.2241 25.5202Z"
						/>
						<path
							fill-rule="evenodd"
							clip-rule="evenodd"
							d="M35.9834 11.1603C36.9619 11.1603 37.7578 11.953 37.7578 12.9272C37.7578 13.9013 36.9619 14.6937 35.9834 14.6937C35.0046 14.6937 34.2087 13.9013 34.2087 12.9272C34.2087 11.953 35.0046 11.1603 35.9834 11.1603Z"
						/>
						<path
							fill-rule="evenodd"
							clip-rule="evenodd"
							d="M38.1795 28.1075C38.1795 32.9222 31.9657 36.8401 24.3296 36.8401C16.6924 36.8401 10.4797 32.9226 10.4797 28.1075C10.4797 27.9378 10.4891 27.7705 10.504 27.6035C10.5505 27.0917 10.6693 26.5912 10.8503 26.1063C11.3198 24.8492 12.2204 23.6957 13.4506 22.7122C13.8443 22.3973 14.2708 22.1 14.7273 21.8225C17.2194 20.3082 20.6039 19.3741 24.3296 19.3741C28.1093 19.3741 31.5396 20.3346 34.0398 21.8879C34.4976 22.1716 34.9229 22.4759 35.3146 22.7978C36.4959 23.7665 37.3594 24.8959 37.8148 26.1238C37.9943 26.6103 38.1131 27.1112 38.1577 27.6241C38.1713 27.7849 38.1795 27.9452 38.1795 28.1075ZM21.6171 26.2616C21.6171 24.9687 20.564 23.884 19.265 23.884C17.9664 23.884 16.8773 24.9687 16.8773 26.2616C16.8773 27.5541 17.9668 28.6037 19.265 28.6037C20.564 28.6022 21.6171 27.5541 21.6171 26.2616ZM29.5706 23.8832C28.272 23.8832 27.1794 24.9675 27.1794 26.2604C27.1794 27.5537 28.272 28.6026 29.5706 28.6026C30.8695 28.6026 31.9234 27.5545 31.9234 26.2604C31.9227 24.9667 30.8695 23.8832 29.5706 23.8832ZM28.906 31.9379C28.0347 32.8042 26.5676 33.225 24.418 33.225C24.4113 33.225 24.4055 33.2269 24.3992 33.2269C24.3926 33.2269 24.3871 33.225 24.3808 33.225C22.2308 33.225 20.7634 32.8042 19.8932 31.9379C19.5926 31.6382 19.1047 31.6382 18.8041 31.9379C18.5031 32.238 18.5031 32.7233 18.8041 33.0218C19.9773 34.1901 21.8016 34.7587 24.3808 34.7587C24.3875 34.7587 24.393 34.7564 24.3992 34.7564C24.4055 34.7564 24.4113 34.7587 24.418 34.7587C26.9968 34.7587 28.8216 34.1901 29.9959 33.0226C30.2973 32.7225 30.2973 32.2376 29.9966 31.9387C29.6953 31.639 29.2074 31.639 28.906 31.9379Z"
						/>
						<path
							fill-rule="evenodd"
							clip-rule="evenodd"
							d="M8.74018 23.6875C8.74018 22.3382 9.84294 21.2399 11.1982 21.2399C11.656 21.2399 12.0836 21.3679 12.4515 21.5862C11.0798 22.6958 10.0532 24.0016 9.47431 25.4287C9.02125 24.9846 8.74018 24.3686 8.74018 23.6875Z"
						/>
					</svg>
				</Link>
				<Link href="#">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 -960 960 960"
						style="
						display: inline-block; 
						vertical-align: middle;
						fill: currentColor;
						width: 24px;
						height: 24px;
						"
					>
						<path
							d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z"
						/>
					</svg>
				</Link>
			</div>
			<p>© 2025 FitFlow. All rights reserved.</p>
		</footer>
	</div>
</div>

<style>
	.container {
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
