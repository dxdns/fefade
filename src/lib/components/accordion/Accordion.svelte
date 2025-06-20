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
		variant = "contained",
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
		font-weight: bold;
		text-align: left;
		color: var(--ff-color-on-surface);
		border-radius: 5px;
	}

	.accordion.contained .header {
		background: var(--ff-color-surface);
	}

	.accordion.outlined .header {
		border: 1px solid var(--ff-color-border);
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
	}

	.accordion.contained .content {
		background: var(--ff-color-surface);
	}

	.accordion.outlined .content {
		background: none;
		border-style: solid;
		border: 1px solid var(--ff-color-border);
		border-top: none;
	}

	.accordion:not(.outlined) .content {
		border-top: 1px solid var(--ff-color-border);
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
