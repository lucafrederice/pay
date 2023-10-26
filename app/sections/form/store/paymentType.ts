import { create } from 'zustand'

type Store = {
  type: "card" | "ach"
  setType: (type: Store['type']) => void
}

const usePaymentType = create<Store>()((set) => ({
  type: "card",
  setType: (type) => set(({ type })),
}))

export default usePaymentType