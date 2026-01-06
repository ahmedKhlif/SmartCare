'use client'

import { useEffect } from 'react'
import Script from 'next/script'
import Link from 'next/link'
import Image from 'next/image'
import { useLanguage } from '@/app/i18n/LanguageContext'
import translations from '@/app/i18n/translations'
import LanguageSelector from '@/app/components/LanguageSelector'
import NavigationArrows from '@/app/components/NavigationArrows'

export default function DetailsPage() {
  const { language } = useLanguage()
  const t = translations[language] || translations.en
  useEffect(() => {
    // Load all client-side scripts after component mounts
    if (typeof window !== 'undefined') {
      // Check if script is already loaded
      if (!document.querySelector('script[src="/script.js"]')) {
        // Wait a bit for DOM to be ready
        setTimeout(() => {
          const script = document.createElement('script');
          script.src = '/script.js';
          script.async = true;
          script.onload = () => {
            console.log('Scripts loaded successfully on details page');
          };
          document.body.appendChild(script);
        }, 100);
      }
      
      // Initialize 3D model scripts
      const hero3DModel = document.getElementById('hero3DModel');
      
      if (hero3DModel) {
        hero3DModel.addEventListener('load', () => {
          console.log('3D model loaded successfully');
          hero3DModel.cameraOrbit = '0deg 75deg 105%';
          hero3DModel.renderScale = 1;
          hero3DModel.toneMapping = 'commerce';
          hero3DModel.shadowIntensity = 1.5;
          hero3DModel.shadowSoftness = 1;
          hero3DModel.exposure = 1.2;
        });
      }

      // Initialize cursor for details page
      const cursor = document.getElementById('cursor');
      const cursorDot = document.getElementById('cursorDot');

      if (window.innerWidth >= 1024 && cursor && cursorDot) {
        document.body.classList.add('has-custom-cursor');
        
        let mouseX = window.innerWidth / 2;
        let mouseY = window.innerHeight / 2;
        let cursorX = mouseX;
        let cursorY = mouseY;
        let dotX = mouseX;
        let dotY = mouseY;

        // Initialize cursor position
        cursor.style.left = cursorX + 'px';
        cursor.style.top = cursorY + 'px';
        cursorDot.style.left = dotX + 'px';
        cursorDot.style.top = dotY + 'px';

        document.addEventListener('mousemove', (e) => {
          mouseX = e.clientX;
          mouseY = e.clientY;
        });

        // Smooth cursor animation
        const animateCursor = () => {
          cursorX += (mouseX - cursorX) * 0.1;
          cursorY += (mouseY - cursorY) * 0.1;
          cursor.style.left = cursorX + 'px';
          cursor.style.top = cursorY + 'px';

          dotX += (mouseX - dotX) * 0.3;
          dotY += (mouseY - dotY) * 0.3;
          cursorDot.style.left = dotX + 'px';
          cursorDot.style.top = dotY + 'px';

          requestAnimationFrame(animateCursor);
        };
        animateCursor();

        // Hover effects
        const hoverElements = document.querySelectorAll('a, button, .btn');
        hoverElements.forEach(el => {
          el.addEventListener('mouseenter', () => {
            cursor.classList.add('hover');
            cursorDot.classList.add('hover');
          });
          el.addEventListener('mouseleave', () => {
            cursor.classList.remove('hover');
            cursorDot.classList.remove('hover');
          });
        });
      }

      // Theme-based logo switching
      const updateLogos = () => {
        const theme = document.documentElement.getAttribute('data-theme')
        const isDark = theme === 'dark' || (theme === 'auto' && window.matchMedia('(prefers-color-scheme: dark)').matches)
        const logoImgs = document.querySelectorAll('.navbar__logo-img, .footer__logo-img')
        
        logoImgs.forEach(img => {
          if (isDark) {
            img.src = 'https://res.cloudinary.com/dqsok4hr5/image/upload/v1767665292/log_light_wk2s6e.png'
          } else {
            img.src = 'https://res.cloudinary.com/dqsok4hr5/image/upload/v1767665924/logo_dark_ualmxv.png'
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
        themeObserver.disconnect()
        mediaQuery.removeEventListener('change', updateLogos)
      }
    }
  }, []);

  return (
    <>
      <Script
        src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"
        strategy="afterInteractive"
        type="module"
      />
      
      {/* Custom Cursor */}
      <div className="cursor" id="cursor"></div>
      <div className="cursor-dot" id="cursorDot"></div>

      {/* Navigation Arrows */}
      <NavigationArrows />
      
      {/* Navbar */}
      <nav className="navbar details-navbar" id="navbar">
        <div className="container">
          <div className="navbar__content">
            <div className="navbar__left">
              <Link href="/" className="navbar__back-button" title="Back to home">
                <i className="fas fa-arrow-left"></i>
                <span>{t.details.backButton}</span>
              </Link>
              <Link href="/" className="navbar__logo">
                <img 
                  src="https://res.cloudinary.com/dqsok4hr5/image/upload/v1767665924/logo_dark_ualmxv.png" 
                  alt="SmartCare Logo" 
                  className="navbar__logo-img"
                  width="80"
                  height="80"
                />
                <span className="navbar__logo-text">SmartCare</span>
              </Link>
            </div>
            
            <ul className="navbar__links">
              <li><Link href="/#features" className="navbar__link">{t.navbar.features}</Link></li>
              <li><Link href="/#circular" className="navbar__link">{t.navbar.circular}</Link></li>
              <li><Link href="/#pricing" className="navbar__link">{t.navbar.pricing}</Link></li>
              <li><Link href="/#impact" className="navbar__link">{t.navbar.impact}</Link></li>
              <li><Link href="/#faq" className="navbar__link">{t.navbar.faq}</Link></li>
              <li><Link href="/#contact" className="navbar__link">{t.navbar.contact}</Link></li>
            </ul>
            
            <div className="navbar__actions">
              {/* Language Selector */}
              <LanguageSelector />
              
              {/* Theme Toggle */}
              <div className="theme-toggle" id="themeToggle">
                <button className="theme-toggle__button" id="themeButton" aria-label={t.navbar.changeTheme} title={t.navbar.changeTheme}>
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
              
              <Link href="/#contact" className="navbar__cta">
                <i className="fas fa-calendar-alt"></i> <span>{t.navbar.demoRequest}</span>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero" style={{paddingTop: '100px', minHeight: 'auto', paddingBottom: '80px'}}>
        <div className="container">
          <div style={{maxWidth: '1200px', margin: '0 auto', textAlign: 'center'}}>
            <h1 className="section__title" style={{marginBottom: '16px'}}>
              {language === 'fr' ? 'Modèle 3D Interactif' : language === 'ar' ? 'نموذج ثلاثي الأبعاد التفاعلي' : 'Interactive 3D Model'}
            </h1>
            <p className="section__subtitle" style={{marginBottom: '48px'}}>
              {language === 'fr' ? 'Explorez le SmartCare Bracelet en détail. Faites glisser pour faire pivoter, utilisez la molette pour zoomer.' : language === 'ar' ? 'استكشف سوار SmartCare بالتفصيل. اسحب للدوران، استخدم عجلة الماوس للتكبير.' : 'Explore the SmartCare Bracelet in detail. Drag to rotate, use the scroll wheel to zoom.'}
            </p>
            
            <div style={{position: 'relative', borderRadius: '24px', overflow: 'hidden', boxShadow: 'var(--shadow-lg)', marginBottom: '40px', background: 'linear-gradient(135deg, rgba(38, 166, 255, 0.05), rgba(47, 230, 200, 0.05))'}}>
              <model-viewer
                src="https://res.cloudinary.com/dqsok4hr5/image/upload/v1767465151/base_basic_shaded_iabxpp.glb"
                alt="SmartCare Bracelet - Modèle 3D interactif"
                className="hero__3d-model"
                id="hero3DModel"
                auto-rotate
                auto-rotate-delay="0"
                camera-controls
                touch-action="none"
                shadow-intensity="1.5"
                shadow-softness="1"
                exposure="1.2"
                environment-image="neutral"
                skybox-image=""
                ar="false"
                interaction-policy="allow-when-focused"
                camera-orbit="0deg 75deg 105%"
                min-camera-orbit="auto 0deg auto"
                max-camera-orbit="auto 180deg auto"
                min-field-of-view="25deg"
                max-field-of-view="65deg"
                field-of-view="45deg"
                camera-target="0m 0m 0m"
                interpolation-decay="100"
                loading="lazy"
                reveal="auto"
                tone-mapping="commerce"
                render-scale="1"
                disable-tap
                style={{width: '100%', height: '70vh', minHeight: '500px', maxHeight: '800px'}}
              >
                <img 
                  src="https://res.cloudinary.com/dqsok4hr5/image/upload/v1767464631/bracelet-3d_qzzrru.png" 
                  alt="SmartCare Bracelet" 
                  slot="poster" 
                  className="hero__3d-fallback"
                />
                
                <div slot="poster" className="hero__3d-loading">
                  <div className="hero__3d-spinner"></div>
                  <p>
                    {language === 'fr' ? 'Chargement du modèle 3D...' : language === 'ar' ? 'جاري تحميل النموذج ثلاثي الأبعاد...' : 'Loading 3D model...'}
                  </p>
                </div>
              </model-viewer>
            </div>
            
            <div className="hero__3d-controls-info details-controls">
              <div>
                <span><i className="fas fa-mouse"></i> {language === 'fr' ? 'Glissez pour tourner' : language === 'ar' ? 'اسحب للدوران' : 'Drag to rotate'}</span>
                <span><i className="fas fa-search-plus"></i> {language === 'fr' ? 'Molette pour zoomer' : language === 'ar' ? 'عجلة الماوس للتكبير' : 'Scroll to zoom'}</span>
                <span><i className="fas fa-redo"></i> {language === 'fr' ? 'R pour réinitialiser' : language === 'ar' ? 'R لإعادة تعيين' : 'R to reset'}</span>
                <span><i className="fas fa-play"></i> {language === 'fr' ? 'Espace pour auto-rotation' : language === 'ar' ? 'مسافة للدوران التلقائي' : 'Space for auto-rotation'}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Details Section */}
      <section className="features details-section">
        <div className="container">
          <h2 className="section__title">
            {language === 'fr' ? 'Détails du produit' : language === 'ar' ? 'تفاصيل المنتج' : 'Product Details'}
          </h2>
          <p className="section__subtitle">
            {language === 'fr' ? 'Design modulaire et technologie avancée' : language === 'ar' ? 'تصميم معياري وتكنولوجيا متقدمة' : 'Modular design and advanced technology'}
          </p>
          
          <div className="features__grid" style={{marginTop: '64px'}}>
            <div className="feature-card">
              <div className="feature-card__icon">
                <i className="fas fa-microchip" style={{fontSize: '48px', color: 'var(--blue)'}}></i>
              </div>
              <h3 className="feature-card__title">{t.details.detachableCore}</h3>
              <p className="feature-card__text">
                {t.details.detachableCoreText}
              </p>
            </div>
            
            <div className="feature-card">
              <div className="feature-card__icon">
                <i className="fas fa-battery-three-quarters" style={{fontSize: '48px', color: 'var(--mint)'}}></i>
              </div>
              <h3 className="feature-card__title">{t.details.replaceableBattery}</h3>
              <p className="feature-card__text">
                {t.details.replaceableBatteryText}
              </p>
            </div>
            
            <div className="feature-card">
              <div className="feature-card__icon">
                <i className="fas fa-link" style={{fontSize: '48px', color: 'var(--blue)'}}></i>
              </div>
              <h3 className="feature-card__title">{t.details.interchangeableBracelet}</h3>
              <p className="feature-card__text">
                {t.details.interchangeableBraceletText}
              </p>
            </div>
            
            <div className="feature-card">
              <div className="feature-card__icon">
                <i className="fas fa-shield-alt" style={{fontSize: '48px', color: 'var(--mint)'}}></i>
              </div>
              <h3 className="feature-card__title">{t.details.medicalSilicone}</h3>
              <p className="feature-card__text">
                {t.details.medicalSiliconeText}
              </p>
            </div>
            
            <div className="feature-card">
              <div className="feature-card__icon">
                <i className="fas fa-satellite" style={{fontSize: '48px', color: 'var(--blue)'}}></i>
              </div>
              <h3 className="feature-card__title">{t.details.integratedGPS}</h3>
              <p className="feature-card__text">
                {t.details.integratedGPSText}
              </p>
            </div>
            
            <div className="feature-card">
              <div className="feature-card__icon">
                <i className="fas fa-heartbeat" style={{fontSize: '48px', color: 'var(--mint)'}}></i>
              </div>
              <h3 className="feature-card__title">{t.details.biometricSensors}</h3>
              <p className="feature-card__text">
                {t.details.biometricSensorsText}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="circular details-section" style={{background: 'linear-gradient(to bottom, rgba(47, 230, 200, 0.03), var(--bg))'}}>
        <div className="container">
          <div className="circular__content">
            <div className="circular__text">
              <h2 className="section__title">{t.details.technicalSpecs}</h2>
              <p className="section__subtitle">{t.details.technicalSpecsSubtitle}</p>
              
              <div className="details-specs-grid">
                <div className="details-spec-item">
                  <i className="fas fa-microchip details-spec-icon"></i>
                  <div className="details-spec-content">
                    <h4>{t.details.processor}</h4>
                    <p>{t.details.processorText}</p>
                  </div>
                </div>
                
                <div className="details-spec-item">
                  <i className="fas fa-battery-full details-spec-icon details-spec-icon--mint"></i>
                  <div className="details-spec-content">
                    <h4>{t.details.battery}</h4>
                    <p>{t.details.batteryText}</p>
                  </div>
                </div>
                
                <div className="details-spec-item">
                  <i className="fas fa-wifi details-spec-icon"></i>
                  <div className="details-spec-content">
                    <h4>{t.details.connectivity}</h4>
                    <p>{t.details.connectivityText}</p>
                  </div>
                </div>
                
                <div className="details-spec-item">
                  <i className="fas fa-tint details-spec-icon details-spec-icon--mint"></i>
                  <div className="details-spec-content">
                    <h4>{t.details.waterResistance}</h4>
                    <p>{t.details.waterResistanceText}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="circular__visual">
              <div className="circular__image-wrapper">
                <Image 
                  src="https://res.cloudinary.com/dqsok4hr5/image/upload/v1767464630/prototype_lljqyz.png" 
                  alt="Prototype SmartCare - Vue éclatée montrant la modularité" 
                  className="circular__image"
                  width={600}
                  height={600}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Circular Economy Details */}
      <section className="impact details-section">
        <div className="container">
          <h2 className="section__title">{t.details.circularDesign}</h2>
          <p className="section__subtitle">{t.details.circularDesignSubtitle}</p>
          
          <div className="impact__points" style={{marginTop: '64px'}}>
            <div className="impact-point">
              <div className="impact-point__icon">
                <i className="fas fa-recycle"></i>
              </div>
              <h3 className="impact-point__title">
                {language === 'fr' ? 'Programme de reprise' : language === 'ar' ? 'برنامج الاستعادة' : 'Take-Back Program'}
              </h3>
              <p className="impact-point__text">
                {language === 'fr' ? 'Nous reprenons les anciens dispositifs SmartCare pour reconditionnement ou recyclage. Les composants réutilisables sont réintégrés dans de nouveaux produits, réduisant significativement les déchets électroniques.' : language === 'ar' ? 'نحن نسترجع أجهزة SmartCare القديمة للتكييف أو إعادة التدوير. يتم إعادة دمج المكونات القابلة لإعادة الاستخدام في منتجات جديدة، مما يقلل من النفايات الإلكترونية بشكل كبير.' : 'We take back old SmartCare devices for reconditioning or recycling. Reusable components are reintegrated into new products, significantly reducing electronic waste.'}
              </p>
            </div>
            
            <div className="impact-point">
              <div className="impact-point__icon">
                <i className="fas fa-tools"></i>
              </div>
              <h3 className="impact-point__title">{t.details.repairGuides}</h3>
              <p className="impact-point__text">
                {t.details.repairGuidesText}
              </p>
            </div>
            
            <div className="impact-point">
              <div className="impact-point__icon">
                <i className="fas fa-sync-alt"></i>
              </div>
              <h3 className="impact-point__title">{t.details.softwareUpdates}</h3>
              <p className="impact-point__text">
                {t.details.softwareUpdatesText}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cloudinary Video Section */}
      <section className="details-section video-showcase" style={{background: 'linear-gradient(135deg, rgba(38, 166, 255, 0.08) 0%, rgba(47, 230, 200, 0.08) 100%)'}}>
        <div className="container">
          <h2 className="section__title">{t.details.videoTitle}</h2>
          <p className="section__subtitle">{t.details.videoSubtitle}</p>
          
          <div style={{marginTop: '64px', borderRadius: '24px', overflow: 'hidden', boxShadow: 'var(--shadow-lg)'}}>
            <div style={{position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden'}}>
              <iframe
                style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none'}}
                src="https://player.cloudinary.com/embed/?cloud_name=dqsok4hr5&public_id=Peace_of_mind_intro_video_tkpjwr&profile=cld-default"
                title="SmartCare Product Demo Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Product Insights Section with Cloudinary Image */}
      <section className="details-section product-insights">
        <div className="container">
          <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center'}}>
            <div>
              <h2 className="section__title">{t.details.insideTitleSection}</h2>
              <p className="section__subtitle" style={{marginBottom: '32px'}}>{t.details.insideSubtitleSection}</p>
              
              <ul style={{display: 'flex', flexDirection: 'column', gap: '24px'}}>
                <li style={{display: 'flex', gap: '16px'}}>
                  <i className="fas fa-check-circle" style={{color: 'var(--mint)', fontSize: '24px', flexShrink: 0, marginTop: '2px'}}></i>
                  <div>
                    <h4 style={{color: 'var(--text)', fontWeight: '600', marginBottom: '4px'}}>{t.details.electronics}</h4>
                    <p style={{color: 'var(--muted)'}}>{t.details.electronicsText}</p>
                  </div>
                </li>
                
                <li style={{display: 'flex', gap: '16px'}}>
                  <i className="fas fa-check-circle" style={{color: 'var(--blue)', fontSize: '24px', flexShrink: 0, marginTop: '2px'}}></i>
                  <div>
                    <h4 style={{color: 'var(--text)', fontWeight: '600', marginBottom: '4px'}}>{t.details.materials}</h4>
                    <p style={{color: 'var(--muted)'}}>{t.details.materialsText}</p>
                  </div>
                </li>
                
                <li style={{display: 'flex', gap: '16px'}}>
                  <i className="fas fa-check-circle" style={{color: 'var(--mint)', fontSize: '24px', flexShrink: 0, marginTop: '2px'}}></i>
                  <div>
                    <h4 style={{color: 'var(--text)', fontWeight: '600', marginBottom: '4px'}}>{t.details.modularity}</h4>
                    <p style={{color: 'var(--muted)'}}>{t.details.modularityText}</p>
                  </div>
                </li>
                
                <li style={{display: 'flex', gap: '16px'}}>
                  <i className="fas fa-check-circle" style={{color: 'var(--blue)', fontSize: '24px', flexShrink: 0, marginTop: '2px'}}></i>
                  <div>
                    <h4 style={{color: 'var(--text)', fontWeight: '600', marginBottom: '4px'}}>{t.details.sensors}</h4>
                    <p style={{color: 'var(--muted)'}}>{t.details.sensorsText}</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div style={{borderRadius: '24px', overflow: 'hidden', boxShadow: 'var(--shadow-lg)', height: '500px'}}>
              <img 
                src="https://res.cloudinary.com/dqsok4hr5/image/upload/v1767657858/inside_bracelt_3d_jg5pq7.jpg"
                alt="SmartCare Bracelet Interior - High quality component view"
                style={{width: '100%', height: '100%', objectFit: 'cover', transition: 'var(--transition)'}}
                onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Back to home button */}
      <section className="details-section" style={{textAlign: 'center'}}>
        <div className="container">
          <Link href="/" className="btn btn--primary" style={{fontSize: '1.1rem', padding: '16px 32px'}}>
            <i className="fas fa-arrow-left"></i> Retour à l&apos;accueil
          </Link>
        </div>
      </section>

      {/* Footer */}
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
                  <li><Link href="/#features">{t.footerContent.links.features}</Link></li>
                  <li><Link href="/#circular">{t.footerContent.links.circular}</Link></li>
                  <li><Link href="/#pricing">{t.footerContent.links.pricing}</Link></li>
                </ul>
              </div>
              
              <div className="footer__column">
                <h4 className="footer__title">{t.footerContent.resourcesTitle}</h4>
                <ul>
                  <li><Link href="/#impact">{t.footerContent.links.impact}</Link></li>
                  <li><Link href="/#faq">{t.footerContent.links.faq}</Link></li>
                  <li><Link href="/#contact">{t.footerContent.links.contact}</Link></li>
                </ul>
              </div>
              
              <div className="footer__column">
                <h4 className="footer__title">{t.footerContent.socialTitle}</h4>
                <ul className="footer__social">
                  <li><a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i> {t.footerContent.links.linkedin}</a></li>
                  <li><a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i> {t.footerContent.links.twitter}</a></li>
                  <li><a href="#" aria-label="Facebook"><i className="fab fa-facebook-f"></i> {t.footerContent.links.facebook}</a></li>
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
    </>
  )
}
