import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '@/context/AuthContext'

export default function NotFound() {
  const { isLoggedIn } = useAuth()
  return (
    <div className="min-h-[60vh] flex items-center justify-center p-6 text-center">
      <div>
        <h1 className="text-3xl font-bold">404 - الصفحة غير موجودة</h1>
        <p className="mt-2 text-gray-600 dark:text-gray-300">الصفحة التي تبحث عنها غير متاحة.</p>
        <Link to={isLoggedIn ? '/dashboard' : '/'} className="btn-primary mt-6 inline-block">عودة</Link>
      </div>
    </div>
  )
} 