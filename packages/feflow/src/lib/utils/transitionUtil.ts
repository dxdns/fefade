import type { TransitionConfig } from "svelte/transition"
import type { TransitionEntry } from "../types/index.js"

export default function transitionUtil<T extends HTMLElement>(
	node: T,
	transition?: TransitionEntry
) {
	let intro: Animation | null = null
	let outro: Animation | null = null

	function createAnimationFromTransitionConfig(
		node: Element,
		config: TransitionConfig
	): Animation {
		const keyframes = config.css ? parseCss(config.css) : []
		const animation = node.animate(keyframes, {
			duration: config.duration,
			delay: config.delay,
			easing: typeof config.easing === "string" ? config.easing : "ease",
			fill: "both"
		})
		return animation
	}

	async function runIn() {
		if (transition && transition.in) {
			intro?.cancel()
			const [fn, params] = transition.in
			const config = fn(node, params)
			intro = createAnimationFromTransitionConfig(node, config)
			await intro.finished
		}
	}

	async function runOut() {
		if (transition && transition.out) {
			outro?.cancel()
			const [fn, params] = transition.out
			const config = fn(node, params)
			outro = createAnimationFromTransitionConfig(node, config)
			await outro.finished
		}
	}

	runIn()

	return {
		destroy() {
			runOut()
		}
	}
}

function parseCss(cssFn: (t: number, u: number) => string): Keyframe[] {
	const keyframes: Keyframe[] = []

	for (let i = 0; i <= 1; i += 0.1) {
		const t = i
		const u = 1 - t
		const css = cssFn(t, u)
		const frame: Keyframe = {}

		css.split(";").forEach((decl) => {
			const [prop, value] = decl.split(":").map((x) => x.trim())
			if (prop && value) frame[prop] = value
		})

		keyframes.push(frame)
	}

	return keyframes
}
