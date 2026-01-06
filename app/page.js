"use client"

import React, { useEffect } from 'react'
import Image from 'next/image'
import { useLanguage } from '@/app/i18n/LanguageContext'
import translations from '@/app/i18n/translations'
import LanguageSelector from '@/app/components/LanguageSelector'
import NavigationArrows from '@/app/components/NavigationArrows'

const featureIconMap = {
  monitoring: (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="24" cy="24" r="20" stroke="#26a6ff" strokeWidth="2" fill="none" />
      <path d="M24 12V24L32 28" stroke="#26a6ff" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),
  gps: (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="24" cy="24" r="18" stroke="#2fe6c8" strokeWidth="2" fill="none" />
      <circle cx="24" cy="24" r="4" fill="#2fe6c8" />
      <path d="M24 6L24 2M24 46L24 42M6 24L2 24M46 24L42 24" stroke="#2fe6c8" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),
  calm: (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M24 8C16.27 8 10 14.27 10 22C10 29.73 24 40 24 40C24 40 38 29.73 38 22C38 14.27 31.73 8 24 8Z" stroke="#26a6ff" strokeWidth="2" fill="none" />
      <circle cx="24" cy="22" r="6" stroke="#26a6ff" strokeWidth="2" fill="none" />
    </svg>
  ),
  family: (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="8" y="12" width="32" height="24" rx="2" stroke="#2fe6c8" strokeWidth="2" fill="none" />
      <path d="M16 20L22 26L32 16" stroke="#2fe6c8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

const howIcons = [
  (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="8" y="12" width="24" height="16" rx="2" stroke="#26a6ff" strokeWidth="2" fill="none" />
      <circle cx="20" cy="20" r="4" fill="#26a6ff" />
    </svg>
  ),
  (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="6" y="4" width="28" height="32" rx="3" stroke="#2fe6c8" strokeWidth="2" fill="none" />
      <rect x="12" y="8" width="16" height="10" rx="1" fill="#2fe6c8" fillOpacity="0.2" />
    </svg>
  ),
  (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 8L28 16H24V28H16V16H12L20 8Z" fill="#26a6ff" />
      <ellipse cx="20" cy="32" rx="8" ry="4" fill="#26a6ff" fillOpacity="0.3" />
    </svg>
  ),
  (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="20" cy="20" r="12" stroke="#2fe6c8" strokeWidth="2" fill="none" />
      <path d="M20 12V20L26 24" stroke="#2fe6c8" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
]

export default function Home() {
  const { language } = useLanguage()
  const t = translations[language] || translations.en

  useEffect(() => {
    if (typeof window === 'undefined') return

    // Initialize custom cursor directly
    const cursor = document.getElementById('cursor')
    const cursorDot = document.getElementById('cursorDot')
    
    if (window.innerWidth >= 1024 && cursor && cursorDot) {
      document.body.classList.add('has-custom-cursor')
      
      let mouseX = window.innerWidth / 2
      let mouseY = window.innerHeight / 2
      let cursorX = mouseX
      let cursorY = mouseY
      let dotX = mouseX
      let dotY = mouseY

      // Initialize cursor position
      cursor.style.left = cursorX + 'px'
      cursor.style.top = cursorY + 'px'
      cursorDot.style.left = dotX + 'px'
      cursorDot.style.top = dotY + 'px'

      document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX
        mouseY = e.clientY
      })

      // Smooth cursor animation
      const animateCursor = () => {
        cursorX += (mouseX - cursorX) * 0.1
        cursorY += (mouseY - cursorY) * 0.1
        cursor.style.left = cursorX + 'px'
        cursor.style.top = cursorY + 'px'

        dotX += (mouseX - dotX) * 0.3
        dotY += (mouseY - dotY) * 0.3
        cursorDot.style.left = dotX + 'px'
        cursorDot.style.top = dotY + 'px'

        requestAnimationFrame(animateCursor)
      }
      animateCursor()

      // Hover effects
      const hoverElements = document.querySelectorAll('a, button, .btn')
      hoverElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
          cursor.classList.add('hover')
          cursorDot.classList.add('hover')
        })
        el.addEventListener('mouseleave', () => {
          cursor.classList.remove('hover')
          cursorDot.classList.remove('hover')
        })
      })
    }

    if (document.querySelector('script[src="/script.js"]')) return

    const timer = setTimeout(() => {
      const script = document.createElement('script')
      script.src = '/script.js'
      script.async = true
      script.onload = () => {
        console.log('Scripts loaded successfully')
      }
      document.body.appendChild(script)
    }, 100)

    // Intersection Observer for video performance optimization
    const videoElement = document.getElementById('productVideo')
    let videoObserver = null
    if (videoElement) {
      videoObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            videoElement.play().catch(() => {
              // Autoplay may be blocked, that's okay
            })
          } else {
            videoElement.pause()
          }
        })
      }, {
        threshold: 0.25 // Play when 25% of video is visible
      })
      videoObserver.observe(videoElement)
    }

    // Theme-based logo switching
    const updateLogos = () => {
      const theme = document.documentElement.getAttribute('data-theme')
      const isDark = theme === 'dark' || (theme === 'auto' && window.matchMedia('(prefers-color-scheme: dark)').matches)
      const logoImgs = document.querySelectorAll('.navbar__logo-img, .footer__logo-img')
      
      logoImgs.forEach(img => {
        if (isDark) {
          img.src = 'https://res.cloudinary.com/dqsok4hr5/image/upload/v1767665924/logo_dark_ualmxv.png'
        } else {
          img.src = 'https://res.cloudinary.com/dqsok4hr5/image/upload/v1767665292/log_light_wk2s6e.png'
        }
      })
    }

    // Initial logo update
    updateLogos()

    // Listen for theme changes
    const themeObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'data-theme') {
          updateLogos()
        }
      })
    })

    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme']
    })

    // Listen for system theme changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    mediaQuery.addEventListener('change', updateLogos)

    return () => {
      if (videoObserver) videoObserver.disconnect()
      themeObserver.disconnect()
      mediaQuery.removeEventListener('change', updateLogos)
      clearTimeout(timer)
    }
  }, [])

  const navLinks = [
    { href: '#project', label: t.navbar.project, section: 'project' },
    { href: '#features', label: t.navbar.features, section: 'features' },
    { href: '#circular', label: t.navbar.circular, section: 'circular' },
    { href: '#pricing', label: t.navbar.pricing, section: 'pricing' },
    { href: '#impact', label: t.navbar.impact, section: 'impact' },
    { href: '#faq', label: t.navbar.faq, section: 'faq' },
    { href: '#contact', label: t.navbar.contact, section: 'contact' }
  ]

  const pricingPlans = [
    {
      key: 'starter',
      priceMonthly: '950',
      priceYearly: '760',
      currency: t.pricingSection.currency,
      period: t.pricingSection.perMonth,
      icon: 'fas fa-mobile-alt',
      ctaIcon: 'fas fa-shopping-cart'
    },
    {
      key: 'professional',
      priceMonthly: '1590',
      priceYearly: '1270',
      currency: t.pricingSection.currency,
      period: t.pricingSection.perMonth,
      icon: 'fas fa-mobile-alt',
      featured: true,
      badgeIcon: 'fas fa-star',
      ctaIcon: 'fas fa-rocket'
    },
    {
      key: 'enterprise',
      priceMonthly: '3190',
      priceYearly: '2550',
      currency: t.pricingSection.currency,
      period: t.pricingSection.perMonth,
      icon: 'fas fa-mobile-alt',
      ctaIcon: 'fas fa-phone'
    }
  ]

  const pricingInfoItems = [
    {
      icon: 'fas fa-shield-alt',
      title: t.pricingSection.info.warranty.title,
      text: t.pricingSection.info.warranty.text
    },
    {
      icon: 'fas fa-sync-alt',
      title: t.pricingSection.info.cancel.title,
      text: t.pricingSection.info.cancel.text
    },
    {
      icon: 'fas fa-headset',
      title: t.pricingSection.info.support.title,
      text: t.pricingSection.info.support.text
    }
  ]

  const pricingFaq = t.pricingSection.faq || []
  const impactPoints = (t.impactSection.points || []).map((point, index) => ({
    ...point,
    icon: ['fas fa-heart', 'fas fa-star', 'fas fa-hands-helping'][index] || 'fas fa-check'
  }))
  const faqItems = t.faqSection.items || []

  const contactRoles = [
    { value: '', label: t.contactSection.rolePlaceholder },
    { value: 'parent', label: t.contactSection.roles.parent },
    { value: 'educator', label: t.contactSection.roles.educator },
    { value: 'doctor', label: t.contactSection.roles.doctor },
    { value: 'investor', label: t.contactSection.roles.investor }
  ]

  const circularCards = t.circularSection.cards || []
  const features = t.featuresSection.items || []
  const howSteps = t.howItWorks.steps || []
  const heroBadges = t.heroBadges || []

  return (
    <>
      <div className="scroll-progress" id="scrollProgress"></div>

      <div className="cursor" id="cursor"></div>
      <div className="cursor-dot" id="cursorDot"></div>

      <div className="particles" id="particles"></div>

      <nav className="navbar" id="navbar" role="navigation" aria-label="Main navigation">
        <div className="container">
          <div className="navbar__content">
            <a href="#hero" className="navbar__logo" aria-label="SmartCare - Home">
              <img 
                src="https://res.cloudinary.com/dqsok4hr5/image/upload/v1767665924/logo_dark_ualmxv.png" 
                alt="SmartCare Logo" 
                className="navbar__logo-img"
                width="80"
                height="80"
              />
              <span className="navbar__logo-text">SmartCare</span>
            </a>

            <ul className="navbar__links" id="navbarLinks">
              {navLinks.map(link => (
                <li key={link.section}>
                  <a href={link.href} className="navbar__link" data-section={link.section}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="navbar__actions">
              <div className="theme-toggle" id="themeToggle">
                <button className="theme-toggle__button" id="themeButton" aria-label={t.navbar.changeTheme} title="Theme">
                  <i className="fas fa-sun" id="themeIcon"></i>
                </button>
                <div className="theme-toggle__menu" id="themeMenu">
                  <button className="theme-toggle__option" data-theme="light" aria-label={t.navbar.lightMode}>
                    <i className="fas fa-sun"></i> <span>{t.navbar.lightMode}</span>
                  </button>
                  <button className="theme-toggle__option" data-theme="dark" aria-label={t.navbar.darkMode}>
                    <i className="fas fa-moon"></i> <span>{t.navbar.darkMode}</span>
                  </button>
                  <button className="theme-toggle__option" data-theme="auto" aria-label={t.navbar.autoMode}>
                    <i className="fas fa-adjust"></i> <span>{t.navbar.autoMode}</span>
                  </button>
                </div>
              </div>

              <LanguageSelector />

              <button className="navbar__cta" aria-label={t.navbar.demoRequest}>
                <i className="fas fa-calendar-alt"></i> <span>{t.navbar.demoRequest}</span>
              </button>
            </div>

            <button className="navbar__toggle" id="navbarToggle" aria-label="Menu" aria-expanded="false">
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </nav>

      <section className="hero" id="hero">
        <div className="hero__bg-blobs">
          <div className="hero__blob hero__blob--1"></div>
          <div className="hero__blob hero__blob--2"></div>
        </div>

        <div className="container">
          <div className="hero__content">
            <div className="hero__text">
              <h1 className="hero__title">{t.hero.title}</h1>
              <p className="hero__subtitle">{t.hero.subtitle}</p>
              <div className="hero__ctas">
                <button
                  className="btn btn--primary"
                  onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
                  aria-label={t.hero.exploreFeatures}
                >
                  <i className="fas fa-arrow-down"></i> {t.hero.exploreFeatures}
                </button>
                <button className="btn btn--secondary" id="watchDemoBtn" aria-label={t.hero.watchDemo}>
                  <i className="fas fa-play-circle"></i> {t.hero.watchDemo}
                </button>
              </div>
            </div>

            <div className="hero__image-wrapper">
              <div className="hero__image-container">
                <a href="/details" className="hero__3d-link" style={{ display: 'block', position: 'relative' }}>
                  <Image
                    src="https://res.cloudinary.com/dqsok4hr5/image/upload/v1767464631/bracelet-3d_qzzrru.png"
                    alt={t.hero.view3D}
                    className="hero__image"
                    width={500}
                    height={500}
                    priority
                  />
                  <div className="hero__3d-badge">
                    <i className="fas fa-cube"></i> {t.hero.view3D}
                  </div>
                </a>
              </div>
            </div>
          </div>

          <div className="hero__badges">
            {heroBadges.map((badge, index) => (
              <div className="hero__badge" key={index}>
                <i className={`${badge.icon} hero__badge-icon`}></i>
                <span className="hero__badge-text">{badge.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <NavigationArrows />

      <section className="video-section" id="videoSection">
        <div className="container">
          <div className="video-section__content">
            <div className="video-card">
              <div className="video-card__wrapper" id="videoWrapper">
                <video
                  className="video-card__video"
                  id="productVideo"
                  preload="auto"
                  playsInline
                  webkit-playsinline="true"
                  muted
                  loop
                  controls={false}
                  aria-label={t.videoSection.ariaLabel}
                >
                  <source src="/assets/smartcare-video.mp4" type="video/mp4" />
                  {t.videoModal.fallback}
                </video>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="impact fade-in"
        id="project"
        style={{ padding: '100px 0', background: 'linear-gradient(135deg, rgba(38, 166, 255, 0.03), rgba(47, 230, 200, 0.03))' }}
      >
        <div className="container">
          <h2 className="section__title">SmartCare</h2>
          <p className="section__subtitle">{t.project.subtitle}</p>

          <div style={{ maxWidth: '900px', margin: '0 auto', marginTop: '64px' }}>
            <div className="project-card">
              <div className="project-card__header">
                <div className="project-card__icon" style={{ background: 'linear-gradient(135deg, var(--blue), var(--mint))' }}>
                  <i className="fas fa-lightbulb"></i>
                </div>
                <div>
                  <h3 className="project-card__title">{t.project.centralIdea}</h3>
                  <p className="project-card__text">{t.project.centralIdeaText}</p>
                </div>
              </div>
            </div>

            <div className="project-card">
              <div className="project-card__header">
                <div className="project-card__icon" style={{ background: 'linear-gradient(135deg, #ef4444, #f59e0b)' }}>
                  <i className="fas fa-exclamation-triangle"></i>
                </div>
                <div>
                  <h3 className="project-card__title">{t.project.problemSolved}</h3>
                  <p className="project-card__text" style={{ marginBottom: '20px' }}>
                    {t.project.problemSolvedText}
                  </p>
                  <ul className="project-card__list">
                    {t.project.challenges.map((challenge, idx) => (
                      <li key={idx}>
                        <i className="fas fa-check-circle"></i> {challenge}
                      </li>
                    ))}
                  </ul>
                  <p className="project-card__text" style={{ marginTop: '20px', fontStyle: 'italic' }}>
                    {t.project.existingSolutions}
                  </p>
                </div>
              </div>
            </div>

            <div className="project-card">
              <div className="project-card__header">
                <div className="project-card__icon" style={{ background: 'linear-gradient(135deg, var(--mint), var(--blue))' }}>
                  <i className="fas fa-cogs"></i>
                </div>
                <div>
                  <h3 className="project-card__title">{t.project.solution}</h3>
                  <div className="project-solution-grid">
                    <div className="project-solution-item">
                      <h4 className="project-solution-item__title">
                        <i className="fas fa-bracelet" style={{ color: 'var(--blue)' }}></i>
                        {t.project.smartBracelet}
                      </h4>
                      <p className="project-solution-item__text">{t.project.smartBraceletText}</p>
                    </div>

                    <div className="project-solution-item project-solution-item--mint">
                      <h4 className="project-solution-item__title">
                        <i className="fas fa-mobile-alt" style={{ color: 'var(--mint)' }}></i>
                        {t.project.mobileApp}
                      </h4>
                      <p className="project-solution-item__text">{t.project.mobileAppText}</p>
                    </div>

                    <div className="project-solution-item">
                      <h4 className="project-solution-item__title">
                        <i className="fas fa-cloud" style={{ color: 'var(--blue)' }}></i>
                        {t.project.cloudPlatform}
                      </h4>
                      <p className="project-solution-item__text">{t.project.cloudPlatformText}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="project-card">
              <div className="project-card__header">
                <div className="project-card__icon" style={{ background: 'linear-gradient(135deg, #10b981, #059669)' }}>
                  <i className="fas fa-recycle"></i>
                </div>
                <div>
                  <h3 className="project-card__title">{t.project.circularEconomy}</h3>
                  <p className="project-card__text" style={{ marginBottom: '24px' }}>
                    {t.project.circularEconomyText}
                  </p>
                  <div className="project-circular-grid">
                    <div className="project-circular-item">
                      <i className="fas fa-redo-alt"></i>
                      <h4 className="project-circular-item__title">{t.project.reuse}</h4>
                      <p className="project-circular-item__text">{t.project.reuseText}</p>
                    </div>
                    <div className="project-circular-item project-circular-item--mint">
                      <i className="fas fa-tools"></i>
                      <h4 className="project-circular-item__title">{t.project.repair}</h4>
                      <p className="project-circular-item__text">{t.project.repairText}</p>
                    </div>
                    <div className="project-circular-item">
                      <i className="fas fa-sync-alt"></i>
                      <h4 className="project-circular-item__title">{t.project.refurbish}</h4>
                      <p className="project-circular-item__text">{t.project.refurbishText}</p>
                    </div>
                    <div className="project-circular-item project-circular-item--mint">
                      <i className="fas fa-recycle"></i>
                      <h4 className="project-circular-item__title">{t.project.recycle}</h4>
                      <p className="project-circular-item__text">{t.project.recycleText}</p>
                    </div>
                  </div>
                  <p className="project-highlight">
                    <strong>SmartCare:</strong> {t.project.sustainabilityGoals}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="features fade-in" id="features">
        <div className="container">
          <h2 className="section__title">{t.featuresSection.title}</h2>
          <p className="section__subtitle">{t.featuresSection.subtitle}</p>

          <div className="features__grid">
            {features.map((feature, idx) => (
              <div className="feature-card" key={idx}>
                <div className="feature-card__icon">{featureIconMap[feature.icon]}</div>
                <h3 className="feature-card__title">{feature.title}</h3>
                <p className="feature-card__text">{feature.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="how-it-works slide-in-left" id="howItWorks">
        <div className="container">
          <h2 className="section__title">{t.howItWorks.title}</h2>
          <p className="section__subtitle">{t.howItWorks.subtitle}</p>

          <div className="how-it-works__flow">
            {howSteps.map((step, idx) => (
              <React.Fragment key={step.title}>
                <div className="flow-step">
                  <div className="flow-step__icon">{howIcons[idx]}</div>
                  <h3 className="flow-step__title">{step.title}</h3>
                  <p className="flow-step__text">{step.text}</p>
                </div>
                {idx < howSteps.length - 1 && <div className="flow-step__arrow">→</div>}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      <section className="circular fade-in" id="circular">
        <div className="container">
          <div className="circular__content">
            <div className="circular__text">
              <h2 className="section__title">{t.circularSection.title}</h2>
              <p className="section__subtitle">{t.circularSection.subtitle}</p>
              <p className="circular__description">{t.circularSection.description}</p>

              <div className="circular__cards">
                {circularCards.map((card, idx) => (
                  <div className="circular-card" key={idx}>
                    <div className="circular-card__icon">
                      <i className={card.icon}></i>
                    </div>
                    <h3 className="circular-card__title">{card.title}</h3>
                    <p className="circular-card__text">{card.text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="circular__visual">
              <div className="circular__image-wrapper">
                <Image
                  src="https://res.cloudinary.com/dqsok4hr5/image/upload/v1767464630/prototype_lljqyz.png"
                  alt={t.circularSection.imageAlt}
                  className="circular__image"
                  width={500}
                  height={500}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pricing fade-in" id="pricing">
        <div className="container">
          <h2 className="section__title">{t.pricingSection.title}</h2>
          <p className="section__subtitle">{t.pricingSection.subtitle}</p>

          <div className="pricing__toggle">
            <span className="pricing__toggle-label">{t.pricingSection.billingMonthly}</span>
            <label className="pricing__switch">
              <input type="checkbox" id="pricingToggle" />
              <span className="pricing__slider"></span>
            </label>
            <span className="pricing__toggle-label">
              {t.pricingSection.billingYearly} <span className="pricing__badge">{t.pricingSection.yearlyBadge}</span>
            </span>
          </div>

          <div className="pricing__grid">
            {pricingPlans.map(plan => (
              <div key={plan.key} className={`pricing-card ${plan.featured ? 'pricing-card--featured' : ''}`}>
                {plan.featured && (
                  <div className="pricing-card__badge">
                    <i className={plan.badgeIcon}></i> {t.pricingSection.mostPopular}
                  </div>
                )}
                <div className="pricing-card__header">
                  <h3 className="pricing-card__title">{t.pricingSection.plans[plan.key].title}</h3>
                  <p className="pricing-card__subtitle">{t.pricingSection.plans[plan.key].subtitle}</p>
                </div>
                <div className="pricing-card__price">
                  <span className="pricing-card__amount" data-monthly={plan.priceMonthly} data-yearly={plan.priceYearly}>
                    {plan.priceMonthly}
                  </span>
                  <span className="pricing-card__currency">{plan.currency}</span>
                  <span className="pricing-card__period">{plan.period}</span>
                </div>
                <div className="pricing-card__device">
                  <i className={plan.icon}></i>
                  <span>{t.pricingSection.plans[plan.key].device}</span>
                </div>
                <ul className="pricing-card__features">
                  {t.pricingSection.plans[plan.key].features.map((feature, index) => (
                    <li key={index}>
                      <i className="fas fa-check"></i> {feature}
                    </li>
                  ))}
                </ul>
                <button className={`btn ${plan.featured ? 'btn--primary' : 'btn--secondary'} btn--full pricing-card__cta`}>
                  <i className={plan.ctaIcon}></i> {plan.key === 'enterprise' ? t.pricingSection.ctaContact : t.pricingSection.ctaChoose}
                </button>
              </div>
            ))}
          </div>

          <div className="pricing__info">
            {pricingInfoItems.map((item, idx) => (
              <div className="pricing__info-item" key={idx}>
                <i className={item.icon}></i>
                <div>
                  <h4>{item.title}</h4>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="pricing__faq">
            <h3 className="pricing__faq-title">{t.pricingSection.faqTitle}</h3>
            <div className="pricing__faq-list">
              {pricingFaq.map((item, idx) => (
                <div className="pricing-faq-item" key={idx}>
                  <button className="pricing-faq-item__question">
                    <span>{item.question}</span>
                    <i className="fas fa-chevron-down"></i>
                  </button>
                  <div className="pricing-faq-item__answer">
                    <p>{item.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="impact fade-in" id="impact">
        <div className="container">
          <div className="impact__content">
            <div className="impact__statement">
              <h2 className="section__title">{t.impactSection.title}</h2>
              <p className="impact__quote">{t.impactSection.quote}</p>
            </div>

            <div className="impact__points">
              {impactPoints.map((point, idx) => (
                <div className="impact-point" key={idx}>
                  <div className="impact-point__icon">
                    <i className={point.icon}></i>
                  </div>
                  <h3 className="impact-point__title">{point.title}</h3>
                  <p className="impact-point__text">{point.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="faq slide-in-left" id="faq">
        <div className="container">
          <h2 className="section__title">{t.faqSection.title}</h2>
          <p className="section__subtitle">{t.faqSection.subtitle}</p>

          <div className="faq__list">
            {faqItems.map((item, idx) => (
              <div className="faq-item" key={idx}>
                <button className="faq-item__question" aria-expanded="false">
                  <span>{item.question}</span>
                  <svg className="faq-item__icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                <div className="faq-item__answer">
                  <p>{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="contact fade-in" id="contact">
        <div className="container">
          <h2 className="section__title">{t.contactSection.title}</h2>
          <p className="section__subtitle">{t.contactSection.subtitle}</p>

          <form className="contact__form" id="contactForm" noValidate>
            <div className="form-group">
              <label htmlFor="name" className="form-label">
                <i className="fas fa-user"></i> {t.contactSection.nameLabel}
              </label>
              <input type="text" id="name" name="name" className="form-input" required aria-required="true" />
              <span className="form-error" id="nameError"></span>
            </div>

            <div className="form-group">
              <label htmlFor="email" className="form-label">
                <i className="fas fa-envelope"></i> {t.contactSection.emailLabel}
              </label>
              <input type="email" id="email" name="email" className="form-input" required aria-required="true" />
              <span className="form-error" id="emailError"></span>
            </div>

            <div className="form-group">
              <label htmlFor="role" className="form-label">
                <i className="fas fa-briefcase"></i> {t.contactSection.roleLabel}
              </label>
              <select id="role" name="role" className="form-input" required aria-required="true">
                {contactRoles.map(role => (
                  <option key={role.value} value={role.value}>
                    {role.label}
                  </option>
                ))}
              </select>
              <span className="form-error" id="roleError"></span>
            </div>

            <div className="form-group">
              <label htmlFor="message" className="form-label">
                <i className="fas fa-comment-alt"></i> {t.contactSection.messageLabel}
              </label>
              <textarea id="message" name="message" className="form-input form-textarea" rows="5" required aria-required="true"></textarea>
              <span className="form-error" id="messageError"></span>
            </div>

            <button type="submit" className="btn btn--primary btn--full" aria-label={t.contactSection.submit}>
              <i className="fas fa-paper-plane"></i> {t.contactSection.submit}
            </button>
          </form>

          <div className="contact__cta">
            <i className="fas fa-shield-alt"></i>
            <p className="contact__cta-text">{t.contactSection.ctaText}</p>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <div className="footer__content">
            <div className="footer__brand">
              <h3 className="footer__logo">
              <img 
                src="https://res.cloudinary.com/dqsok4hr5/image/upload/v1767665924/logo_dark_ualmxv.png" 
                alt="SmartCare Logo" 
                className="footer__logo-img"
                width="32"
                height="32"
              />
                <span>SmartCare</span>
              </h3>
              <p className="footer__tagline">{t.footerContent.tagline}</p>
            </div>

            <div className="footer__links">
              <div className="footer__column">
                <h4 className="footer__title">{t.footerContent.productTitle}</h4>
                <ul>
                  <li><a href="#features">{t.footerContent.links.features}</a></li>
                  <li><a href="#circular">{t.footerContent.links.circular}</a></li>
                  <li><a href="#pricing">{t.footerContent.links.pricing}</a></li>
                </ul>
              </div>

              <div className="footer__column">
                <h4 className="footer__title">{t.footerContent.resourcesTitle}</h4>
                <ul>
                  <li><a href="#impact">{t.footerContent.links.impact}</a></li>
                  <li><a href="#faq">{t.footerContent.links.faq}</a></li>
                  <li><a href="#contact">{t.footerContent.links.contact}</a></li>
                </ul>
              </div>

              <div className="footer__column">
                <h4 className="footer__title">{t.footerContent.socialTitle}</h4>
                <ul className="footer__social">
                  <li>
                    <a href="#" aria-label="LinkedIn">
                      <i className="fab fa-linkedin-in"></i> {t.footerContent.links.linkedin}
                    </a>
                  </li>
                  <li>
                    <a href="#" aria-label="Twitter">
                      <i className="fab fa-twitter"></i> {t.footerContent.links.twitter}
                    </a>
                  </li>
                  <li>
                    <a href="#" aria-label="Facebook">
                      <i className="fab fa-facebook-f"></i> {t.footerContent.links.facebook}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="footer__bottom">
            <p className="footer__disclaimer">{t.footerContent.disclaimer}</p>
            <p className="footer__copyright">{t.footerContent.rights}</p>
          </div>
        </div>
      </footer>

      <div className="modal" id="videoModal" role="dialog" aria-labelledby="modalTitle" aria-hidden="true">
        <div className="modal__overlay" id="modalOverlay"></div>
        <div className="modal__content">
          <button className="modal__close" id="modalClose" aria-label={t.videoModal.closeLabel}>
            <i className="fas fa-times"></i>
          </button>
          <div className="modal__video-wrapper">
            <video className="modal__video" id="modalVideo" controls>
              <source src="/assets/smartcare-video.mp4" type="video/mp4" />
              {t.videoModal.fallback}
            </video>
          </div>
        </div>
      </div>

      <div className="toast" id="toast" role="alert" aria-live="polite" aria-atomic="true">
        <div className="toast__content">
          <span className="toast__message" id="toastMessage"></span>
        </div>
      </div>
    </>
  )
}

