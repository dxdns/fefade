export interface UserType {
  id: string
  roles: string[]
}

export interface UserJwtPayload extends UserType {
  iat: number
  exp: number
}

export type UserRole = "user" | "company"
