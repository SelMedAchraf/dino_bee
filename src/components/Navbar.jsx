import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useAuth } from '@/context/AuthContext'
import logo from '@assets/WhatsApp Image 2025-09-23 at 13.11.43.jpeg'
import MobileSidebar from '@/components/MobileSidebar'

const linkClass = ({ isActive }) => `px-3 py-2 rounded-md text-sm font-medium ${isActive ? 'bg-forest-600 text-white hover:bg-forest-600 hover:text-white' : 'text-forest-700 hover:bg-forest-100 dark:text-gray-200 dark:hover:bg-gray-800'}`

export default function Navbar() {
  const { logout, user, isLoggedIn } = useAuth()
  const navigate = useNavigate()
  const [open, setOpen] = useState(false)

  if (!isLoggedIn) return null

  const handleLogout = () => {
    logout()
    navigate('/')
    setOpen(false)
  }

  const displayName = [user?.name, user?.lastName].filter(Boolean).join(' ')

  return (
    <nav className="fixed inset-x-0 top-0 z-40 border-b border-gray-200 bg-white/70 backdrop-blur dark:border-gray-800 dark:bg-gray-900/70">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={logo} alt="شعار دينو بي" className="h-8 w-8 object-cover rounded-full" />
            <span className="text-lg font-semibold text-forest-700 dark:text-gray-100">Dino Bee</span>
          </div>
          <button
              type="button"
              className="md:hidden inline-flex items-center justify-center rounded-md text-forest-700 hover:bg-forest-100 focus:outline-none focus:ring-2 focus:ring-honey-500"
              aria-label="القائمة"
              onClick={() => setOpen(true)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
          </button>
          <div className="hidden md:flex items-center gap-1">
            <NavLink to="/dashboard" className={linkClass}>لوحة التحكم</NavLink>
            <NavLink to="/services" className={linkClass}>الخدمات</NavLink>
            <NavLink to="/products" className={linkClass}>المنتجات</NavLink>
            <NavLink to="/library" className={linkClass}>المكتبة</NavLink>
            <NavLink to="/meetings" className={linkClass}>المواعيد</NavLink>
            <NavLink to="/settings" className={linkClass}>الإعدادات</NavLink>
          </div>
          <div className="hidden md:flex items-center gap-3">
            <div className="hidden sm:block text-sm text-gray-600 dark:text-gray-300" aria-live="polite">{displayName}</div>
            <button className="btn-secondary bg-red-600" onClick={handleLogout} aria-label="تسجيل الخروج">تسجيل الخروج</button>
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