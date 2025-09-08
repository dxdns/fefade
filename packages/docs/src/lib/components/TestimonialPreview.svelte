<script lang="ts">
	import { Avatar, Card, Rating } from "@dxdns-kit/svelte"

	type ReviewType = {
		name: string
		role: string
		avatarUrl?: string
		rating: number
		comment: string
	}

	const reviews = [
		{
			name: "Chloe K.",
			role: "Marketing Lead",
			avatarUrl: "https://randomuser.me/api/portraits/women/65.jpg",
			rating: 3.5,
			comment:
				"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate deserunt ullam, architecto libero quo accusamus? Facere deserunt natus quibusdam libero expedita magni a! Necessitatibus dicta odio quo qui esse porro?"
		},
		{
			name: "Liam R.",
			role: "Product Manager",
			avatarUrl: "https://randomuser.me/api/portraits/men/32.jpg",
			rating: 4.0,
			comment:
				"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?"
		},
		{
			name: "Sophia M.",
			role: "UX Designer",
			rating: 5.0,
			comment:
				"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
		},
		{
			name: "Ethan W.",
			role: "Software Engineer",
			avatarUrl: "https://randomuser.me/api/portraits/men/44.jpg",
			rating: 2.5,
			comment:
				"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
		},
		{
			name: "Ava T.",
			role: "Data Analyst",
			rating: 4.5,
			comment:
				"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam."
		}
	]
</script>

{#snippet Component({ name, role, avatarUrl, rating, comment }: ReviewType)}
	<Card variant="contained" style="margin-top: 1rem;">
		<div
			style="
			display: flex; 
			gap: 1rem; 
			align-items: center; 
			flex-wrap: wrap;
			justify-content: space-between;
			"
		>
			<div
				style="
				display: flex; 
				gap: 1rem; 
				align-items: center; 
				flex-wrap: wrap;
				"
			>
				<Avatar textFallback={name} src={avatarUrl} />
				<p style="margin: 0;">
					<strong>{name}</strong>
					<br />
					<span class="muted">{role}</span>
				</p>
			</div>
			<Rating startIn={rating} style="font-size: 24px;" disabled />
		</div>

		<p>
			<i>{comment}</i>
		</p>
	</Card>
{/snippet}

{@render Component?.(reviews[0])}

<div class="fadeMask">
	<div class="container">
		<div class="animateScrollToTop">
			{#each reviews.slice(0, 2) as review, i (i)}
				{@render Component?.(review)}
			{/each}
		</div>

		<div class="animateScrollToBottom">
			{#each reviews.slice(3, reviews.length) as review, i (i)}
				{@render Component?.(review)}
			{/each}
		</div>
	</div>
</div>

<style>
	.fadeMask {
		overflow: hidden;
		max-height: 300px;

		-webkit-mask-image: linear-gradient(
			to bottom,
			transparent 0%,
			white 10%,
			white 90%,
			transparent 100%
		);
		mask-image: linear-gradient(
			to bottom,
			transparent 0%,
			white 10%,
			white 90%,
			transparent 100%
		);
	}

	.container {
		display: flex;
		gap: 1rem;
		border-radius: 1.5rem;
	}

	@keyframes scroll-top-to-bottom {
		0% {
			transform: translateY(0);
		}

		100% {
			transform: translateY(-50%);
		}
	}

	@keyframes scroll-bottom-to-top {
		0% {
			transform: translateY(-50%);
		}

		100% {
			transform: translateY(0);
		}
	}

	.animateScrollToTop {
		animation: scroll-bottom-to-top 60s linear infinite;
	}

	.animateScrollToBottom {
		animation: scroll-top-to-bottom 60s linear infinite;
	}

	.animateScrollToTop:hover,
	.animateScrollToBottom:hover {
		animation-play-state: paused;
	}
</style>
