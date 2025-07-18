import { useState, useMemo, useEffect, type PropsWithChildren } from "react"
import { Constants } from "@dxdns/feflow-core"
import { providerUtil } from "@dxdns/feflow-core/utils"
import type {
	ThemeColorType,
	ThemeConfigType,
	ThemeModeType
} from "@dxdns/feflow-core/types"
import { ThemeConfigContext } from "../../contexts"
// @ts-ignore
import rawStyle from "@dxdns/feflow-core/styles/FeflowProvider.css?raw"

type Props = PropsWithChildren & {
	/** @deprecated Use `theme` instead */
	customTheme?: ThemeConfigType

	theme?: ThemeConfigType

	/** @deprecated Use `defaultThemeMode` instead */
	defaultMode?: ThemeModeType

	defaultThemeMode?: ThemeModeType
}

export default function ({
	children,
	customTheme,
	theme,
	defaultMode = "light",
	defaultThemeMode = "light"
}: Props) {
	const [mode, setMode] = useState<ThemeModeType>("light")
	const [colors, setColors] = useState<ThemeColorType>(
		Constants.themeColors.light
	)

	const setThemeMode = (t: ThemeModeType) => {
		setMode(t)
		setColors(Constants.themeColors[t])
	}

	const provider = providerUtil()
	const styleString = provider.style(theme ?? customTheme, rawStyle)

	const value = useMemo(
		() => ({
			colors: Constants.themeColors[mode],
			mode,
			toggle: () => {
				provider.toggleThemeMode((t) => {
					setThemeMode(t)
				})
			}
		}),
		[mode, colors]
	)

	function switchTheme() {
		const storedTheme = provider.storedTheme(defaultThemeMode ?? defaultMode)
		provider.applyThemeMode(storedTheme)
	}

	useEffect(() => {
		const meta = provider.createMetaElement()
		document.head.appendChild(meta)

		switchTheme()

		return () => {
			document.head.removeChild(meta)
		}
	}, [])

	return (
		<>
			<div
				dangerouslySetInnerHTML={{
					__html: styleString
				}}
			></div>

			<ThemeConfigContext.Provider value={value}>
				{children}
			</ThemeConfigContext.Provider>
		</>
	)
}
