<script lang="ts">
	import { Link } from "feflow-svelte"
</script>

<Link href="https://dxdns.dev" target="_blank">
	<h1>none</h1>
</Link>
<br />
<Link href="https://dxdns.dev" hover="underlineNone">underline</Link>
<br />
<br />
<Link href="https://dxdns.dev">
	<svg
		xmlns="http://www.w3.org/2000/svg"
		height="16px"
		viewBox="0 -960 960 960"
		width="16px"
		fill="red"
	>
		<path
			d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Z"
		/>
	</svg>
	heart
</Link>
<br />
<br />
<Link href="https://dxdns.dev" hover="left" target="_blank">
	<h1>left</h1>
</Link>
<br />
<Link pathname="/" hover="center">
	<h1>center</h1>
</Link>
<br />
<Link pathname="/" hover="right">
	<h1>right</h1>
</Link>
<br />
<br />
<p>
	Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime voluptatibus
	pariatur maiores cumque <Link href="https://dxdns.dev" hover="center">
		<strong style="color: red;">obcaecati</strong>
	</Link>, eum quod porro harum magni quisquam sunt nihil, eos modi officia
	molestiae. Illum <Link href="https://dxdns.dev" hover="underlineNone">
		minima
	</Link> ad ducimus.
</p>
<br />
<Link
	class={({ isActive }) => (isActive ? "text-on-error" : "text-on-info")}
	pathname="https://dxdns.dev"
	href="https://dxdns.dev"
	target="_blank"
>
	check active
</Link>
