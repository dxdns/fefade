<script lang="ts">
	import {
		Button,
		Card,
		HoverFollower,
		Link,
		Separator,
		Switch,
		themeConfig
	} from "@feflow-ui/svelte"
	import {
		DarkModeIcon,
		GithubIcon,
		LightModeIcon,
		LinkedinIcon,
		OpenInNewIcon,
		RedditIcon
	} from "@/icons"

	const theme = $derived(themeConfig())

	const projectsData = [
		{
			title: "TaskMaster",
			description:
				"A project management tool for teams to collaborate on tasks and track progress with an intuitive interface.",
			link: "/"
		},
		{
			title: "ChatWave",
			description:
				"A real-time chat application with voice and video integration, built with WebSockets and React.",
			link: "/"
		}
	]

	const blogPostsData = [
		{
			title: "The Future of Full Stack Development: Trends to Watch",
			description:
				"Exploring emerging technologies and practices that will shape the future of full stack development.",
			link: "/"
		},
		{
			title: "My Journey to Becoming a Software Engineer",
			description:
				"From a beginner to a full stack developer, I share my personal journey and the lessons learned along the way.",
			link: "/"
		}
	]
</script>

<div
	style="
		padding: 3rem 1rem;
		width: clamp(320px, 90vw, 720px);
		margin: 0 auto;
		display: flex;
		flex-direction: column;
		gap: 3rem;
	"
>
	<header style="text-align: center;">
		<h1 style="margin: 0;">Diógenes Rodrigues</h1>
		<p class="text-muted" style="margin-top: 0.5em;">
			Full Stack Developer at TechSolutions
		</p>
	</header>

	<section id="projects">
		<h2>Projects</h2>
		<div
			style="
			display: flex; 
			flex-direction: column; 
			gap: 1rem; 
			align-items: center;
			"
		>
			<div
				style="
				display: grid; 
				grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); 
				gap: 1rem;
				"
			>
				{#each projectsData as { link, title, description } (title)}
					<Link href={link}>
						<Card>
							<h5>{title}</h5>
							<p class="text-muted" style="margin-top: 0.5rem;">
								{description}
							</p>
						</Card>
					</Link>
				{/each}
			</div>
			<Button href="https://github.com/dxdns?tab=repositories" target="_blank">
				<GithubIcon />
				See all projects
			</Button>
		</div>
	</section>

	<section id="work-experience">
		<h2 style="margin-bottom: 1rem;">Work Experience</h2>
		<Card glowOnHover style="padding: 1.5rem;">
			<div
				style="
					display: flex;
					justify-content: space-between;
					flex-wrap: wrap;
					gap: 0.5rem;
				"
			>
				<div>
					<h5 style="margin: 0;">Lead Developer</h5>
					<p class="text-muted" style="margin: 0.25rem 0;">
						TechSolutions Inc.
					</p>
				</div>
				<p class="text-muted" style="margin: 0;">2022 - Present</p>
			</div>
		</Card>
	</section>

	<section id="blog">
		<h2>Blog</h2>
		<div
			style="
			display: flex; 
			flex-direction: column; 
			gap: 1rem; 
			align-items: center;
			"
		>
			<HoverFollower>
				{#each blogPostsData as { link, title, description } (title)}
					<Link href={link}>
						<Card style="padding: 1.5rem;">
							<h5>{title}</h5>
							<p class="text-muted" style="margin-top: 0.5rem;">
								{description}
							</p>
						</Card>
					</Link>
				{/each}
			</HoverFollower>
			<Button style="max-width: fit-content;">
				See more posts
				<OpenInNewIcon height="14px" width="14px" />
			</Button>
		</div>
	</section>

	<section id="connect">
		<h2 style="margin-bottom: 0.5rem;">Connect</h2>
		<p class="text-muted">
			Feel free to contact me at
			<Link href="mailto:hi@feflow-ui.dev" hoverUnderline="center">
				hi@feflow-ui.dev
			</Link>
		</p>
		<div style="display: flex; gap: 1rem; margin-top: 1rem;">
			<Link href="https://linkedin.com/in/dxdns" target="_blank">
				<LinkedinIcon />
			</Link>
			<Link href="https://github.com/dxdns" target="_blank">
				<GithubIcon />
			</Link>
			<Link href="https://reddit.com/user/feflow-ui" target="_blank">
				<RedditIcon />
			</Link>
		</div>
	</section>

	<footer>
		<Separator />
		<div
			style="
			display: flex;
			justify-content: space-between;
			align-items: center;
			flex-wrap: wrap;
			gap: 0.5rem;
			margin: 0;
			padding: 1rem 0;
			"
		>
			<div
				style="
				display: flex; 
				gap: 0.5rem; 
				align-items: center;
				"
			>
				<span class="text-muted">© 2025</span>
				<Link href="https://dxdns.dev" target="_blank" hoverUnderline="right">
					dxdns
				</Link>
			</div>
			<Switch onclick={theme.toggle} checked={theme.mode === "dark"}>
				<DarkModeIcon height="14px" width="14px" />
				<LightModeIcon height="14px" width="14px" />
			</Switch>
		</div>
	</footer>
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

	p {
		line-height: 1.5;
	}
</style>
