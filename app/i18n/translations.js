const translations = {
  en: {
    navbar: {
      project: "Project",
      features: "Features",
      circular: "Circular Design",
      pricing: "Pricing",
      impact: "Impact",
      faq: "FAQ",
      contact: "Contact",
      demoRequest: "Request Demo",
      changeTheme: "Change theme",
      lightMode: "Light mode",
      darkMode: "Dark mode",
      autoMode: "Automatic"
    },
    hero: {
      title: "SmartCare Bracelet",
      subtitle: "An intelligent medical device that improves autonomy, safety and well-being of children with Down Syndrome.",
      exploreFeatures: "Explore Features",
      watchDemo: "Watch Demo",
      view3D: "View in 3D"
    },
    heroBadges: [
      { icon: "fas fa-network-wired", text: "IoT + AI" },
      { icon: "fas fa-bolt", text: "Real-time safety" },
      { icon: "fas fa-recycle", text: "Circular design" }
    ],
    videoSection: {
      title: "Discover SmartCare in action",
      caption: "Product concept demo (10–20s)",
      playLabel: "Play video",
      ariaLabel: "SmartCare product demo video"
    },
    featuresSection: {
      title: "Key features",
      subtitle: "Advanced technology serving autonomy and safety",
      items: [
        {
          icon: "monitoring",
          title: "Real-time monitoring",
          text: "Continuous tracking of heart rate, movement, and stress signals for early detection of concerning situations."
        },
        {
          icon: "gps",
          title: "GPS safety",
          text: "Discreet geolocation with safe-zone alerts so parents always know their child's whereabouts."
        },
        {
          icon: "calm",
          title: "Calm assistance",
          text: "Gentle guidance via sound and voice to help de-escalate difficult moments and encourage calm."
        },
        {
          icon: "family",
          title: "Family coordination",
          text: "Secure data sharing between parents, educators, and doctors for coordinated, effective care."
        }
      ]
    },
    howItWorks: {
      title: "How it works",
      subtitle: "A connected ecosystem for optimal safety",
      steps: [
        { title: "Bracelet", text: "Real-time data collection" },
        { title: "Mobile app", text: "Intuitive interface for parents" },
        { title: "Cloud platform", text: "Secure analysis and storage" },
        { title: "Parents / Educators", text: "Alerts and detailed reports" }
      ]
    },
    circularSection: {
      title: "Circular design",
      subtitle: "Durability and repairability at the core",
      description: "SmartCare is built with a modular approach: the electronic core is detachable, the battery is replaceable, and the bracelet is interchangeable. This architecture enables easy repair, progressive upgrades, and optimized end-of-life recycling.",
      cards: [
        { icon: "fas fa-redo-alt", title: "Reuse", text: "Reusable modular components" },
        { icon: "fas fa-tools", title: "Repair", text: "Simple, accessible maintenance" },
        { icon: "fas fa-sync-alt", title: "Refurbishment", text: "Recycling and optimized recovery" }
      ],
      imageAlt: "Exploded view of the SmartCare prototype showing modular components"
    },
    videoModal: {
      closeLabel: "Close video",
      fallback: "Your browser does not support video playback."
    },
    pricingSection: {
      title: "Pricing and offers",
      subtitle: "Choose the plan that fits your needs",
      billingMonthly: "Monthly billing",
      billingYearly: "Annual billing",
      yearlyBadge: "-20%",
      perMonth: "/month",
      currency: "DT",
      ctaChoose: "Choose this plan",
      ctaContact: "Contact us",
      mostPopular: "Most popular",
      faqTitle: "Pricing FAQs",
      plans: {
        starter: {
          title: "Starter",
          subtitle: "Get started",
          device: "Bracelet included",
          features: [
            "Real-time monitoring",
            "GPS geolocation",
            "Security alerts",
            "Mobile app",
            "Email support"
          ]
        },
        professional: {
          title: "Professional",
          subtitle: "For families",
          device: "Bracelet included",
          features: [
            "Everything in Starter",
            "Calm assistance (AI)",
            "Sharing with educators",
            "Detailed reports",
            "Priority support",
            "Free updates"
          ]
        },
        enterprise: {
          title: "Enterprise",
          subtitle: "For institutions",
          device: "Multiple bracelets",
          features: [
            "Everything in Professional",
            "Multi-user management",
            "API integration",
            "Advanced dashboard",
            "Dedicated 24/7 support",
            "Personalized training",
            "Guaranteed SLA"
          ]
        }
      },
      info: {
        warranty: {
          title: "2-year warranty",
          text: "On all SmartCare bracelets"
        },
        cancel: {
          title: "Free cancellation",
          text: "Anytime, no commitment"
        },
        support: {
          title: "Support included",
          text: "Technical assistance available"
        }
      },
      faq: [
        {
          question: "Is the bracelet included in the price?",
          answer: "Yes, the SmartCare bracelet is included in all our plans. You will receive a new bracelet with your first order."
        },
        {
          question: "Can I change plan later?",
          answer: "Absolutely! You can upgrade or downgrade your plan at any time. Changes apply to the next billing cycle."
        },
        {
          question: "Are there any hidden fees?",
          answer: "No, our pricing is transparent. The displayed price includes the bracelet, the monthly subscription, and all listed features. Only optional accessories may incur extra fees."
        }
      ]
    },
    impactSection: {
      title: "Social impact",
      quote: "SmartCare transforms the daily life of families by providing peace of mind and fostering autonomy for children with Down Syndrome.",
      points: [
        {
          title: "Reduced family anxiety",
          text: "Real-time alerts and geolocation reassure parents while respecting the child's autonomy."
        },
        {
          title: "Improved autonomy",
          text: "Calm assistance and medical monitoring support progressive independence and self-confidence."
        },
        {
          title: "Inclusive education",
          text: "Secure data sharing with educational and medical teams enables coordinated, personalized care."
        }
      ]
    },
    faqSection: {
      title: "Frequently Asked Questions",
      subtitle: "Everything you need to know about SmartCare",
      items: [
        {
          question: "Is it a real medical device?",
          answer: "SmartCare is designed as a class II medical device under EU MDR regulations. It is intended for monitoring and assistance and does not replace professional medical care. We work closely with healthcare professionals to ensure safety and efficacy."
        },
        {
          question: "What data is collected?",
          answer: "We collect only the data required for device operation: heart rate, movements, stress signals, and geolocation (only when enabled). All data is encrypted, stored securely, and shared only with authorized people (parents, educators, doctors) through explicit consent."
        },
        {
          question: "How does GPS work?",
          answer: "GPS runs discreetly and respects privacy. Parents can set safe zones (school, home, etc.). If the child leaves these zones or an alert is triggered, parents receive a notification. Geolocation can be disabled at any time by parents."
        },
        {
          question: "How is privacy handled?",
          answer: "Privacy is our top priority. We comply with GDPR, apply data minimization, explicit consent, and strong security. Data is encrypted in transit and at rest, and only authorized users can access it. We never sell data to third parties."
        },
        {
          question: "What makes it circular?",
          answer: "The modular design allows repair, upgrades, and recycling. The electronic core can be replaced without discarding the bracelet, the battery is replaceable, and materials are chosen for recyclability. We also offer a take-back and refurbishment program to extend product life."
        }
      ]
    },
    contactSection: {
      title: "Contact us",
      subtitle: "We are here to answer your questions",
      nameLabel: "Full name",
      emailLabel: "Email",
      roleLabel: "Role",
      rolePlaceholder: "Select your role",
      roles: {
        parent: "Parent",
        educator: "Educator",
        doctor: "Doctor",
        student: "Student",
        investor: "Investor",
        other: "Other"
      },
      messageLabel: "Message",
      submit: "Send",
      ctaText: "Build safer daily routines with SmartCare."
    },
    footerContent: {
      tagline: "Intelligent medical device for children",
      productTitle: "Product",
      resourcesTitle: "Resources",
      socialTitle: "Social",
      links: {
        features: "Features",
        circular: "Circular design",
        pricing: "Pricing",
        impact: "Impact",
        faq: "FAQ",
        contact: "Contact",
        linkedin: "LinkedIn",
        twitter: "Twitter",
        facebook: "Facebook"
      },
      disclaimer: "SmartCare is a medical device in development. The information provided is for reference and may change.",
      rights: "© 2024 SmartCare. All rights reserved."
    },
    footer: {
      company: "Company",
      about: "About",
      careers: "Careers",
      press: "Press",
      product: "Product",
      features: "Features",
      pricing: "Pricing",
      security: "Security",
      legal: "Legal",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
      contact: "Contact Us",
      email: "contact@smartcare.com"
    },
    feedback: {
      title: "Share Your Feedback",
      subtitle: "Help us improve SmartCare",
      name: "Your Name",
      email: "Email",
      rating: "Rating",
      comment: "Your Comment",
      submit: "Submit Feedback",
      success: "Thank you for your feedback!",
      error: "Failed to submit feedback. Please try again."
    },
    details: {
      title: "SmartCare Bracelet - 3D Model",
      backButton: "Back to Home",
      heading3D: "Interactive 3D Model",
      subtitle3D: "Explore the SmartCare Bracelet in detail. Drag to rotate, use the scroll wheel to zoom.",
      loading3D: "Loading 3D model...",
      dragRotate: "Drag to rotate",
      scrollZoom: "Scroll to zoom",
      resetModel: "R to reset",
      autoRotate: "Space for auto-rotation",
      productDetails: "Product Details",
      productSubtitle: "Modular design and advanced technology",
      detachableCore: "Detachable Electronic Core",
      detachableCoreText: "The electronic module can be removed and replaced independently of the bracelet, allowing upgrades without replacing the entire device.",
      replaceableBattery: "Replaceable Battery",
      replaceableBatteryText: "Standard removable battery, easily replaceable by the user. Extends product life and reduces electronic waste.",
      interchangeableBracelet: "Interchangeable Bracelet",
      interchangeableBraceletText: "The medical silicone bracelet can be changed according to the child's preferences or replaced if worn, while keeping the electronic module.",
      medicalSilicone: "Medical Silicone",
      medicalSiliconeText: "Hypoallergenic material, water-resistant, designed for comfortable 24/7 wear by children. Certified for extended skin contact.",
      integratedGPS: "Integrated GPS",
      integratedGPSText: "Precise geolocation with safe zone alerts. Works even indoors through GPS + WiFi + Bluetooth combination.",
      biometricSensors: "Biometric Sensors",
      biometricSensorsText: "Continuous monitoring of heart rate, movements and stress indicators for early detection of concerning situations.",
      technicalSpecs: "Technical Specifications",
      technicalSpecsSubtitle: "Cutting-edge technology at the service of health",
      processor: "Processor",
      processorText: "ARM Cortex-M4, optimized for low power consumption",
      battery: "Battery",
      batteryText: "Up to 7 days of battery life, quick charge in 2 hours",
      connectivity: "Connectivity",
      connectivityText: "Bluetooth 5.0, WiFi, GPS, NFC for contactless payment (optional)",
      waterResistance: "Water Resistance",
      waterResistanceText: "5ATM rating, suitable for swimming and water sports",
      circularDesign: "Circular Design",
      circularDesignSubtitle: "Sustainability and Responsibility",
      repairGuides: "Easy Repairs",
      repairGuidesText: "Repair guides available, spare parts accessible, and a network of certified repairers. Repair rather than throw away, that's our commitment.",
      softwareUpdates: "Software Updates",
      softwareUpdatesText: "Over-The-Air (OTA) updates allow you to improve features without changing hardware. Your SmartCare evolves with you.",
      insideImage: "Explore the inside of the bracelet",
      insideImageSubtitle: "Sophisticated technology, elegant design",
      videoTitle: "SmartCare in action",
      videoSubtitle: "Discover the potential of our medical device",
      insideTitleSection: "Inside SmartCare",
      insideSubtitleSection: "Discover the interior quality of the bracelet",
      electronics: "Compact electronics",
      electronicsText: "Miniaturized components for a comfortable and lightweight bracelet",
      materials: "Sustainable materials",
      materialsText: "Superior quality medical silicone, durable and hypoallergenic",
      modularity: "Modular design",
      modularityText: "Interchangeable components for easy maintenance and extended lifespan",
      sensors: "Advanced sensors",
      sensorsText: "Precise detection technology for reliable 24/7 monitoring",
      backButton2: "Back to Home"
    },
    project: {
      subtitle: "Technological innovation, social impact and circular economy",
      centralIdea: "Central Idea",
      centralIdeaText: "SmartCare is an intelligent medical device designed specifically for children with Down Syndrome. It is not simply a gadget, but a complete ecosystem that improves safety, autonomy and emotional regulation, while providing peace of mind to families and educators.",
      problemSolved: "Problem Solved",
      problemSolvedText: "Children with Down Syndrome face daily challenges:",
      challenges: [
        "Difficulty expressing stress or discomfort",
        "Risk of getting lost or disoriented",
        "Need for constant supervision",
        "Anxiety episodes and impulsive behaviors",
        "Fragmented communication between parents, educators and doctors"
      ],
      existingSolutions: "Existing solutions are generic fitness trackers, not adapted to their specific needs.",
      solution: "Our Solution: A Complete Ecosystem",
      smartBracelet: "Smart Bracelet",
      smartBraceletText: "Medical silicone adapted for children, rounded and secure design. Heart rate sensors, movement, stress indicators, GPS, and audio/vibration feedback to calm the child. Modular design: detachable electronic core.",
      mobileApp: "Mobile Application",
      mobileAppText: "Real-time monitoring, alerts and notifications, health and activity history, personalized recommendations. Secure access for parents and educators.",
      cloudPlatform: "Cloud Platform",
      cloudPlatformText: "Data analysis, detailed reports, multi-role access (family / school / medical), AI-assisted detection of behavioral patterns.",
      circularEconomy: "Integrated Circular Economy",
      circularEconomyText: "SmartCare is designed according to circular economy principles, not linear:",
      sustainabilityGoals: "aligns with Tunisia's sustainability and circular economy objectives.",
      reuse: "Reuse",
      reuseText: "Same module for multiple users",
      repair: "Repair",
      repairText: "Replace a part, not the whole",
      refurbish: "Refurbishment",
      refurbishText: "Resale program",
      recycle: "Recycling",
      recycleText: "Materials + electronics",
      circularDesignTitle: "Design for Circularity",
      circularDesignSubtitle2: "Easy repair, progressive upgrade and optimized recycling at end of life.",
      circularFeatures: "The modular design allows repair, upgrade and recycling. The core and materials are chosen for their recyclability. We also offer a take-back and refurbishment program to extend the product's life."
    }
  },
  fr: {
    navbar: {
      project: "Le Projet",
      features: "Fonctionnalités",
      circular: "Design Circulaire",
      pricing: "Tarifs",
      impact: "Impact",
      faq: "FAQ",
      contact: "Contact",
      demoRequest: "Demander une démo",
      changeTheme: "Changer le thème",
      lightMode: "Mode clair",
      darkMode: "Mode sombre",
      autoMode: "Automatique"
    },
    hero: {
      title: "SmartCare Bracelet",
      subtitle: "Un dispositif médical intelligent qui améliore l'autonomie, la sécurité et le calme des enfants avec Trisomie 21.",
      exploreFeatures: "Explorer les fonctionnalités",
      watchDemo: "Regarder la démo",
      view3D: "Voir en 3D"
    },
    heroBadges: [
      { icon: "fas fa-network-wired", text: "IoT + IA" },
      { icon: "fas fa-bolt", text: "Sécurité en temps réel" },
      { icon: "fas fa-recycle", text: "Design circulaire" }
    ],
    videoSection: {
      title: "Découvrez SmartCare en action",
      caption: "Démo concept produit (10–20s)",
      playLabel: "Lire la vidéo",
      ariaLabel: "Démo produit SmartCare"
    },
    featuresSection: {
      title: "Fonctionnalités principales",
      subtitle: "Technologie avancée au service de l'autonomie et de la sécurité",
      items: [
        {
          icon: "monitoring",
          title: "Surveillance en temps réel",
          text: "Suivi continu de la fréquence cardiaque, des mouvements et des signaux de stress pour une détection précoce des situations préoccupantes."
        },
        {
          icon: "gps",
          title: "Sécurité GPS",
          text: "Géolocalisation discrète avec alertes de zones sécurisées. Permet aux parents de savoir où se trouve leur enfant en toute circonstance."
        },
        {
          icon: "calm",
          title: "Assistance au calme",
          text: "Guidance douce par son et voix pour aider à la désescalade lors de moments difficiles, favorisant le retour au calme."
        },
        {
          icon: "family",
          title: "Coordination familiale",
          text: "Partage sécurisé des données entre parents, éducateurs et médecins pour une prise en charge coordonnée et efficace."
        }
      ]
    },
    howItWorks: {
      title: "Comment ça fonctionne",
      subtitle: "Un écosystème connecté pour une sécurité optimale",
      steps: [
        { title: "Bracelet", text: "Collecte des données en temps réel" },
        { title: "Application mobile", text: "Interface intuitive pour les parents" },
        { title: "Plateforme cloud", text: "Analyse et stockage sécurisé" },
        { title: "Parents / Éducateurs", text: "Alertes et rapports détaillés" }
      ]
    },
    circularSection: {
      title: "Design circulaire",
      subtitle: "Durabilité et réparabilité au cœur du produit",
      description: "SmartCare est conçu avec une approche modulaire : cœur électronique détachable, batterie remplaçable et bracelet interchangeable. Cette architecture permet une réparation facile, des mises à niveau progressives et un recyclage optimisé.",
      cards: [
        { icon: "fas fa-redo-alt", title: "Réutilisation", text: "Composants modulaires réutilisables" },
        { icon: "fas fa-tools", title: "Réparation", text: "Maintenance simple et accessible" },
        { icon: "fas fa-sync-alt", title: "Reconditionnement", text: "Recyclage et valorisation optimisés" }
      ],
      imageAlt: "Vue éclatée du prototype SmartCare montrant les composants modulaires"
    },
    videoModal: {
      closeLabel: "Fermer la vidéo",
      fallback: "Votre navigateur ne supporte pas la lecture vidéo."
    },
    pricingSection: {
      title: "Tarifs et offres",
      subtitle: "Choisissez le plan qui correspond à vos besoins",
      billingMonthly: "Facturation mensuelle",
      billingYearly: "Facturation annuelle",
      yearlyBadge: "-20%",
      perMonth: "/mois",
      currency: "DT",
      ctaChoose: "Choisir ce plan",
      ctaContact: "Nous contacter",
      mostPopular: "Le plus populaire",
      faqTitle: "Questions fréquentes sur les tarifs",
      plans: {
        starter: {
          title: "Starter",
          subtitle: "Pour commencer",
          device: "Bracelet inclus",
          features: [
            "Surveillance en temps réel",
            "Géolocalisation GPS",
            "Alertes de sécurité",
            "Application mobile",
            "Support email"
          ]
        },
        professional: {
          title: "Professional",
          subtitle: "Pour les familles",
          device: "Bracelet inclus",
          features: [
            "Tout dans Starter",
            "Assistance au calme (IA)",
            "Partage avec éducateurs",
            "Rapports détaillés",
            "Support prioritaire",
            "Mises à jour gratuites"
          ]
        },
        enterprise: {
          title: "Enterprise",
          subtitle: "Pour les institutions",
          device: "Bracelets multiples",
          features: [
            "Tout dans Professional",
            "Gestion multi-utilisateurs",
            "Intégration API",
            "Tableau de bord avancé",
            "Support dédié 24/7",
            "Formation personnalisée",
            "SLA garanti"
          ]
        }
      },
      info: {
        warranty: {
          title: "Garantie 2 ans",
          text: "Sur tous les bracelets SmartCare"
        },
        cancel: {
          title: "Annulation gratuite",
          text: "À tout moment, sans engagement"
        },
        support: {
          title: "Support inclus",
          text: "Assistance technique disponible"
        }
      },
      faq: [
        {
          question: "Le bracelet est-il inclus dans le prix ?",
          answer: "Oui, le bracelet SmartCare est inclus dans tous nos plans. Vous recevrez un bracelet neuf lors de votre première commande."
        },
        {
          question: "Puis-je changer de plan plus tard ?",
          answer: "Absolument ! Vous pouvez mettre à niveau ou rétrograder votre plan à tout moment. Les changements prennent effet au prochain cycle de facturation."
        },
        {
          question: "Y a-t-il des frais cachés ?",
          answer: "Non, nos prix sont transparents. Le prix affiché inclut le bracelet, l'abonnement mensuel et toutes les fonctionnalités listées. Seuls des accessoires optionnels peuvent entraîner des frais supplémentaires."
        }
      ]
    },
    impactSection: {
      title: "Impact social",
      quote: "SmartCare transforme le quotidien des familles en offrant une tranquillité d'esprit et en favorisant l'autonomie des enfants avec Trisomie 21.",
      points: [
        {
          title: "Réduction de l'anxiété familiale",
          text: "Les alertes en temps réel et la géolocalisation rassurent les parents tout en respectant l'autonomie de l'enfant."
        },
        {
          title: "Amélioration de l'autonomie",
          text: "L'assistance au calme et le suivi médical favorisent l'indépendance progressive et la confiance en soi de l'enfant."
        },
        {
          title: "Éducation inclusive",
          text: "Le partage sécurisé des données avec les équipes éducatives et médicales facilite une prise en charge coordonnée et personnalisée."
        }
      ]
    },
    faqSection: {
      title: "Questions fréquentes",
      subtitle: "Tout ce que vous devez savoir sur SmartCare",
      items: [
        {
          question: "Est-ce un véritable dispositif médical ?",
          answer: "SmartCare est conçu comme un dispositif médical de classe II, soumis aux réglementations européennes (MDR). Il est destiné à la surveillance et à l'assistance, mais ne remplace pas les soins médicaux professionnels. Nous travaillons avec des professionnels de santé pour garantir la sécurité et l'efficacité du produit."
        },
        {
          question: "Quelles données sont collectées ?",
          answer: "Nous collectons uniquement les données nécessaires au fonctionnement du dispositif : fréquence cardiaque, mouvements, signaux de stress, et géolocalisation (uniquement lorsque activée). Toutes les données sont chiffrées, stockées de manière sécurisée et partagées seulement avec les personnes autorisées via consentement explicite."
        },
        {
          question: "Comment fonctionne le GPS ?",
          answer: "Le GPS fonctionne de manière discrète et respectueuse de la vie privée. Les parents peuvent définir des zones sécurisées (école, domicile, etc.). Si l'enfant sort de ces zones ou si une alerte est déclenchée, les parents reçoivent une notification. La géolocalisation peut être désactivée à tout moment par les parents."
        },
        {
          question: "Comment la confidentialité est-elle gérée ?",
          answer: "La confidentialité est notre priorité absolue. Nous respectons le RGPD, appliquons la minimisation des données, le consentement explicite et une sécurité renforcée. Les données sont chiffrées en transit et au repos, et seuls les utilisateurs autorisés peuvent y accéder. Nous ne vendons jamais de données à des tiers."
        },
        {
          question: "Qu'est-ce qui le rend circulaire ?",
          answer: "Le design modulaire permet la réparation, la mise à niveau et le recyclage. Le cœur électronique peut être remplacé sans jeter le bracelet, la batterie est remplaçable, et les matériaux sont choisis pour leur recyclabilité. Nous proposons aussi un programme de reprise et de reconditionnement pour prolonger la vie du produit."
        }
      ]
    },
    contactSection: {
      title: "Contactez-nous",
      subtitle: "Nous sommes là pour répondre à vos questions",
      nameLabel: "Nom complet",
      emailLabel: "Email",
      roleLabel: "Rôle",
      rolePlaceholder: "Sélectionnez votre rôle",
      roles: {
        parent: "Parent",
        educator: "Éducateur",
        doctor: "Médecin",
        student: "Étudiant",
        investor: "Investisseur",
        other: "Autre"
      },
      messageLabel: "Message",
      submit: "Envoyer",
      ctaText: "Construisez des routines quotidiennes plus sûres avec SmartCare."
    },
    footerContent: {
      tagline: "Dispositif médical intelligent pour enfants",
      productTitle: "Produit",
      resourcesTitle: "Ressources",
      socialTitle: "Social",
      links: {
        features: "Fonctionnalités",
        circular: "Design circulaire",
        pricing: "Tarifs",
        impact: "Impact",
        faq: "FAQ",
        contact: "Contact",
        linkedin: "LinkedIn",
        twitter: "Twitter",
        facebook: "Facebook"
      },
      disclaimer: "SmartCare est un dispositif médical en développement. Les informations présentées sont à titre informatif et peuvent être sujettes à modification.",
      rights: "© 2024 SmartCare. Tous droits réservés."
    },
    footer: {
      company: "Entreprise",
      about: "À propos",
      careers: "Carrières",
      press: "Presse",
      product: "Produit",
      features: "Fonctionnalités",
      pricing: "Tarifs",
      security: "Sécurité",
      legal: "Juridique",
      privacy: "Politique de confidentialité",
      terms: "Conditions d'utilisation",
      contact: "Nous contacter",
      email: "contact@smartcare.com"
    },
    feedback: {
      title: "Partagez vos commentaires",
      subtitle: "Aidez-nous à améliorer SmartCare",
      name: "Votre nom",
      email: "Email",
      rating: "Évaluation",
      comment: "Vos commentaires",
      submit: "Envoyer les commentaires",
      success: "Merci pour vos commentaires!",
      error: "Échec de l'envoi. Veuillez réessayer."
    },
    details: {
      title: "SmartCare Bracelet - Modèle 3D",
      backButton: "Retour à l'accueil",
      heading3D: "Modèle 3D Interactif",
      subtitle3D: "Explorez le SmartCare Bracelet en détail. Faites glisser pour faire pivoter, utilisez la molette pour zoomer.",
      loading3D: "Chargement du modèle 3D...",
      dragRotate: "Glissez pour tourner",
      scrollZoom: "Molette pour zoomer",
      resetModel: "R pour réinitialiser",
      autoRotate: "Espace pour auto-rotation",
      productDetails: "Détails du produit",
      productSubtitle: "Design modulaire et technologie avancée",
      detachableCore: "Cœur électronique détachable",
      detachableCoreText: "Le module électronique peut être retiré et remplacé indépendamment du bracelet, permettant une mise à niveau sans remplacer l'ensemble du dispositif.",
      replaceableBattery: "Batterie remplaçable",
      replaceableBatteryText: "Batterie amovible standard, facilement remplaçable par l'utilisateur. Prolonge la durée de vie du produit et réduit les déchets électroniques.",
      interchangeableBracelet: "Bracelet interchangeable",
      interchangeableBraceletText: "Le bracelet en silicone médical peut être changé selon les préférences de l'enfant ou remplacé en cas d'usure, tout en conservant le module électronique.",
      medicalSilicone: "Silicone médical",
      medicalSiliconeText: "Matériau hypoallergénique, résistant à l'eau, conçu pour un port confortable 24/7 par les enfants. Certifié pour contact cutané prolongé.",
      integratedGPS: "GPS intégré",
      integratedGPSText: "Géolocalisation précise avec alertes de zones sécurisées. Fonctionne même en intérieur grâce à la combinaison GPS + WiFi + Bluetooth.",
      biometricSensors: "Capteurs biométriques",
      biometricSensorsText: "Surveillance continue de la fréquence cardiaque, des mouvements et des indicateurs de stress pour une détection précoce des situations préoccupantes.",
      technicalSpecs: "Spécifications techniques",
      technicalSpecsSubtitle: "Technologie de pointe au service de la santé",
      processor: "Processeur",
      processorText: "ARM Cortex-M4, optimisé pour faible consommation",
      battery: "Autonomie",
      batteryText: "Jusqu'à 7 jours d'autonomie, charge rapide en 2 heures",
      connectivity: "Connectivité",
      connectivityText: "Bluetooth 5.0, WiFi, GPS, NFC pour paiement sans contact (optionnel)",
      waterResistance: "Résistance à l'eau",
      waterResistanceText: "Indice 5ATM, adapté à la natation et aux sports aquatiques",
      circularDesign: "Design Circulaire",
      circularDesignSubtitle: "Durabilité et Responsabilité",
      repairGuides: "Réparation facilitée",
      repairGuidesText: "Guides de réparation disponibles, pièces détachées accessibles, et réseau de réparateurs certifiés. Réparer plutôt que jeter, c'est notre engagement.",
      softwareUpdates: "Mises à jour logicielles",
      softwareUpdatesText: "Les mises à jour OTA (Over-The-Air) permettent d'améliorer les fonctionnalités sans changer le matériel. Votre SmartCare évolue avec vous.",
      insideImage: "Explorez l'intérieur du bracelet",
      insideImageSubtitle: "Technologie sophistiquée, design élégant",
      videoTitle: "SmartCare en action",
      videoSubtitle: "Découvrez le potentiel de notre dispositif médical",
      insideTitleSection: "Inside SmartCare",
      insideSubtitleSection: "Découvrez la qualité intérieure du bracelet",
      electronics: "Électronique compacte",
      electronicsText: "Composants miniaturisés pour un bracelet confortable et léger",
      materials: "Matériaux durables",
      materialsText: "Silicone médical de qualité supérieure, résistant et hypoallergénique",
      modularity: "Design modulaire",
      modularityText: "Composants interchangeables pour un entretien facile et une durée de vie prolongée",
      sensors: "Capteurs avancés",
      sensorsText: "Technologie de détection précise pour une surveillance fiable 24/7",
      backButton2: "Retour à l'accueil"
    },
    project: {
      subtitle: "Innovation technologique, impact social et économie circulaire",
      centralIdea: "Idée centrale",
      centralIdeaText: "SmartCare est un dispositif médical intelligent conçu spécifiquement pour les enfants avec Trisomie 21. Ce n'est pas simplement un gadget, mais un écosystème complet qui améliore la sécurité, l'autonomie et la régulation émotionnelle, tout en offrant une tranquillité d'esprit aux familles et aux éducateurs.",
      problemSolved: "Problème résolu",
      problemSolvedText: "Les enfants avec Trisomie 21 font face à des défis quotidiens :",
      challenges: [
        "Difficulté à exprimer le stress ou l'inconfort",
        "Risque de se perdre ou de se désorienter",
        "Besoin de supervision constante",
        "Épisodes d'anxiété et comportements impulsifs",
        "Communication fragmentée entre parents, éducateurs et médecins"
      ],
      existingSolutions: "Les solutions existantes sont des trackers de fitness génériques, non adaptés à leurs besoins spécifiques.",
      solution: "Notre solution : un écosystème complet",
      smartBracelet: "Bracelet intelligent",
      smartBraceletText: "Silicone médical adapté aux enfants, design arrondi et sécurisé. Capteurs de fréquence cardiaque, mouvement, indicateurs de stress, GPS, et retour audio/vibration pour apaiser l'enfant. Design modulaire : cœur électronique détachable.",
      mobileApp: "Application mobile",
      mobileAppText: "Surveillance en temps réel, alertes et notifications, historique de santé et d'activité, recommandations personnalisées. Accès sécurisé pour parents et éducateurs.",
      cloudPlatform: "Plateforme cloud",
      cloudPlatformText: "Analyse de données, rapports détaillés, accès multi-rôles (famille / école / médical), détection assistée par IA des patterns comportementaux.",
      circularEconomy: "Économie circulaire intégrée",
      circularEconomyText: "SmartCare est conçu selon les principes de l'économie circulaire, pas linéaire :",
      sustainabilityGoals: "avec les objectifs de durabilité et d'économie circulaire de la Tunisie.",
      reuse: "Réutilisation",
      reuseText: "Même module pour plusieurs utilisateurs",
      repair: "Réparation",
      repairText: "Remplacer une partie, pas tout",
      refurbish: "Reconditionnement",
      refurbishText: "Programme de reprise",
      recycle: "Recyclage",
      recycleText: "Matériaux + électronique",
      circularDesignTitle: "Design pour la Circularité",
      circularDesignSubtitle2: "une réparation facile, une mise à niveau progressive et un recyclage optimisé en fin de vie.",
      circularFeatures: "Le design modulaire permet la réparation, la mise à niveau et le recyclage. Le cœur et les matériaux sont choisis pour leur recyclabilité. Nous proposons également un programme de reprise et de reconditionnement pour prolonger la vie du produit."
    }
  },
  ar: {
    navbar: {
      project: "المشروع",
      features: "الميزات",
      circular: "التصميم الدائري",
      pricing: "الأسعار",
      impact: "التأثير",
      faq: "الأسئلة الشائعة",
      contact: "اتصل بنا",
      demoRequest: "طلب عرض توضيحي",
      changeTheme: "تغيير المظهر",
      lightMode: "المظهر الفاتح",
      darkMode: "المظهر الداكن",
      autoMode: "التلقائي"
    },
    hero: {
      title: "SmartCare Bracelet",
      subtitle: "جهاز طبي ذكي يحسن الاستقلالية والأمان والراحة للأطفال الذين يعانون من متلازمة داون.",
      exploreFeatures: "استكشف الميزات",
      watchDemo: "شاهد العرض التوضيحي",
      view3D: "عرض في 3D"
    },
    heroBadges: [
      { icon: "fas fa-network-wired", text: "إنترنت الأشياء + ذكاء اصطناعي" },
      { icon: "fas fa-bolt", text: "أمان فوري" },
      { icon: "fas fa-recycle", text: "تصميم دائري" }
    ],
    videoSection: {
      title: "اكتشف سمارت كير أثناء العمل",
      caption: "عرض تجريبي للمفهوم (10–20 ثانية)",
      playLabel: "تشغيل الفيديو",
      ariaLabel: "فيديو العرض التوضيحي لمنتج سمارت كير"
    },
    featuresSection: {
      title: "أهم الميزات",
      subtitle: "تقنية متقدمة لخدمة الاستقلالية والأمان",
      items: [
        {
          icon: "monitoring",
          title: "مراقبة لحظية",
          text: "متابعة مستمرة لنبض القلب والحركة وإشارات التوتر لرصد المواقف المقلقة مبكرًا."
        },
        {
          icon: "gps",
          title: "أمان عبر GPS",
          text: "تحديد موقع خفي مع تنبيهات للمناطق الآمنة ليعرف الوالدان مكان طفلهما دائمًا."
        },
        {
          icon: "calm",
          title: "مساعدة على الهدوء",
          text: "توجيه لطيف بالصوت للمساعدة في تهدئة اللحظات الصعبة وتشجيع العودة للهدوء."
        },
        {
          icon: "family",
          title: "تنسيق العائلة",
          text: "مشاركة بيانات آمنة بين الوالدين والمربين والأطباء لرعاية منسقة وفعالة."
        }
      ]
    },
    howItWorks: {
      title: "كيف يعمل",
      subtitle: "نظام متصل لأمان مثالي",
      steps: [
        { title: "السوار", text: "جمع البيانات في الوقت الفعلي" },
        { title: "التطبيق", text: "واجهة سهلة للوالدين" },
        { title: "السحابة", text: "تحليل وتخزين آمن" },
        { title: "الوالدان / المربون", text: "تنبيهات وتقارير مفصلة" }
      ]
    },
    circularSection: {
      title: "تصميم دائري",
      subtitle: "الاستدامة وإمكانية الإصلاح في جوهر المنتج",
      description: "تم تصميم سمارت كير بنهج معياري: قلب إلكتروني قابل للفصل، بطارية قابلة للاستبدال، وسوار قابل للتغيير. هذا التصميم يتيح إصلاحًا سهلاً، ترقيات تدريجية، وإعادة تدوير مثالية في نهاية العمر.",
      cards: [
        { icon: "fas fa-redo-alt", title: "إعادة الاستخدام", text: "مكونات معيارية قابلة لإعادة الاستخدام" },
        { icon: "fas fa-tools", title: "الإصلاح", text: "صيانة بسيطة ومتاحة" },
        { icon: "fas fa-sync-alt", title: "إعادة التأهيل", text: "إعادة تدوير واسترجاع محسّن" }
      ],
      imageAlt: "عرض تفصيلي لنموذج سمارت كير يوضح المكونات المعيارية"
    },
    videoModal: {
      closeLabel: "إغلاق الفيديو",
      fallback: "المتصفح لا يدعم تشغيل الفيديو."
    },
    pricingSection: {
      title: "الأسعار والعروض",
      subtitle: "اختر الخطة التي تناسب احتياجاتك",
      billingMonthly: "فواتير شهرية",
      billingYearly: "فواتير سنوية",
      yearlyBadge: "-20%",
      perMonth: "/شهر",
      currency: "DT",
      ctaChoose: "اختر هذه الخطة",
      ctaContact: "اتصل بنا",
      mostPopular: "الأكثر شيوعاً",
      faqTitle: "أسئلة شائعة حول الأسعار",
      plans: {
        starter: {
          title: "المبتدئة",
          subtitle: "للبداية",
          device: "السوار مشمول",
          features: [
            "مراقبة فورية",
            "تحديد موقع GPS",
            "تنبيهات أمان",
            "تطبيق جوال",
            "دعم عبر البريد الإلكتروني"
          ]
        },
        professional: {
          title: "المحترفة",
          subtitle: "للعائلات",
          device: "السوار مشمول",
          features: [
            "كل ما في المبتدئة",
            "مساعدة على الهدوء بالذكاء الاصطناعي",
            "مشاركة مع المربين",
            "تقارير مفصلة",
            "دعم أولوية",
            "تحديثات مجانية"
          ]
        },
        enterprise: {
          title: "المؤسسات",
          subtitle: "للمؤسسات",
          device: "أساور متعددة",
          features: [
            "كل ما في المحترفة",
            "إدارة متعددة المستخدمين",
            "تكامل API",
            "لوحة معلومات متقدمة",
            "دعم مخصص 24/7",
            "تدريب مخصص",
            "اتفاقية مستوى خدمة مضمونة"
          ]
        }
      },
      info: {
        warranty: {
          title: "ضمان سنتين",
          text: "على جميع أساور SmartCare"
        },
        cancel: {
          title: "إلغاء مجاني",
          text: "في أي وقت، دون التزام"
        },
        support: {
          title: "دعم مشمول",
          text: "مساعدة فنية متاحة"
        }
      },
      faq: [
        {
          question: "هل السوار مشمول في السعر؟",
          answer: "نعم، سوار SmartCare مشمول في جميع خططنا. ستتلقى سواراً جديداً مع أول طلب لك."
        },
        {
          question: "هل يمكنني تغيير الخطة لاحقاً؟",
          answer: "بالتأكيد! يمكنك ترقية أو خفض خطتك في أي وقت. يتم تطبيق التغييرات على دورة الفوترة التالية."
        },
        {
          question: "هل توجد رسوم خفية؟",
          answer: "لا، أسعارنا شفافة. السعر المعروض يشمل السوار والاشتراك الشهري وجميع الميزات المدرجة. فقط الملحقات الاختيارية قد تتطلب رسوماً إضافية."
        }
      ]
    },
    impactSection: {
      title: "التأثير الاجتماعي",
      quote: "يحوّل SmartCare حياة العائلات اليومية من خلال توفير راحة البال ودعم استقلالية الأطفال المصابين بمتلازمة داون.",
      points: [
        {
          title: "تقليل قلق العائلة",
          text: "التنبيهات الفورية وتحديد الموقع يطمئنان الأهل مع احترام استقلالية الطفل."
        },
        {
          title: "تحسين الاستقلالية",
          text: "المساعدة على الهدوء والمتابعة الطبية يدعمان الاستقلال التدريجي وثقة الطفل بنفسه."
        },
        {
          title: "تعليم شامل",
          text: "مشاركة البيانات الآمنة مع الفرق التعليمية والطبية تُمكّن من رعاية منسقة وشخصية."
        }
      ]
    },
    faqSection: {
      title: "الأسئلة الشائعة",
      subtitle: "كل ما تحتاج معرفته عن SmartCare",
      items: [
        {
          question: "هل هو جهاز طبي حقيقي؟",
          answer: "تم تصميم SmartCare كجهاز طبي من الفئة الثانية وفق لوائح MDR الأوروبية. يهدف إلى المراقبة والمساعدة ولا يحل محل الرعاية الطبية المهنية. نعمل مع متخصصين صحيين لضمان السلامة والفعالية."
        },
        {
          question: "ما البيانات التي يتم جمعها؟",
          answer: "نجمع فقط البيانات اللازمة لعمل الجهاز: معدل ضربات القلب، الحركات، مؤشرات التوتر، وتحديد الموقع (عند التفعيل). جميع البيانات مُشفرة ومخزنة بأمان ولا تُشارك إلا مع الأشخاص المخوّلين عبر موافقة صريحة."
        },
        {
          question: "كيف يعمل GPS؟",
          answer: "يعمل GPS بشكل هادئ ويحترم الخصوصية. يمكن للوالدين تحديد مناطق آمنة (المدرسة، المنزل، إلخ). إذا خرج الطفل من هذه المناطق أو تم تشغيل تنبيه، يتلقى الوالدان إشعاراً. يمكن إيقاف تحديد الموقع في أي وقت."
        },
        {
          question: "كيف تتم إدارة الخصوصية؟",
          answer: "الخصوصية هي أولويتنا القصوى. نلتزم بالـ GDPR ونطبق تقليل البيانات والموافقة الصريحة وأماناً معززاً. البيانات مشفرة أثناء النقل والتخزين ولا يمكن الوصول إليها إلا للمستخدمين المخولين. لا نبيع البيانات أبداً."
        },
        {
          question: "ما الذي يجعله دائرياً؟",
          answer: "يسمح التصميم المعياري بالإصلاح والترقية وإعادة التدوير. يمكن استبدال القلب الإلكتروني دون التخلص من السوار، والبطارية قابلة للاستبدال، والمواد مختارة لقابليتها لإعادة التدوير. نقدم أيضاً برنامج استرجاع وتجديد لإطالة عمر المنتج."
        }
      ]
    },
    contactSection: {
      title: "اتصل بنا",
      subtitle: "نحن هنا للإجابة عن أسئلتك",
      nameLabel: "الاسم الكامل",
      emailLabel: "البريد الإلكتروني",
      roleLabel: "الدور",
      rolePlaceholder: "اختر دورك",
      roles: {
        parent: "ولي أمر",
        educator: "مربٍ",
        doctor: "طبيب",
        student: "طالب",
        investor: "مستثمر",
        other: "آخر"
      },
      messageLabel: "الرسالة",
      submit: "إرسال",
      ctaText: "ابنِ روتيناً يومياً أكثر أماناً مع SmartCare."
    },
    footerContent: {
      tagline: "جهاز طبي ذكي للأطفال",
      productTitle: "المنتج",
      resourcesTitle: "المصادر",
      socialTitle: "التواصل الاجتماعي",
      links: {
        features: "الميزات",
        circular: "التصميم الدائري",
        pricing: "الأسعار",
        impact: "التأثير",
        faq: "الأسئلة الشائعة",
        contact: "اتصل بنا",
        linkedin: "LinkedIn",
        twitter: "Twitter",
        facebook: "Facebook"
      },
      disclaimer: "SmartCare جهاز طبي قيد التطوير. المعلومات المقدمة للاستدلال وقد تخضع للتغيير.",
      rights: "© 2024 SmartCare. جميع الحقوق محفوظة."
    },
    footer: {
      company: "الشركة",
      about: "حول",
      careers: "الوظائف",
      press: "الصحافة",
      product: "المنتج",
      features: "الميزات",
      pricing: "الأسعار",
      security: "الأمان",
      legal: "القانونية",
      privacy: "سياسة الخصوصية",
      terms: "شروط الخدمة",
      contact: "اتصل بنا",
      email: "contact@smartcare.com"
    },
    feedback: {
      title: "شارك ملاحظاتك",
      subtitle: "ساعدنا في تحسين SmartCare",
      name: "اسمك",
      email: "البريد الإلكتروني",
      rating: "التقييم",
      comment: "ملاحظاتك",
      submit: "إرسال الملاحظات",
      success: "شكراً على ملاحظاتك!",
      error: "فشل الإرسال. يرجى المحاولة مرة أخرى."
    },
    details: {
      title: "SmartCare Bracelet - نموذج ثلاثي الأبعاد",
      backButton: "العودة إلى الصفحة الرئيسية",
      heading3D: "نموذج ثلاثي الأبعاد تفاعلي",
      subtitle3D: "استكشف سوار SmartCare بالتفصيل. اسحب للدوران، استخدم عجلة الماوس للتكبير.",
      loading3D: "جاري تحميل النموذج ثلاثي الأبعاد...",
      dragRotate: "اسحب للدوران",
      scrollZoom: "عجلة الماوس للتكبير",
      resetModel: "اضغط R لإعادة تعيين",
      autoRotate: "مسافة للدوران التلقائي",
      productDetails: "تفاصيل المنتج",
      productSubtitle: "تصميم معياري وتكنولوجيا متقدمة",
      detachableCore: "قلب إلكتروني قابل للفصل",
      detachableCoreText: "يمكن إزالة الوحدة الإلكترونية واستبدالها بشكل مستقل عن السوار، مما يسمح بالترقيات دون استبدال الجهاز بالكامل.",
      replaceableBattery: "بطارية قابلة للاستبدال",
      replaceableBatteryText: "بطارية قياسية قابلة للإزالة، يسهل استبدالها من قبل المستخدم. يطيل عمر المنتج ويقلل من النفايات الإلكترونية.",
      interchangeableBracelet: "سوار قابل للتبديل",
      interchangeableBraceletText: "يمكن تغيير سوار السيليكون الطبي وفقاً لتفضيلات الطفل أو استبداله في حالة التآكل، مع الحفاظ على الوحدة الإلكترونية.",
      medicalSilicone: "السيليكون الطبي",
      medicalSiliconeText: "مادة مضادة للحساسية، مقاومة للماء، مصممة للارتداء المريح 24/7 للأطفال. معتمد لملامسة الجلد المتكررة.",
      integratedGPS: "نظام تحديد المواقع المدمج",
      integratedGPSText: "تحديد موقع دقيق مع تنبيهات المناطق الآمنة. يعمل حتى في الأماكن المغلقة من خلال مزيج GPS + WiFi + Bluetooth.",
      biometricSensors: "أجهزة استشعار بيومترية",
      biometricSensorsText: "مراقبة مستمرة لمعدل ضربات القلب والحركات ومؤشرات الإجهاد للكشف المبكر عن الحالات المقلقة.",
      technicalSpecs: "المواصفات التقنية",
      technicalSpecsSubtitle: "تكنولوجيا متقدمة في خدمة الصحة",
      processor: "المعالج",
      processorText: "ARM Cortex-M4، محسّن لاستهلاك الطاقة المنخفض",
      battery: "الاستقلالية",
      batteryText: "حتى 7 أيام من عمر البطارية، شحن سريع في ساعتين",
      connectivity: "الاتصالية",
      connectivityText: "Bluetooth 5.0، WiFi، GPS، NFC للدفع بدون تلامس (اختياري)",
      waterResistance: "مقاومة الماء",
      waterResistanceText: "تصنيف 5ATM، مناسب للسباحة والرياضات المائية",
      circularDesign: "التصميم الدائري",
      circularDesignSubtitle: "الاستدامة والمسؤولية",
      repairGuides: "إصلاح سهل",
      repairGuidesText: "أدلة الإصلاح المتاحة، قطع الغيار في متناول اليد، وشبكة من الفنيين المعتمدين. الإصلاح بدلاً من الرمي، هذا التزامنا.",
      softwareUpdates: "تحديثات البرامج",
      softwareUpdatesText: "تحديثات OTA (عبر الهواء) تسمح بتحسين الميزات دون تغيير الأجهزة. يتطور SmartCare الخاص بك معك.",
      insideImage: "استكشف داخل السوار",
      insideImageSubtitle: "تكنولوجيا متطورة، تصميم أنيق",
      videoTitle: "SmartCare في العمل",
      videoSubtitle: "اكتشف إمكانيات جهازنا الطبي",
      insideTitleSection: "داخل SmartCare",
      insideSubtitleSection: "اكتشف جودة الجزء الداخلي من السوار",
      electronics: "الإلكترونيات المدمجة",
      electronicsText: "مكونات مصغرة لسوار مريح وخفيف الوزن",
      materials: "المواد المستدامة",
      materialsText: "سيليكون طبي عالي الجودة، متين وآمن من الحساسية",
      modularity: "التصميم المعياري",
      modularityText: "مكونات قابلة للتبديل لسهولة الصيانة وإطالة العمر الافتراضي",
      sensors: "أجهزة استشعار متقدمة",
      sensorsText: "تكنولوجيا كشف دقيقة لمراقبة موثوقة 24/7",
      backButton2: "العودة إلى الصفحة الرئيسية"
    },
    project: {
      subtitle: "الابتكار التكنولوجي والتأثير الاجتماعي والاقتصاد الدائري",
      centralIdea: "الفكرة المركزية",
      centralIdeaText: "SmartCare هو جهاز طبي ذكي مصمم خصيصاً للأطفال المصابين بمتلازمة داون. إنه ليس مجرد أداة، بل نظام بيئي كامل يحسن الأمان والاستقلالية والتنظيم العاطفي، مع توفير راحة البال للعائلات والمربين.",
      problemSolved: "المشكلة التي تم حلها",
      problemSolvedText: "يواجه الأطفال المصابون بمتلازمة داون تحديات يومية:",
      challenges: [
        "صعوبة التعبير عن الإجهاد أو عدم الراحة",
        "خطر الضياع أو الارتباك",
        "الحاجة إلى إشراف مستمر",
        "نوبات القلق والسلوكيات الاندفاعية",
        "تواصل مجزأ بين الآباء والمربين والأطباء"
      ],
      existingSolutions: "الحلول الموجودة عبارة عن متتبعات لياقة بدنية عامة، غير مناسبة لاحتياجاتهم المحددة.",
      solution: "حلنا: نظام بيئي كامل",
      smartBracelet: "سوار ذكي",
      smartBraceletText: "سيليكون طبي مناسب للأطفال، تصميم مستدير وآمن. أجهزة استشعار نبضات القلب والحركة ومؤشرات الإجهاد وGPS والتغذية الراجعة الصوتية/الاهتزازية لتهدئة الطفل. تصميم معياري: قلب إلكتروني قابل للفصل.",
      mobileApp: "تطبيق الهاتف المحمول",
      mobileAppText: "المراقبة في الوقت الفعلي والتنبيهات والإخطارات وسجل الصحة والنشاط والتوصيات الشخصية. وصول آمن لأولياء الأمور والمربين.",
      cloudPlatform: "منصة سحابية",
      cloudPlatformText: "تحليل البيانات والتقارير المفصلة والوصول متعدد الأدوار (عائلة / مدرسة / طبي) والكشف بمساعدة الذكاء الاصطناعي عن الأنماط السلوكية.",
      circularEconomy: "الاقتصاد الدائري المتكامل",
      circularEconomyText: "تم تصميم SmartCare وفقاً لمبادئ الاقتصاد الدائري، وليس الخطي:",
      sustainabilityGoals: "مع أهداف الاستدامة والاقتصاد الدائري في تونس.",
      reuse: "إعادة الاستخدام",
      reuseText: "نفس الوحدة لعدة مستخدمين",
      repair: "إصلاح",
      repairText: "استبدال جزء واحد، وليس الكل",
      refurbish: "تجديد",
      refurbishText: "برنامج استرجاع",
      recycle: "إعادة تدوير",
      recycleText: "المواد + الإلكترونيات",
      circularDesignTitle: "التصميم للاستدامة",
      circularDesignSubtitle2: "إصلاح سهل وترقية تدريجية وإعادة تدوير محسّنة في نهاية الحياة.",
      circularFeatures: "يسمح التصميم المعياري بالإصلاح والترقية وإعادة التدوير. يتم اختيار المكونات والمواد لقابليتها لإعادة التدوير. نحن نقدم أيضاً برنامج استرجاع وتجديد لإطالة عمر المنتج."
    }
  }
}

export default translations
