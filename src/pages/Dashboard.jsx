import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import Card from '@/components/Card'
import { stats } from '@/utils/data'
import { useAuth } from '@/context/AuthContext'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/Tabs'
import { Hexagon, Wrench, Users, Activity, CheckCircle2 } from 'lucide-react'

export default function Dashboard() {
  const { user } = useAuth()
  const items = [
    { label: 'الخلايا النشطة', value: stats.activeBeehives, icon: Hexagon },
    { label: 'الخدمات المُنجزة', value: stats.servicesCompleted, icon: Wrench },
    { label: 'الخبراء المتاحون', value: stats.expertsAvailable, icon: Users },
  ]

  const recent = [
    { id: 1, text: 'تم فحص 5 خلايا في مزرعة النحل الغربية', icon: CheckCircle2 },
    { id: 2, text: 'إنجاز خدمة المعالجة البيولوجية لثلاث خلايا', icon: CheckCircle2 },
    { id: 3, text: 'إضافة خبير جديد إلى فريق الدعم', icon: CheckCircle2 },
  ]

  return (
    <div className="mx-auto max-w-7xl p-6">
      <section className="mb-8">
        <div className="rounded-2xl bg-gradient-to-r from-honey-200 to-leaf/40 p-8 dark:from-gray-800 dark:to-gray-700">
          <h2 className="text-2xl sm:text-3xl font-bold text-forest-800 dark:text-gray-100">مرحبًا، {user?.name + ' ' + user?.lastName || 'مربّي النحل'} 🐝</h2>
          <p className="mt-2 text-gray-700 dark:text-gray-300">لوحة تحكم موجزة حول عملياتك اليومية.</p>
        </div>
      </section>

      <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map(({ label, value, icon: Icon }) => (
          <Card key={label} className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm text-gray-500">{label}</div>
                <div className="mt-2 text-3xl font-semibold text-forest-700 dark:text-gray-100">{value}</div>
              </div>
              <div className="rounded-lg bg-honey-100 p-2 text-honey-700 dark:bg-gray-700 dark:text-honey-400">
                <Icon className="h-6 w-6" aria-hidden="true" />
              </div>
            </div>
          </Card>
        ))}
      </section>

      <section className="mt-8 grid gap-6 lg:grid-cols-3">
        <Card className="p-6 lg:col-span-2">
          <div className="flex items-center gap-2">
            <Activity className="h-5 w-5 text-forest-600" />
            <h3 className="text-lg font-semibold">النشاط</h3>
          </div>
          <Tabs defaultValue="today" className="mt-4">
            <TabsList>
              <TabsTrigger value="today">اليوم</TabsTrigger>
              <TabsTrigger value="week">هذا الأسبوع</TabsTrigger>
              <TabsTrigger value="month">هذا الشهر</TabsTrigger>
            </TabsList>
            <TabsContent value="today">
              <ul className="mt-2 space-y-3">
                {recent.map(r => (
                  <li key={r.id} className="flex items-start gap-3">
                    <r.icon className="mt-0.5 h-4 w-4 text-forest-600" />
                    <span className="text-sm text-gray-700 dark:text-gray-300">{r.text}</span>
                  </li>
                ))}
              </ul>
            </TabsContent>
            <TabsContent value="week">
              <p className="text-sm text-gray-500">ملخص أسبوعي سيُعرض هنا.</p>
            </TabsContent>
            <TabsContent value="month">
              <p className="text-sm text-gray-500">ملخص شهري سيُعرض هنا.</p>
            </TabsContent>
          </Tabs>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-semibold">روابط سريعة</h3>
          <div className="mt-4 grid gap-3">
            <NavLink to="/services" className="btn-primary bg-forest-100 text-forest-700 hover:bg-forest-700 hover:text-white transition-colors text-center">طلب خدمة</NavLink>
            <NavLink to="/products" className="btn-secondary bg-forest-100 text-forest-700 hover:bg-forest-700 hover:text-white transition-colors text-center">تسوق المنتجات</NavLink>
            <NavLink to="/library" className="btn-primary bg-forest-100 text-forest-700 hover:bg-forest-700 hover:text-white transition-colors text-center">تصفح المكتبة</NavLink>
          </div>
        </Card>
      </section>
    </div>
  )
} 