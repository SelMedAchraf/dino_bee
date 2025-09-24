import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import Card from '@/components/Card'
import Button from '@/components/Button'
import Modal from '@/components/Modal'
import { experts } from '@/utils/data'

export default function Meetings() {
  const [date, setDate] = useState(new Date())
  const [expert, setExpert] = useState(experts[0].id)
  const [open, setOpen] = useState(false)

  const book = () => {
    setOpen(true)
  }

  return (
    <div className="mx-auto max-w-3xl p-6">
      <h1 className="text-2xl font-bold mb-4">حجز موعد</h1>
      <Card className="p-6">
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="label" htmlFor="date">التاريخ</label>
            <DatePicker
              id="date"
              selected={date}
              onChange={setDate}
              className="input"
              dateFormat="PPP"
            />
          </div>
          <div>
            <label className="label" htmlFor="expert">الخبير</label>
            <select id="expert" className="input" value={expert} onChange={e => setExpert(e.target.value)}>
              {experts.map(ex => <option key={ex.id} value={ex.id}>{ex.name}</option>)}
            </select>
          </div>
        </div>
        <Button className="mt-6" onClick={book}>احجز الموعد</Button>
      </Card>

      <Modal open={open} onClose={() => setOpen(false)} title="تم الحجز" footer={<button className="btn-primary" onClick={() => setOpen(false)}>حسنًا</button>}>
        <p className="text-gray-700 dark:text-gray-300">تم حجز موعدك مع {experts.find(e => e.id === expert)?.name} بتاريخ {date.toDateString()}.</p>
      </Modal>
    </div>
  )
}
