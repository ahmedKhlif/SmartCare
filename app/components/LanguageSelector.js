'use client'

import { useLanguage } from '@/app/i18n/LanguageContext'
import { useState, useRef, useEffect } from 'react'
import 'flag-icons/css/flag-icons.min.css'

export default function LanguageSelector() {
  const { language, changeLanguage } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)
  const menuRef = useRef(null)

  const languages = [
    { code: 'en', label: 'English', countryCode: 'us', name: 'United States' },
    { code: 'fr', label: 'Français', countryCode: 'fr', name: 'France' },
    { code: 'ar', label: 'العربية', countryCode: 'tn', name: 'Tunisia' }
  ]

  const currentLanguage = languages.find(lang => lang.code === language)

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <div className="language-selector" ref={menuRef}>
      <button
        className="language-selector__button"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Language selector"
        title="Select Language"
      >
        <span className={`fi fi-${currentLanguage?.countryCode} language-selector__flag`}></span>
        <span className="language-selector__label">{currentLanguage?.code.toUpperCase()}</span>
        <i className={`fas fa-chevron-down language-selector__icon ${isOpen ? 'open' : ''}`}></i>
      </button>

      {isOpen && (
        <div className="language-selector__menu">
          {languages.map(lang => (
            <button
              key={lang.code}
              className={`language-selector__option ${language === lang.code ? 'active' : ''}`}
              onClick={() => {
                changeLanguage(lang.code)
                setIsOpen(false)
              }}
              title={lang.name}
            >
              <span className={`fi fi-${lang.countryCode} language-selector__option-flag`}></span>
              <span className="language-selector__option-label">{lang.label}</span>
              {language === lang.code && <i className="fas fa-check"></i>}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
