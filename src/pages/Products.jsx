import React, { useMemo, useState } from 'react'
import Card from '@/components/Card'
import Button from '@/components/Button'
import Modal from '@/components/Modal'
import { products } from '@/utils/data'
import SearchInput from '@/components/ui/SearchInput'
import Pagination from '@/components/ui/Pagination'

export default function Products() {
  const [cart, setCart] = useState({})
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [page, setPage] = useState(1)
  const perPage = 6

  const addToCart = (id) => {
    setCart(prev => ({ ...prev, [id]: (prev[id] || 0) + 1 }))
  }

  const filtered = useMemo(() => {
    const q = query.trim()
    if (!q) return products
    return products.filter(p => [p.name, p.description].join(' ').includes(q))
  }, [query])

  const start = (page - 1) * perPage
  const pageItems = filtered.slice(start, start + perPage)

  const cartItems = useMemo(() => products.filter(p => cart[p.id]).map(p => ({ ...p, qty: cart[p.id] })), [cart])
  const total = useMemo(() => cartItems.reduce((sum, item) => sum + item.price * item.qty, 0), [cartItems])

  return (
    <div className="mx-auto max-w-7xl p-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between mb-4">
        <h1 className="text-2xl font-bold">المنتجات</h1>
        <div className="flex items-center gap-3">
          <SearchInput className="w-full sm:w-80" placeholder="ابحث عن منتج..." value={query} onChange={e => { setQuery(e.target.value); setPage(1) }} />
          <Button variant="secondary" onClick={() => setOpen(true)}>السلة ({cartItems.length})</Button>
        </div>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {pageItems.map(p => (
          <Card key={p.id}>
            <img src={p.image} alt={p.name} className="h-48 w-full object-cover rounded-t-xl" />
            <div className="p-4">
              <h2 className="text-lg font-semibold">{p.name}</h2>
              <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">{p.description}</p>
              <div className="mt-3 flex items-center justify-between">
                <div className="font-semibold">${p.price.toFixed(2)}</div>
                <Button onClick={() => addToCart(p.id)}>أضف إلى السلة</Button>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <Pagination page={page} total={filtered.length} perPage={perPage} onChange={setPage} />

      <Modal open={open} onClose={() => setOpen(false)} title="مُلخص السلة" footer={(
        <>
          <button className="btn-secondary" onClick={() => setOpen(false)}>إغلاق</button>
          <button className="btn-primary" onClick={() => { alert('تم إجراء الطلب'); setCart({}); setOpen(false) }}>إتمام الطلب</button>
        </>
      )}>
        {cartItems.length === 0 ? (
          <p className="text-gray-600 dark:text-gray-300">السلة فارغة.</p>
        ) : (
          <div className="space-y-2">
            {cartItems.map(item => (
              <div key={item.id} className="flex items-center justify-between">
                <div>
                  <div className="font-medium">{item.name}</div>
                  <div className="text-sm text-gray-500">الكمية: {item.qty}</div>
                </div>
                <div>${(item.qty * item.price).toFixed(2)}</div>
              </div>
            ))}
            <div className="border-t border-gray-200 dark:border-gray-700 pt-2 flex items-center justify-between font-semibold">
              <span>الإجمالي</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>
        )}
      </Modal>
    </div>
  )
} 