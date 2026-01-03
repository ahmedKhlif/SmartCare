// ============================================
// SMART CARE LANDING PAGE SCRIPTS
// Wrapped in IIFE to prevent duplicate declarations
// ============================================

(function() {
'use strict';

// ============================================
// NAVBAR FUNCTIONALITY
// ============================================

function initNavbar() {
    const navbar = document.getElementById('navbar');
    const navbarToggle = document.getElementById('navbarToggle');
    const navbarLinks = document.getElementById('navbarLinks');
    const navLinks = document.querySelectorAll('.navbar__link');

    if (!navbar || !navbarToggle || !navbarLinks) return;

    // Mobile menu toggle
    navbarToggle.addEventListener('click', () => {
        const isExpanded = navbarToggle.getAttribute('aria-expanded') === 'true';
        navbarToggle.setAttribute('aria-expanded', !isExpanded);
        navbarLinks.classList.toggle('open');
    });

    // Close mobile menu when clicking a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navbarLinks.classList.remove('open');
            navbarToggle.setAttribute('aria-expanded', 'false');
        });
    });

    // Navbar scroll effect
    let lastScroll = 0;
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            navbar.style.boxShadow = '0 4px 20px rgba(15, 23, 42, 0.08)';
        } else {
            navbar.style.boxShadow = 'none';
        }
        
        lastScroll = currentScroll;
    });

    // Active link highlighting on scroll
    const sections = document.querySelectorAll('section[id]');
    const observerOptions = {
        root: null,
        rootMargin: '-20% 0px -70% 0px',
        threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('data-section') === id || 
                        link.getAttribute('href') === `#${id}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && href.length > 1) {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                const offsetTop = target.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        }
    });
});

// ============================================
// VIDEO FUNCTIONALITY
// ============================================

function initVideo() {
    const watchDemoBtn = document.getElementById('watchDemoBtn');
    const videoModal = document.getElementById('videoModal');
    const modalOverlay = document.getElementById('modalOverlay');
    const modalClose = document.getElementById('modalClose');
    const modalVideo = document.getElementById('modalVideo');
    const productVideo = document.getElementById('productVideo');
    const videoPlayBtn = document.getElementById('videoPlayBtn');

    // Handle modal video
    if (watchDemoBtn && videoModal && modalOverlay && modalClose && modalVideo) {
        // Open video modal
        watchDemoBtn.addEventListener('click', () => {
            videoModal.classList.add('active');
            modalVideo.currentTime = 0;
            document.body.style.overflow = 'hidden';
        });

        // Close video modal
        const closeModal = () => {
            videoModal.classList.remove('active');
            modalVideo.pause();
            document.body.style.overflow = '';
        };

        modalOverlay.addEventListener('click', closeModal);
        modalClose.addEventListener('click', closeModal);

        // Close modal on Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && videoModal.classList.contains('active')) {
                closeModal();
            }
        });
    }

    // Handle inline video play
    if (videoPlayBtn && productVideo) {
        console.log('Video elements found, initializing video player', {
            videoPlayBtn: !!videoPlayBtn,
            productVideo: !!productVideo,
            videoSrc: productVideo.querySelector('source')?.src || productVideo.src,
            readyState: productVideo.readyState
        });
        
        // Play button click handler
        const handlePlayClick = async (e) => {
            if (e) {
                e.preventDefault();
                e.stopPropagation();
            }
            console.log('Play button clicked');
            
            try {
                console.log('Attempting to play video...', {
                    paused: productVideo.paused,
                    readyState: productVideo.readyState
                });
                
                await productVideo.play();
                console.log('Video playing successfully');
                videoPlayBtn.classList.add('hidden');
            } catch (err) {
                console.error('Video play error:', err);
                console.error('Error details:', {
                    name: err.name,
                    message: err.message
                });
                // Enable controls as fallback
                productVideo.controls = true;
                videoPlayBtn.style.display = 'none';
            }
        };
        
        videoPlayBtn.addEventListener('click', handlePlayClick);
        
        // Also allow direct click on button
        videoPlayBtn.onclick = handlePlayClick;

        // Video click to play/pause
        productVideo.addEventListener('click', async (e) => {
            e.stopPropagation();
            console.log('Video clicked, paused:', productVideo.paused);
            
            if (productVideo.paused) {
                try {
                    console.log('Attempting to play video on click...');
                    await productVideo.play();
                    console.log('Video playing on click');
                    videoPlayBtn.classList.add('hidden');
                } catch (err) {
                    console.error('Video play error on click:', err);
                    // Enable controls as fallback
                    productVideo.controls = true;
                    videoPlayBtn.style.display = 'none';
                }
            } else {
                productVideo.pause();
                videoPlayBtn.classList.remove('hidden');
            }
        });

        // Video events
        productVideo.addEventListener('play', () => {
            console.log('Video playing event');
            videoPlayBtn.classList.add('hidden');
        });

        productVideo.addEventListener('pause', () => {
            console.log('Video paused event');
            videoPlayBtn.classList.remove('hidden');
        });

        productVideo.addEventListener('ended', () => {
            console.log('Video ended event');
            videoPlayBtn.classList.remove('hidden');
        });

        // Handle video loading errors
        productVideo.addEventListener('error', (e) => {
            console.error('Video loading error:', e);
            console.error('Video error details:', {
                error: productVideo.error,
                networkState: productVideo.networkState,
                readyState: productVideo.readyState,
                src: productVideo.querySelector('source')?.src || productVideo.src
            });
            videoPlayBtn.innerHTML = '<i class="fas fa-exclamation-triangle"></i> Erreur de chargement';
            // Enable controls so user can try manually
            productVideo.controls = true;
        });

        // Video loading events
        productVideo.addEventListener('loadedmetadata', () => {
            console.log('Video metadata loaded', {
                duration: productVideo.duration,
                videoWidth: productVideo.videoWidth,
                videoHeight: productVideo.videoHeight,
                readyState: productVideo.readyState
            });
        });

        productVideo.addEventListener('canplay', () => {
            console.log('Video can play - ready to play');
        });

        // Force load the video
        productVideo.load();
        console.log('Video load() called');
    } else {
        console.warn('Video elements not found:', { 
            videoPlayBtn: !!videoPlayBtn, 
            productVideo: !!productVideo 
        });
    }
}

// ============================================
// 3D MODEL VIEWER ENHANCEMENTS
// ============================================

function init3DModel() {
    const hero3DModel = document.getElementById('hero3DModel');

    if (!hero3DModel) return;
    // Enhanced model configuration
    let isInteracting = false;
    let autoRotateEnabled = true;
    
    // Wait for model-viewer to be ready
    hero3DModel.addEventListener('load', () => {
        console.log('3D model loaded successfully');
        
        // Set initial camera position
        hero3DModel.cameraOrbit = '0deg 75deg 105%';
        
        // Enable high quality rendering
        hero3DModel.renderScale = 1;
        hero3DModel.toneMapping = 'commerce';
        
        // Enhanced shadow and lighting
        hero3DModel.shadowIntensity = 1.5;
        hero3DModel.shadowSoftness = 1;
        hero3DModel.exposure = 1.2;
        
        // Hide loading indicator
        const loadingIndicator = hero3DModel.querySelector('.hero__3d-loading');
        if (loadingIndicator) {
            loadingIndicator.style.display = 'none';
        }
    });
    
    // Handle loading errors
    hero3DModel.addEventListener('error', (event) => {
        console.warn('3D model loading error:', event.detail);
        // Fallback image will be shown automatically
    });
    
    // Pause auto-rotate when user interacts
    hero3DModel.addEventListener('mousedown', () => {
        isInteracting = true;
        if (autoRotateEnabled) {
            hero3DModel.autoRotate = false;
        }
    });
    
    hero3DModel.addEventListener('touchstart', () => {
        isInteracting = true;
        if (autoRotateEnabled) {
            hero3DModel.autoRotate = false;
        }
    });
    
    // Resume auto-rotate after 3 seconds of no interaction
    let interactionTimeout;
    const resetAutoRotate = () => {
        clearTimeout(interactionTimeout);
        interactionTimeout = setTimeout(() => {
            if (!isInteracting && autoRotateEnabled) {
                hero3DModel.autoRotate = true;
            }
        }, 3000);
    };
    
    hero3DModel.addEventListener('mouseup', () => {
        isInteracting = false;
        resetAutoRotate();
    });
    
    hero3DModel.addEventListener('touchend', () => {
        isInteracting = false;
        resetAutoRotate();
    });
    
    // Enhanced zoom controls
    hero3DModel.addEventListener('wheel', (e) => {
        e.preventDefault();
        resetAutoRotate();
    });
    
    // Keyboard controls
    document.addEventListener('keydown', (e) => {
        if (document.activeElement === hero3DModel || hero3DModel.matches(':hover')) {
            switch(e.key) {
                case 'r':
                case 'R':
                    // Reset camera
                    hero3DModel.cameraOrbit = '0deg 75deg 105%';
                    hero3DModel.cameraTarget = '0m 0m 0m';
                    break;
                case ' ':
                    // Toggle auto-rotate
                    e.preventDefault();
                    autoRotateEnabled = !autoRotateEnabled;
                    hero3DModel.autoRotate = autoRotateEnabled;
                    break;
            }
        }
    });
    
    // Optimize performance on mobile
    if (window.innerWidth < 768) {
        hero3DModel.setAttribute('interaction-policy', 'allow-when-focused');
        hero3DModel.setAttribute('render-scale', '0.8');
    } else {
        // High quality on desktop
        hero3DModel.setAttribute('render-scale', '1');
    }
    
    // Handle window resize
    window.addEventListener('resize', () => {
        if (window.innerWidth < 768) {
            hero3DModel.setAttribute('render-scale', '0.8');
        } else {
            hero3DModel.setAttribute('render-scale', '1');
        }
    });
}

// ============================================
// FAQ ACCORDION
// ============================================

function initFAQ() {
    const faqQuestions = document.querySelectorAll('.faq-item__question');

    if (faqQuestions.length === 0) return;

    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const isExpanded = question.getAttribute('aria-expanded') === 'true';
            const answer = question.nextElementSibling;
            
            // Close all other FAQs
            faqQuestions.forEach(q => {
                if (q !== question) {
                    q.setAttribute('aria-expanded', 'false');
                    q.nextElementSibling.style.maxHeight = '0';
                    q.nextElementSibling.style.padding = '0 32px';
                }
            });
            
            // Toggle current FAQ
            question.setAttribute('aria-expanded', !isExpanded);
            
            if (!isExpanded) {
                answer.style.maxHeight = answer.scrollHeight + 'px';
                answer.style.padding = '0 32px 24px';
            } else {
                answer.style.maxHeight = '0';
                answer.style.padding = '0 32px';
            }
        });
    });
}

// ============================================
// CONTACT FORM VALIDATION
// ============================================

function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    if (!contactForm) return;

    const formInputs = {
        name: document.getElementById('name'),
        email: document.getElementById('email'),
        role: document.getElementById('role'),
        message: document.getElementById('message')
    };
    const formErrors = {
        name: document.getElementById('nameError'),
        email: document.getElementById('emailError'),
        role: document.getElementById('roleError'),
        message: document.getElementById('messageError')
    };

    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Validate individual field
    const validateField = (fieldName, value) => {
        let isValid = true;
        let errorMessage = '';
        
        switch (fieldName) {
            case 'name':
                if (!value.trim()) {
                    isValid = false;
                    errorMessage = 'Le nom est requis';
                } else if (value.trim().length < 2) {
                    isValid = false;
                    errorMessage = 'Le nom doit contenir au moins 2 caractères';
                }
                break;
                
            case 'email':
                if (!value.trim()) {
                    isValid = false;
                    errorMessage = 'L\'email est requis';
                } else if (!emailRegex.test(value)) {
                    isValid = false;
                    errorMessage = 'Veuillez entrer un email valide';
                }
                break;
                
            case 'role':
                if (!value) {
                    isValid = false;
                    errorMessage = 'Veuillez sélectionner un rôle';
                }
                break;
                
            case 'message':
                if (!value.trim()) {
                    isValid = false;
                    errorMessage = 'Le message est requis';
                } else if (value.trim().length < 10) {
                    isValid = false;
                    errorMessage = 'Le message doit contenir au moins 10 caractères';
                }
                break;
        }
        
        if (formErrors[fieldName]) {
            formErrors[fieldName].textContent = errorMessage;
        }
        return isValid;
    };

    // Real-time validation
    Object.keys(formInputs).forEach(key => {
        const input = formInputs[key];
        if (input) {
            input.addEventListener('blur', () => {
                validateField(key, input.value);
            });
            
            input.addEventListener('input', () => {
                if (formErrors[key] && formErrors[key].textContent) {
                    validateField(key, input.value);
                }
            });
        }
    });

    // Form submission
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        let isFormValid = true;
        
        // Validate all fields
        Object.keys(formInputs).forEach(key => {
            const isValid = validateField(key, formInputs[key].value);
            if (!isValid) {
                isFormValid = false;
            }
        });
        
        if (isFormValid) {
            // Simulate form submission
            showToast('Merci ! Votre message a été envoyé avec succès. Nous vous répondrons bientôt.');
            contactForm.reset();
            
            // Clear all errors
            Object.keys(formErrors).forEach(key => {
                formErrors[key].textContent = '';
            });
        } else {
            showToast('Veuillez corriger les erreurs dans le formulaire.', 'error');
        }
    });
}

// ============================================
// TOAST NOTIFICATION
// ============================================

function showToast(message, type = 'success') {
    const toast = document.getElementById('toast');
    const toastMessage = document.getElementById('toastMessage');
    if (!toast || !toastMessage) return;
    toastMessage.textContent = message;
    toast.classList.add('show');
    
    if (type === 'error') {
        toast.querySelector('.toast__content').style.background = '#ef4444';
    } else {
        toast.querySelector('.toast__content').style.background = '#10b981';
    }
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 4000);
}

// ============================================
// SMOOTH SCROLL FOR CTA BUTTONS
// ============================================

function initCTAs() {
    const navbarCta = document.querySelector('.navbar__cta');
    if (navbarCta) {
        navbarCta.addEventListener('click', () => {
            const contactSection = document.getElementById('contact');
            if (contactSection) {
                const offsetTop = contactSection.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    }
}

// ============================================
// PERFORMANCE OPTIMIZATIONS
// ============================================

// Lazy load images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                }
                observer.unobserve(img);
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// Throttle scroll events - removed unused code
// Scroll throttling is handled within individual scroll event handlers

// ============================================
// ACCESSIBILITY ENHANCEMENTS
// ============================================

// Keyboard navigation for modals
function initAccessibility() {
    const videoModal = document.getElementById('videoModal');
    if (!videoModal) return;

    // Focus trap for modal
    const trapFocus = (element) => {
        const focusableElements = element.querySelectorAll(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];
        
        firstElement?.focus();
    };

    trapFocus(videoModal);
}

// ============================================
// SCROLL PROGRESS BAR
// ============================================

function initScrollProgress() {
    const scrollProgress = document.getElementById('scrollProgress');
    if (!scrollProgress) return;

    window.addEventListener('scroll', () => {
        const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (window.scrollY / windowHeight) * 100;
        scrollProgress.style.width = scrolled + '%';
    });
}

// ============================================
// CUSTOM CURSOR
// ============================================

function initCustomCursor() {
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
    const hoverElements = document.querySelectorAll('a, button, .btn, .feature-card, .circular-card, .impact-point');
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

// ============================================
// PARTICLES ANIMATION
// ============================================

function initParticles() {
    const particlesContainer = document.getElementById('particles');
    if (!particlesContainer) return;

    const particleCount = 50;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 20 + 's';
        particle.style.animationDuration = (15 + Math.random() * 10) + 's';
        particle.style.width = (3 + Math.random() * 3) + 'px';
        particle.style.height = particle.style.width;
        
        // Random color between blue and mint
        const colors = ['#26a6ff', '#2fe6c8'];
        particle.style.background = colors[Math.floor(Math.random() * colors.length)];
        
        particlesContainer.appendChild(particle);
    }
}

// ============================================
// SCROLL ANIMATIONS
// ============================================

function initScrollAnimations() {
    // Make all elements visible immediately
    const elements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right, .scale-in');
    elements.forEach(el => {
        el.classList.add('visible');
    });
    
    const animateOnScroll = () => {
        elements.forEach(el => {
            const elementTop = el.getBoundingClientRect().top;
            const elementVisible = 150;
            
            if (elementTop < window.innerHeight - elementVisible) {
                el.classList.add('visible');
            }
        });
    };

    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Initial check
}

// ============================================
// ENHANCED 3D EFFECTS
// ============================================

const featureCards = document.querySelectorAll('.feature-card');
featureCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;
        
        card.style.transform = `translateY(-8px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) rotateX(0) rotateY(0)';
    });
});

