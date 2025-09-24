import React, { useMemo, useState } from 'react'
import Card from '@/components/Card'
import Button from '@/components/Button'
import Modal from '@/components/Modal'
import { services } from '@/utils/data'
import { useForm } from 'react-hook-form'
import SearchInput from '@/components/ui/SearchInput'
import Pagination from '@/components/ui/Pagination'

export default function Services() {
  const [open, setOpen] = useState(false)
  const [selected, setSelected] = useState(null)
  const { register, handleSubmit, reset } = useForm()
  const [query, setQuery] = useState('')
  const [page, setPage] = useState(1)
  const perPage = 6

  const openOrder = (service) => {
    setSelected(service)
    setOpen(true)
  }

  const onSubmit = (data) => {
    alert(`تم تقديم طلب لخدمة ${selected.title} بتاريخ ${data.date}`)
    setOpen(false)
    reset()
  }

  const filtered = useMemo(() => {
    const q = query.trim()
    if (!q) return services
    return services.filter(s => [s.title, s.description].join(' ').includes(q))
  }, [query])

  const start = (page - 1) * perPage
  const pageItems = filtered.slice(start, start + perPage)

  return (
    <div className="mx-auto max-w-7xl p-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between mb-4">
        <h1 className="text-2xl font-bold mb-0">الخدمات</h1>
        <SearchInput className="w-full sm:w-80" placeholder="ابحث عن خدمة..." value={query} onChange={e => { setQuery(e.target.value); setPage(1) }} />
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {pageItems.map(svc => (
          <Card key={svc.id} className="overflow-hidden">
            {svc.mediaType === 'video' ? (
              <div className="aspect-video">
                <iframe title={svc.title} className="h-full w-full" src={svc.mediaUrl} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
              </div>
            ) : (
              <img src={svc.mediaUrl} alt={svc.title} className="h-48 w-full object-cover" />
            )}
            <div className="p-4">
              <h2 className="text-lg font-semibold">{svc.title}</h2>
              <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">{svc.description}</p>
              <Button className="mt-4" onClick={() => openOrder(svc)}>اطلب الآن</Button>
            </div>
          </Card>
        ))}
      </div>

      <Pagination page={page} total={filtered.length} perPage={perPage} onChange={setPage} />

      <Modal open={open} onClose={() => setOpen(false)} title={`طلب: ${selected?.title}`} footer={(
        <>
          <button className="btn-secondary" onClick={() => setOpen(false)}>إلغاء</button>
          <button form="order-form" type="submit" className="btn-primary">إرسال</button>
        </>
      )}>
        <form id="order-form" onSubmit={handleSubmit(onSubmit)} className="space-y-3">
          <div>
            <label className="label" htmlFor="date">التاريخ</label>
            <input id="date" type="date" className="input" {...register('date', { required: true })} />
          </div>
          <div>
            <label className="label" htmlFor="location">الموقع</label>
            <input id="location" className="input" placeholder="مثال: شارع خلية النحل 123" {...register('location', { required: true })} />
          </div>
          <div>
            <label className="label" htmlFor="notes">ملاحظات</label>
            <textarea id="notes" className="input" rows={3} placeholder="تفاصيل إضافية" {...register('notes')} />
          </div>
        </form>
      </Modal>
    </div>
  )
} 