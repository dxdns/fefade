export default class CookieManagerUtil {
  static set(name: string, value: string, days?: number): void {
    let expires = ""
    if (days) {
      const date = new Date()
      date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000)
      expires = "; expires=" + date.toUTCString()
    }
    document.cookie = `${name}=${value}${expires}; path=/`
  }

  static get(name: string): string | null {
    const nameEQ = name + "="
    const cookies = document.cookie.split(";")
    for (let i = 0; i < cookies.length; i++) {
      let cookie = cookies[i]
      while (cookie.charAt(0) === " ") {
        cookie = cookie.substring(1, cookie.length)
      }
      if (cookie.indexOf(nameEQ) === 0) {
        return cookie.substring(nameEQ.length, cookie.length)
      }
    }
    return null
  }

  static delete(name: string): void {
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`
  }

  static getAll(): Record<string, string> {
    const cookies: Record<string, string> = {}
    document.cookie.split(";").forEach((cookie) => {
      let [key, value] = cookie.split("=")
      if (key && value) {
        cookies[key.trim()] = value.trim()
      }
    })
    return cookies
  }
}
