import en from "./en.json"
import ptBR from "./pt-br.json"

const translations = {
	en,
	"pt-BR": ptBR
}

type Locale = keyof typeof translations

export function getTranslations(locale?: string) {
	const availableLocales = Object.keys(translations) as Locale[]
	const lang = availableLocales.includes(locale as Locale)
		? (locale as Locale)
		: "en"
	return translations[lang]
}
