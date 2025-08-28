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

      <div className="container mx-auto px-6 mt-20 md:mt-6 text-center relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Badge with animation */}
          <div
            className={`inline-flex items-center px-4 py-2 rounded-full bg-surface border border-card-border mb-3 transform transition-all duration-1000 ${
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
            className={`text-3xl md:text-6xl lg:text-7xl font-bold leading-tight max-w-5xl mx-auto transform transition-all duration-1000 delay-150 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              {t("hero.subtitle")}
            </span>
          </h1>

          {/* Profile Boxes Section */}
          <div
            className={`grid grid-cols-1  mb-6 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-12 transform transition-all duration-1000 delay-700 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            {/* Fiverr Card */}
            <div className="flex flex-col justify-between rounded-3xl border border-card-border bg-surface p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mb-6">
                  <span className="text-2xl">💼</span>
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">
                  Hire Me on Fiverr
                </h3>
                <p className="text-base text-muted-foreground leading-relaxed">
                  SQA Engineer with rapid delivery
                </p>
              </div>
              <a
                href="https://www.fiverr.com/s/kLZ2dLw"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center justify-center text-base font-medium text-accent hover:underline py-3 px-6 rounded-xl bg-accent/5 hover:bg-accent/10 transition-colors duration-300"
              >
                <ExternalLink className="mr-2 h-5 w-5" />
                View Profile
              </a>
            </div>

            {/* Upwork Card */}
            <div className="flex flex-col justify-between rounded-3xl border border-card-border bg-surface p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-purple-500/20 flex items-center justify-center mb-6">
                  <span className="text-2xl">🧳</span>
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">
                  View My Upwork Profile
                </h3>
                <p className="text-base text-muted-foreground leading-relaxed">
                  SQA Engineer for enterprise-grade applications
                </p>
              </div>
              <a
                href="https://www.upwork.com/freelancers/vijaykumar2041"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center justify-center text-base font-medium text-accent hover:underline py-3 px-6 rounded-xl bg-accent/5 hover:bg-accent/10 transition-colors duration-300"
              >
                <ExternalLink className="mr-2 h-5 w-5" />
                View Profile
              </a>
            </div>

            {/* LinkedIn Card */}
            <div className="flex flex-col justify-between rounded-3xl border border-card-border bg-surface p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-blue-500/20 flex items-center justify-center mb-6">
                  <span className="text-2xl">🌐</span>
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">
                  Connect on LinkedIn
                </h3>
                <p className="text-base text-muted-foreground leading-relaxed">
                  SQA Engineer passionate about quality assurance
                </p>
              </div>
              <a
                href="http://www.linkedin.com/in/vijaykumarvaswani"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center justify-center text-base font-medium text-accent hover:underline py-3 px-6 rounded-xl bg-accent/5 hover:bg-accent/10 transition-colors duration-300"
              >
                <ExternalLink className="mr-2 h-5 w-5" />
                View Profile
              </a>
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
