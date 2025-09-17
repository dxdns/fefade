import { useState, useMemo, useEffect, type PropsWithChildren } from "react"
import { Constants } from "@fefade/core"
import { providerUtil } from "@fefade/core/utils"
import type {
	ThemeColorType,
	ThemeConfigType,
	ThemeModeType
} from "@fefade/core/types"
import { ThemeConfigContext } from "../../contexts"
// @ts-ignore
import rawStyle from "@fefade/core/styles/Provider.css?raw"

type Props = PropsWithChildren & {
	theme?: ThemeConfigType
	defaultThemeMode?: ThemeModeType
}

export default function ({
	children,
	theme,
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
	const styleString = provider.style(theme, rawStyle)

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
		const storedTheme = provider.storedTheme(defaultThemeMode)
		provider.applyThemeMode(storedTheme)
		setThemeMode(storedTheme)
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
