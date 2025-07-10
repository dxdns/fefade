<script lang="ts">
	import { Button, Card, Carousel, RadioButton } from "@feflow/svelte"

	let currentIndex = $state(0)
</script>

<Carousel id="carousel-1" auto>
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

	{#snippet actions({ prev, next, isFirst, isLast })}
		<div
			style="
			display: flex;
			justify-content: space-between;
			position: absolute;
			left: 5px;
			right: 5px;
			top: 50%;
			transform: translate(0, -50%);
            align-items: baseline;
			"
		>
			<Button disabled={isFirst} roundedFull onclick={prev}>prev</Button>
			<Button disabled={isLast} roundedFull onclick={next}>next</Button>
		</div>
	{/snippet}
</Carousel>

<Card>
	<Carousel id="carousel-2" style="padding: 3rem 0;">
		{#each Array.from(Array(5)) as _, index}
			<Carousel.Item href="https://dxdns.dev" target="_blank">
				<h1 style="text-align: center;">{index}</h1>
				<br />
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
					soluta vero est minima, non illo ipsam molestiae omnis laborum,
					debitis, harum velit earum quam aperiam reiciendis sit consectetur ex?
					Iste.
				</p>
			</Carousel.Item>
		{/each}

		{#snippet actions({ prev, next })}
			<div
				style="
				display: flex;
				justify-content: space-between;
				position: absolute;
				left: 0;
				right: 0;
				top: 5px;
				padding: 0 1rem;
                align-items: baseline;
			"
			>
				<Button onclick={prev}>prev</Button>
				<Button onclick={next}>next</Button>
			</div>
		{/snippet}
	</Carousel>
</Card>

<Card>
	<Carousel id="carousel-3" style="padding: 3rem 0;">
		{#each Array.from(Array(5)) as _, index}
			<Carousel.Item>
				<h1 style="text-align: center;">{index}</h1>
				<br />
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
					soluta vero est minima, non illo ipsam molestiae omnis laborum,
					debitis, harum velit earum quam aperiam reiciendis sit consectetur ex?
					Iste.
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
                align-items: baseline;
			"
			>
				<Button roundedFull onclick={prev}>prev</Button>
				<Button roundedFull onclick={next}>next</Button>
			</div>
		{/snippet}
	</Carousel>
</Card>

<Card>
	<Carousel id="carousel-4" style="padding: 3rem 0;">
		{#each Array.from(Array(5)) as _, index}
			<Carousel.Item>
				<h1 style="text-align: center;">{index}</h1>
				<br />
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
					soluta vero est minima, non illo ipsam molestiae omnis laborum,
					debitis, harum velit earum quam aperiam reiciendis sit consectetur ex?
					Iste.
				</p>
			</Carousel.Item>
		{/each}

		{#snippet actions({ goTo })}
			<div
				style="
				display: flex;
				justify-content: center;
				position: absolute;
				left: 0;
				right: 0;
				bottom: 5px;
				padding: 0 1rem;
				gap: 1rem;
                align-items: baseline;
			"
			>
				{#each Array.from(Array(5)) as _, index}
					<RadioButton
						size="xs"
						checked={currentIndex === index}
						onchange={() => {
							currentIndex = index
							goTo(currentIndex)
						}}
					/>
				{/each}
			</div>
		{/snippet}
	</Carousel>
</Card>

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
