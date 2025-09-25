import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useCart } from '@/context/CartContext'

export default function MobileSidebar({ open, onClose, logoSrc, brand = 'Dino Bee', displayName, onLogout }) {
  if (!open) return null

  const { entries, totalCount, totalPrice, clear } = useCart()
  const [cartOpen, setCartOpen] = useState(false)

  const linkClasses = ({ isActive }) => `block rounded-md px-3 py-3 text-base ${isActive ? 'bg-forest-600 text-white' : 'text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800'}`

  return (
    <>
      <div className="fixed inset-0 z-40 bg-black/40" onClick={onClose} aria-hidden="true" />
      <div className="fixed left-0 top-0 z-50 h-full w-full bg-white dark:bg-gray-900 shadow-xl">
        <div className="px-6 h-16 border-b border-gray-200 dark:border-gray-800 flex items-center justify-between bg-white dark:bg-gray-900">
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
          <div className="flex items-center gap-3">
            {logoSrc && <img src={logoSrc} alt="شعار" className="h-8 w-8 object-cover rounded-full" />}
            <span className="text-lg font-semibold text-forest-700 dark:text-gray-100">{brand}</span>
          </div>
          {/* Cart icon with badge and dropdown */}
          <div className="relative">
            <button
              type="button"
              className="inline-flex p-2 items-center justify-center rounded-md text-forest-700 hover:bg-forest-100 focus:outline-none focus:ring-2 focus:ring-honey-500"
              aria-label="السلة"
              onClick={() => setCartOpen(v => !v)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l3-8H6.4M7 13L5.4 5M7 13l-2 9m12-9l2 9M9 22a1 1 0 100-2 1 1 0 000 2z" />
              </svg>
              {totalCount > 0 && (
                <span className="absolute -top-2 -right-2 inline-flex h-5 min-w-[1.25rem] items-center justify-center rounded-full bg-red-600 px-1 text-xs font-semibold text-white">{totalCount}</span>
              )}
            </button>
            {cartOpen && (
              <div className="absolute left-0 mt-1 w-80 rounded-md border border-gray-200 bg-white p-3 shadow-card dark:border-gray-800 dark:bg-gray-900">
                <div className="mb-2 text-sm font-semibold">سلة المنتجات</div>
                {entries.length === 0 ? (
                  <p className="text-sm text-gray-600 dark:text-gray-300">السلة فارغة.</p>
                ) : (
                  <div className="space-y-2 max-h-64 overflow-auto pr-1">
                    {entries.map(item => (
                      <div key={item.id} className="flex items-center justify-between gap-3">
                        <div className="flex items-center gap-3">
                          <img src={item.image} alt={item.name} className="h-10 w-10 rounded object-cover" />
                          <div>
                            <div className="text-sm font-medium">{item.name}</div>
                            <div className="text-xs text-gray-500">الكمية: {item.qty}</div>
                          </div>
                        </div>
                        <div className="text-sm font-semibold">${(item.qty * item.price).toFixed(2)}</div>
                      </div>
                    ))}
                    <div className="border-t border-gray-200 dark:border-gray-700 pt-2 flex items-center justify-between font-semibold">
                      <span>الإجمالي</span>
                      <span>${totalPrice.toFixed(2)}</span>
                    </div>
                    <div className="flex items-center justify-between gap-2 pt-1">
                      <button className="btn-secondary bg-red-600 flex-1" onClick={() => { clear(); setCartOpen(false) }}>تفريغ السلة</button>
                      <button className="btn-primary flex-1" onClick={() => { alert('تم تأكيد الطلب'); clear(); setCartOpen(false) }}>تأكيد الطلب</button>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
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