// ============================================
// ENHANCED HERO ANIMATIONS
// ============================================

const heroTitle = document.querySelector('.hero__title');
if (heroTitle) {
    // Add fade-in animation to hero elements
    const heroText = document.querySelector('.hero__text');
    const heroImage = document.querySelector('.hero__image-wrapper');
    
    if (heroText) heroText.classList.add('fade-in');
    if (heroImage) heroImage.classList.add('scale-in');
    
    // Make hero elements visible immediately
    setTimeout(() => {
        if (heroText) heroText.classList.add('visible');
        if (heroImage) heroImage.classList.add('visible');
    }, 100);
}

// ============================================
// INITIALIZATION
// ============================================

// ============================================
// INITIALIZE ALL FUNCTIONS
// ============================================

// Theme Management
function initTheme() {
    // Wait for DOM to be ready
    const tryInit = () => {
        const themeButton = document.getElementById('themeButton');
        const themeMenu = document.getElementById('themeMenu');
        const themeIcon = document.getElementById('themeIcon');
        
        if (!themeButton || !themeMenu || !themeIcon) {
            return false;
        }
        
        const themeOptions = document.querySelectorAll('.theme-toggle__option');
        
        // Get saved theme or default to 'auto'
        let currentTheme = localStorage.getItem('theme') || 'auto';
        
        // Apply theme function
        function applyTheme(theme) {
            document.documentElement.setAttribute('data-theme', theme);
            localStorage.setItem('theme', theme);
            currentTheme = theme;
            
            // Update icon
            const icon = document.getElementById('themeIcon');
            if (icon) {
                if (theme === 'dark') {
                    icon.className = 'fas fa-moon';
                } else if (theme === 'light') {
                    icon.className = 'fas fa-sun';
                } else {
                    icon.className = 'fas fa-adjust';
                }
            }
            
            // Update active option
            const options = document.querySelectorAll('.theme-toggle__option');
            options.forEach(option => {
                if (option.getAttribute('data-theme') === theme) {
                    option.classList.add('active');
                } else {
                    option.classList.remove('active');
                }
            });
            
            // Force reflow for CSS to apply
            document.documentElement.offsetHeight;
        }
        
        // Apply saved theme immediately
        applyTheme(currentTheme);
        
        // Toggle menu
        themeButton.onclick = (e) => {
            e.preventDefault();
            e.stopPropagation();
            themeMenu.classList.toggle('open');
        };
        
        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            const themeToggle = document.getElementById('themeToggle');
            if (themeToggle && !themeToggle.contains(e.target)) {
                themeMenu.classList.remove('open');
            }
        });
        
        // Handle theme selection
        themeOptions.forEach(option => {
            option.onclick = (e) => {
                e.preventDefault();
                e.stopPropagation();
                const theme = option.getAttribute('data-theme');
                applyTheme(theme);
                themeMenu.classList.remove('open');
            };
        });
        
        // Listen for system theme changes (for auto mode)
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        mediaQuery.addEventListener('change', () => {
            if (currentTheme === 'auto') {
                applyTheme('auto');
            }
        });
        
        return true;
    };
    
    // Try immediately, then retry if needed
    if (!tryInit()) {
        setTimeout(() => {
            if (!tryInit()) {
                setTimeout(tryInit, 200);
            }
        }, 100);
    }
}

