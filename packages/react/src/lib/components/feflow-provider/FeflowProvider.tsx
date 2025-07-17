import {
	useState,
	useMemo,
	useRef,
	useEffect,
	type PropsWithChildren
} from "react"
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
		Constants.themeConfigDefault.light
	)

	const setThemeMode = (t: ThemeModeType) => {
		setMode(t)
		setColors(Constants.themeConfigDefault[t])
	}

	const observer = useRef<MutationObserver | null>(null)

	const ffProvider = providerUtil()
	const styleString = ffProvider.style(theme ?? customTheme, rawStyle)

	const value = useMemo(
		() => ({
			colors: Constants.themeConfigDefault[mode],
			mode,
			toggle: () => {
				ffProvider.toggleThemeMode((t) => {
					setThemeMode(t)
				})
			}
		}),
		[mode, colors]
	)

	function ffProviderScript() {
		const _storedTheme = ffProvider.storedTheme(defaultThemeMode ?? defaultMode)
		ffProvider.applyThemeMode(_storedTheme)
	}

	useEffect(() => {
		const meta = ffProvider.createMetaElement()
		document.head.appendChild(meta)

		ffProviderScript()

		const el = document.documentElement
		if (el) {
			observer.current = ffProvider.attrObserver(el, () => {
				const themeMode = ffProvider.storedTheme()
				setThemeMode(themeMode)
			})
		}

		return () => {
			document.head.removeChild(meta)
			if (observer.current) {
				observer.current.disconnect()
			}
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
