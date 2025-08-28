import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/contexts/I18nContext";
import {
  ArrowRight,
  Play,
  ExternalLink,
  Star,
  TrendingUp,
  Zap,
} from "lucide-react";

export function Hero() {
  const { t } = useI18n();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animations after component mounts
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-hero opacity-10"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-slow"></div>
      <div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse-slow"
        style={{ animationDelay: "2s" }}
      ></div>

      {/* Floating elements */}
      <div className="absolute top-20 left-10 opacity-70 animate-float">
        <div className="w-10 h-10 bg-accent/30 rounded-full"></div>
      </div>
      <div
        className="absolute bottom-20 right-10 opacity-70 animate-float"
        style={{ animationDelay: "1s" }}
      >
        <div className="w-8 h-8 bg-primary/30 rounded-full"></div>
      </div>
      <div
        className="absolute top-1/3 right-1/4 opacity-70 animate-float"
        style={{ animationDelay: "2s" }}
      >
        <div className="w-6 h-6 bg-secondary/30 rounded-full"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Badge with animation */}
          <div
            className={`inline-flex items-center px-4 py-2 rounded-full bg-surface border border-card-border mb-8 transform transition-all duration-1000 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <span className="text-sm font-medium text-muted-foreground flex items-center">
              <Star className="h-4 w-4 mr-2 text-accent fill-current" />
              {t("hero.title")}
            </span>
          </div>

          {/* Main heading with animation */}
          <h1
            className={`text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight transform transition-all duration-1000 delay-150 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              {t("hero.subtitle")}
            </span>
          </h1>

          {/* Description with animation */}
          <p
            className={`text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed transform transition-all duration-1000 delay-300 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            {t("hero.description")}
          </p>

          {/* CTA Buttons with animation */}
          {/* <div
            className={`flex flex-col sm:flex-row gap-4 justify-center transform transition-all duration-1000 delay-500 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <Button
              size="lg"
              className="bg-gradient-primary hover:shadow-glow transition-all duration-300 group"
            >
              <span>{t("hero.cta.projects")}</span>
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-card-border bg-surface/50 hover:bg-surface-hover group"
            >
              <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              {t("hero.cta.testlab")}
            </Button>
          </div> */}

          {/* Additional CTAs with animation */}
          <div
            className={`flex flex-wrap justify-center gap-3 mt-6 transform transition-all duration-1000 delay-700 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <a
              href="https://fiverr.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 rounded-full bg-surface border border-card-border text-sm font-medium hover:bg-surface-hover transition-all duration-300 group"
            >
              💼 Hire Me on Fiverr
              <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 rounded-full bg-surface border border-card-border text-sm font-medium hover:bg-surface-hover transition-all duration-300 group"
            >
              🔗 Connect on LinkedIn
              <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
            </a>

            <a
              href="#portfolio"
              className="inline-flex items-center px-4 py-2 rounded-full bg-surface border border-card-border text-sm font-medium hover:bg-surface-hover transition-all duration-300 group"
            >
              🎨 View My Portfolio
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>

          {/* Stats with animation */}
          <div
            className={`grid grid-cols-3 md:grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto transform transition-all duration-1000 delay-900 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <div className="text-center group">
              <div className="text-3xl font-bold text-primary flex items-center justify-center">
                <Zap className="h-6 w-6 mr-2 group-hover:scale-110 transition-transform" />
                500+
              </div>
              <div className="text-sm text-muted-foreground mt-2">
                Tests Automated
              </div>
            </div>
            <div className="text-center group">
              <div className="text-3xl font-bold text-secondary flex items-center justify-center">
                <TrendingUp className="h-6 w-6 mr-2 group-hover:scale-110 transition-transform" />
                99.9%
              </div>
              <div className="text-sm text-muted-foreground mt-2">
                Bug Detection Rate
              </div>
            </div>
            <div className="text-center group">
              <div className="text-3xl font-bold text-accent flex items-center justify-center">
                <Star className="h-6 w-6 mr-2 group-hover:scale-110 transition-transform" />
                50+
              </div>
              <div className="text-sm text-muted-foreground mt-2">
                Projects Delivered
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-muted-foreground/50 rounded-full mt-2"></div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 0.8; }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-pulse-slow {
          animation: pulse-slow 8s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
