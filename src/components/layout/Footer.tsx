import React from "react";
import { useI18n } from "@/contexts/I18nContext";
import {
  Heart,
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Twitter,
  Facebook,
  ArrowUp,
} from "lucide-react";

export function Footer() {
  const { t, dir, locale, setLocale } = useI18n();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  // RTL alignment classes
  const textAlignClass = dir === "rtl" ? "text-right" : "text-left";
  const flexDirectionClass = dir === "rtl" ? "flex-row-reverse" : "flex-row";
  const marginDirectionClass = dir === "rtl" ? "ml-4" : "mr-4";

  return (
    <footer
      className="bg-background border-t border-card-border relative overflow-hidden"
      dir={dir}
    >
      {/* Background elements matching the Hero */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand/Description */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold bg-gradient-hero bg-clip-text text-transparent mb-4">
              VIJAY KUMAR
            </h3>
            <p className="text-muted-foreground mb-6">
              {t("footer.description")}
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/VijayDvaswani"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-surface border border-card-border flex items-center justify-center text-foreground hover:bg-accent hover:text-white transition-colors duration-300"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/vijaykumarvaswani/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-surface border border-card-border flex items-center justify-center text-foreground hover:bg-accent hover:text-white transition-colors duration-300"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              {/* <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-surface border border-card-border flex items-center justify-center text-foreground hover:bg-accent hover:text-white transition-colors duration-300"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-surface border border-card-border flex items-center justify-center text-foreground hover:bg-accent hover:text-white transition-colors duration-300"
              >
                <Facebook className="h-5 w-5" />
              </a> */}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-6">
              {t("footer.quickLinks")}
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#home"
                  className="text-muted-foreground hover:text-accent transition-colors duration-300"
                >
                  {t("nav.home")}
                </a>
              </li>

              <li>
                <a
                  href="#skills"
                  className="text-muted-foreground hover:text-accent transition-colors duration-300"
                >
                  {t("nav.skills")}
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-muted-foreground hover:text-accent transition-colors duration-300"
                >
                  {t("nav.projects")}
                </a>
              </li>
              <li>
                <a
                  href="#testlab"
                  className="text-muted-foreground hover:text-accent transition-colors duration-300"
                >
                  {t("nav.testlab")}
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-muted-foreground hover:text-accent transition-colors duration-300"
                >
                  {t("nav.contact")}
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-6">
              {t("footer.services")}
            </h4>
            <ul className="space-y-3">
              <li>
                <span className="text-muted-foreground">
                  {t("skills.web.title")}
                </span>
              </li>
              <li>
                <span className="text-muted-foreground">
                  {t("skills.mobile.title")}
                </span>
              </li>
              <li>
                <span className="text-muted-foreground">
                  {t("skills.api.title")}
                </span>
              </li>
              <li>
                <span className="text-muted-foreground">
                  {t("skills.ai.title")}
                </span>
              </li>
              <li>
                <span className="text-muted-foreground">
                  {t("skills.cicd.title")}
                </span>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-6">
              {t("footer.contactInfo")}
            </h4>
            <ul className="space-y-4">
              <li className={`flex items-start ${flexDirectionClass}`}>
                <Mail className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                <div className={marginDirectionClass} />
                <span className="text-muted-foreground">
                  vijay.dvaswani@gmail.com
                </span>
              </li>
              <li className={`flex items-start ${flexDirectionClass}`}>
                <Phone className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                <div className={marginDirectionClass} />
                <span className="text-muted-foreground">+92-3332532999</span>
              </li>
              <li className={`flex items-start ${flexDirectionClass}`}>
                <MapPin className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                <div className={marginDirectionClass} />
                <span className="text-muted-foreground">Karachi, Pakistan</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-card-border">
          <div
            className={`flex flex-col md:flex-row justify-between items-center ${flexDirectionClass}`}
          >
            <div
              className={`flex items-center ${flexDirectionClass} mb-4 md:mb-0`}
            >
              <p className="text-muted-foreground text-sm">
                © {currentYear} SQA Engineer. {t("footer.rights")}
              </p>
              <span className="mx-2 text-muted-foreground">•</span>
              <p className="text-muted-foreground text-sm flex items-center">
                {t("footer.madeWith")}{" "}
                <Heart className="h-4 w-4 text-accent mx-1" /> {t("footer.by")}{" "}
                SQA Engineer
              </p>
            </div>

            <div className={`flex items-center ${flexDirectionClass}`}>
              {/* Language Selector */}
              <div className={`flex items-center ${marginDirectionClass}`}>
                <select
                  value={locale}
                  onChange={(e) =>
                    setLocale(e.target.value as "en" | "es" | "ar")
                  }
                  className="bg-surface border border-card-border rounded-lg py-1 px-2 text-sm text-foreground focus:ring-2 focus:ring-accent focus:border-transparent"
                >
                  <option value="en">English</option>
                  <option value="es">Español</option>
                  <option value="ar">العربية</option>
                </select>
              </div>

              {/* Back to Top Button */}
              <button
                onClick={scrollToTop}
                className="w-10 h-10 rounded-full bg-surface border border-card-border flex items-center justify-center text-foreground hover:bg-accent hover:text-white transition-colors duration-300"
                aria-label={t("footer.backToTop")}
              >
                <ArrowUp className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
