import React, { useMemo, useState } from 'react'
import Card from '@/components/Card'
import { libraryDocs } from '@/utils/data'
import SearchInput from '@/components/ui/SearchInput'
import Pagination from '@/components/ui/Pagination'

export default function Library() {
  const [query, setQuery] = useState('')
  const [page, setPage] = useState(1)
  const perPage = 6

  const filtered = useMemo(() => {
    const q = query.trim()
    if (!q) return libraryDocs
    return libraryDocs.filter(d => [d.title, d.description].join(' ').includes(q))
  }, [query])

  const start = (page - 1) * perPage
  const pageItems = filtered.slice(start, start + perPage)

  return (
    <div className="mx-auto max-w-7xl p-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between mb-4">
        <h1 className="text-2xl font-bold mb-0">المكتبة الرقمية</h1>
        <SearchInput className="w-full sm:w-80" placeholder="ابحث في المكتبة..." value={query} onChange={e => { setQuery(e.target.value); setPage(1) }} />
      </div>
      <div className="grid gap-6 sm:grid-cols-3">
        {pageItems.map(doc => (
          <Card key={doc.id} className="overflow-hidden">
            <img src={doc.image} alt={doc.title} className="h-44 w-full object-cover" />
            <div className="p-4 flex flex-col">
              <h2 className="text-lg font-semibold">{doc.title}</h2>
              <p className="mt-1 text-sm text-gray-600 dark:text-gray-300 flex-1">{doc.description}</p>
              <a href={doc.url} target="_blank" rel="noreferrer" className="btn-primary mt-4 text-center hover:text-white">تحميل</a>
            </div>
          </Card>
        ))}
      </div>

      <Pagination page={page} total={filtered.length} perPage={perPage} onChange={setPage} />
    </div>
  )
} 