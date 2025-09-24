import en from "./en.json"
import ptBR from "./pt-br.json"

const translations = {
	en,
	"pt-br": ptBR
}

type Locale = keyof typeof translations

const rootLocale = "en"

export function getLocale(currentLocale?: string) {
	return (currentLocale?.toLowerCase() || rootLocale) as Locale
}

export function isRootLocale(currentLocale?: string) {
	const locale = getLocale(currentLocale)
	return locale === "en"
}

export function getTranslations(currentLocale?: string) {
	const locale = getLocale(currentLocale)
	const availableLocales = Object.keys(translations) as Locale[]
	const lang = availableLocales.includes(locale as Locale)
		? (locale as Locale)
		: "en"
	return translations[lang]
}

export function getPath(path: string, currentLocale?: string) {
	const locale = getLocale(currentLocale)
	return locale === rootLocale ? path : `/${locale}/${path.replace(/^\/+/, "")}`
}
