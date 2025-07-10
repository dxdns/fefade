import { createContext, useContext, useState, useMemo, useRef, useEffect, type ReactNode } from "react"
import { Constants } from "@feflow/core"
import {
    mergeObjectUtil,
    themeConfigUtil,
    themeModeUtil
} from "@feflow/core/utils"
import type { BreakpointType, ThemeColorType, ThemeConfigType, ThemeModeType } from "@feflow/core/types"
import rawStyle from "@feflow/core/styles/FeflowProvider.css?raw"

type ThemeConfigContextType = {
    mode: ThemeModeType
    colors: ThemeColorType
    toggle: () => void
}

type Props = {
    /** @deprecated Use `theme` instead */
    customTheme?: ThemeConfigType

    theme?: ThemeConfigType

    /** @deprecated Use `defaultThemeMode` instead */
    defaultMode?: ThemeModeType

    defaultThemeMode?: ThemeModeType
    children: ReactNode
}

const ThemeConfigContext = createContext<ThemeConfigContextType | undefined>(undefined)

export default function ({ children, customTheme, theme, defaultMode = "light", defaultThemeMode = "light" }: Props) {
    const [mode, setMode] = useState<ThemeModeType>("light")
    const [colors, setColors] = useState<ThemeColorType>(Constants.themeConfigDefault.light)

    const _setMode = (t: ThemeModeType) => setMode(t)
    const _setColors = (t: ThemeModeType) => setColors(Constants.themeConfigDefault[t])

    const setThemeMode = (t: ThemeModeType) => {
        _setMode(t)
        _setColors(t)
    }

    const getMode = () => mode
    const getColors = () => Constants.themeConfigDefault[mode]

    const { getThemeModeFromAttr, toggleThemeMode } = themeModeUtil()

    const value = useMemo(
        () => ({
            colors: getColors(),
            mode: getMode(),
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
        const theme = localStorage.getItem(Constants.THEME_STORAGE) || (defaultMode ?? defaultThemeMode)
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

export function useThemeConfig() {
    const context = useContext(ThemeConfigContext)
    if (!context) {
        throw new Error("useThemeConfig must be used within a FeflowProvider")
    }
    return context
}