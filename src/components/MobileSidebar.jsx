import React from 'react'
import { NavLink } from 'react-router-dom'

export default function MobileSidebar({ open, onClose, logoSrc, brand = 'Dino Bee', displayName, onLogout }) {
  if (!open) return null

  const linkClasses = ({ isActive }) => `block rounded-md px-3 py-3 text-base ${isActive ? 'bg-forest-600 text-white' : 'text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800'}`

  return (
    <>
      <div className="fixed inset-0 z-40 bg-black/40" onClick={onClose} aria-hidden="true" />
      <div className="fixed left-0 top-0 z-50 h-full w-full bg-white dark:bg-gray-900 shadow-xl">
        <div className="px-6 h-16 border-b border-gray-200 dark:border-gray-800 flex items-center justify-between bg-white dark:bg-gray-900">
          <div className="flex items-center gap-3">
            {logoSrc && <img src={logoSrc} alt="شعار" className="h-8 w-8 object-cover rounded-full" />}
            <span className="text-lg font-semibold text-forest-700 dark:text-gray-100">{brand}</span>
          </div>
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md text-gray-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-honey-500 dark:text-gray-300"
            aria-label="إغلاق"
            onClick={onClose}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className='bg-white shadow-xl'>
          <nav className="p-4 space-y-1">
            <NavLink to="/dashboard" className={linkClasses} onClick={onClose}>لوحة التحكم</NavLink>
            <NavLink to="/services" className={linkClasses} onClick={onClose}>الخدمات</NavLink>
            <NavLink to="/products" className={linkClasses} onClick={onClose}>المنتجات</NavLink>
            <NavLink to="/library" className={linkClasses} onClick={onClose}>المكتبة</NavLink>
            <NavLink to="/meetings" className={linkClasses} onClick={onClose}>المواعيد</NavLink>
            <NavLink to="/settings" className={linkClasses} onClick={onClose}>الإعدادات</NavLink>
          </nav>

          <div className="mt-auto p-4 border-t border-gray-200 dark:border-gray-800">
            <div className="text-sm text-gray-600 dark:text-gray-300 mb-3" aria-live="polite">{displayName}</div>
            <button className="w-full btn-secondary bg-red-600" onClick={() => { onLogout?.(); onClose?.(); }}>تسجيل الخروج</button>
          </div>
        </div>
        
      </div>
    </>
  )
} 