import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useTheme } from "@/contexts/ThemeContext";
import { useI18n } from "@/contexts/I18nContext";
import { Moon, Sun, Monitor, Globe, Menu, X, TestTube2 } from "lucide-react";
import { cn } from "@/lib/utils";

export function Header() {
  const { theme, setTheme } = useTheme();
  const { locale, setLocale, t } = useI18n();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Update document direction based on language
  useEffect(() => {
    document.documentElement.dir = locale === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = locale;
  }, [locale]);

  const themeIcon = {
    light: <Sun className="h-4 w-4" />,
    dark: <Moon className="h-4 w-4" />,
    system: <Monitor className="h-4 w-4" />,
  };

  const languageOptions = {
    en: { name: "English" },
    es: { name: "Español" },
    ar: { name: "العربية" },
  };

  return (
    <>
      <header
        className={cn(
          "fixed top-0 w-full z-50 transition-all duration-300 ease-out",
          isScrolled
            ? "bg-background/95 backdrop-blur-md py-2 shadow-lg border-b border-border"
            : "bg-transparent backdrop-blur-0 py-4"
        )}
      >
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <div className="flex items-center space-x-2 rtl:space-x-reverse">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <TestTube2 className="h-6 w-6 text-primary" />
                </div>
                <div className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  QA Lab
                </div>
              </div>
            </div>

            {/* Desktop Controls */}
            <div className="hidden md:flex items-center space-x-3 rtl:space-x-reverse">
              {/* Language Selector */}
              <Select
                value={locale}
                onValueChange={(value) => setLocale(value as typeof locale)}
              >
                <SelectTrigger className="w-[130px] bg-background/50 hover:bg-background border-border transition-all duration-200 group">
                  <div className="flex items-center">
                    <Globe className="h-4 w-4 me-2 rtl:ms-2 rtl:me-0" />

                    <SelectValue className="group-hover:text-foreground" />
                  </div>
                </SelectTrigger>
                <SelectContent
                  className="bg-background border-border"
                  align={locale === "ar" ? "end" : "start"}
                >
                  {Object.entries(languageOptions).map(([key, { name }]) => (
                    <SelectItem
                      key={key}
                      value={key}
                      className="focus:bg-primary/10 transition-colors duration-150 hover:text-foreground"
                    >
                      <span className="me-2 rtl:ms-2 rtl:me-0">{name}</span>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {/* Theme Selector */}
              <Select
                value={theme}
                onValueChange={(value) => setTheme(value as typeof theme)}
              >
                <SelectTrigger className="w-[130px] bg-background/50 hover:bg-background border-border transition-all duration-200 group">
                  {themeIcon[theme as keyof typeof themeIcon]}
                  <SelectValue className="group-hover:text-foreground" />
                </SelectTrigger>
                <SelectContent
                  className="bg-background border-border"
                  align={locale === "ar" ? "end" : "start"}
                >
                  <SelectItem
                    value="light"
                    className="focus:bg-primary/10 transition-colors duration-150 hover:text-foreground"
                  >
                    Light
                  </SelectItem>
                  <SelectItem
                    value="dark"
                    className="focus:bg-primary/10 transition-colors duration-150 hover:text-foreground"
                  >
                    Dark
                  </SelectItem>
                  <SelectItem
                    value="system"
                    className="focus:bg-primary/10 transition-colors duration-150 hover:text-foreground"
                  >
                    System
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Mobile Controls - Always visible */}
            <div className="flex md:hidden items-center space-x-2 rtl:space-x-reverse">
              {/* Language Selector */}
              <Select
                value={locale}
                onValueChange={(value) => setLocale(value as typeof locale)}
              >
                <SelectTrigger className="w-12 h-12 p-0 bg-background/50 hover:bg-background border-border rounded-lg transition-all duration-200 flex items-center justify-center">
                  <Globe className="h-5 w-5" />
                </SelectTrigger>
                <SelectContent
                  className="bg-background border-border"
                  align={locale === "ar" ? "end" : "start"}
                >
                  {Object.entries(languageOptions).map(([key, { name }]) => (
                    <SelectItem
                      key={key}
                      value={key}
                      className="focus:bg-primary/10 transition-colors duration-150 hover:text-foreground"
                    >
                      <span className="me-2 rtl:ms-2 rtl:me-0">{name}</span>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {/* Theme Selector */}
              <Select
                value={theme}
                onValueChange={(value) => setTheme(value as typeof theme)}
              >
                <SelectTrigger className="w-12 h-12 p-0 bg-background/50 hover:bg-background border-border rounded-lg transition-all duration-200 flex items-center justify-center">
                  {themeIcon[theme as keyof typeof themeIcon]}
                </SelectTrigger>
                <SelectContent
                  className="bg-background border-border"
                  align={locale === "ar" ? "end" : "start"}
                >
                  <SelectItem
                    value="light"
                    className="focus:bg-primary/10 transition-colors duration-150 hover:text-foreground"
                  >
                    Light
                  </SelectItem>
                  <SelectItem
                    value="dark"
                    className="focus:bg-primary/10 transition-colors duration-150 hover:text-foreground"
                  >
                    Dark
                  </SelectItem>
                  <SelectItem
                    value="system"
                    className="focus:bg-primary/10 transition-colors duration-150 hover:text-foreground"
                  >
                    System
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
