import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useAuth } from '@/context/AuthContext'
import logo from '@assets/WhatsApp Image 2025-09-23 at 13.11.43.jpeg'
import MobileSidebar from '@/components/MobileSidebar'
import { useCart } from '@/context/CartContext'

const linkClass = ({ isActive }) => `px-3 py-2 rounded-md text-sm font-medium ${isActive ? 'bg-forest-600 text-white hover:bg-forest-600 hover:text-white' : 'text-forest-700 hover:bg-forest-100 dark:text-gray-200 dark:hover:bg-gray-800'}`

export default function Navbar() {
  const { logout, user, isLoggedIn } = useAuth()
  const { entries, totalCount, totalPrice, clear } = useCart()
  const navigate = useNavigate()
  const [open, setOpen] = useState(false)
  const [profileOpen, setProfileOpen] = useState(false)
  const [cartOpen, setCartOpen] = useState(false)

  if (!isLoggedIn) return null

  const handleLogout = () => {
    logout()
    navigate('/')
    setOpen(false)
    setProfileOpen(false)
  }

  const displayName = [user?.name, user?.lastName].filter(Boolean).join(' ')

  return (
    <nav className="fixed inset-x-0 top-0 z-40 border-b border-gray-200 bg-white/70 backdrop-blur dark:border-gray-800 dark:bg-gray-900/70">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex h-16 items-center justify-between">
          {/* Left: Menu button (mobile) */}
          <div className="flex items-center gap-3 md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md text-forest-700 hover:bg-forest-100 focus:outline-none focus:ring-2 focus:ring-honey-500"
              aria-label={open ? 'إغلاق القائمة' : 'القائمة'}
              onClick={() => setOpen(v => !v)}
            >
              {open ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>

          {/* Center: Brand */}
          <div className="flex items-center gap-3">
            <img src={logo} alt="شعار دينو بي" className="h-8 w-8 object-cover rounded-full" />
            <span className="text-lg font-semibold text-forest-700 dark:text-gray-100">Dino Bee</span>
          </div>

          {/* Right: Desktop nav + actions */}
          <div className="hidden md:flex items-center gap-1">
            <NavLink to="/dashboard" className={linkClass}>لوحة التحكم</NavLink>
            <NavLink to="/services" className={linkClass}>الخدمات</NavLink>
            <NavLink to="/products" className={linkClass}>المنتجات</NavLink>
            <NavLink to="/library" className={linkClass}>المكتبة</NavLink>
            <NavLink to="/meetings" className={linkClass}>المواعيد</NavLink>
            <NavLink to="/settings" className={linkClass}>الإعدادات</NavLink>
          </div>

          {/* Right: Actions - cart dropdown (always), profile dropdown (desktop only) */}
          <div className="flex items-center gap-3">
            {/* Cart icon with badge and dropdown */}
            <div className="relative">
              <button
                type="button"
                className="inline-flex p-2 items-center justify-center rounded-md text-forest-700 hover:bg-forest-100 focus:outline-none focus:ring-2 focus:ring-honey-500"
                aria-label="السلة"
                onClick={() => setCartOpen(v => !v)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l3-8H6.4M7 13L5.4 5M7 13l-2 9m12-9l2 9M9 22a1 1 0 100-2 1 1 0 000 2zm8 0a1 1 0 100-2 1 1 0 000 2z" />
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

            {/* Profile dropdown (hidden on mobile) */}
            <div className="relative hidden md:block">
              <button
                type="button"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-forest-600 text-white focus:outline-none focus:ring-2 focus:ring-honey-500"
                aria-label="الملف الشخصي"
                onClick={() => setProfileOpen(v => !v)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 2a5 5 0 100 10 5 5 0 000-10zM2 18a8 8 0 1116 0H2z" clipRule="evenodd" />
                </svg>
              </button>
              {profileOpen && (
                <div className="absolute left-0 mt-2 w-56 rounded-md border border-gray-200 bg-white p-3 shadow-card dark:border-gray-800 dark:bg-gray-900">
                  <div className="mb-2 text-sm text-gray-700 dark:text-gray-200" aria-live="polite">{displayName}</div>
                  <button className="w-full btn-secondary bg-red-600" onClick={handleLogout}>تسجيل الخروج</button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <MobileSidebar
        open={open}
        onClose={() => setOpen(false)}
        logoSrc={logo}
        brand="Dino Bee"
        displayName={displayName}
        onLogout={handleLogout}
      />
    </nav>
  )
} 