import { createContext, useContext } from "react"
import type { ToastInputType, ToastStateType } from "@dxdns-kit/core/types"

export const ToastContext = createContext<{
	data: ToastStateType[]
	add: (toast: ToastInputType) => string
	getById: (id: string) => ToastStateType | undefined
	remove: (id: string) => void
}>({
	data: [],
	add: () => String(),
	getById: () => undefined,
	remove: () => {}
})

export const useToast = () => useContext(ToastContext)
