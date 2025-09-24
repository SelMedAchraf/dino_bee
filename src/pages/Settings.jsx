import React from 'react'
import { useForm } from 'react-hook-form'
import Card from '@/components/Card'
import Button from '@/components/Button'
import { useAuth } from '@/context/AuthContext'

export default function Settings() {
  const { user, logout } = useAuth()
  const { register, handleSubmit } = useForm({ defaultValues: { name: user?.name || '', lastname: user?.lastName || '', email: user?.email || '' } })

  const onSubmit = (data) => {
    const nextUser = { ...user, ...data }
    localStorage.setItem('user', JSON.stringify(nextUser))
    alert('تم تحديث الملف الشخصي')
  }

  return (
    <div className="mx-auto max-w-3xl p-6 space-y-6">
      <Card className="p-6">
        <h1 className="text-2xl font-bold mb-4">الملف الشخصي</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
          <div className='grid grid-cols-2 gap-4'>
            <div>
              <label className="label" htmlFor="name">اللقب</label>
              <input id="name" className="input" {...register('name')} />
            </div>
            <div>
              <label className="label" htmlFor="lastname">الاسم</label>
              <input id="lastname" className="input" {...register('lastname')} />
            </div>
          </div>
          
          <div>
            <label className="label" htmlFor="email">البريد الإلكتروني</label>
            <input id="email" type="email" className="input" {...register('email')} />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="label" htmlFor="password">كلمة مرور جديدة</label>
              <input id="password" type="password" className="input" {...register('password')} />
            </div>
            <div>
              <label className="label" htmlFor="confirm">تأكيد كلمة المرور</label>
              <input id="confirm" type="password" className="input" {...register('confirm')} />
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Button type="submit">حفظ</Button>
          </div>
        </form>
      </Card>
    </div>
  )
} 