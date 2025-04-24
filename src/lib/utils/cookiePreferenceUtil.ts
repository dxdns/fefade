import CookieManagerUtil from "./cookieManagerUtil.js"

type ConsentCategory = "essential" | "analytics" | "marketing"
type ConsentPreferences = Record<ConsentCategory, boolean>

const COOKIE_NAME = "cookie_preferences"

export default function cookiePreferenceUtil() {
  return {
    name: COOKIE_NAME,
    default: {
      essential: true,
      analytics: false,
      marketing: false,
    },
    get() {
      const cookie = CookieManagerUtil.get(COOKIE_NAME)

      if (!cookie) return this.default

      try {
        const parsed = JSON.parse(decodeURIComponent(cookie))
        return {
          essential: true,
          analytics: !!parsed.analytics,
          marketing: !!parsed.marketing,
        }
      } catch {
        return this.default
      }
    },
    set(prefs: ConsentPreferences) {
      const safePrefs = {
        essential: true,
        analytics: !!prefs.analytics,
        marketing: !!prefs.marketing,
      }
      CookieManagerUtil.set(
        COOKIE_NAME,
        encodeURIComponent(JSON.stringify(safePrefs)),
        365,
      )
    },
    hasConsent(category: ConsentCategory) {
      const prefs = this.get()
      return !!prefs[category]
    },
    accept() {
      this.set({
        essential: true,
        analytics: true,
        marketing: true,
      })
    },
    reject() {
      this.set({
        essential: true,
        analytics: false,
        marketing: false,
      })
    },
  }
}
