import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import logo from '@assets/WhatsApp Image 2025-09-23 at 13.11.43.jpeg'
import hero from '@assets/bee-hero.jpg'
import { useAuth } from '@/context/AuthContext'

export default function Home() {
  const navigate = useNavigate()
  const { login, signup } = useAuth()
  const [showSignup, setShowSignup] = useState(false)

  const loginForm = useForm()
  const signupForm = useForm()

  const onLogin = async (data) => {
    await login(data.email, data.password)
    navigate('/dashboard')
  }

  const onSignup = async (data) => {
    await signup(data)
    setShowSignup(false)
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <img src={hero} alt="منظر نحل" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" aria-hidden="true" />

      <div className="relative z-10 mx-auto max-w-3xl px-6">
        <div className="card/none rounded-2xl border border-white/10 bg-white/10 p-8 text-center backdrop-blur-md shadow-xl">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-white/90 shadow">
            <img src={logo} alt="شعار دينو بي" className="h-8 w-8 object-cover rounded-full" />
          </div>
          <h2 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight">
            Dino Bee
          </h2>
          <p className="mt-3 text-base sm:text-lg text-white/90">
            خدمات تربية النحل الاحترافية
          </p>
          <p className="mt-1 text-sm text-white/70">
            حلولٌ شاملة لإدارة الخلايا، الاستخلاص، والمراقبة البيولوجية
          </p>

          <div className="mt-8 text-left">
            {!showSignup ? (
              <>
                <form onSubmit={loginForm.handleSubmit(onLogin)} className="mt-4 grid gap-3">
                  <div>
                    <label className="label text-white/90 text-right" htmlFor="email">البريد الإلكتروني</label>
                    <input id="email" type="email" className="input" aria-invalid={!!loginForm.formState.errors.email} {...loginForm.register('email', { required: 'البريد الإلكتروني مطلوب' })} />
                    {loginForm.formState.errors.email && <p className="mt-1 text-sm text-red-700" role="alert">{loginForm.formState.errors.email.message}</p>}
                  </div>
                  <div>
                    <label className="label text-white/90 text-right" htmlFor="password">كلمة المرور</label>
                    <input id="password" type="password" className="input" aria-invalid={!!loginForm.formState.errors.password} {...loginForm.register('password', { required: 'كلمة المرور مطلوبة' })} />
                    {loginForm.formState.errors.password && <p className="mt-1 text-sm text-red-700" role="alert">{loginForm.formState.errors.password.message}</p>}
                  </div>
                  <button type="submit" className="btn-secondary mt-2">دخول</button>
                </form>
                <p className="mt-4 text-sm text-white/80 text-center">
                  ليس لديك حساب؟{' '}
                  <button type="button" className="underline" onClick={() => setShowSignup(true)}>إنشاء حساب</button>
                </p>
              </>
            ) : (
              <>
                <form onSubmit={signupForm.handleSubmit(onSignup)} className="mt-4 grid gap-3">
                  <div className='grid grid-cols-2 gap-3'>
                    <div>
                      <label className="label text-white/90 text-right" htmlFor="name">الاسم</label>
                      <input id="name" className="input" aria-invalid={!!signupForm.formState.errors.name} {...signupForm.register('name', { required: 'الاسم مطلوب' })} />
                      {signupForm.formState.errors.name && <p className="mt-1 text-sm text-red-700" role="alert">{signupForm.formState.errors.name.message}</p>}
                    </div>
                    <div>
                      <label className="label text-white/90 text-right" htmlFor="lastName">اللقب</label>
                      <input id="lastName" className="input" aria-invalid={!!signupForm.formState.errors.lastName} {...signupForm.register('lastName', { required: 'اللقب مطلوب' })} />
                      {signupForm.formState.errors.lastName && <p className="mt-1 text-sm text-red-700" role="alert">{signupForm.formState.errors.lastName.message}</p>}
                    </div>
                  </div>
                  <div>
                    <label className="label text-white/90 text-right" htmlFor="email2">البريد الإلكتروني</label>
                    <input id="email2" type="email" className="input" aria-invalid={!!signupForm.formState.errors.email} {...signupForm.register('email', { required: 'البريد الإلكتروني مطلوب' })} />
                    {signupForm.formState.errors.email && <p className="mt-1 text-sm text-red-700" role="alert">{signupForm.formState.errors.email.message}</p>}
                  </div>
                  <div className='grid grid-cols-2 gap-3'>
                    <div>
                      <label className="label text-white/90 text-right" htmlFor="password2">كلمة المرور</label>
                      <input id="password2" type="password" className="input" aria-invalid={!!signupForm.formState.errors.password} {...signupForm.register('password', { required: 'كلمة المرور مطلوبة', minLength: { value: 6, message: 'الحد الأدنى 6 حروف' } })} />
                      {signupForm.formState.errors.password && <p className="mt-1 text-sm text-red-700" role="alert">{signupForm.formState.errors.password.message}</p>}
                    </div>
                    <div>
                      <label className="label text-white/90 text-right" htmlFor="confirmPassword">تأكيد كلمة المرور</label>
                      <input id="confirmPassword" type="password" className="input" aria-invalid={!!signupForm.formState.errors.confirmPassword} {...signupForm.register('confirmPassword', { validate: value => value === signupForm.watch('password') || 'كلمتا المرور غير متطابقتين' })} />
                      {signupForm.formState.errors.confirmPassword && <p className="mt-1 text-sm text-red-700" role="alert">{signupForm.formState.errors.confirmPassword.message}</p>}
                    </div>
                  </div>

                  <button type="submit" className="btn-secondary mt-2">تسجيل</button>
                </form>
                <p className="mt-4 text-sm text-white/80 text-center">
                  لديك حساب؟{' '}
                  <button type="button" className="underline" onClick={() => setShowSignup(false)}>تسجيل الدخول</button>
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  )
} 