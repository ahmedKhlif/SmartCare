'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'

const LanguageContext = createContext(undefined)

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('en')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    // Get saved language preference or default to 'en'
    const savedLanguage = typeof window !== 'undefined' ? localStorage.getItem('language') || 'en' : 'en'
    setLanguage(savedLanguage)
    if (typeof window !== 'undefined') {
      document.documentElement.lang = savedLanguage
      document.documentElement.dir = savedLanguage === 'ar' ? 'rtl' : 'ltr'
    }
    setMounted(true)
  }, [])

  const changeLanguage = (lang) => {
    setLanguage(lang)
    if (typeof window !== 'undefined') {
      localStorage.setItem('language', lang)
      document.documentElement.lang = lang
      document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr'
    }
  }

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, mounted }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    // Return default context during SSR/build time
    return { language: 'en', changeLanguage: () => {}, mounted: false }
  }
  return context
}
