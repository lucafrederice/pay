import { create } from 'zustand'

type Store = {
  type: "custom" | "same"
  setType: (type: Store['type']) => void
}

const useBillingAddress = create<Store>()((set) => ({
  type: "same",
  setType: (type) => set(({ type })),
}))

export default useBillingAddress