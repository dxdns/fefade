<script lang="ts">
	import {
		Button,
		Card,
		HoverFollower,
		Link,
		Switch,
		themeConfig
	} from "@dxdns/feflow"
	import {
		DarkModeIcon,
		GithubIcon,
		LightModeIcon,
		LinkedinIcon,
		OpenInNewIcon,
		RedditIcon
	} from "@/icons"

	const theme = $derived(themeConfig())
</script>

<div class="container">
	<header>
		<h1>Diógenes Rodrigues</h1>
		<p class="text-muted">Full Stack Developer at TechSolutions</p>
	</header>

	<section id="projects">
		<h2>Projects</h2>
		<div class="projectsContent">
			<Link href="/">
				<Card style="min-height: 250px; max-height: 250px;">
					<h4>TaskMaster</h4>
					<p class="text-muted">
						A project management tool for teams to collaborate on tasks and
						track progress with an intuitive interface.
					</p>
				</Card>
			</Link>
			<Link href="/">
				<Card style="min-height: 250px; max-height: 250px;">
					<h4>ChatWave</h4>
					<p class="text-muted">
						A real-time chat application with voice and video integration, built
						with WebSockets and React.
					</p>
				</Card>
			</Link>
		</div>
		<Button
			onclick={() => {
				window.open("https://github.com/dxdns?tab=repositories", "_blank")
			}}
		>
			<GithubIcon />
			See all projects
		</Button>
	</section>

	<section id="work-experience">
		<h2>Work Experience</h2>
		<Card glowOnHover>
			<div class="workExperienceContent">
				<div>
					<h4>Lead Developer</h4>
					<p class="text-muted">TechSolutions Inc.</p>
				</div>
				<p class="text-muted">2022 - Present</p>
			</div>
		</Card>
	</section>

	<section id="blog">
		<h2>Blog</h2>
		<HoverFollower>
			<Link href="/">
				<Card>
					<h4>The Future of Full Stack Development: Trends to Watch</h4>
					<p class="text-muted">
						Exploring emerging technologies and practices that will shape the
						future of full stack development.
					</p>
				</Card>
			</Link>
			<Link href="/">
				<Card>
					<h4>My Journey to Becoming a Software Engineer</h4>
					<p class="text-muted">
						From a beginner to a full stack developer, I share my personal
						journey and the lessons learned along the way.
					</p>
				</Card>
			</Link>
		</HoverFollower>
		<Button>
			See more posts
			<OpenInNewIcon height="14px" width="14px" />
		</Button>
	</section>

	<section id="connect">
		<h2>Connect</h2>
		<p class="text-muted">
			Feel free to contact me at
			<Link href="mailto:dxdns@hotmail.com" hoverUnderline="center">
				dxdns@hotmail.com
			</Link>
		</p>
		<div class="social">
			<Link href="https://linkedin.com/in/dxdns" target="_blank">
				<LinkedinIcon />
			</Link>
			<Link href="https://github.com/dxdns" target="_blank">
				<GithubIcon />
			</Link>
			<Link href="https://reddit.com/user/dxdns_dev" target="_blank">
				<RedditIcon />
			</Link>
		</div>
	</section>

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
	:global(.sl-container > h1) {
		display: none;
	}

	:global(.content-panel) {
		border-top: 0;
		padding: 0;
	}

	h1 {
		font-size: 2.5rem;
	}

	h2 {
		font-size: 2rem;
	}

	h4 {
		font-size: 1rem;
	}

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

	section {
		text-align: center;
		line-height: 3;
	}

	p,
	h2 {
		text-align: left;
	}

	.projectsContent {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(210px, 1fr));
		gap: 1rem;
		padding: 1rem 0;
	}

	.workExperienceContent {
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 1rem;
	}

	.social {
		display: flex;
		gap: 1rem;
		align-items: center;
	}

	#connect {
		line-height: 3;
	}

	@media (max-width: 425px) {
		.container {
			width: 80%;
		}
	}

	@media screen and (max-width: 425px) {
		.projectsContent {
			gap: 0;
		}
	}
</style>
