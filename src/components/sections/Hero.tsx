import React from 'react';
import { Button } from '@/components/ui/button';
import { useI18n } from '@/contexts/I18nContext';
import { ArrowRight, Play } from 'lucide-react';

export function Hero() {
  const { t } = useI18n();

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-hero opacity-10"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-surface border border-card-border mb-8">
            <span className="text-sm font-medium text-muted-foreground">
              {t('hero.title')}
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              {t('hero.subtitle')}
            </span>
          </h1>

          {/* Description */}
          <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            {t('hero.description')}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-primary hover:shadow-glow transition-all duration-300">
              {t('hero.cta.projects')}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-card-border bg-surface/50 hover:bg-surface-hover"
            >
              <Play className="mr-2 h-5 w-5" />
              {t('hero.cta.testlab')}
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto">
            <div>
              <div className="text-3xl font-bold text-primary">500+</div>
              <div className="text-sm text-muted-foreground">Tests Automated</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-secondary">99.9%</div>
              <div className="text-sm text-muted-foreground">Bug Detection Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent">50+</div>
              <div className="text-sm text-muted-foreground">Projects Delivered</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}