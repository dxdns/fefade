<script lang="ts">
	import { onMount } from "svelte"
	import Button from "../button/index.js"
	import classMapUtil from "../../utils/classMapUtil.js"
	import type { ClassValue, HTMLAttributes } from "svelte/elements"
	import styles from "./CookieNotice.module.css"
	import Switch from "../switch/index.js"
	import { clickOutsideAction } from "../../actions/index.js"
	import { slide } from "svelte/transition"
	import cookiePreferenceUtil from "../../utils/cookiePreferenceUtil.js"

	interface Props extends HTMLAttributes<HTMLDivElement> {
		class?: ClassValue
	}

	let { class: className = "", ...rest }: Props = $props()

	const cookiePrefs = cookiePreferenceUtil()

	let isVisible = $state(false)
	let showPreferences = $state(false)
	let preferences = $state(cookiePrefs.default)

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
			<h3>Gerenciar preferências de cookies</h3>
			<br />
			<p>
				Selecione os tipos de cookies que você aceita. Você pode mudar isso a
				qualquer momento.
			</p>
			<br />

			<form onsubmit={handleSubmit}>
				<Switch
					aria-label="Cookies essenciais (sempre ativos)"
					checked
					disabled
				/>
				<Switch
					name="analytics"
					aria-label="Cookies de estatísticas (ex: Google Analytics)"
				/>
				<Switch
					name="marketing"
					aria-label="Cookies de marketing (ex: Facebook Pixel)"
				/>

				<div class={styles.actions}>
					<Button
						type="button"
						variant="outlined"
						onclick={() => (showPreferences = false)}
					>
						Voltar
					</Button>
					<Button type="submit">Salvar</Button>
				</div>
			</form>
		{:else}
			<h3>🍪 Aviso de cookies</h3>
			<br />
			<p>
				Este site usa cookies para melhorar sua experiência. Ao continuar
				navegando, você concorda com o uso de cookies.
				<a href="/cookie-policy" target="_blank">Leia a política de cookies</a>.
			</p>
			<div class={styles.actions}>
				<Button
					class="link-underline"
					variant="text"
					onclick={() => (showPreferences = true)}
				>
					Gerenciar preferências
				</Button>
				<div>
					<Button onclick={rejectCookies} variant="outlined">Recusar</Button>
					<Button onclick={acceptCookies}>Aceitar</Button>
				</div>
			</div>
		{/if}
	</div>
{/if}
