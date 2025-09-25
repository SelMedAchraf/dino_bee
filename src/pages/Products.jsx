import React, { useMemo, useState } from 'react'
import Card from '@/components/Card'
import Button from '@/components/Button'
import { products } from '@/utils/data'
import SearchInput from '@/components/ui/SearchInput'
import Pagination from '@/components/ui/Pagination'
import { useCart } from '@/context/CartContext'

export default function Products() {
  const { add } = useCart()
  const [query, setQuery] = useState('')
  const [page, setPage] = useState(1)
  const perPage = 6

  const filtered = useMemo(() => {
    const q = query.trim()
    if (!q) return products
    return products.filter(p => [p.name, p.description].join(' ').includes(q))
  }, [query])

  const start = (page - 1) * perPage
  const pageItems = filtered.slice(start, start + perPage)

  return (
    <div className="mx-auto max-w-7xl p-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between mb-4">
        <h1 className="text-2xl font-bold">المنتجات</h1>
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <SearchInput className="w-full sm:w-80" placeholder="ابحث عن منتج..." value={query} onChange={e => { setQuery(e.target.value); setPage(1) }} />
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
                <Button onClick={() => add(p)}>أضف إلى السلة</Button>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <Pagination page={page} total={filtered.length} perPage={perPage} onChange={setPage} />
    </div>
  )
} 