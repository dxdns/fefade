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
	import { LinkedinIcon, OpenInNewIcon, RedditIcon } from "@/icons"

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
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	gap: 3rem;
	max-width: 800px;
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
					<Card href={link} target="_blank" style="cursor: pointer; margin: 0;">
						<h5>{title}</h5>
						<p class="text-muted" style="margin-top: 0.5rem;">
							{description}
						</p>
					</Card>
				{/each}
			</div>
			<Button href="https://github.com/dxdns?tab=repositories" target="_blank">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					height="24px"
					width="24px"
					fill="currentColor"
					viewBox="0 0 20 20"
				>
					<path
						d="M10 0c5.523 0 10 4.59 10 10.253 0 4.529-2.862 8.371-6.833 9.728-.507.101-.687-.219-.687-.492 0-.338.012-1.442.012-2.814 0-.956-.32-1.58-.679-1.898 2.227-.254 4.567-1.121 4.567-5.059 0-1.12-.388-2.034-1.03-2.752.104-.259.447-1.302-.098-2.714 0 0-.838-.275-2.747 1.051-.799-.227-1.655-.341-2.505-.345-.85.004-1.705.118-2.503.345-1.911-1.326-2.751-1.051-2.751-1.051-.543 1.412-.2 2.455-.097 2.714-.639.718-1.03 1.632-1.03 2.752 0 3.928 2.335 4.808 4.556 5.067-.286.256-.545.708-.635 1.371-.57.262-2.018.715-2.91-.852 0 0-.529-.985-1.533-1.057 0 0-.975-.013-.068.623 0 0 .655.315 1.11 1.5 0 0 .587 1.83 3.369 1.21.005.857.014 1.665.014 1.909 0 .271-.184.588-.683.493C2.865 18.127 0 14.283 0 9.753 0 4.09 4.478 0 10 0z"
					/>
				</svg>
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
				<svg
					xmlns="http://www.w3.org/2000/svg"
					height="24px"
					width="24px"
					fill="currentColor"
					viewBox="0 0 20 20"
				>
					<path
						d="M10 0c5.523 0 10 4.59 10 10.253 0 4.529-2.862 8.371-6.833 9.728-.507.101-.687-.219-.687-.492 0-.338.012-1.442.012-2.814 0-.956-.32-1.58-.679-1.898 2.227-.254 4.567-1.121 4.567-5.059 0-1.12-.388-2.034-1.03-2.752.104-.259.447-1.302-.098-2.714 0 0-.838-.275-2.747 1.051-.799-.227-1.655-.341-2.505-.345-.85.004-1.705.118-2.503.345-1.911-1.326-2.751-1.051-2.751-1.051-.543 1.412-.2 2.455-.097 2.714-.639.718-1.03 1.632-1.03 2.752 0 3.928 2.335 4.808 4.556 5.067-.286.256-.545.708-.635 1.371-.57.262-2.018.715-2.91-.852 0 0-.529-.985-1.533-1.057 0 0-.975-.013-.068.623 0 0 .655.315 1.11 1.5 0 0 .587 1.83 3.369 1.21.005.857.014 1.665.014 1.909 0 .271-.184.588-.683.493C2.865 18.127 0 14.283 0 9.753 0 4.09 4.478 0 10 0z"
					/>
				</svg>
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
				<Link
					href="https://github.com/dxdns"
					target="_blank"
					hoverUnderline="right"
				>
					dxdns
				</Link>
			</div>
			<Switch onclick={theme.toggle} checked={theme.mode === "dark"}>
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
