import type { SizeType } from "../types/index.js"

interface DeviceState {
	deviceType: "mobile" | "tablet" | "desktop"
	orientation: "portrait" | "landscape"
	screenSize: SizeType
}

interface Props {
	onChange?: (state: DeviceState) => void
	breakpoints?: Record<SizeType, number>
	disableUADetection?: boolean
	detectOrientation?: boolean
	debounceTime?: number
}

export default function deviceDetectorAction(
	_node: HTMLElement,
	props?: Props
) {
	if (typeof window === "undefined") {
		return { destroy: () => {} }
	}

	const config = {
		breakpoints: { xs: 480, sm: 640, md: 768, lg: 1024, xl: 1280 },
		disableUADetection: false,
		detectOrientation: true,
		debounceTime: 250,
		...props
	}

	const mobileUARegex =
		/Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i
	const tabletUARegex = /iPad|Android(?!.*Mobile)/i

	let currentState: DeviceState = {
		deviceType: "desktop",
		orientation: "landscape",
		screenSize: "xl"
	}

	let debounceTimer: ReturnType<typeof setTimeout> | null = null

	function getDeviceState(): DeviceState {
		const width = window.innerWidth
		const { breakpoints } = config

		let screenSize: DeviceState["screenSize"] = "xl"
		if (width <= breakpoints.xs) screenSize = "xs"
		else if (width <= breakpoints.sm) screenSize = "sm"
		else if (width <= breakpoints.md) screenSize = "md"
		else if (width <= breakpoints.lg) screenSize = "lg"

		let deviceType: DeviceState["deviceType"] = "desktop"

		if (!config.disableUADetection) {
			if (
				mobileUARegex.test(navigator.userAgent) &&
				!tabletUARegex.test(navigator.userAgent)
			) {
				deviceType = "mobile"
			} else if (tabletUARegex.test(navigator.userAgent)) {
				deviceType = "tablet"
			}
		}

		if (config.disableUADetection || deviceType === "desktop") {
			if (screenSize === "xs" || screenSize === "sm") deviceType = "mobile"
			else if (screenSize === "md") deviceType = "tablet"
		}

		const orientation: DeviceState["orientation"] =
			config.detectOrientation &&
			window.matchMedia("(orientation: portrait)").matches
				? "portrait"
				: "landscape"

		return {
			deviceType,
			orientation,
			screenSize
		}
	}

	function update() {
		const newState = getDeviceState()

		if (JSON.stringify(newState) !== JSON.stringify(currentState)) {
			currentState = newState
			props?.onChange?.(currentState)
		}
	}

	function handleChange() {
		if (debounceTimer) clearTimeout(debounceTimer)
		debounceTimer = setTimeout(update, config.debounceTime)
	}

	const orientationMedia = window.matchMedia("(orientation: portrait)")
	if (config.detectOrientation) {
		orientationMedia.addEventListener("change", handleChange)
	}

	window.addEventListener("resize", handleChange)

	update()

	return {
		update(newProps: Props) {
			Object.assign(config, newProps)
			update()
		},
		destroy() {
			if (config.detectOrientation) {
				orientationMedia.removeEventListener("change", handleChange)
			}
			window.removeEventListener("resize", handleChange)
			if (debounceTimer) clearTimeout(debounceTimer)
		}
	}
}
