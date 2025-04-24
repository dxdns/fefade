type ConsentCategory = "essential" | "analytics" | "marketing"
type ConsentPreferences = Record<ConsentCategory, boolean>

export type CookiePrefsType = {
	name: string
	default: {
		essential: boolean
		analytics: boolean
		marketing: boolean
	}
	get(): {
		essential: boolean
		analytics: boolean
		marketing: boolean
	}
	set(prefs: ConsentPreferences): void
	hasConsent(category: ConsentCategory): boolean
	accept(): void
	reject(): void
}
