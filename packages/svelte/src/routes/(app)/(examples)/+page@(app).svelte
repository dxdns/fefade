<script>
	import { Link } from "@/index.js"
</script>

<div class="circle">
	<Link
		href="https://feflow-ui.dxdns.dev"
		target="_blank"
		style="transform: translate(50%, 100%);"
	>
		<h1>feflow</h1>
	</Link>
</div>

<style>
	.circle {
		position: relative;
		width: 160px;
		aspect-ratio: 1;
		border-radius: 50%;
		outline: 30px solid rgba(0, 0, 0, 0.35);
		outline-offset: -12px;
		margin: 40vh auto;
	}

	.circle::before,
	.circle::after {
		position: absolute;
		z-index: -1;
		content: "";
		inset: -40px;
		border-radius: inherit;
		background-image: conic-gradient(#00dbde, #fc00ff, #00dbde);
		animation: rotate 3s linear infinite;
	}

	.circle::after {
		filter: blur(2rem);
		opacity: 0.7;
	}

	.circle:hover::before,
	.circle:hover::after {
		animation-play-state: paused;
	}

	@keyframes rotate {
		to {
			rotate: 360deg;
		}
	}
</style>
