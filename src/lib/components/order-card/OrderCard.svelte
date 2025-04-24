<script lang="ts">
	import type { HTMLAttributes, ClassValue } from "svelte/elements"
	import classMapUtil from "../../utils/classMapUtil.js"
	import styles from "./OrderCard.module.css"
	import Card from "../card/index.js"
	import type { OrderStatusType } from "../../types/index.js"
	import Button from "../button/index.js"
	import type { SvelteComponent } from "svelte"

	interface Props extends HTMLAttributes<HTMLDivElement> {
		class?: ClassValue
		statusColor: OrderStatusType
		topRight: typeof SvelteComponent
	}

	let {
		class: className = "",
		statusColor,
		topRight,
		...rest
	}: Props = $props()
</script>

<Card
	{...rest}
	class={classMapUtil({
		[className as string]: true,
		[styles.orderCard]: true
	})}
>
	<div
		class={classMapUtil({
			[styles.top]: true,
			[statusColor]: true
		})}
	>
		<div>
			<h3>Pedido #0</h3>
			<p>
				{new Date().toLocaleTimeString([], {
					hour: "2-digit",
					minute: "2-digit"
				})}
			</p>
		</div>
		<div>
			{@html topRight}
		</div>
	</div>
	<div class={styles.info}>
		<p class="text-muted">Jhon Doe</p>
	</div>
	<div class={styles.content}>
		<ol type="1">
			<li>
				<strong>6x</strong>
				<div>
					<strong>Coffee</strong>
					<small class="text-muted">
						Uma bebida feita a partir de grãos torrados de café.
					</small>
				</div>
			</li>
			<li>
				<strong>3x</strong>
				<div>
					<strong>Tea</strong>
					<small class="text-muted">
						Uma infusão feita de folhas de chá, geralmente servida quente.
					</small>
				</div>
			</li>
			<li>
				<strong>5x</strong>
				<div>
					<strong>Milk</strong>
					<small class="text-muted">
						Um líquido branco produzido por mamíferos, rico em nutrientes.
					</small>
				</div>
			</li>
		</ol>

		<div class={styles.bottom}>
			<p>
				<strong>Preparation time: </strong>
				<strong class="error">18 Minutes</strong>
			</p>

			<Button disabled={status === "completed"} variant="contained">
				Mark as done
			</Button>
		</div>
	</div>
</Card>
