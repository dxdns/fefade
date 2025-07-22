<script lang="ts">
	import { Button, Card, Carousel } from "@/index.js"
</script>

<Carousel
	auto
	id="carousel-1"
	style="
	width:600px;
	margin: 3rem auto; 
	background: blue; 
	padding: 0 3.5rem;
	"
>
	<Carousel.Item>
		<img
			style="object-fit:contain;width:100%;height:100%;"
			src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"
			alt="Tree at sunset"
		/>
	</Carousel.Item>
	<Carousel.Item>
		<img
			style="object-fit:contain;width:100%;height:100%;"
			src="https://gratisography.com/wp-content/uploads/2025/01/gratisography-dog-vacation-800x525.jpg"
			alt="dog"
		/>
	</Carousel.Item>

	{#snippet actions({ prev, next, index, length })}
		<div
			style="
			display: flex;
			justify-content: space-between;
			position: absolute;
			left: 5px;
			right: 5px;
			top: 50%;
			transform: translate(0, -50%);
			"
		>
			<Button disabled={index === 0} roundedFull onclick={prev}>prev</Button>
			<Button disabled={index === length} roundedFull onclick={next}>
				next
			</Button>
		</div>
	{/snippet}
</Carousel>

<Carousel
	id="carousel-2"
	style="
		width: 600px;
		margin: 3rem auto;
		background: green;
		padding: 3rem;
	"
>
	{#each Array.from(Array(5)) as _, index (index)}
		<Carousel.Item href="https://dxdns.dev" target="_blank">
			<Card>
				<h1 style="text-align: center;">
					{index}
				</h1>
				<br />
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
					soluta vero est minima, non illo ipsam molestiae omnis laborum,
					debitis, harum velit earum quam aperiam reiciendis sit consectetur ex?
					Iste.
				</p>
			</Card>
		</Carousel.Item>
	{/each}

	{#snippet actions({ prev, next, index, length })}
		<div
			style="
				display: flex;
				justify-content: space-between;
				position: absolute;
				left: 0;
				right: 0;
				top: 5px;
				padding: 0 1rem;
			"
		>
			<Button onclick={prev}>prev</Button>
			<Button onclick={next}>{index} / {length} next</Button>
		</div>
	{/snippet}
</Carousel>

<Carousel
	id="carousel-3"
	style="
		width: 600px;
		margin: 3rem auto;
		background: red;
		padding: 3rem;
	"
>
	{#each Array.from(Array(5)) as _, index (index)}
		<Carousel.Item>
			<h1 style="text-align: center;">
				{index}
			</h1>
			<br />
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
				soluta vero est minima, non illo ipsam molestiae omnis laborum, debitis,
				harum velit earum quam aperiam reiciendis sit consectetur ex? Iste.
			</p>
		</Carousel.Item>
	{/each}

	{#snippet actions({ prev, next })}
		<div
			style="
				display: flex;
				justify-content: flex-end;
				position: absolute;
				left: 0;
				right: 0;
				bottom: 5px;
				padding: 0 1rem;
				gap: 1rem;
			"
		>
			<Button roundedFull onclick={prev}>prev</Button>
			<Button roundedFull onclick={next}>next</Button>
		</div>
	{/snippet}
</Carousel>

<style>
	img {
		transition:
			transform 0.3s ease,
			opacity 0.3s ease;
	}

	img:hover {
		transform: scale(1.05);
		opacity: 0.7;
	}
</style>
