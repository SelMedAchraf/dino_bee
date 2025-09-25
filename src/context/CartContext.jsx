import React, { createContext, useContext, useMemo, useState } from 'react'

const CartContext = createContext({
  items: {},
  add: (_product) => {},
  clear: () => {},
  totalCount: 0,
  totalPrice: 0,
  entries: [],
})

export function CartProvider({ children }) {
  const [items, setItems] = useState({})

  const add = (product) => {
    setItems(prev => {
      const next = { ...prev }
      const existing = next[product.id]
      if (existing) next[product.id] = { ...existing, qty: existing.qty + 1 }
      else next[product.id] = { id: product.id, name: product.name, price: product.price, image: product.image, qty: 1 }
      return next
    })
  }

  const clear = () => setItems({})

  const entries = useMemo(() => Object.values(items), [items])
  const totalCount = useMemo(() => entries.reduce((n, e) => n + e.qty, 0), [entries])
  const totalPrice = useMemo(() => entries.reduce((sum, e) => sum + e.qty * e.price, 0), [entries])

  const value = useMemo(() => ({ items, add, clear, totalCount, totalPrice, entries }), [items, totalCount, totalPrice, entries])

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  return useContext(CartContext)
} 