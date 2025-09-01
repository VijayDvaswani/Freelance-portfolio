import React, { createContext, useContext, useEffect, useState } from "react";

type Locale = "en" | "es" | "ar";

interface I18nContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string) => string;
  dir: "ltr" | "rtl";
}

const rtlLocales: Locale[] = ["ar"];

const translations = {
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.about": "About",
    "nav.skills": "Skills",
    "nav.projects": "Projects",
    "nav.testlab": "Test Lab",
    "nav.contact": "Contact",

    // Hero Section
    "hero.title": "SQA Engineer",

    "hero.subtitle":
      "Building scalable software with AI-driven quality, performance, and reliability",
    "hero.cta.projects": "View Projects",
    "hero.cta.testlab": "Open Test Lab",

    // Skills Section
    "skills.title": "Our Services",
    "skills.subtitle": "Comprehensive Quality Assurance Solutions",
    "skills.badge": "My Skills",

    // Skills Categories
    "skills.web.title": "Web App Development",
    "skills.web.desc":
      "Modern React.js applications with beautiful, responsive interfaces",
    "skills.web.tools": [
      "React.js",
      "Next.js",
      "Responsive Design",
      "PWA Development",
    ],

    "skills.mobile.title": "Mobile Development",
    "skills.mobile.desc":
      "Creating cross-platform and native mobile applications with smooth performance.",
    "skills.mobile.tools": [
      "React Native",
      "Flutter",
      "Swift",
      "Android (Java/Kotlin)",
    ],

    "skills.api.title": "API Testing",
    "skills.api.desc":
      "Complete API testing lifecycle from functional to security testing",
    "skills.api.tools": [
      "Postman",
      "REST Assured",
      "Newman",
      "API Documentation",
    ],

    "skills.ai.title": "AI & Machine Learning",
    "skills.ai.desc":
      "Developing AI models and integrating ML solutions into real-world applications.",
    "skills.ai.tools": [
      "Generative AI",
      "Machine Learning",
      "Deep Leaning",
      "Python",
    ],

    "skills.cicd.title": "CI/CD Integration",
    "skills.cicd.desc":
      "Seamless integration of testing into continuous delivery pipelines",
    "skills.cicd.tools": [
      "Jenkins",
      "GitHub Actions",
      "Docker",
      "Test Reporting",
    ],

    "skills.metrics.title": "QA Metrics & Analytics",
    "skills.metrics.desc":
      "Data-driven quality insights with comprehensive reporting and dashboards",
    "skills.metrics.tools": [
      "Mobile Testing",
      "Web Testing",
      "API Testing",
      "Performance Testing",
    ],

    // Stats
    "skills.stats.1": "Client Satisfaction",
    "skills.stats.2": "Tests Automated",
    "skills.stats.3": "Bug Detection",
    "skills.stats.4": "Projects",

    // Test Lab
    "testlab.badge": "Quality Hub",
    "testlab.title": "Test Lab Dashboard",
    "testlab.subtitle":
      "Interactive showcase of test management capabilities and quality metrics",

    "testlab.tabs.plans": "Test Plans",
    "testlab.tabs.cases": "Test Cases",
    "testlab.tabs.bugs": "Bug Reports",
    "testlab.tabs.metrics": "Metrics",

    "testlab.plans.title": "Test Plans Overview",
    "testlab.plans.description":
      "Comprehensive test planning and execution tracking",
    "testlab.plans.coverage": "Coverage",

    "testlab.cases.title": "Test Cases Execution",
    "testlab.cases.description":
      "Detailed test case execution and results tracking",
    "testlab.cases.lastRun": "Last run",

    "testlab.bugs.title": "Bug Reports Tracking",
    "testlab.bugs.description":
      "Comprehensive bug tracking and resolution management",
    "testlab.bugs.assignee": "Assigned to",

    "testlab.metrics.passRate": "Test Pass Rate",
    "testlab.metrics.coverage": "Code Coverage",
    "testlab.metrics.defectDensity": "Defect Density",
    "testlab.metrics.automation": "Automation Rate",

    // Projects Section
    "projects.subtitle":
      "Explore my portfolio of quality assurance projects across different platforms and technologies",
    "projects.categories.all": "All Projects",
    "projects.categories.web": "Web Applications",
    "projects.categories.mobile": "Mobile Apps",
    "projects.categories.software": "Software",
    "projects.viewProject": "View Project",
    "projects.showMore": "Show More",
    "projects.showLess": "Show Less",
    "projects.cta": "Interested in working together on your next project?",

    // Project descriptions
    "projects.1.title": "Argaam – Saudi Financial Markets & News",
    "projects.1.description":
      "Argaam (English) is a premier Saudi-based financial news portal offering real-time market data, analysis, interviews, and coverage of stocks across the Gulf region.",

    "projects.2.title": "MACRO – Saudi Economic Data & Statistics",
    "projects.2.description":
      "Argaam Macro provides comprehensive economic data and statistics on the Saudi economy through simplified charts that cover all sectors, fields, and available historical periods.",

    "projects.3.title": "JOYA! – Social Loyalty & Gifting Platform",
    "projects.3.description":
      "JOYA! is a social loyalty platform enabling users to earn and redeem points, share experiences, and send gifts via social networking for partner stores.",

    "projects.4.title": "MULTILIP – Where Investments Multiply with Confidence",
    "projects.4.description":
      "MULTILIP is a stock investment company helping beginners and experienced investors with expert insights, data-driven strategies, and personalized portfolio management.",

    "projects.5.title":
      "Highclass – Brand Expansion & Digital Retail Integration Project",
    "projects.5.description":
      "HIGHCLASS, known for premium footwear, is expanding into clothing and cosmetics to create a unified lifestyle brand with a seamless shopping experience.",

    "projects.6.title": "BuyHouseEZ – Non-Conventional Home Financing",
    "projects.6.description":
      "BuyHouseEZ enables self-employed individuals and ITIN holders with poor credit to secure mortgages through alternative lending solutions.",

    "projects.7.title": "ARGAAM100 – Stock Performance Tracker",
    "projects.7.description":
      "With Argaam 100, you can track the performance of listed stocks over various timeframes and compare with market competitors.",

    "projects.8.title":
      "HERFA – Build Smarter, Build Faster with Digital Construction",
    "projects.8.description":
      "HERFA is an online construction platform for contractors, builders, and project managers, offering real-time project tracking and material management.",

    "projects.9.title": "Note 2.0 – Contemporary Jewellery for the Bold",
    "projects.9.description":
      "Note 2.0 is a modern jewellery brand blending elegance with bold design, offering unique pieces for work, events, and everyday wear.",

    "projects.10.title": "Argaam Charts – Financial Market Charts (Arabic)",
    "projects.10.description":
      "Argaam Charts (Arabic) provides interactive real-time financial charts and market analytics for Gulf and Saudi stocks.",

    "projects.11.title":
      "Contractor Foreman – Construction Management Software",
    "projects.11.description":
      "Contractor Foreman is an all-in-one, cloud-based construction management suite offering project, financial, document, and team tracking tools.",

    "projects.12.title": "MAGUSAI – Your AI-Powered Trading Partner",
    "projects.12.description":
      "MAGUSAI is an advanced AI-driven trading platform designed to empower traders with intelligent insights and predictive analytics.",

    // Contact Section
    "contact.subtitle":
      "Get in touch with me for collaboration, inquiries, or just to say hello",
    "contact.getInTouch": "Get in Touch",
    "contact.email": "Email",
    "contact.responseTime": "Response within 24 hours",
    "contact.phone": "Phone",
    "contact.location": "Location",
    "contact.availability": "Availability",
    "contact.availabilityText":
      "I'm currently available for freelance projects and full-time opportunities.",
    "contact.sendMessage": "Send a Message",
    "contact.form.name": "Your Name",
    "contact.form.namePlaceholder": "Enter your name",
    "contact.form.email": "Email Address",
    "contact.form.emailPlaceholder": "Enter your email",
    "contact.form.subject": "Subject",
    "contact.form.subjectPlaceholder": "What is this regarding?",
    "contact.form.message": "Message",
    "contact.form.messagePlaceholder": "Tell me about your project or inquiry",
    "contact.form.sendButton": "Send Message",
    "contact.hireMe": "Hire Me Directly",
    "contact.hireMeSubtitle":
      "Prefer to work through a freelance platform? Find me on these marketplaces",
    "contact.fiverr.title": "Hire Me on Fiverr",
    "contact.fiverr.description": "AI-powered solutions with rapid delivery",
    "contact.fiverr.button": "View Profile",
    "contact.upwork.title": "View My Upwork Profile",
    "contact.upwork.description": "Intelligent enterprise-grade applications",
    "contact.upwork.button": "View Profile",
    "contact.bark.title": "Connect on Bark",
    "contact.bark.description": "Smart local business automation",
    "contact.bark.button": "View Profile",

    // Footer Section
    "footer.description":
      "Ensuring flawless software through precision, testing, and quality. Specializing in Manual & Automated Testing with AI Integration.",
    "footer.quickLinks": "Quick Links",
    "footer.services": "Services",
    "footer.contactInfo": "Contact Info",
    "footer.rights": "All rights reserved.",
    "footer.madeWith": "Made with",
    "footer.by": "by",
    "footer.backToTop": "Back to top",

    "testimonials.badge": "Client Feedback",
    "testimonials.title": "Client Testimonials",
    "testimonials.subtitle": "What clients say about working with me",
    "testimonials.previous": "Previous testimonial",
    "testimonials.next": "Next testimonial",
    "testimonials.goTo": "Go to testimonial",

    // Testimonial content
    "testimonials.1.name": "Muhammad A.",
    "testimonials.1.role": "Client",
    "testimonials.1.content":
      "Vijay is an exceptional developer. He delivered a high-quality e-commerce website that exceeded my expectations. His attention to detail and communication throughout the project were outstanding.",
    "testimonials.1.project": "E-commerce Website Development",
    "testimonials.1.date": "December 2023",

    "testimonials.2.name": "Sarah T.",
    "testimonials.2.role": "Client",
    "testimonials.2.content":
      "Working with Vijay was a pleasure. He transformed our outdated website into a modern, responsive platform that perfectly represents our brand. His technical expertise and creative solutions were impressive.",
    "testimonials.2.project": "Website Redesign",
    "testimonials.2.date": "November 2023",

    "testimonials.3.name": "James K.",
    "testimonials.3.role": "Client",
    "testimonials.3.content":
      "Vijay developed a custom web application for our business that has significantly improved our workflow efficiency. He was professional, met all deadlines, and provided excellent post-launch support.",
    "testimonials.3.project": "Custom Web Application",
    "testimonials.3.date": "October 2023",

    "testimonials.4.name": "Lisa M.",
    "testimonials.4.role": "Client",
    "testimonials.4.content":
      "I hired Vijay for a complex React project and he delivered beyond my expectations. His code is clean, well-documented, and he implemented all requested features perfectly. Highly recommended!",
    "testimonials.4.project": "React Application Development",
    "testimonials.4.date": "September 2023",

    "testimonials.5.name": "Robert D.",
    "testimonials.5.role": "Client",
    "testimonials.5.content":
      "Vijay's expertise in frontend development is evident in the beautiful interfaces he creates. He took our vague ideas and turned them into a stunning, user-friendly website that our customers love.",
    "testimonials.5.project": "Frontend Development",
    "testimonials.5.date": "August 2023",

    "testimonials.6.name": "Emily W.",
    "testimonials.6.role": "Client",
    "testimonials.6.content":
      "Outstanding work on our dashboard project! Vijay created an intuitive admin panel with beautiful data visualizations. His communication was excellent throughout the project lifecycle.",
    "testimonials.6.project": "Dashboard Development",
    "testimonials.6.date": "July 2023",
  },

  es: {
    // Navigation
    "nav.home": "Inicio",
    "nav.about": "Acerca",
    "nav.skills": "Habilidades",
    "nav.projects": "Proyectos",
    "nav.testlab": "Lab de Pruebas",
    "nav.contact": "Contacto",

    // Hero Section
    "hero.title": "Ingeniero SQA",
    "hero.subtitle":
      "Creando software escalable con calidad, rendimiento y fiabilidad impulsados por IA",
    "hero.cta.projects": "Ver Proyectos",
    "hero.cta.testlab": "Abrir Lab de Pruebas",

    // Skills Section
    "skills.title": "Nuestros Servicios",
    "skills.subtitle": "Soluciones Integrales de Aseguramiento de Calidad",
    "skills.badge": "Mis Habilidades",

    // Skills Categories
    "skills.web.title": "Desarrollo de Aplicaciones Web",
    "skills.web.desc":
      "Aplicaciones modernas en React.js con interfaces hermosas y responsivas",
    "skills.web.tools": [
      "React.js",
      "Next.js",
      "Diseño Responsivo",
      "Desarrollo PWA",
    ],

    "skills.mobile.title": "Desarrollo de Aplicaciones Móviles",
    "skills.mobile.desc":
      "Aplicaciones modernas en React.js con interfaces hermosas y responsivas",
    "skills.mobile.tools": [
      "React Native",
      "Flutter",
      "Swift",
      "Android (Java/Kotlin)",
    ],

    "skills.api.title": "Pruebas de API",
    "skills.api.desc":
      "Ciclo completo de pruebas de API desde funcionales hasta seguridad",
    "skills.api.tools": [
      "Postman",
      "REST Assured",
      "Newman",
      "Documentación de API",
    ],

    "skills.ai.title": "Inteligencia Artificial",
    "skills.ai.desc":
      "Desarrollo de modelos de IA y integración de soluciones ML en aplicaciones reales",
    "skills.ai.tools": [
      "Generative AI",
      "Machine Learning",
      "Deep Leaning",
      "Python",
    ],

    "skills.cicd.title": "Integración CI/CD",
    "skills.cicd.desc":
      "Integración fluida de pruebas en pipelines de entrega continua",
    "skills.cicd.tools": [
      "Jenkins",
      "GitHub Actions",
      "Docker",
      "Reportes de Pruebas",
    ],

    "skills.metrics.title": "Métricas y Analítica de QA",
    "skills.metrics.desc":
      "Insights de calidad basados en datos con reportes y dashboards completos",
    "skills.metrics.tools": [
      "Pruebas móviles",
      "Pruebas web",
      "Pruebas de API",
      "Pruebas de rendimiento",
    ],

    // Stats
    "skills.stats.1": "Satisfacción del Cliente",
    "skills.stats.2": "Pruebas Automatizadas",
    "skills.stats.3": "Detección de Errores",
    "skills.stats.4": "Proyectos",

    // Test Lab
    "testlab.badge": "Centro de Calidad",
    "testlab.title": "Panel del Laboratorio de Pruebas",
    "testlab.subtitle":
      "Demostración interactiva de capacidades de gestión de pruebas y métricas de calidad",

    "testlab.tabs.plans": "Planes de Prueba",
    "testlab.tabs.cases": "Casos de Prueba",
    "testlab.tabs.bugs": "Reportes de Errores",
    "testlab.tabs.metrics": "Métricas",

    "testlab.plans.title": "Resumen de Planes de Prueba",
    "testlab.plans.description":
      "Planificación y seguimiento integral de ejecución de pruebas",
    "testlab.plans.coverage": "Cobertura",

    "testlab.cases.title": "Ejecución de Casos de Prueba",
    "testlab.cases.description":
      "Seguimiento detallado de ejecución y resultados de casos de prueba",
    "testlab.cases.lastRun": "Última ejecución",

    "testlab.bugs.title": "Seguimiento de Reportes de Errores",
    "testlab.bugs.description":
      "Gestión integral de seguimiento y resolución de errores",
    "testlab.bugs.assignee": "Asignado a",

    "testlab.metrics.passRate": "Tasa de Aprobación de Pruebas",
    "testlab.metrics.coverage": "Cobertura de Código",
    "testlab.metrics.defectDensity": "Densidad de Defectos",
    "testlab.metrics.automation": "Tasa de Automatización",

    // Projects Section
    "projects.subtitle":
      "Explora mi portafolio de proyectos de garantía de calidad en diferentes plataformas y tecnologías",
    "projects.categories.all": "Todos los Proyectos",
    "projects.categories.web": "Aplicaciones Web",
    "projects.categories.mobile": "Aplicaciones Móviles",
    "projects.categories.software": "Software",
    "projects.viewProject": "Ver Proyecto",
    "projects.showMore": "Mostrar Más",
    "projects.showLess": "Mostrar Menos",
    "projects.cta": "¿Interesado en trabajar juntos en tu próximo proyecto?",

    // Project descriptions
    "projects.1.title":
      "Argaam – Mercados Financieros y Noticias de Arabia Saudita",
    "projects.1.description":
      "Argaam (inglés) es un portal de noticias financieras con sede en Arabia Saudita que ofrece datos de mercado en tiempo real, análisis, entrevistas y cobertura de acciones en toda la región del Golfo.",

    "projects.2.title":
      "MACRO – Datos y Estadísticas Económicas de Arabia Saudita",
    "projects.2.description":
      "Argaam Macro proporciona datos económicos integrales y estadísticas sobre la economía saudí a través de gráficos simplificados que cubren todos los sectores, campos y períodos históricos disponibles.",

    "projects.3.title": "JOYA! – Plataforma Social de Lealtad y Regalos",
    "projects.3.description":
      "JOYA! es una plataforma social de lealtad que permite a los usuarios ganar y canjear puntos, compartir experiencias y enviar regalos a través de redes sociales para tiendas asociadas.",

    "projects.4.title":
      "MULTILIP – Donde las Inversiones se Multiplican con Confianza",
    "projects.4.description":
      "MULTILIP es una empresa de inversión en acciones que ayuda a principiantes e inversores experimentados con información experta, estrategias basadas en datos y gestión de cartera personalizada.",

    "projects.5.title":
      "Highclass – Expansión de Marca e Integración de Comercio Digital",
    "projects.5.description":
      "HIGHCLASS, conocida por calzado premium, se está expandiendo a ropa y cosméticos para crear una marca de estilo de vida unificada con una experiencia de compra perfecta.",

    "projects.6.title":
      "BuyHouseEZ – Financiamiento de Vivienda No Convencional",
    "projects.6.description":
      "BuyHouseEZ permite a personas independientes y titulares de ITIN con mal crédito obtener hipotecas a través de soluciones crediticias alternativas.",

    "projects.7.title": "ARGAAM100 – Rastreador de Rendimiento de Acciones",
    "projects.7.description":
      "Con Argaam 100, puedes rastrear el rendimiento de las acciones cotizadas en varios períodos y comparar con los competidores del mercado.",

    "projects.8.title":
      "HERFA – Construye de Forma Más Inteligente y Rápida con Construcción Digital",
    "projects.8.description":
      "HERFA es una plataforma de construcción en línea para contratistas, constructores y gerentes de proyectos que ofrece seguimiento de proyectos en tiempo real y gestión de materiales.",

    "projects.9.title": "Note 2.0 – Joyería Contemporánea para los Audaces",
    "projects.9.description":
      "Note 2.0 es una marca de joyería moderna que combina elegancia con diseño audaz, ofreciendo piezas únicas para el trabajo, eventos y uso diario.",

    "projects.10.title":
      "Argaam Charts – Gráficos de Mercados Financieros (Árabe)",
    "projects.10.description":
      "Argaam Charts (árabe) proporciona gráficos financieros interactivos en tiempo real y análisis de mercado para acciones del Golfo y saudíes.",

    "projects.11.title":
      "Contractor Foreman – Software de Gestión de Construcción",
    "projects.11.description":
      "Contractor Foreman es un conjunto de gestión de construcción integral basado en la nube que ofrece herramientas de seguimiento de proyectos, finanzas, documentos y equipos.",

    "projects.12.title": "MAGUSAI – Tu Socio de Trading Impulsado por IA",
    "projects.12.description":
      "MAGUSAI es una plataforma de trading avanzada impulsada por IA diseñada para capacitar a los traders con información inteligente y análisis predictivo.",

    // Contact Section
    "contact.subtitle":
      "Ponte en contacto conmigo para colaboraciones, consultas o simplemente para saludar",
    "contact.getInTouch": "Ponerse en Contacto",
    "contact.email": "Correo Electrónico",
    "contact.responseTime": "Respuesta en 24 horas",
    "contact.phone": "Teléfono",
    "contact.location": "Ubicación",
    "contact.availability": "Disponibilidad",
    "contact.availabilityText":
      "Actualmente estoy disponible para proyectos freelance y oportunidades a tiempo completo.",
    "contact.sendMessage": "Enviar un Mensaje",
    "contact.form.name": "Tu Nombre",
    "contact.form.namePlaceholder": "Ingresa tu nombre",
    "contact.form.email": "Correo Electrónico",
    "contact.form.emailPlaceholder": "Ingresa tu correo electrónico",
    "contact.form.subject": "Asunto",
    "contact.form.subjectPlaceholder": "¿Sobre qué se trata?",
    "contact.form.message": "Mensaje",
    "contact.form.messagePlaceholder": "Cuéntame sobre tu proyecto o consulta",
    "contact.form.sendButton": "Enviar Mensaje",
    "contact.hireMe": "Contrátame Directamente",
    "contact.hireMeSubtitle":
      "¿Prefieres trabajar a través de una plataforma freelance? Encuéntrame en estos marketplaces",
    "contact.fiverr.title": "Contrátame en Fiverr",
    "contact.fiverr.description": "Soluciones con IA con entrega rápida",
    "contact.fiverr.button": "Ver Perfil",
    "contact.upwork.title": "Ver Mi Perfil de Upwork",
    "contact.upwork.description": "Aplicaciones empresariales inteligentes",
    "contact.upwork.button": "Ver Perfil",
    "contact.bark.title": "Conectar en Bark",
    "contact.bark.description":
      "Automatización inteligente para negocios locales",
    "contact.bark.button": "Ver Perfil",

    // Footer Section
    "footer.description":
      "Asegurando software impecable a través de precisión, pruebas y calidad. Especializado en Pruebas Manuales y Automatizadas con Integración de IA.",
    "footer.quickLinks": "Enlaces Rápidos",
    "footer.services": "Servicios",
    "footer.contactInfo": "Información de Contacto",
    "footer.rights": "Todos los derechos reservados.",
    "footer.madeWith": "Hecho con",
    "footer.by": "por",
    "footer.backToTop": "Volver arriba",

    "testimonials.badge": "Comentarios de Clientes",
    "testimonials.title": "Testimonios de Clientes",
    "testimonials.subtitle": "Lo que los clientes dicen sobre trabajar conmigo",
    "testimonials.previous": "Testimonio anterior",
    "testimonials.next": "Siguiente testimonio",
    "testimonials.goTo": "Ir al testimonio",

    // Testimonial content
    "testimonials.1.name": "Muhammad A.",
    "testimonials.1.role": "Cliente",
    "testimonials.1.content":
      "Vijay es un desarrollador excepcional. Entregó un sitio web de comercio electrónico de alta calidad que superó mis expectativas. Su atención al detalle y comunicación durante todo el proyecto fueron sobresalientes.",
    "testimonials.1.project": "Desarrollo de Sitio Web de Comercio Electrónico",
    "testimonials.1.date": "Diciembre 2023",

    "testimonials.2.name": "Sarah T.",
    "testimonials.2.role": "Cliente",
    "testimonials.2.content":
      "Trabajar con Vijay fue un placer. Transformó nuestro sitio web obsoleto en una plataforma moderna y receptiva que representa perfectamente nuestra marca. Su experiencia técnica y soluciones creativas fueron impresionantes.",
    "testimonials.2.project": "Rediseño de Sitio Web",
    "testimonials.2.date": "Noviembre 2023",

    "testimonials.3.name": "James K.",
    "testimonials.3.role": "Cliente",
    "testimonials.3.content":
      "Vijay desarrolló una aplicación web personalizada para nuestro negocio que ha mejorado significativamente nuestra eficiencia de flujo de trabajo. Fue profesional, cumplió con todos los plazos y brindó un excelente soporte posterior al lanzamiento.",
    "testimonials.3.project": "Aplicación Web Personalizada",
    "testimonials.3.date": "Octubre 2023",

    "testimonials.4.name": "Lisa M.",
    "testimonials.4.role": "Cliente",
    "testimonials.4.content":
      "Contraté a Vijay para un proyecto complejo de React y entregó más de lo que esperaba. Su código es limpio, está bien documentado e implementó todas las funciones solicitadas perfectamente. ¡Muy recomendable!",
    "testimonials.4.project": "Desarrollo de Aplicación React",
    "testimonials.4.date": "Septiembre 2023",

    "testimonials.5.name": "Robert D.",
    "testimonials.5.role": "Cliente",
    "testimonials.5.content":
      "La experiencia de Vijay en desarrollo frontend es evidente en las hermosas interfaces que crea. Tomó nuestras ideas vagas y las convirtió en un sitio web impresionante y fácil de usar que nuestros clientes adoran.",
    "testimonials.5.project": "Desarrollo Frontend",
    "testimonials.5.date": "Agosto 2023",

    "testimonials.6.name": "Emily W.",
    "testimonials.6.role": "Cliente",
    "testimonials.6.content":
      "¡Un trabajo excepcional en nuestro proyecto de panel de control! Vijay creó un panel de administración intuitivo con hermosas visualizaciones de datos. Su comunicación fue excelente durante todo el ciclo de vida del proyecto.",
    "testimonials.6.project": "Desarrollo de Panel de Control",
    "testimonials.6.date": "Julio 2023",
  },

  ar: {
    // Navigation
    "nav.home": "الرئيسية",
    "nav.about": "حول",
    "nav.skills": "المهارات",
    "nav.projects": "المشاريع",
    "nav.testlab": "مختبر الاختبار",
    "nav.contact": "اتصل",

    // Hero Section
    "hero.title": "مهندس ضمان الجودة",
    "hero.subtitle":
      "نبني برمجيات قابلة للتوسع بجودة وأداء وموثوقية مدعومة بالذكاء الاصطناعي",
    "hero.cta.projects": "عرض المشاريع",
    "hero.cta.testlab": "فتح مختبر الاختبار",

    // Skills Section
    "skills.title": "خدماتنا",
    "skills.subtitle": "حلول شاملة لضمان الجودة",
    "skills.badge": "مهاراتي",

    // Skills Categories
    "skills.web.title": "تطوير تطبيقات الويب",
    "skills.web.desc": "تطبيقات React.js حديثة بواجهات جميلة ومتجاوبة",
    "skills.web.tools": ["React.js", "Next.js", "تصميم متجاوب", "تطبيقات PWA"],

    "skills.mobile.title": "تطوير تطبيقات الهاتف",
    "skills.mobile.desc": "تطبيقات React.js حديثة بواجهات جميلة ومتجاوبة",
    "skills.mobile.tools": [
      "React Native",
      "Flutter",
      "Swift",
      "Android (Java/Kotlin)",
    ],

    "skills.api.title": "اختبار واجهات API",
    "skills.api.desc": "دورة كاملة لاختبار API من الوظيفي إلى الأمني",
    "skills.api.tools": ["Postman", "REST Assured", "Newman", "توثيق API"],

    "skills.ai.title": "الذكاء الاصطناعي وتعلم الآلة",
    "skills.ai.desc":
      "تطوير نماذج الذكاء الاصطناعي ودمج حلول تعلم الآلة في التطبيقات الواقعية.",
    "skills.ai.tools": [
      "Generative AI",
      "Machine Learning",
      "Deep Leaning",
      "Python",
    ],
    "skills.cicd.title": "تكامل CI/CD",
    "skills.cicd.desc": "دمج سلس للاختبارات في خطوط التسليم المستمرة",
    "skills.cicd.tools": [
      "Jenkins",
      "GitHub Actions",
      "Docker",
      "تقارير الاختبار",
    ],

    "skills.metrics.title": "مقاييس وتحليلات الجودة",
    "skills.metrics.desc":
      "رؤى جودة قائمة على البيانات مع تقارير ولوحات معلومات شاملة",
    "skills.metrics.tools": [
      "اختبار التطبيقات المحمولة",
      "اختبار الويب",
      "اختبار واجهة برمجة التطبيقات (API)",
      "اختبار الأداء",
    ],

    // Stats
    "skills.stats.1": "رضا العملاء",
    "skills.stats.2": "اختبارات مؤتمتة",
    "skills.stats.3": "اكتشاف الأخطاء",
    "skills.stats.4": "المشاريع",

    // Test Lab
    "testlab.badge": "مركز الجودة",
    "testlab.title": "لوحة مختبر الاختبار",
    "testlab.subtitle": "عرض تفاعلي لقدرات إدارة الاختبارات ومقاييس الجودة",

    "testlab.tabs.plans": "خطط الاختبار",
    "testlab.tabs.cases": "حالات الاختبار",
    "testlab.tabs.bugs": "تقارير الأخطاء",
    "testlab.tabs.metrics": "المقاييس",

    "testlab.plans.title": "نظرة عامة على خطط الاختبار",
    "testlab.plans.description": "تخطيط شامل وتتبع تنفيذ الاختبارات",
    "testlab.plans.coverage": "التغطية",

    "testlab.cases.title": "تنفيذ حالات الاختبار",
    "testlab.cases.description": "تتبع مفصل لتنفيذ حالات الاختبار والنتائج",
    "testlab.cases.lastRun": "آخر تشغيل",

    "testlab.bugs.title": "تتبع تقارير الأخطاء",
    "testlab.bugs.description": "إدارة شاملة لتتبع وحل الأخطاء",
    "testlab.bugs.assignee": "مخصص لـ",

    "testlab.metrics.passRate": "معدل اجتياز الاختبارات",
    "testlab.metrics.coverage": "تغطية الكود",
    "testlab.metrics.defectDensity": "كثافة العيوب",
    "testlab.metrics.automation": "معدل الأتمتة",

    // Projects Section
    "projects.subtitle":
      "استكشف محفظتي من مشاريع ضمان الجودة عبر منصات وتقنيات مختلفة",
    "projects.categories.all": "جميع المشاريع",
    "projects.categories.web": "تطبيقات الويب",
    "projects.categories.mobile": "تطبيقات الجوال",
    "projects.categories.software": "البرمجيات",
    "projects.viewProject": "عرض المشروع",
    "projects.showMore": "عرض المزيد",
    "projects.showLess": "عرض أقل",
    "projects.cta": "هل أنت مهتم بالعمل معًا في مشروعك القادم؟",

    // Project descriptions
    "projects.1.title": "أرقام - الأسواق المالية والأخبار السعودية",
    "projects.1.description":
      "أرقام (الإنجليزية) هي بوابة أخبار مالية رائدة مقرها المملكة العربية السعودية تقدم بيانات السوق في الوقت الفعلي والتحليلات والمقابلات والتغطية للأسهم في جميع أنحاء منطقة الخليج.",

    "projects.2.title": "ماكرو - البيانات والإحصاءات الاقتصادية السعودية",
    "projects.2.description":
      "يوفر أرقام ماكرو بيانات اقتصادية شاملة وإحصاءات عن الاقتصاد السعودي من خلال مخططات مبسطة تغطي جميع القطاعات والمجالات والفترات التاريخية المتاحة.",

    "projects.3.title": "جويّا! - منصة الولاء الاجتماعي والهدايا",
    "projects.3.description":
      "جويّا! هي منصة ولاء اجتماعي تمكن المستخدمين من كسب النقاط واستبدالها ومشاركة التجارب وإرسال الهدايا عبر الشبكات الاجتماعية للمتاجر الشريكة.",

    "projects.4.title": "مولتيليب - حيث تتضاعف الاستثمارات بثقة",
    "projects.4.description":
      "مولتيليب هي شركة استثمار في الأسهم تساعد المبتدئين والمستثمرين ذوي الخبرة برؤى الخبراء واستراتيجيات قائمة على البيانات وإدارة محافظ مخصصة.",

    "projects.5.title":
      "هاي كلاس - مشروع توسيع العلامة التجارية وتكامل البيع بالتجزئة الرقمي",
    "projects.5.description":
      "هاي كلاس، المعروفة بإنتاج calzado premium، تتوسع في الملابس ومستحضرات التجميل لإنشاء علامة تجارية موحدة لأسلوب الحياة مع تجربة تسوق سلسة.",

    "projects.6.title": "BuyHouseEZ - تمويل غير تقليدي للإسكان",
    "projects.6.description":
      "تمكن BuyHouseEZ الأفراد العاملين لحسابهم الخاص وحاملي ITIN ذوي الائتمان الضعيف من الحصول على قروض الرهن العقاري من خلال حلول الإقراض البديلة.",

    "projects.7.title": "أرقام 100 - متتبع أداء الأسهم",
    "projects.7.description":
      "مع أرقام 100، يمكنك تتبع أداء الأسهم المدرجة على مدى أطر زمنية مختلفة ومقارنتها مع منافسي السوق.",

    "projects.8.title": "هرفا - بناء أذكى وأسرع مع البناء الرقمي",
    "projects.8.description":
      "هرفا هي منصة بناء عبر الإنترنت للمقاولين والبنائين ومديري المشاريع، تقدم تتبع المشاريع في الوقت الفعلي وإدارة المواد.",

    "projects.9.title": "نوت 2.0 - مجوهرات معاصرة للجريئين",
    "projects.9.description":
      "نوت 2.0 هي علامة تجارية للمجوهرات الحديثة تدمج الأناقة مع التصميم الجريء، وتقدم قطعًا فريدة للعمل والفعاليات والارتداء اليومي.",

    "projects.10.title": "أرقام تشارتس - مخططات الأسواق المالية (عربي)",
    "projects.10.description":
      "تقدم أرقام تشارتس (عربي) مخططات مالية تفاعلية في الوقت الفعلي وتحليلات السوق لأسهم الخليج والسعودية.",

    "projects.11.title": "المقاول فورمان - برنامج إدارة البناء",
    "projects.11.description":
      "المقاول فورمان هو مجموعة إدارة بناء شاملة قائمة على السحابة تقدم أدوات تتبع المشاريع والمالية والمستندات والفريق.",

    "projects.12.title": "ماجوس AI - شريك التداول المدعوم بالذكاء الاصطناعي",
    "projects.12.description":
      "ماجوس AI هي منصة تداول متقدمة مدعومة بالذكاء الاصطناعي مصممة لتمكين المتداولين من خلال الرؤى الذكية والتحليلات التنبؤية.",

    // Contact Section
    "contact.subtitle": "تواصل معي للتعاون أو الاستفسارات أو فقط لترحيب",
    "contact.getInTouch": "ابق على تواصل",
    "contact.email": "البريد الإلكتروني",
    "contact.responseTime": "رد خلال 24 ساعة",
    "contact.phone": "الهاتف",
    "contact.location": "الموقع",
    "contact.availability": "التوفر",
    "contact.availabilityText":
      "أنا متاح حاليًا للمشاريع المستقلة وفرص العمل بدوام كامل.",
    "contact.sendMessage": "إرسال رسالة",
    "contact.form.name": "اسمك",
    "contact.form.namePlaceholder": "أدخل اسمك",
    "contact.form.email": "البريد الإلكتروني",
    "contact.form.emailPlaceholder": "أدخل بريدك الإلكتروني",
    "contact.form.subject": "الموضوع",
    "contact.form.subjectPlaceholder": "بماذا يتعلق هذا؟",
    "contact.form.message": "الرسالة",
    "contact.form.messagePlaceholder": "أخبرني عن مشروعك أو استفسارك",
    "contact.form.sendButton": "إرسال الرسالة",
    "contact.hireMe": "وظفني مباشرة",
    "contact.hireMeSubtitle":
      "هل تفضل العمل عبر منصة مستقلة؟ تجدني على هذه الأسواق",
    "contact.fiverr.title": "وظفني على Fiverr",
    "contact.fiverr.description": "حلول مدعومة بالذكاء الاصطناعي مع تسليم سريع",
    "contact.fiverr.button": "عرض الملف",
    "contact.upwork.title": "عرض ملفي على Upwork",
    "contact.upwork.description": "تطبيقات enterprise ذكية",
    "contact.upwork.button": "عرض الملف",
    "contact.bark.title": "تواصل على Bark",
    "contact.bark.description": "أتمتة الأعمال المحلية الذكية",
    "contact.bark.button": "عرض الملف",

    // Footer Section
    "footer.description":
      "ضمان برمجيات خالية من الأخطاء من خلال الدقة والاختبار والجودة. متخصص في الاختبار اليدوي والآلي مع تكامل الذكاء الاصطناعي.",
    "footer.quickLinks": "روابط سريعة",
    "footer.services": "الخدمات",
    "footer.contactInfo": "معلومات الاتصال",
    "footer.rights": "جميع الحقوق محفوظة.",
    "footer.madeWith": "صنع بـ",
    "footer.by": "بواسطة",
    "footer.backToTop": "العودة إلى الأعلى",

    "testimonials.badge": "تعليقات العملاء",
    "testimonials.title": "شهادات العملاء",
    "testimonials.subtitle": "ما يقوله العملاء عن العمل معي",
    "testimonials.previous": "الشهادة السابقة",
    "testimonials.next": "الشهادة التالية",
    "testimonials.goTo": "انتقل إلى الشهادة",

    // Testimonial content
    "testimonials.1.name": "محمد أ.",
    "testimonials.1.role": "عميل",
    "testimonials.1.content":
      "فيجاي مطور استثنائي. قدم موقعًا إلكترونيًا للتجارة الإلكترونية عالي الجودة تجاوز توقعاتي. كانت عنايته بالتفاصيل وتواصله طوال المشروع استثنائية.",
    "testimonials.1.project": "تطوير موقع تجارة إلكترونية",
    "testimonials.1.date": "ديسمبر 2023",

    "testimonials.2.name": "سارة ت.",
    "testimonials.2.role": "عميل",
    "testimonials.2.content":
      "كان العمل مع فيجاي متعة. حول موقعنا الإلكتروني القديم إلى منصة حديثة وسريعة الاستجابة تمثل علامتنا التجارية بشكل مثالي. كانت خبرته التقنية وحلوله الإبداعية مذهلة.",
    "testimonials.2.project": "إعادة تصميم الموقع الإلكتروني",
    "testimonials.2.date": "نوفمبر 2023",

    "testimonials.3.name": "جيمس ك.",
    "testimonials.3.role": "عميل",
    "testimonials.3.content":
      "طور فيجاي تطبيق ويب مخصص لأعمالنا مما حسن بشكل كبير كفاءة سير العمل لدينا. كان محترفًا ولبى جميع المواعيد النهائية وقدم دعمًا ممتازًا بعد الإطلاق.",
    "testimonials.3.project": "تطبيق ويب مخصص",
    "testimonials.3.date": "أكتوبر 2023",

    "testimonials.4.name": "ليزا م.",
    "testimonials.4.role": "عميل",
    "testimonials.4.content":
      "وظفت فيجاي لمشروع React معقد وقد تجاوز توقعاتي. كوده نظيف وموثق جيدًا ونفذ جميع الميزات المطلوبة بشكل مثالي. موصى به بشدة!",
    "testimonials.4.project": "تطوير تطبيق React",
    "testimonials.4.date": "سبتمبر 2023",

    "testimonials.5.name": "روبرت د.",
    "testimonials.5.role": "عميل",
    "testimonials.5.content":
      "تظهر خبرة فيجاي في تطوير الواجهة الأمامية في الواجهات الجميلة التي يصممها. أخذ أفكارنا الغامضة وحولها إلى موقع إلكتروني مذهل وسهل الاستخدام يحبه عملاؤنا.",
    "testimonials.5.project": "تطوير الواجهة الأمامية",
    "testimonials.5.date": "أغسطس 2023",

    "testimonials.6.name": "إيميلي و.",
    "testimonials.6.role": "عميل",
    "testimonials.6.content":
      "عمل استثنائي في مشروع لوحة التحكم لدينا! أنشأ فيجاي لوحة إدارة بديهية مع تصورات بيانات جميلة. كان تواصله ممتازًا طوال دورة حياة المشروع.",
    "testimonials.6.project": "تطوير لوحة التحكم",
    "testimonials.6.date": "يوليو 2023",
  },
};

const I18nContext = createContext<I18nContextType | undefined>(undefined);

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<Locale>("en");

  const dir = rtlLocales.includes(locale) ? "rtl" : "ltr";

  useEffect(() => {
    const saved = localStorage.getItem("locale") as Locale;
    if (saved) {
      setLocale(saved);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("locale", locale);
    document.documentElement.setAttribute("dir", dir);
    document.documentElement.setAttribute("lang", locale);
  }, [locale, dir]);

  const t = (key: string): string => {
    return translations[locale]?.[key] || translations.en[key] || key;
  };

  return (
    <I18nContext.Provider value={{ locale, setLocale, t, dir }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (context === undefined) {
    throw new Error("useI18n must be used within an I18nProvider");
  }
  return context;
}