// Initialize when DOM is ready
function initializeApp() {
    // Initialize all modules
    console.log('Initializing SmartCare app...');
    initTheme();
    initNavbar();
    initVideo();
    init3DModel();
    initFAQ();
    initContactForm();
    initCTAs();
    initScrollProgress();
    initCustomCursor();
    initParticles();
    initScrollAnimations();
    initAccessibility();
}

// Try multiple ways to ensure initialization
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeApp);
} else {
    // DOM already loaded
    initializeApp();
}

// Also try after a short delay to ensure React has rendered
setTimeout(() => {
    const productVideo = document.getElementById('productVideo');
    const videoPlayBtn = document.getElementById('videoPlayBtn');
    if (productVideo && videoPlayBtn && !productVideo.hasAttribute('data-initialized')) {
        console.log('Re-initializing video after delay...');
        productVideo.setAttribute('data-initialized', 'true');
        initVideo();
    }
}, 500);

document.addEventListener('DOMContentLoaded', () => {
    // Set initial active nav link
    if (window.location.hash) {
        const targetSection = document.querySelector(window.location.hash);
        if (targetSection) {
            setTimeout(() => {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }, 100);
        }
    }
    
    // Initialize form
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.reset();
    }
    
    // Add animation classes to elements with delays
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach((card, index) => {
        card.classList.add('scale-in');
        card.style.transitionDelay = (index * 0.1) + 's';
    });
    
    const circularCards = document.querySelectorAll('.circular-card');
    circularCards.forEach((card, index) => {
        card.classList.add('fade-in');
        card.style.transitionDelay = (index * 0.15) + 's';
    });
    
    const impactPoints = document.querySelectorAll('.impact-point');
    impactPoints.forEach((point, index) => {
        point.classList.add('slide-in-right');
        point.style.transitionDelay = (index * 0.2) + 's';
    });
    
    const flowSteps = document.querySelectorAll('.flow-step');
    flowSteps.forEach((step, index) => {
        step.classList.add('scale-in');
        step.style.transitionDelay = (index * 0.1) + 's';
    });
    
    // Initialize pricing toggle
    const pricingToggle = document.getElementById('pricingToggle');
    const pricingAmounts = document.querySelectorAll('.pricing-card__amount');
    
    if (pricingToggle) {
        pricingToggle.addEventListener('change', (e) => {
            const isYearly = e.target.checked;
            pricingAmounts.forEach(amount => {
                const monthly = amount.getAttribute('data-monthly');
                const yearly = amount.getAttribute('data-yearly');
                amount.textContent = isYearly ? yearly : monthly;
            });
        });
    }
    
    // Initialize pricing FAQ
    const pricingFaqQuestions = document.querySelectorAll('.pricing-faq-item__question');
    pricingFaqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const isExpanded = question.getAttribute('aria-expanded') === 'true';
            const answer = question.nextElementSibling;
            
            // Close all other FAQs
            pricingFaqQuestions.forEach(q => {
                if (q !== question) {
                    q.setAttribute('aria-expanded', 'false');
                    q.nextElementSibling.style.maxHeight = '0';
                    q.nextElementSibling.style.padding = '0 24px';
                }
            });
            
            // Toggle current FAQ
            question.setAttribute('aria-expanded', !isExpanded);
            
            if (!isExpanded) {
                answer.style.maxHeight = answer.scrollHeight + 'px';
                answer.style.padding = '0 24px 20px';
            } else {
                answer.style.maxHeight = '0';
                answer.style.padding = '0 24px';
            }
        });
    });
    
    console.log('SmartCare landing page initialized with enhanced features');
}); // End of DOMContentLoaded

})(); // End of IIFE wrapper

