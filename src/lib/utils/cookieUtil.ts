import type { Cookies } from "@sveltejs/kit"

const DEFAULT_COOKIE_OPTIONS = {
  path: "/",
  httpOnly: true,
  sameSite: "strict" as const,
  secure: process.env.NODE_ENV === "production",
  maxAge: 60 * 60 * 24 * 7, // 7 dias
}

export default function cookieUtil(
  name: string,
  opts: Partial<typeof DEFAULT_COOKIE_OPTIONS> = {},
) {
  return {
    name,
    options: {
      ...DEFAULT_COOKIE_OPTIONS,
      ...opts,
    },

    set(
      cookies: Cookies,
      value: string,
      customOpts: Partial<typeof DEFAULT_COOKIE_OPTIONS> = {},
    ) {
      cookies.set(this.name, value, {
        ...this.options,
        ...customOpts,
      })
    },

    get(cookies: Cookies) {
      return cookies.get(this.name)
    },

    delete(cookies: Cookies) {
      cookies.delete(this.name, this.options)
    },
  }
}
