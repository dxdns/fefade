import {
	useState,
	useMemo,
	useRef,
	useEffect,
	type PropsWithChildren
} from "react"
import { Constants } from "@dxdns/feflow-core"
import {
	mergeObjectUtil,
	themeConfigUtil,
	themeModeUtil
} from "@dxdns/feflow-core/utils"
import type {
	BreakpointType,
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

	const { getThemeModeFromAttr, toggleThemeMode } = themeModeUtil()

	const value = useMemo(
		() => ({
			colors: Constants.themeConfigDefault[mode],
			mode,
			toggle: () => {
				toggleThemeMode((t) => {
					setThemeMode(t)
				})
			}
		}),
		[mode, colors]
	)

	const observer = useRef<MutationObserver | null>(null)

	const { themeConfigToCssString, breakpointConfigToCssString } =
		themeConfigUtil()

	const themeStyle = themeConfigToCssString(
		mergeObjectUtil(
			Constants.themeConfigDefault,
			customTheme?.colors || theme?.colors || {}
		) as ThemeConfigType
	)

	const breakpointStyle = breakpointConfigToCssString(
		mergeObjectUtil(
			Constants.breakpoints,
			customTheme?.breakpoints || theme?.breakpoints || {}
		) as Record<BreakpointType, string>
	)

	useEffect(() => {
		const theme =
			localStorage.getItem(Constants.THEME_STORAGE) ||
			(defaultMode ?? defaultThemeMode)
		document.documentElement.setAttribute(Constants.THEME_ATTR, theme)
		document.documentElement.style.colorScheme = theme
		setThemeMode(theme as ThemeModeType)
	}, [])

	useEffect(() => {
		observer.current = new MutationObserver((records) => {
			for (const mutation of records) {
				if (
					mutation.type === "attributes" &&
					mutation.attributeName === Constants.THEME_ATTR
				) {
					const themeMode = getThemeModeFromAttr()
					setThemeMode(themeMode)
				}
			}
		})

		const rootElement = document.documentElement
		observer.current.observe(rootElement, {
			attributes: true,
			attributeFilter: [Constants.THEME_ATTR]
		})

		return () => {
			observer.current?.disconnect()
		}
	}, [])

	return (
		<>
			<meta name="x-library-name" content="feflow" />
			<div
				dangerouslySetInnerHTML={{
					__html: themeStyle
				}}
			></div>

			<div
				dangerouslySetInnerHTML={{
					__html: breakpointStyle
				}}
			></div>

			<style
				dangerouslySetInnerHTML={{
					__html: rawStyle
				}}
			/>

			<ThemeConfigContext.Provider value={value}>
				{children}
			</ThemeConfigContext.Provider>
		</>
	)
}
