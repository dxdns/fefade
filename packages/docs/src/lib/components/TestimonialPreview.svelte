<script lang="ts">
	import { AutoScroll, Testimonial } from "@dxdns-kit/svelte"

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

<Testimonial variant="contained" {...reviews[0]} />

<div style="display: flex; gap: 1rem;">
	<AutoScroll fade direction="top" maxHeight={500}>
		{#each reviews.slice(0, 2) as review, i (i)}
			<Testimonial variant="contained" {...review} />
		{/each}
	</AutoScroll>

	<AutoScroll fade direction="bottom" maxHeight={500}>
		{#each reviews.slice(3, reviews.length) as review, i (i)}
			<Testimonial {...review} />
		{/each}
	</AutoScroll>
</div>
