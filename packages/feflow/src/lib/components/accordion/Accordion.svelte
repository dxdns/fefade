<script lang="ts">
	import type { HTMLInputAttributes } from "svelte/elements"
	import type { VariantType } from "../../types/index.js"
	import { KeyboardArrowLeftIcon } from "../../icons/index.js"
	import { classMapUtil } from "../../utils/index.js"

	interface Props extends HTMLInputAttributes {
		label: string
		variant?: VariantType
	}

	let {
		class: className = "",
		label,
		variant,
		children,
		...rest
	}: Props = $props()
</script>

<div class={classMapUtil(className, "accordion", variant)}>
	<input
		{...rest}
		class="controller"
		type="radio"
		id={rest.id}
		name="accordion"
		hidden
		style={undefined}
	/>
	<label for={rest.id} class="header">
		<label for={rest.id}>{label}</label>
		<div class="icon">
			<KeyboardArrowLeftIcon />
		</div>
	</label>
	<div class="content">
		{@render children?.()}
	</div>
</div>

<style>
	.accordion {
		margin: 0;
		line-height: 1;
	}

	.header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 8px;
		cursor: pointer;
		text-align: left;
		border-radius: 5px;
		transition: background 0.3s ease;
	}

	.header label {
		cursor: pointer;
		color: var(--ff-on-surface);
	}

	.accordion:not(.text):not(.contained) .header:hover {
		background: color-mix(in srgb, var(--ff-surface-variant) 95%, gray 5%);
	}

	.accordion.text .header {
		border-radius: 0;
		border-bottom: 1px solid var(--ff-border);
	}

	.accordion.contained .header {
		background: var(--ff-surface);
	}

	.accordion.outlined .header {
		border: 1px solid var(--ff-border);
	}

	.controller {
		display: none;
	}

	.content {
		margin: 0;
		height: 0px;
		padding: 0px;
		overflow: hidden;
		transition: all 0.3s ease;
		opacity: 0;
		border-bottom-left-radius: 5px;
		border-bottom-right-radius: 5px;
		line-height: 1.5;
	}

	.accordion.contained .content {
		background: var(--ff-surface);
	}

	.accordion.outlined .content {
		background: none;
		border-style: solid;
		border: 1px solid var(--ff-border);
		border-top: none;
	}

	.controller:checked + .header {
		border-bottom-left-radius: 0;
		border-bottom-right-radius: 0;
	}

	.controller:checked + .header label {
		font-weight: bold;
	}

	.controller:checked + .header + .content {
		height: auto;
		padding: 15px;
		opacity: 1;
	}

	.icon {
		margin: 0;
		display: flex;
		align-items: center;
		transition: all 0.5s ease;
		transform: rotate(-90deg);
	}

	.controller:checked + .header .icon {
		transform: rotate(90deg);
	}
</style>
