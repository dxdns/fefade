import type { ThemesData } from "../data/themesData"

export type TenantType = {
  name: string
  theme: keyof typeof ThemesData
}
