'use client'

import { useEffect } from 'react'
import Script from 'next/script'
import Link from 'next/link'
import Image from 'next/image'

export default function DetailsPage() {
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
      
      {/* Navbar */}
      <nav className="navbar" id="navbar">
        <div className="container">
          <div className="navbar__content">
            <Link href="/" className="navbar__logo">
              <i className="fas fa-heartbeat"></i>
              <span className="navbar__logo-text">SmartCare</span>
            </Link>
            
            <ul className="navbar__links">
              <li><Link href="/#features" className="navbar__link">Fonctionnalités</Link></li>
              <li><Link href="/#circular" className="navbar__link">Design Circulaire</Link></li>
              <li><Link href="/#pricing" className="navbar__link">Tarifs</Link></li>
              <li><Link href="/#impact" className="navbar__link">Impact</Link></li>
              <li><Link href="/#faq" className="navbar__link">FAQ</Link></li>
              <li><Link href="/#contact" className="navbar__link">Contact</Link></li>
            </ul>
            
            <div style={{display: 'flex', alignItems: 'center', gap: '16px'}}>
              {/* Theme Toggle */}
              <div className="theme-toggle" id="themeToggle">
                <button className="theme-toggle__button" id="themeButton" aria-label="Changer le thème" title="Thème">
                  <i className="fas fa-sun" id="themeIcon"></i>
                </button>
                <div className="theme-toggle__menu" id="themeMenu">
                  <button className="theme-toggle__option" data-theme="light" aria-label="Mode clair">
                    <i className="fas fa-sun"></i> <span>Clair</span>
                  </button>
                  <button className="theme-toggle__option" data-theme="dark" aria-label="Mode sombre">
                    <i className="fas fa-moon"></i> <span>Sombre</span>
                  </button>
                  <button className="theme-toggle__option" data-theme="auto" aria-label="Automatique">
                    <i className="fas fa-adjust"></i> <span>Auto</span>
                  </button>
                </div>
              </div>
              
              <Link href="/#contact" className="navbar__cta">
                <i className="fas fa-calendar-alt"></i> Demander une démo
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
              Modèle 3D Interactif
            </h1>
            <p className="section__subtitle" style={{marginBottom: '48px'}}>
              Explorez le SmartCare Bracelet en détail. Faites glisser pour faire pivoter, utilisez la molette pour zoomer.
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
                  <p>Chargement du modèle 3D...</p>
                </div>
              </model-viewer>
            </div>
            
            <div className="hero__3d-controls-info details-controls">
              <div>
                <span><i className="fas fa-mouse"></i> Glissez pour tourner</span>
                <span><i className="fas fa-search-plus"></i> Molette pour zoomer</span>
                <span><i className="fas fa-redo"></i> R pour réinitialiser</span>
                <span><i className="fas fa-play"></i> Espace pour auto-rotation</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Details Section */}
      <section className="features details-section">
        <div className="container">
          <h2 className="section__title">Détails du produit</h2>
          <p className="section__subtitle">Design modulaire et technologie avancée</p>
          
          <div className="features__grid" style={{marginTop: '64px'}}>
            <div className="feature-card">
              <div className="feature-card__icon">
                <i className="fas fa-microchip" style={{fontSize: '48px', color: 'var(--blue)'}}></i>
              </div>
              <h3 className="feature-card__title">Cœur électronique détachable</h3>
              <p className="feature-card__text">
                Le module électronique peut être retiré et remplacé indépendamment du bracelet, 
                permettant une mise à niveau sans remplacer l&apos;ensemble du dispositif.
              </p>
            </div>
            
            <div className="feature-card">
              <div className="feature-card__icon">
                <i className="fas fa-battery-three-quarters" style={{fontSize: '48px', color: 'var(--mint)'}}></i>
              </div>
              <h3 className="feature-card__title">Batterie remplaçable</h3>
              <p className="feature-card__text">
                Batterie amovible standard, facilement remplaçable par l&apos;utilisateur. 
                Prolonge la durée de vie du produit et réduit les déchets électroniques.
              </p>
            </div>
            
            <div className="feature-card">
              <div className="feature-card__icon">
                <i className="fas fa-link" style={{fontSize: '48px', color: 'var(--blue)'}}></i>
              </div>
              <h3 className="feature-card__title">Bracelet interchangeable</h3>
              <p className="feature-card__text">
                Le bracelet en silicone médical peut être changé selon les préférences de l&apos;enfant 
                ou remplacé en cas d&apos;usure, tout en conservant le module électronique.
              </p>
            </div>
            
            <div className="feature-card">
              <div className="feature-card__icon">
                <i className="fas fa-shield-alt" style={{fontSize: '48px', color: 'var(--mint)'}}></i>
              </div>
              <h3 className="feature-card__title">Silicone médical</h3>
              <p className="feature-card__text">
                Matériau hypoallergénique, résistant à l&apos;eau, conçu pour un port confortable 
                24/7 par les enfants. Certifié pour contact cutané prolongé.
              </p>
            </div>
            
            <div className="feature-card">
              <div className="feature-card__icon">
                <i className="fas fa-satellite" style={{fontSize: '48px', color: 'var(--blue)'}}></i>
              </div>
              <h3 className="feature-card__title">GPS intégré</h3>
              <p className="feature-card__text">
                Géolocalisation précise avec alertes de zones sécurisées. Fonctionne même en intérieur 
                grâce à la combinaison GPS + WiFi + Bluetooth.
              </p>
            </div>
            
            <div className="feature-card">
              <div className="feature-card__icon">
                <i className="fas fa-heartbeat" style={{fontSize: '48px', color: 'var(--mint)'}}></i>
              </div>
              <h3 className="feature-card__title">Capteurs biométriques</h3>
              <p className="feature-card__text">
                Surveillance continue de la fréquence cardiaque, des mouvements et des indicateurs 
                de stress pour une détection précoce des situations préoccupantes.
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
              <h2 className="section__title">Spécifications techniques</h2>
              <p className="section__subtitle">Technologie de pointe au service de la santé</p>
              
              <div className="details-specs-grid">
                <div className="details-spec-item">
                  <i className="fas fa-microchip details-spec-icon"></i>
                  <div className="details-spec-content">
                    <h4>Processeur</h4>
                    <p>ARM Cortex-M4, optimisé pour faible consommation</p>
                  </div>
                </div>
                
                <div className="details-spec-item">
                  <i className="fas fa-battery-full details-spec-icon details-spec-icon--mint"></i>
                  <div className="details-spec-content">
                    <h4>Autonomie</h4>
                    <p>Jusqu&apos;à 7 jours d&apos;autonomie, charge rapide en 2 heures</p>
                  </div>
                </div>
                
                <div className="details-spec-item">
                  <i className="fas fa-wifi details-spec-icon"></i>
                  <div className="details-spec-content">
                    <h4>Connectivité</h4>
                    <p>Bluetooth 5.0, WiFi, GPS, NFC pour paiement sans contact (optionnel)</p>
                  </div>
                </div>
                
                <div className="details-spec-item">
                  <i className="fas fa-shield-alt details-spec-icon details-spec-icon--mint"></i>
                  <div className="details-spec-content">
                    <h4>Sécurité</h4>
                    <p>Chiffrement AES-256, authentification biométrique, conformité RGPD</p>
                  </div>
                </div>
                
                <div className="details-spec-item">
                  <i className="fas fa-tint details-spec-icon"></i>
                  <div className="details-spec-content">
                    <h4>Résistance</h4>
                    <p>IP68 (étanche jusqu&apos;à 1.5m), résistant aux chocs et à la poussière</p>
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
          <h2 className="section__title">Économie circulaire intégrée</h2>
          <p className="section__subtitle">Réduire les déchets électroniques, prolonger la durée de vie</p>
          
          <div className="impact__points" style={{marginTop: '64px'}}>
            <div className="impact-point">
              <div className="impact-point__icon">
                <i className="fas fa-recycle"></i>
              </div>
              <h3 className="impact-point__title">Programme de reprise</h3>
              <p className="impact-point__text">
                Nous reprenons les anciens dispositifs SmartCare pour reconditionnement ou recyclage. 
                Les composants réutilisables sont réintégrés dans de nouveaux produits, réduisant 
                significativement les déchets électroniques.
              </p>
            </div>
            
            <div className="impact-point">
              <div className="impact-point__icon">
                <i className="fas fa-tools"></i>
              </div>
              <h3 className="impact-point__title">Réparation facilitée</h3>
              <p className="impact-point__text">
                Guides de réparation disponibles, pièces détachées accessibles, et réseau de 
                réparateurs certifiés. Réparer plutôt que jeter, c&apos;est notre engagement.
              </p>
            </div>
            
            <div className="impact-point">
              <div className="impact-point__icon">
                <i className="fas fa-sync-alt"></i>
              </div>
              <h3 className="impact-point__title">Mises à jour logicielles</h3>
              <p className="impact-point__text">
                Les mises à jour OTA (Over-The-Air) permettent d&apos;améliorer les fonctionnalités 
                sans changer le matériel. Votre SmartCare évolue avec vous.
              </p>
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
                <i className="fas fa-heartbeat"></i> SmartCare
              </h3>
              <p className="footer__tagline">Dispositif médical intelligent pour enfants</p>
            </div>
            
            <div className="footer__links">
              <div className="footer__column">
                <h4 className="footer__title">Produit</h4>
                <ul>
                  <li><Link href="/#features">Fonctionnalités</Link></li>
                  <li><Link href="/#circular">Design circulaire</Link></li>
                  <li><Link href="/#pricing">Tarifs</Link></li>
                </ul>
              </div>
              
              <div className="footer__column">
                <h4 className="footer__title">Ressources</h4>
                <ul>
                  <li><Link href="/#impact">Impact</Link></li>
                  <li><Link href="/#faq">FAQ</Link></li>
                  <li><Link href="/#contact">Contact</Link></li>
                </ul>
              </div>
              
              <div className="footer__column">
                <h4 className="footer__title">Social</h4>
                <ul className="footer__social">
                  <li><a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i> LinkedIn</a></li>
                  <li><a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i> Twitter</a></li>
                  <li><a href="#" aria-label="Facebook"><i className="fab fa-facebook-f"></i> Facebook</a></li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="footer__bottom">
            <p className="footer__disclaimer">
              SmartCare est un dispositif médical en développement. Les informations présentées sont 
              à titre informatif et peuvent être sujettes à modification.
            </p>
            <p className="footer__copyright">&copy; 2024 SmartCare. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </>
  )
}
