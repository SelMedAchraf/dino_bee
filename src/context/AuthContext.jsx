import React, { createContext, useContext, useEffect, useMemo, useState } from 'react'

const AuthContext = createContext({
  isLoggedIn: false,
  user: null,
  login: async (_email, _password) => {},
  logout: () => {},
  signup: async (_data) => {},
})

export function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(Boolean(localStorage.getItem('token')))
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem('user')
    return saved ? JSON.parse(saved) : null
  })

  useEffect(() => {
    if (isLoggedIn) localStorage.setItem('token', 'mock-token')
    else localStorage.removeItem('token')
  }, [isLoggedIn])

  const login = async (email, _password) => {
    // Try to use signed up profile if exists
    const signedUp = localStorage.getItem('signedUpUser')
    let profile = null
    if (signedUp) {
      try {
        const parsed = JSON.parse(signedUp)
        if (parsed?.email === email) profile = { name: parsed.name, lastName: parsed.lastName || '', email: parsed.email }
      } catch {}
    }
    if (!profile) {
      profile = { name: email.split('@')[0], lastName: '', email }
    }
    setIsLoggedIn(true)
    setUser(profile)
    localStorage.setItem('user', JSON.stringify(profile))
  }

  const logout = () => {
    setIsLoggedIn(false)
    setUser(null)
    localStorage.removeItem('user')
  }

  const signup = async (data) => {
    // mock signup, store in localStorage
    localStorage.setItem('signedUpUser', JSON.stringify(data))
  }

  const value = useMemo(() => ({ isLoggedIn, user, login, logout, signup }), [isLoggedIn, user])

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  return useContext(AuthContext)
} 