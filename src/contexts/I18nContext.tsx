import React, { createContext, useContext, useEffect, useState } from "react";

type Locale = "en" | "es" | "ar";

interface I18nContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string) => string | string[];
  dir: "ltr" | "rtl";
}

const rtlLocales: Locale[] = ["ar"];

const translations = {
  en: {
    "nav.home": "Home",
    "nav.about": "About",
    "nav.skills": "Skills",
    "nav.projects": "Projects",
    "nav.testlab": "Test Lab",
    "nav.contact": "Contact",

    "hero.title": "SQA Engineer",
    "hero.subtitle":
      "Ensuring flawless software through precision, testing, and quality.",
    "hero.description":
      "Specializing in Manual & Automated Testing with AI Integration, Performance Testing, and Quality Metrics Analytics",
    "hero.cta.projects": "View Projects",
    "hero.cta.testlab": "Open Test Lab",

    "skills.title": "Expert QA Services",
    "skills.subtitle": "Comprehensive Quality Assurance Solutions",
    "skills.badge": "My Skills",

    // ✅ Skills
    "skills.web.title": "Web App Development",
    "skills.web.desc":
      "Modern React.js applications with beautiful, responsive interfaces",
    "skills.web.tools": [
      "React.js",
      "Next.js",
      "Responsive Design",
      "PWA Development",
    ],

    "skills.auto.title": "Test Automation",
    "skills.auto.desc":
      "Advanced automation frameworks with AI-enhanced test generation and maintenance",
    "skills.auto.tools": [
      "Cypress",
      "Playwright",
      "Selenium",
      "AI Test Generation",
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

    "skills.perf.title": "Performance Testing",
    "skills.perf.desc":
      "Load, stress, and performance optimization testing with detailed analytics",
    "skills.perf.tools": ["JMeter", "K6", "LoadRunner", "Performance Metrics"],

    "skills.cicd.title": "CI/CD Integration",
    "skills.cicd.desc":
      "Seamless integration of testing into continuous delivery pipelines",
    "skills.cicd.tools": [
      "Jenkins",
      "GitHub Actions",
      "Docker",
      "Test Reporting",
    ],
    "skills.tech": "Technologies",

    "skills.metrics.title": "QA Metrics & Analytics",
    "skills.metrics.desc":
      "Data-driven quality insights with comprehensive reporting and dashboards",
    "skills.metrics.tools": [
      "Test Coverage",
      "Defect Metrics",
      "Quality Reports",
      "KPI Tracking",
    ],

    // ✅ Stats
    "skills.stats.1": "Client Satisfaction",
    "skills.stats.2": "Tests Automated",
    "skills.stats.3": "Bug Detection",
    "skills.stats.4": "Projects",

    // ✅ Test Lab
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
    "projects.subtitle":
      "Explore my portfolio of innovative solutions across different platforms and technologies",
    "projects.categories.all": "All Projects",
    "projects.categories.web": "Web Applications",
    "projects.categories.mobile": "Mobile Apps",
    "projects.categories.software": "Software",
    "projects.liveDemo": "Live Demo",
    "projects.code": "Code",
    "projects.cta": "Interested in working together on your next project?",

    "projects.1.title": "E-Commerce Platform",
    "projects.1.description":
      "A full-featured online store with AI-powered recommendations and secure payment processing.",

    "projects.2.title": "Fitness Tracker Mobile App",
    "projects.2.description":
      "A health and wellness app that tracks workouts, nutrition, and provides personalized insights.",

    "projects.3.title": "Inventory Management System",
    "projects.3.description":
      "Enterprise software for tracking inventory, sales, and supply chain operations.",

    "projects.4.title": "Travel Booking Portal",
    "projects.4.description":
      "A comprehensive travel booking website with flight, hotel, and car rental options.",

    "projects.5.title": "Language Learning App",
    "projects.5.description":
      "Mobile application for learning new languages with interactive exercises and AI tutor.",

    "projects.6.title": "Data Visualization Dashboard",
    "projects.6.description":
      "Analytics software for visualizing complex data sets and generating insights.",
    // Add to the en translations object
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
    // Add to the en translations object
    "footer.description":
      "Ensuring flawless software through precision, testing, and quality. Specializing in Manual & Automated Testing with AI Integration.",
    "footer.quickLinks": "Quick Links",
    "footer.services": "Services",
    "footer.contactInfo": "Contact Info",
    "footer.rights": "All rights reserved.",
    "footer.madeWith": "Made with",
    "footer.by": "by",
    "footer.backToTop": "Back to top",
  },

  es: {
    "nav.home": "Inicio",
    "nav.about": "Acerca",
    "nav.skills": "Habilidades",
    "nav.projects": "Proyectos",
    "nav.testlab": "Lab de Pruebas",
    "nav.contact": "Contacto",
    "skills.tech": "Tecnologías",
    "hero.title": "Ingeniero SQA",
    "hero.subtitle":
      "Asegurando un software impecable con precisión, pruebas y calidad.",
    "hero.description":
      "Especializado en Pruebas Manuales y Automatizadas con Integración de IA, Pruebas de Rendimiento y Análisis de Métricas de Calidad",
    "hero.cta.projects": "Ver Proyectos",
    "hero.cta.testlab": "Abrir Lab de Pruebas",

    "skills.title": "Servicios Expertos de QA",
    "skills.subtitle": "Soluciones Integrales de Aseguramiento de Calidad",
    "skills.badge": "Mis Habilidades",

    // ✅ Skills
    "skills.web.title": "Desarrollo de Aplicaciones Web",
    "skills.web.desc":
      "Aplicaciones modernas en React.js con interfaces hermosas y responsivas",
    "skills.web.tools": [
      "React.js",
      "Next.js",
      "Diseño Responsivo",
      "Desarrollo PWA",
    ],

    "skills.auto.title": "Automatización de Pruebas",
    "skills.auto.desc":
      "Frameworks avanzados con generación y mantenimiento de pruebas con IA",
    "skills.auto.tools": [
      "Cypress",
      "Playwright",
      "Selenium",
      "Generación de Pruebas con IA",
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

    "skills.perf.title": "Pruebas de Rendimiento",
    "skills.perf.desc":
      "Pruebas de carga, estrés y optimización de rendimiento con análisis detallados",
    "skills.perf.tools": [
      "JMeter",
      "K6",
      "LoadRunner",
      "Métricas de Rendimiento",
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
      "Cobertura de Pruebas",
      "Métricas de Defectos",
      "Reportes de Calidad",
      "Seguimiento de KPIs",
    ],

    // ✅ Stats
    "skills.stats.1": "Satisfacción del Cliente",
    "skills.stats.2": "Pruebas Automatizadas",
    "skills.stats.3": "Detección de Errores",
    "skills.stats.4": "Proyectos",

    // ✅ Test Lab
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
    // Add to the es translations object
    "projects.subtitle":
      "Explora mi portafolio de soluciones innovadoras en diferentes plataformas y tecnologías",
    "projects.categories.all": "Todos los Proyectos",
    "projects.categories.web": "Aplicaciones Web",
    "projects.categories.mobile": "Aplicaciones Móviles",
    "projects.categories.software": "Software",
    "projects.liveDemo": "Demo en Vivo",
    "projects.code": "Código",
    "projects.cta": "¿Interesado en trabajar juntos en tu próximo proyecto?",

    "projects.1.title": "Plataforma de Comercio Electrónico",
    "projects.1.description":
      "Una tienda en línea completa con recomendaciones impulsadas por IA y procesamiento de pagos seguro.",

    "projects.2.title": "Aplicación Móvil de Seguimiento de Fitness",
    "projects.2.description":
      "Una aplicación de salud y bienestar que rastrea entrenamientos, nutrición y proporciona información personalizada.",

    "projects.3.title": "Sistema de Gestión de Inventario",
    "projects.3.description":
      "Software empresarial para el seguimiento de inventario, ventas y operaciones de la cadena de suministro.",

    "projects.4.title": "Portal de Reservas de Viajes",
    "projects.4.description":
      "Un sitio web completo de reservas de viajes con opciones de vuelos, hoteles y alquiler de coches.",

    "projects.5.title": "Aplicación de Aprendizaje de Idiomas",
    "projects.5.description":
      "Aplicación móvil para aprender nuevos idiomas con ejercicios interactivos y tutor de IA.",

    "projects.6.title": "Panel de Visualización de Datos",
    "projects.6.description":
      "Software de análisis para visualizar conjuntos de datos complejos y generar información.",
    // Add to the es translations object
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
    // Add to the es translations object
    "footer.description":
      "Asegurando software impecable a través de precisión, pruebas y calidad. Especializado en Pruebas Manuales y Automatizadas con Integración de IA.",
    "footer.quickLinks": "Enlaces Rápidos",
    "footer.services": "Servicios",
    "footer.contactInfo": "Información de Contacto",
    "footer.rights": "Todos los derechos reservados.",
    "footer.madeWith": "Hecho con",
    "footer.by": "por",
    "footer.backToTop": "Volver arriba",
  },

  ar: {
    "nav.home": "الرئيسية",
    "nav.about": "حول",
    "nav.skills": "المهارات",
    "nav.projects": "المشاريع",
    "nav.testlab": "مختبر الاختبار",
    "nav.contact": "اتصل",
    "skills.tech": "التقنيات",
    "hero.title": "مهندس ضمان الجودة",
    "hero.subtitle":
      "ضمان برمجيات خالية من الأخطاء من خلال الدقة والاختبار والجودة",
    "hero.description":
      "متخصص في الاختبار اليدوي والآلي مع تكامل الذكاء الاصطناعي واختبار الأداء وتحليل مقاييس الجودة",
    "hero.cta.projects": "عرض المشاريع",
    "hero.cta.testlab": "فتح مختبر الاختبار",

    "skills.title": "خدمات ضمان الجودة المتخصصة",
    "skills.subtitle": "حلول شاملة لضمان الجودة",
    "skills.badge": "مهاراتي",

    // ✅ Skills
    "skills.web.title": "تطوير تطبيقات الويب",
    "skills.web.desc": "تطبيقات React.js حديثة بواجهات جميلة ومتجاوبة",
    "skills.web.tools": ["React.js", "Next.js", "تصميم متجاوب", "تطبيقات PWA"],

    "skills.auto.title": "أتمتة الاختبارات",
    "skills.auto.desc":
      "أطر أتمتة متقدمة مع إنشاء وصيانة الاختبارات بالذكاء الاصطناعي",
    "skills.auto.tools": [
      "Cypress",
      "Playwright",
      "Selenium",
      "إنشاء اختبارات بالذكاء الاصطناعي",
    ],

    "skills.api.title": "اختبار واجهات API",
    "skills.api.desc": "دورة كاملة لاختبار API من الوظيفي إلى الأمني",
    "skills.api.tools": ["Postman", "REST Assured", "Newman", "توثيق API"],

    "skills.perf.title": "اختبارات الأداء",
    "skills.perf.desc":
      "اختبارات التحميل والإجهاد وتحسين الأداء مع تحليلات مفصلة",
    "skills.perf.tools": ["JMeter", "K6", "LoadRunner", "مقاييس الأداء"],

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
      "تغطية الاختبارات",
      "مقاييس العيوب",
      "تقارير الجودة",
      "تتبع مؤشرات الأداء",
    ],

    // ✅ Stats
    "skills.stats.1": "رضا العملاء",
    "skills.stats.2": "اختبارات مؤتمتة",
    "skills.stats.3": "اكتشاف الأخطاء",
    "skills.stats.4": "المشاريع",

    // ✅ Test Lab
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
    // Add to the ar translations object
    "projects.subtitle":
      "استكشف محفظتي من الحلول المبتكرة عبر منصات وتقنيات مختلفة",
    "projects.categories.all": "جميع المشاريع",
    "projects.categories.web": "تطبيقات الويب",
    "projects.categories.mobile": "تطبيقات الجوال",
    "projects.categories.software": "البرمجيات",
    "projects.liveDemo": "عرض مباشر",
    "projects.code": "الكود",
    "projects.cta": "هل أنت مهتم بالعمل معًا في مشروعك القادم؟",

    "projects.1.title": "منصة التجارة الإلكترونية",
    "projects.1.description":
      "متجر عبر الإنترنت كامل الميزات مع توصيات مدعومة بالذكاء الاصطناعي ومعالجة دفع آمنة.",

    "projects.2.title": "تطبيق تتبع اللياقة البدنية للجوال",
    "projects.2.description":
      "تطبيق صحة ولياقة بدنية يتتبع التمارين والتغذية ويوفر رؤى مخصصة.",

    "projects.3.title": "نظام إدارة المخزون",
    "projects.3.description":
      "برنامج مؤسسي لتتبع المخزون والمبيعات وعمليات سلسلة التوريد.",

    "projects.4.title": "بوابة حجز السفر",
    "projects.4.description":
      "موقع ويب شامل لحجز السفر مع خيارات الطيران والفنادق وتأجير السيارات.",

    "projects.5.title": "تطبيق تعلم اللغات",
    "projects.5.description":
      "تطبيق جوال لتعلم لغات جديدة مع تمارين تفاعلية ومدرب بالذكاء الاصطناعي.",

    "projects.6.title": "لوحة تصور البيانات",
    "projects.6.description":
      "برنامج تحليلات لتصور مجموعات البيانات المعقدة وتوليد الرؤى.",
    // Add to the ar translations object
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
    // Add to the ar translations object
    "footer.description":
      "ضمان برمجيات خالية من الأخطاء من خلال الدقة والاختبار والجودة. متخصص في الاختبار اليدوي والآلي مع تكامل الذكاء الاصطناعي.",
    "footer.quickLinks": "روابط سريعة",
    "footer.services": "الخدمات",
    "footer.contactInfo": "معلومات الاتصال",
    "footer.rights": "جميع الحقوق محفوظة.",
    "footer.madeWith": "صنع بـ",
    "footer.by": "بواسطة",
    "footer.backToTop": "العودة إلى الأعلى",
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
