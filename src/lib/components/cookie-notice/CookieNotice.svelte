<script lang="ts">
	import { onMount } from "svelte"
	import Button from "../button/index.js"
	import Switch from "../switch/index.js"
	import classMapUtil from "../../utils/classMapUtil.js"
	import { clickOutsideAction } from "../../actions/index.js"
	import { slide } from "svelte/transition"
	import styles from "./CookieNotice.module.css"
	import type { ClassValue, HTMLAttributes } from "svelte/elements"
	import type { CookiePrefsType } from "../../types/index.js"

	interface Props extends HTMLAttributes<HTMLDivElement> {
		class?: ClassValue
		cookiePrefs: CookiePrefsType
		options?: {
			title?: string
			description?: string
			manageTitle?: string
			manageDescription?: string
			manageLinkHref?: string
			manageLinkLabel?: string
			acceptLabel?: string
			rejectLabel?: string
			saveLabel?: string
			backLabel?: string
			preferencesLabel?: string
		}
	}

	let {
		class: className = "",
		cookiePrefs,
		options = {},
		...rest
	}: Props = $props()

	let isVisible = $state(false)
	let showPreferences = $state(false)
	let preferences = $state(cookiePrefs.default)

	const {
		title = "🍪 Cookie notice",
		description = `This website uses cookies to enhance your experience. By continuing to browse, you agree to our use of cookies.`,
		manageTitle = "Manage cookie preferences",
		manageDescription = "Choose which types of cookies you accept. You can change this anytime.",
		manageLinkHref = "/cookie-policy",
		manageLinkLabel = "Read our cookie policy",
		acceptLabel = "Accept",
		rejectLabel = "Reject",
		saveLabel = "Save",
		backLabel = "Back",
		preferencesLabel = "Manage preferences"
	} = options

	onMount(() => {
		const prefs = cookiePrefs.get()
		preferences = prefs
		isVisible = !prefs.analytics && !prefs.marketing
	})

	function acceptCookies() {
		cookiePrefs.accept()
		isVisible = false
	}

	function rejectCookies() {
		cookiePrefs.reject()
		isVisible = false
	}

	function handleSubmit(event: SubmitEvent) {
		event.preventDefault()
		const form = event.currentTarget as HTMLFormElement
		const formData = new FormData(form)

		const preferencesData = {
			...preferences,
			analytics: formData.get("analytics") === "on",
			marketing: formData.get("marketing") === "on"
		}

		preferences = preferencesData
		cookiePrefs.set(preferencesData)
		isVisible = false
		showPreferences = false
	}
</script>

{#if isVisible}
	<div
		{...rest}
		use:clickOutsideAction={{
			handler: () => {
				isVisible = false
			}
		}}
		out:slide={{ duration: 300 }}
		class={classMapUtil({
			[className as string]: true,
			[styles.cookieNotice]: true,
			[styles.visible]: isVisible
		})}
	>
		{#if showPreferences}
			<h3>{manageTitle}</h3>
			<br />
			<p>{manageDescription}</p>
			<br />

			<form onsubmit={handleSubmit}>
				<Switch aria-label="Essential cookies (always on)" checked disabled />
				<Switch
					name="analytics"
					aria-label="Analytics cookies (e.g. Google Analytics)"
				/>
				<Switch
					name="marketing"
					aria-label="Marketing cookies (e.g. Facebook Pixel)"
				/>

				<div class={styles.actions}>
					<Button
						type="button"
						variant="outlined"
						onclick={() => (showPreferences = false)}
					>
						{backLabel}
					</Button>
					<Button type="submit">{saveLabel}</Button>
				</div>
			</form>
		{:else}
			<h3>{title}</h3>
			<br />
			<p>
				{description}
				<a href={manageLinkHref} target="_blank">{manageLinkLabel}</a>.
			</p>
			<div class={styles.actions}>
				<Button
					class="link-underline"
					variant="text"
					onclick={() => (showPreferences = true)}
				>
					{preferencesLabel}
				</Button>
				<div>
					<Button onclick={rejectCookies} variant="outlined"
						>{rejectLabel}</Button
					>
					<Button onclick={acceptCookies}>{acceptLabel}</Button>
				</div>
			</div>
		{/if}
	</div>
{/if}
