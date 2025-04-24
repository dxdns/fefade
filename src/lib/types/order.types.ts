export type OrderItemType = {
  productId: string
  quantity: number
  meatPoint: string
  addons: string[]
}

export type OrderType = {
  orderId: string
  orderStatus: string
  userId: string
  items: OrderItemType[]
  totalPrice: number
  address: string
  createdAt: string
  updatedAt: string
}

export type OrderStatusType =
  | "accepted"
  | "inProgress"
  | "completed"
  | "pending"
  | "canceled"
  | "all"
