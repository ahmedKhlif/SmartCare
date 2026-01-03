'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import Script from 'next/script'

export default function Home() {
  useEffect(() => {
    // Load all client-side scripts after component mounts
    if (typeof window !== 'undefined') {
      // Check if script is already loaded
      if (document.querySelector('script[src="/script.js"]')) {
        return
      }
      
      // Wait a bit for DOM to be ready
      setTimeout(() => {
        const script = document.createElement('script')
        script.src = '/script.js'
        script.async = true
        script.onload = () => {
          console.log('Scripts loaded successfully')
        }
        document.body.appendChild(script)
        
        return () => {
          if (document.body.contains(script)) {
            document.body.removeChild(script)
          }
        }
      }, 100)
    }
  }, [])
  return (
    <>
      {/* Scroll Progress Bar */}
      <div className="scroll-progress" id="scrollProgress"></div>
      
      {/* Custom Cursor */}
      <div className="cursor" id="cursor"></div>
      <div className="cursor-dot" id="cursorDot"></div>
      
      {/* Particles Background */}
      <div className="particles" id="particles"></div>
      
      {/* Sticky Navbar */}
      <nav className="navbar" id="navbar" role="navigation" aria-label="Navigation principale">
        <div className="container">
          <div className="navbar__content">
            <a href="#hero" className="navbar__logo" aria-label="SmartCare - Retour à l'accueil">
              <i className="fas fa-heartbeat"></i>
              <span className="navbar__logo-text">SmartCare</span>
            </a>
            
            <ul className="navbar__links" id="navbarLinks">
              <li><a href="#project" className="navbar__link" data-section="project">Le Projet</a></li>
              <li><a href="#features" className="navbar__link" data-section="features">Fonctionnalités</a></li>
              <li><a href="#circular" className="navbar__link" data-section="circular">Design Circulaire</a></li>
              <li><a href="#pricing" className="navbar__link" data-section="pricing">Tarifs</a></li>
              <li><a href="#impact" className="navbar__link" data-section="impact">Impact</a></li>
              <li><a href="#faq" className="navbar__link" data-section="faq">FAQ</a></li>
              <li><a href="#contact" className="navbar__link" data-section="contact">Contact</a></li>
            </ul>
            
            <button className="navbar__cta" aria-label="Demander une démo">
              <i className="fas fa-calendar-alt"></i> Demander une démo
            </button>
            
            <button className="navbar__toggle" id="navbarToggle" aria-label="Menu mobile" aria-expanded="false">
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero" id="hero">
        <div className="hero__bg-blobs">
          <div className="hero__blob hero__blob--1"></div>
          <div className="hero__blob hero__blob--2"></div>
        </div>
        
        <div className="container">
          <div className="hero__content">
            <div className="hero__text">
              <h1 className="hero__title">SmartCare Bracelet</h1>
              <p className="hero__subtitle">
                Un dispositif médical intelligent qui améliore l'autonomie, la sécurité et le calme des enfants avec Trisomie 21.
              </p>
              <div className="hero__ctas">
                <button 
                  className="btn btn--primary" 
                  onClick={() => document.getElementById('features')?.scrollIntoView({behavior: 'smooth'})} 
                  aria-label="Explorer les fonctionnalités"
                >
                  <i className="fas fa-arrow-down"></i> Explorer les fonctionnalités
                </button>
                <button className="btn btn--secondary" id="watchDemoBtn" aria-label="Regarder la démo vidéo">
                  <i className="fas fa-play-circle"></i> Regarder la démo
                </button>
              </div>
            </div>
            
            <div className="hero__image-wrapper">
              <div className="hero__image-container">
                {/* 3D Image - Link to details page */}
                <a href="/details" className="hero__3d-link" style={{display: 'block', position: 'relative'}}>
                  <Image 
                    src="https://res.cloudinary.com/dqsok4hr5/image/upload/v1767464631/bracelet-3d_qzzrru.png" 
                    alt="SmartCare Bracelet - Cliquez pour voir le modèle 3D interactif" 
                    className="hero__image"
                    width={500}
                    height={500}
                    priority
                  />
                  <div className="hero__3d-badge">
                    <i className="fas fa-cube"></i> Voir en 3D
                  </div>
                </a>
              </div>
            </div>
          </div>
          
          <div className="hero__badges">
            <div className="hero__badge">
              <i className="fas fa-network-wired hero__badge-icon"></i>
              <span className="hero__badge-text">IoT + IA</span>
            </div>
            <div className="hero__badge">
              <i className="fas fa-bolt hero__badge-icon"></i>
              <span className="hero__badge-text">Sécurité en temps réel</span>
            </div>
            <div className="hero__badge">
              <i className="fas fa-recycle hero__badge-icon"></i>
              <span className="hero__badge-text">Design circulaire</span>
            </div>
          </div>
        </div>
      </section>

      {/* Product Demo Video Section */}
      <section className="video-section" id="videoSection">
        <div className="container">
          <div className="video-section__content">
            <h2 className="section__title">Découvrez SmartCare en action</h2>
            <div className="video-card">
              <div className="video-card__wrapper" id="videoWrapper">
                <video 
                  className="video-card__video" 
                  id="productVideo" 
                  preload="auto" 
                  playsInline
                  webkit-playsinline="true"
                  muted={false}
                  controls={false}
                  aria-label="Démo produit SmartCare"
                >
                  <source src="/assets/smartcare-video.mp4" type="video/mp4" />
                  Votre navigateur ne supporte pas la lecture vidéo.
                </video>
                <button 
                  className="video-card__play" 
                  id="videoPlayBtn" 
                  type="button"
                  aria-label="Lire la vidéo"
                  style={{zIndex: 10, cursor: 'pointer'}}
                >
                  <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="32" cy="32" r="32" fill="white" fillOpacity="0.9"/>
                    <path d="M26 20L44 32L26 44V20Z" fill="#26a6ff"/>
                  </svg>
                </button>
              </div>
              <p className="video-card__caption">Démo concept produit (10–20s)</p>
            </div>
          </div>
        </div>
      </section>

      {/* Project Overview Section */}
      <section className="impact fade-in" id="project" style={{padding: '100px 0', background: 'linear-gradient(135deg, rgba(38, 166, 255, 0.03), rgba(47, 230, 200, 0.03))'}}>
        <div className="container">
          <h2 className="section__title">Le projet SmartCare</h2>
          <p className="section__subtitle">Innovation technologique, impact social et économie circulaire</p>
          
          <div style={{maxWidth: '900px', margin: '0 auto', marginTop: '64px'}}>
            <div style={{background: 'var(--card)', backdropFilter: 'blur(20px)', padding: '48px', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border)', boxShadow: 'var(--shadow-sm)', marginBottom: '32px'}}>
              <div style={{display: 'flex', alignItems: 'start', gap: '20px', marginBottom: '32px'}}>
                <div style={{background: 'linear-gradient(135deg, var(--blue), var(--mint))', borderRadius: '50%', width: '60px', height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0}}>
                  <i className="fas fa-lightbulb" style={{fontSize: '28px', color: 'white'}}></i>
                </div>
                <div>
                  <h3 style={{fontSize: '1.5rem', fontWeight: '700', marginBottom: '12px', color: 'var(--text)'}}>Idée centrale</h3>
                  <p style={{color: 'var(--muted)', lineHeight: '1.8', fontSize: '1.05rem'}}>
                    SmartCare est un dispositif médical intelligent conçu spécifiquement pour les enfants 
                    avec Trisomie 21. Ce n&apos;est pas simplement un gadget, mais un écosystème complet 
                    qui améliore la <strong>sécurité</strong>, l&apos;<strong>autonomie</strong> et la 
                    <strong>régulation émotionnelle</strong>, tout en offrant une tranquillité d&apos;esprit 
                    aux familles et aux éducateurs.
                  </p>
                </div>
              </div>
            </div>

            <div style={{background: 'var(--card)', backdropFilter: 'blur(20px)', padding: '48px', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border)', boxShadow: 'var(--shadow-sm)', marginBottom: '32px'}}>
              <div style={{display: 'flex', alignItems: 'start', gap: '20px', marginBottom: '32px'}}>
                <div style={{background: 'linear-gradient(135deg, #ef4444, #f59e0b)', borderRadius: '50%', width: '60px', height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0}}>
                  <i className="fas fa-exclamation-triangle" style={{fontSize: '28px', color: 'white'}}></i>
                </div>
                <div>
                  <h3 style={{fontSize: '1.5rem', fontWeight: '700', marginBottom: '12px', color: 'var(--text)'}}>Problème résolu</h3>
                  <p style={{color: 'var(--muted)', lineHeight: '1.8', fontSize: '1.05rem', marginBottom: '20px'}}>
                    Les enfants avec Trisomie 21 font face à des défis quotidiens :
                  </p>
                  <ul style={{listStyle: 'none', padding: 0, color: 'var(--muted)', lineHeight: '2'}}>
                    <li><i className="fas fa-check-circle" style={{color: 'var(--mint)', marginRight: '12px'}}></i> Difficulté à exprimer le stress ou l&apos;inconfort</li>
                    <li><i className="fas fa-check-circle" style={{color: 'var(--mint)', marginRight: '12px'}}></i> Risque de se perdre ou de se désorienter</li>
                    <li><i className="fas fa-check-circle" style={{color: 'var(--mint)', marginRight: '12px'}}></i> Besoin de supervision constante</li>
                    <li><i className="fas fa-check-circle" style={{color: 'var(--mint)', marginRight: '12px'}}></i> Épisodes d&apos;anxiété et comportements impulsifs</li>
                    <li><i className="fas fa-check-circle" style={{color: 'var(--mint)', marginRight: '12px'}}></i> Communication fragmentée entre parents, éducateurs et médecins</li>
                  </ul>
                  <p style={{color: 'var(--muted)', lineHeight: '1.8', fontSize: '1.05rem', marginTop: '20px', fontStyle: 'italic'}}>
                    Les solutions existantes sont des trackers de fitness génériques, non adaptés à leurs besoins spécifiques.
                  </p>
                </div>
              </div>
            </div>

            <div style={{background: 'var(--card)', backdropFilter: 'blur(20px)', padding: '48px', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border)', boxShadow: 'var(--shadow-sm)', marginBottom: '32px'}}>
              <div style={{display: 'flex', alignItems: 'start', gap: '20px'}}>
                <div style={{background: 'linear-gradient(135deg, var(--mint), var(--blue))', borderRadius: '50%', width: '60px', height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0}}>
                  <i className="fas fa-cogs" style={{fontSize: '28px', color: 'white'}}></i>
                </div>
                <div>
                  <h3 style={{fontSize: '1.5rem', fontWeight: '700', marginBottom: '12px', color: 'var(--text)'}}>Notre solution : un écosystème complet</h3>
                  <div style={{display: 'grid', gap: '24px', marginTop: '24px'}}>
                    <div style={{padding: '20px', background: 'rgba(38, 166, 255, 0.05)', borderRadius: 'var(--radius)', border: '1px solid rgba(38, 166, 255, 0.2)'}}>
                      <h4 style={{fontSize: '1.2rem', fontWeight: '600', marginBottom: '8px', color: 'var(--text)'}}>
                        <i className="fas fa-bracelet" style={{color: 'var(--blue)', marginRight: '10px'}}></i>
                        Bracelet intelligent
                      </h4>
                      <p style={{color: 'var(--muted)', lineHeight: '1.7'}}>
                        Silicone médical adapté aux enfants, design arrondi et sécurisé. Capteurs de fréquence cardiaque, 
                        mouvement, indicateurs de stress, GPS, et retour audio/vibration pour apaiser l&apos;enfant. 
                        <strong> Design modulaire</strong> : cœur électronique détachable.
                      </p>
                    </div>
                    
                    <div style={{padding: '20px', background: 'rgba(47, 230, 200, 0.05)', borderRadius: 'var(--radius)', border: '1px solid rgba(47, 230, 200, 0.2)'}}>
                      <h4 style={{fontSize: '1.2rem', fontWeight: '600', marginBottom: '8px', color: 'var(--text)'}}>
                        <i className="fas fa-mobile-alt" style={{color: 'var(--mint)', marginRight: '10px'}}></i>
                        Application mobile
                      </h4>
                      <p style={{color: 'var(--muted)', lineHeight: '1.7'}}>
                        Surveillance en temps réel, alertes et notifications, historique de santé et d&apos;activité, 
                        recommandations personnalisées. Accès sécurisé pour parents et éducateurs.
                      </p>
                    </div>
                    
                    <div style={{padding: '20px', background: 'rgba(38, 166, 255, 0.05)', borderRadius: 'var(--radius)', border: '1px solid rgba(38, 166, 255, 0.2)'}}>
                      <h4 style={{fontSize: '1.2rem', fontWeight: '600', marginBottom: '8px', color: 'var(--text)'}}>
                        <i className="fas fa-cloud" style={{color: 'var(--blue)', marginRight: '10px'}}></i>
                        Plateforme cloud
                      </h4>
                      <p style={{color: 'var(--muted)', lineHeight: '1.7'}}>
                        Analyse de données, rapports détaillés, accès multi-rôles (famille / école / médical), 
                        détection assistée par IA des patterns comportementaux.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div style={{background: 'var(--card)', backdropFilter: 'blur(20px)', padding: '48px', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border)', boxShadow: 'var(--shadow-sm)'}}>
              <div style={{display: 'flex', alignItems: 'start', gap: '20px'}}>
                <div style={{background: 'linear-gradient(135deg, #10b981, #059669)', borderRadius: '50%', width: '60px', height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0}}>
                  <i className="fas fa-recycle" style={{fontSize: '28px', color: 'white'}}></i>
                </div>
                <div>
                  <h3 style={{fontSize: '1.5rem', fontWeight: '700', marginBottom: '12px', color: 'var(--text)'}}>Économie circulaire intégrée</h3>
                  <p style={{color: 'var(--muted)', lineHeight: '1.8', fontSize: '1.05rem', marginBottom: '24px'}}>
                    SmartCare est conçu selon les principes de l&apos;économie circulaire, pas linéaire :
                  </p>
                  <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px'}}>
                    <div style={{textAlign: 'center', padding: '20px', background: 'rgba(38, 166, 255, 0.05)', borderRadius: 'var(--radius)'}}>
                      <i className="fas fa-redo-alt" style={{fontSize: '32px', color: 'var(--blue)', marginBottom: '12px'}}></i>
                      <h4 style={{fontSize: '1rem', fontWeight: '600', marginBottom: '8px'}}>Réutilisation</h4>
                      <p style={{color: 'var(--muted)', fontSize: '0.9rem'}}>Même module pour plusieurs utilisateurs</p>
                    </div>
                    <div style={{textAlign: 'center', padding: '20px', background: 'rgba(47, 230, 200, 0.05)', borderRadius: 'var(--radius)'}}>
                      <i className="fas fa-tools" style={{fontSize: '32px', color: 'var(--mint)', marginBottom: '12px'}}></i>
                      <h4 style={{fontSize: '1rem', fontWeight: '600', marginBottom: '8px'}}>Réparation</h4>
                      <p style={{color: 'var(--muted)', fontSize: '0.9rem'}}>Remplacer une partie, pas tout</p>
                    </div>
                    <div style={{textAlign: 'center', padding: '20px', background: 'rgba(38, 166, 255, 0.05)', borderRadius: 'var(--radius)'}}>
                      <i className="fas fa-sync-alt" style={{fontSize: '32px', color: 'var(--blue)', marginBottom: '12px'}}></i>
                      <h4 style={{fontSize: '1rem', fontWeight: '600', marginBottom: '8px'}}>Reconditionnement</h4>
                      <p style={{color: 'var(--muted)', fontSize: '0.9rem'}}>Programme de reprise</p>
                    </div>
                    <div style={{textAlign: 'center', padding: '20px', background: 'rgba(47, 230, 200, 0.05)', borderRadius: 'var(--radius)'}}>
                      <i className="fas fa-recycle" style={{fontSize: '32px', color: 'var(--mint)', marginBottom: '12px'}}></i>
                      <h4 style={{fontSize: '1rem', fontWeight: '600', marginBottom: '8px'}}>Recyclage</h4>
                      <p style={{color: 'var(--muted)', fontSize: '0.9rem'}}>Matériaux + électronique</p>
                    </div>
                  </div>
                  <p style={{color: 'var(--muted)', lineHeight: '1.8', fontSize: '1.05rem', marginTop: '24px', padding: '20px', background: 'rgba(16, 185, 129, 0.1)', borderRadius: 'var(--radius)', border: '1px solid rgba(16, 185, 129, 0.2)'}}>
                    <strong>Résultat :</strong> Réduction directe des déchets électroniques (e-waste) et alignement 
                    avec les objectifs de durabilité et d&apos;économie circulaire de la Tunisie.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features fade-in" id="features">
        <div className="container">
          <h2 className="section__title">Fonctionnalités principales</h2>
          <p className="section__subtitle">Technologie avancée au service de l'autonomie et de la sécurité</p>
          
          <div className="features__grid">
            <div className="feature-card">
              <div className="feature-card__icon">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="24" cy="24" r="20" stroke="#26a6ff" strokeWidth="2" fill="none"/>
                  <path d="M24 12V24L32 28" stroke="#26a6ff" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <h3 className="feature-card__title">Surveillance en temps réel</h3>
              <p className="feature-card__text">
                Suivi continu de la fréquence cardiaque, des mouvements et des signaux de stress pour une détection précoce des situations préoccupantes.
              </p>
            </div>
            
            <div className="feature-card">
              <div className="feature-card__icon">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="24" cy="24" r="18" stroke="#2fe6c8" strokeWidth="2" fill="none"/>
                  <circle cx="24" cy="24" r="4" fill="#2fe6c8"/>
                  <path d="M24 6L24 2M24 46L24 42M6 24L2 24M46 24L42 24" stroke="#2fe6c8" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <h3 className="feature-card__title">Sécurité GPS</h3>
              <p className="feature-card__text">
                Géolocalisation discrète avec alertes de zones sécurisées. Permet aux parents de savoir où se trouve leur enfant en toute circonstance.
              </p>
            </div>
            
            <div className="feature-card">
              <div className="feature-card__icon">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 8C16.27 8 10 14.27 10 22C10 29.73 24 40 24 40C24 40 38 29.73 38 22C38 14.27 31.73 8 24 8Z" stroke="#26a6ff" strokeWidth="2" fill="none"/>
                  <circle cx="24" cy="22" r="6" stroke="#26a6ff" strokeWidth="2" fill="none"/>
                </svg>
              </div>
              <h3 className="feature-card__title">Assistance au calme</h3>
              <p className="feature-card__text">
                Guidance douce par son et voix pour aider à la désescalade lors de moments difficiles, favorisant le retour au calme.
              </p>
            </div>
            
            <div className="feature-card">
              <div className="feature-card__icon">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="8" y="12" width="32" height="24" rx="2" stroke="#2fe6c8" strokeWidth="2" fill="none"/>
                  <path d="M16 20L22 26L32 16" stroke="#2fe6c8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="feature-card__title">Coordination familiale</h3>
              <p className="feature-card__text">
                Partage sécurisé des données entre parents, éducateurs et médecins pour une prise en charge coordonnée et efficace.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="how-it-works slide-in-left" id="howItWorks">
        <div className="container">
          <h2 className="section__title">Comment ça fonctionne</h2>
          <p className="section__subtitle">Un écosystème connecté pour une sécurité optimale</p>
          
          <div className="how-it-works__flow">
            <div className="flow-step">
              <div className="flow-step__icon">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="8" y="12" width="24" height="16" rx="2" stroke="#26a6ff" strokeWidth="2" fill="none"/>
                  <circle cx="20" cy="20" r="4" fill="#26a6ff"/>
                </svg>
              </div>
              <h3 className="flow-step__title">Bracelet</h3>
              <p className="flow-step__text">Collecte des données en temps réel</p>
            </div>
            
            <div className="flow-step__arrow">→</div>
            
            <div className="flow-step">
              <div className="flow-step__icon">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="6" y="4" width="28" height="32" rx="3" stroke="#2fe6c8" strokeWidth="2" fill="none"/>
                  <rect x="12" y="8" width="16" height="10" rx="1" fill="#2fe6c8" fillOpacity="0.2"/>
                </svg>
              </div>
              <h3 className="flow-step__title">Application mobile</h3>
              <p className="flow-step__text">Interface intuitive pour les parents</p>
            </div>
            
            <div className="flow-step__arrow">→</div>
            
            <div className="flow-step">
              <div className="flow-step__icon">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 8L28 16H24V28H16V16H12L20 8Z" fill="#26a6ff"/>
                  <ellipse cx="20" cy="32" rx="8" ry="4" fill="#26a6ff" fillOpacity="0.3"/>
                </svg>
              </div>
              <h3 className="flow-step__title">Plateforme cloud</h3>
              <p className="flow-step__text">Analyse et stockage sécurisé</p>
            </div>
            
            <div className="flow-step__arrow">→</div>
            
            <div className="flow-step">
              <div className="flow-step__icon">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="20" cy="20" r="12" stroke="#2fe6c8" strokeWidth="2" fill="none"/>
                  <path d="M20 12V20L26 24" stroke="#2fe6c8" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <h3 className="flow-step__title">Parents / Éducateurs</h3>
              <p className="flow-step__text">Alertes et rapports détaillés</p>
            </div>
          </div>
        </div>
      </section>

      {/* Circular Economy Section */}
      <section className="circular fade-in" id="circular">
        <div className="container">
          <div className="circular__content">
            <div className="circular__text">
              <h2 className="section__title">Design circulaire</h2>
              <p className="section__subtitle">Durabilité et réparabilité au cœur du produit</p>
              <p className="circular__description">
                SmartCare est conçu avec une approche modulaire innovante : le cœur électronique est détachable, 
                la batterie est remplaçable, et le bracelet est interchangeable. Cette architecture permet 
                une réparation facile, une mise à niveau progressive et un recyclage optimisé en fin de vie.
              </p>
              
              <div className="circular__cards">
                <div className="circular-card">
                  <div className="circular-card__icon">
                    <i className="fas fa-redo-alt"></i>
                  </div>
                  <h3 className="circular-card__title">Réutilisation</h3>
                  <p className="circular-card__text">Composants modulaires réutilisables</p>
                </div>
                
                <div className="circular-card">
                  <div className="circular-card__icon">
                    <i className="fas fa-tools"></i>
                  </div>
                  <h3 className="circular-card__title">Réparation</h3>
                  <p className="circular-card__text">Maintenance simple et accessible</p>
                </div>
                
                <div className="circular-card">
                  <div className="circular-card__icon">
                    <i className="fas fa-sync-alt"></i>
                  </div>
                  <h3 className="circular-card__title">Reconditionnement</h3>
                  <p className="circular-card__text">Recyclage et valorisation optimisés</p>
                </div>
              </div>
            </div>
            
            <div className="circular__visual">
              <div className="circular__image-wrapper">
                <Image 
                  src="https://res.cloudinary.com/dqsok4hr5/image/upload/v1767464630/prototype_lljqyz.png" 
                  alt="Vue éclatée du prototype SmartCare montrant les composants modulaires" 
                  className="circular__image"
                  width={500}
                  height={500}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="pricing fade-in" id="pricing">
        <div className="container">
          <h2 className="section__title">Tarifs et offres</h2>
          <p className="section__subtitle">Choisissez le plan qui correspond à vos besoins</p>
          
          {/* Pricing Toggle */}
          <div className="pricing__toggle">
            <span className="pricing__toggle-label">Facturation mensuelle</span>
            <label className="pricing__switch">
              <input type="checkbox" id="pricingToggle" />
              <span className="pricing__slider"></span>
            </label>
            <span className="pricing__toggle-label">Facturation annuelle <span className="pricing__badge">-20%</span></span>
          </div>
          
          {/* Pricing Cards */}
          <div className="pricing__grid">
            {/* Starter Plan */}
            <div className="pricing-card">
              <div className="pricing-card__header">
                <h3 className="pricing-card__title">Starter</h3>
                <p className="pricing-card__subtitle">Pour commencer</p>
              </div>
              <div className="pricing-card__price">
                <span className="pricing-card__amount" data-monthly="950" data-yearly="760">950</span>
                <span className="pricing-card__currency">DT</span>
                <span className="pricing-card__period">/mois</span>
              </div>
              <div className="pricing-card__device">
                <i className="fas fa-mobile-alt"></i>
                <span>Bracelet inclus</span>
              </div>
              <ul className="pricing-card__features">
                <li><i className="fas fa-check"></i> Surveillance en temps réel</li>
                <li><i className="fas fa-check"></i> Géolocalisation GPS</li>
                <li><i className="fas fa-check"></i> Alertes de sécurité</li>
                <li><i className="fas fa-check"></i> Application mobile</li>
                <li><i className="fas fa-check"></i> Support email</li>
              </ul>
              <button className="btn btn--secondary btn--full pricing-card__cta">
                <i className="fas fa-shopping-cart"></i> Choisir ce plan
              </button>
            </div>
            
            {/* Professional Plan (Featured) */}
            <div className="pricing-card pricing-card--featured">
              <div className="pricing-card__badge">
                <i className="fas fa-star"></i> Le plus populaire
              </div>
              <div className="pricing-card__header">
                <h3 className="pricing-card__title">Professional</h3>
                <p className="pricing-card__subtitle">Pour les familles</p>
              </div>
              <div className="pricing-card__price">
                <span className="pricing-card__amount" data-monthly="1590" data-yearly="1270">1590</span>
                <span className="pricing-card__currency">DT</span>
                <span className="pricing-card__period">/mois</span>
              </div>
              <div className="pricing-card__device">
                <i className="fas fa-mobile-alt"></i>
                <span>Bracelet inclus</span>
              </div>
              <ul className="pricing-card__features">
                <li><i className="fas fa-check"></i> Tout dans Starter</li>
                <li><i className="fas fa-check"></i> Assistance au calme (IA)</li>
                <li><i className="fas fa-check"></i> Partage avec éducateurs</li>
                <li><i className="fas fa-check"></i> Rapports détaillés</li>
                <li><i className="fas fa-check"></i> Support prioritaire</li>
                <li><i className="fas fa-check"></i> Mises à jour gratuites</li>
              </ul>
              <button className="btn btn--primary btn--full pricing-card__cta">
                <i className="fas fa-rocket"></i> Choisir ce plan
              </button>
            </div>
            
            {/* Enterprise Plan */}
            <div className="pricing-card">
              <div className="pricing-card__header">
                <h3 className="pricing-card__title">Enterprise</h3>
                <p className="pricing-card__subtitle">Pour les institutions</p>
              </div>
              <div className="pricing-card__price">
                <span className="pricing-card__amount" data-monthly="3190" data-yearly="2550">3190</span>
                <span className="pricing-card__currency">DT</span>
                <span className="pricing-card__period">/mois</span>
              </div>
              <div className="pricing-card__device">
                <i className="fas fa-mobile-alt"></i>
                <span>Bracelets multiples</span>
              </div>
              <ul className="pricing-card__features">
                <li><i className="fas fa-check"></i> Tout dans Professional</li>
                <li><i className="fas fa-check"></i> Gestion multi-utilisateurs</li>
                <li><i className="fas fa-check"></i> Intégration API</li>
                <li><i className="fas fa-check"></i> Tableau de bord avancé</li>
                <li><i className="fas fa-check"></i> Support dédié 24/7</li>
                <li><i className="fas fa-check"></i> Formation personnalisée</li>
                <li><i className="fas fa-check"></i> SLA garanti</li>
              </ul>
              <button className="btn btn--secondary btn--full pricing-card__cta">
                <i className="fas fa-phone"></i> Nous contacter
              </button>
            </div>
          </div>
          
          {/* Additional Info */}
          <div className="pricing__info">
            <div className="pricing__info-item">
              <i className="fas fa-shield-alt"></i>
              <div>
                <h4>Garantie 2 ans</h4>
                <p>Sur tous les bracelets SmartCare</p>
              </div>
            </div>
            <div className="pricing__info-item">
              <i className="fas fa-sync-alt"></i>
              <div>
                <h4>Annulation gratuite</h4>
                <p>À tout moment, sans engagement</p>
              </div>
            </div>
            <div className="pricing__info-item">
              <i className="fas fa-headset"></i>
              <div>
                <h4>Support inclus</h4>
                <p>Assistance technique disponible</p>
              </div>
            </div>
          </div>
          
          {/* FAQ Pricing */}
          <div className="pricing__faq">
            <h3 className="pricing__faq-title">Questions fréquentes sur les tarifs</h3>
            <div className="pricing__faq-list">
              <div className="pricing-faq-item">
                <button className="pricing-faq-item__question">
                  <span>Le bracelet est-il inclus dans le prix ?</span>
                  <i className="fas fa-chevron-down"></i>
                </button>
                <div className="pricing-faq-item__answer">
                  <p>Oui, le bracelet SmartCare est inclus dans tous nos plans. Vous recevrez un bracelet neuf lors de votre première commande.</p>
                </div>
              </div>
              <div className="pricing-faq-item">
                <button className="pricing-faq-item__question">
                  <span>Puis-je changer de plan plus tard ?</span>
                  <i className="fas fa-chevron-down"></i>
                </button>
                <div className="pricing-faq-item__answer">
                  <p>Absolument ! Vous pouvez mettre à niveau ou rétrograder votre plan à tout moment. Les changements prennent effet au prochain cycle de facturation.</p>
                </div>
              </div>
              <div className="pricing-faq-item">
                <button className="pricing-faq-item__question">
                  <span>Y a-t-il des frais cachés ?</span>
                  <i className="fas fa-chevron-down"></i>
                </button>
                <div className="pricing-faq-item__answer">
                  <p>Non, nos prix sont transparents. Le prix affiché inclut le bracelet, l&apos;abonnement mensuel, et toutes les fonctionnalités listées. Les seuls frais supplémentaires seraient pour des accessoires optionnels.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Impact Section */}
      <section className="impact fade-in" id="impact">
        <div className="container">
          <div className="impact__content">
            <div className="impact__statement">
              <h2 className="section__title">Impact social</h2>
              <p className="impact__quote">
                SmartCare transforme le quotidien des familles en offrant une tranquillité d&apos;esprit 
                et en favorisant l&apos;autonomie des enfants avec Trisomie 21.
              </p>
            </div>
            
            <div className="impact__points">
              <div className="impact-point">
                <div className="impact-point__icon">
                  <i className="fas fa-heart"></i>
                </div>
                <h3 className="impact-point__title">Réduction de l&apos;anxiété familiale</h3>
                <p className="impact-point__text">
                  Les alertes en temps réel et la géolocalisation permettent aux parents de se sentir 
                  rassurés tout en respectant l&apos;autonomie de leur enfant.
                </p>
              </div>
              
              <div className="impact-point">
                <div className="impact-point__icon">
                  <i className="fas fa-star"></i>
                </div>
                <h3 className="impact-point__title">Amélioration de l&apos;autonomie</h3>
                <p className="impact-point__text">
                  L&apos;assistance au calme et le suivi médical favorisent l&apos;indépendance progressive 
                  et la confiance en soi de l&apos;enfant.
                </p>
              </div>
              
              <div className="impact-point">
                <div className="impact-point__icon">
                  <i className="fas fa-hands-helping"></i>
                </div>
                <h3 className="impact-point__title">Éducation inclusive</h3>
                <p className="impact-point__text">
                  Le partage sécurisé des données avec les équipes éducatives et médicales 
                  facilite une prise en charge coordonnée et personnalisée.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq slide-in-left" id="faq">
        <div className="container">
          <h2 className="section__title">Questions fréquentes</h2>
          <p className="section__subtitle">Tout ce que vous devez savoir sur SmartCare</p>
          
          <div className="faq__list">
            <div className="faq-item">
              <button className="faq-item__question" aria-expanded="false">
                <span>Est-ce un véritable dispositif médical ?</span>
                <svg className="faq-item__icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <div className="faq-item__answer">
                <p>
                  SmartCare est conçu comme un dispositif médical de classe II, soumis aux réglementations 
                  européennes (MDR). Il est destiné à la surveillance et à l&apos;assistance, mais ne remplace 
                  pas les soins médicaux professionnels. Nous travaillons en étroite collaboration avec des 
                  professionnels de santé pour garantir la sécurité et l&apos;efficacité du produit.
                </p>
              </div>
            </div>
            
            <div className="faq-item">
              <button className="faq-item__question" aria-expanded="false">
                <span>Quelles données sont collectées ?</span>
                <svg className="faq-item__icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <div className="faq-item__answer">
                <p>
                  Nous collectons uniquement les données nécessaires au fonctionnement du dispositif : 
                  fréquence cardiaque, mouvements, signaux de stress, et géolocalisation (uniquement 
                  lorsque activée). Toutes les données sont chiffrées, stockées de manière sécurisée, 
                  et ne sont partagées qu&apos;avec les personnes autorisées (parents, éducateurs, médecins) 
                  via un système de consentement explicite.
                </p>
              </div>
            </div>
            
            <div className="faq-item">
              <button className="faq-item__question" aria-expanded="false">
                <span>Comment fonctionne le GPS ?</span>
                <svg className="faq-item__icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <div className="faq-item__answer">
                <p>
                  Le GPS fonctionne de manière discrète et respectueuse de la vie privée. Les parents 
                  peuvent définir des zones sécurisées (école, domicile, etc.). Si l&apos;enfant sort de 
                  ces zones ou si une alerte est déclenchée, les parents reçoivent une notification. 
                  La géolocalisation peut être désactivée à tout moment par les parents.
                </p>
              </div>
            </div>
            
            <div className="faq-item">
              <button className="faq-item__question" aria-expanded="false">
                <span>Comment la confidentialité est-elle gérée ?</span>
                <svg className="faq-item__icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <div className="faq-item__answer">
                <p>
                  La confidentialité est notre priorité absolue. Nous respectons le RGPD et appliquons 
                  les principes de minimisation des données, de consentement explicite, et de sécurité 
                  renforcée. Les données sont chiffrées en transit et au repos, et seuls les utilisateurs 
                  autorisés peuvent y accéder. Nous ne vendons jamais de données à des tiers.
                </p>
              </div>
            </div>
            
            <div className="faq-item">
              <button className="faq-item__question" aria-expanded="false">
                <span>Qu&apos;est-ce qui le rend circulaire ?</span>
                <svg className="faq-item__icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <div className="faq-item__answer">
                <p>
                  Le design modulaire permet la réparation, la mise à niveau et le recyclage. Le cœur 
                  électronique peut être remplacé sans jeter le bracelet, la batterie est remplaçable, 
                  et les matériaux sont choisis pour leur recyclabilité. Nous proposons également un 
                  programme de reprise et de reconditionnement pour prolonger la vie du produit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact fade-in" id="contact">
        <div className="container">
          <h2 className="section__title">Contactez-nous</h2>
          <p className="section__subtitle">Nous sommes là pour répondre à vos questions</p>
          
          <form className="contact__form" id="contactForm" noValidate>
            <div className="form-group">
              <label htmlFor="name" className="form-label">
                <i className="fas fa-user"></i> Nom complet
              </label>
              <input type="text" id="name" name="name" className="form-input" required aria-required="true" />
              <span className="form-error" id="nameError"></span>
            </div>
            
            <div className="form-group">
              <label htmlFor="email" className="form-label">
                <i className="fas fa-envelope"></i> Email
              </label>
              <input type="email" id="email" name="email" className="form-input" required aria-required="true" />
              <span className="form-error" id="emailError"></span>
            </div>
            
            <div className="form-group">
              <label htmlFor="role" className="form-label">
                <i className="fas fa-briefcase"></i> Rôle
              </label>
              <select id="role" name="role" className="form-input" required aria-required="true">
                <option value="">Sélectionnez votre rôle</option>
                <option value="parent">Parent</option>
                <option value="educator">Éducateur</option>
                <option value="doctor">Médecin</option>
                <option value="investor">Investisseur</option>
              </select>
              <span className="form-error" id="roleError"></span>
            </div>
            
            <div className="form-group">
              <label htmlFor="message" className="form-label">
                <i className="fas fa-comment-alt"></i> Message
              </label>
              <textarea id="message" name="message" className="form-input form-textarea" rows="5" required aria-required="true"></textarea>
              <span className="form-error" id="messageError"></span>
            </div>
            
            <button type="submit" className="btn btn--primary btn--full" aria-label="Envoyer le formulaire">
              <i className="fas fa-paper-plane"></i> Envoyer
            </button>
          </form>
          
          <div className="contact__cta">
            <i className="fas fa-shield-alt"></i>
            <p className="contact__cta-text">Construisez des routines quotidiennes plus sûres avec SmartCare.</p>
          </div>
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
                  <li><a href="#features">Fonctionnalités</a></li>
                  <li><a href="#circular">Design circulaire</a></li>
                  <li><a href="#pricing">Tarifs</a></li>
                </ul>
              </div>
              
              <div className="footer__column">
                <h4 className="footer__title">Ressources</h4>
                <ul>
                  <li><a href="#impact">Impact</a></li>
                  <li><a href="#faq">FAQ</a></li>
                  <li><a href="#contact">Contact</a></li>
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

      {/* Video Modal */}
      <div className="modal" id="videoModal" role="dialog" aria-labelledby="modalTitle" aria-hidden="true">
        <div className="modal__overlay" id="modalOverlay"></div>
        <div className="modal__content">
          <button className="modal__close" id="modalClose" aria-label="Fermer la vidéo">
            <i className="fas fa-times"></i>
          </button>
          <div className="modal__video-wrapper">
            <video className="modal__video" id="modalVideo" controls>
              <source src="/assets/smartcare-video.mp4" type="video/mp4" />
              Votre navigateur ne supporte pas la lecture vidéo.
            </video>
          </div>
        </div>
      </div>

      {/* Toast Notification */}
      <div className="toast" id="toast" role="alert" aria-live="polite" aria-atomic="true">
        <div className="toast__content">
          <span className="toast__message" id="toastMessage"></span>
        </div>
      </div>
    </>
  )
}

