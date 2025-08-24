import React, { createContext, useContext, useEffect, useState } from 'react';

type Locale = 'en' | 'es' | 'fr' | 'de' | 'tr' | 'pt-BR' | 'it' | 'ru' | 'ja' | 'zh-CN' | 'ur' | 'ar';

interface I18nContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string) => string;
  dir: 'ltr' | 'rtl';
}

const rtlLocales: Locale[] = ['ur', 'ar'];

const translations = {
  en: {
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.skills': 'Skills',
    'nav.projects': 'Projects',
    'nav.testlab': 'Test Lab',
    'nav.contact': 'Contact',
    'hero.title': 'SQA Engineer',
    'hero.subtitle': 'I Build AI-Enhanced Quality Assurance Solutions That Drive Results',
    'hero.description': 'Specializing in Manual & Automated Testing with AI Integration, Performance Testing, and Quality Metrics Analytics',
    'hero.cta.projects': 'View Projects',
    'hero.cta.testlab': 'Open Test Lab',
    'skills.title': 'Expert QA Services',
    'skills.subtitle': 'Comprehensive Quality Assurance Solutions',
  },
  es: {
    'nav.home': 'Inicio',
    'nav.about': 'Acerca',
    'nav.skills': 'Habilidades',
    'nav.projects': 'Proyectos',
    'nav.testlab': 'Lab de Pruebas',
    'nav.contact': 'Contacto',
    'hero.title': 'Ingeniero SQA',
    'hero.subtitle': 'Desarrollo Soluciones de Aseguramiento de Calidad Mejoradas con IA que Generan Resultados',
    'hero.description': 'Especializado en Pruebas Manuales y Automatizadas con Integración de IA, Pruebas de Rendimiento y Análisis de Métricas de Calidad',
    'hero.cta.projects': 'Ver Proyectos',
    'hero.cta.testlab': 'Abrir Lab de Pruebas',
    'skills.title': 'Servicios Expertos de QA',
    'skills.subtitle': 'Soluciones Integrales de Aseguramiento de Calidad',
  },
  ar: {
    'nav.home': 'الرئيسية',
    'nav.about': 'حول',
    'nav.skills': 'المهارات',
    'nav.projects': 'المشاريع',
    'nav.testlab': 'مختبر الاختبار',
    'nav.contact': 'اتصل',
    'hero.title': 'مهندس ضمان الجودة',
    'hero.subtitle': 'أبني حلول ضمان الجودة المعززة بالذكاء الاصطناعي التي تحقق النتائج',
    'hero.description': 'متخصص في الاختبار اليدوي والآلي مع تكامل الذكاء الاصطناعي واختبار الأداء وتحليل مقاييس الجودة',
    'hero.cta.projects': 'عرض المشاريع',
    'hero.cta.testlab': 'فتح مختبر الاختبار',
    'skills.title': 'خدمات ضمان الجودة المتخصصة',
    'skills.subtitle': 'حلول شاملة لضمان الجودة',
  }
  // Add more translations as needed
};

const I18nContext = createContext<I18nContextType | undefined>(undefined);

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<Locale>('en');

  const dir = rtlLocales.includes(locale) ? 'rtl' : 'ltr';

  useEffect(() => {
    const saved = localStorage.getItem('locale') as Locale;
    if (saved) {
      setLocale(saved);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('locale', locale);
    document.documentElement.setAttribute('dir', dir);
    document.documentElement.setAttribute('lang', locale);
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
    throw new Error('useI18n must be used within an I18nProvider');
  }
  return context;
}