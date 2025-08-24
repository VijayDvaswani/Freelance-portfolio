import React from 'react';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useTheme } from '@/contexts/ThemeContext';
import { useI18n } from '@/contexts/I18nContext';
import { Moon, Sun, Monitor, Globe } from 'lucide-react';

export function Header() {
  const { theme, setTheme } = useTheme();
  const { locale, setLocale, t } = useI18n();

  const navItems = [
    { key: 'home', href: '#home' },
    { key: 'about', href: '#about' },
    { key: 'skills', href: '#skills' },
    { key: 'projects', href: '#projects' },
    { key: 'testlab', href: '#testlab' },
    { key: 'contact', href: '#contact' },
  ];

  const themeIcon = {
    light: <Sun className="h-4 w-4" />,
    dark: <Moon className="h-4 w-4" />,
    system: <Monitor className="h-4 w-4" />
  };

  return (
    <header className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-card-border z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            QA Lab
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                {t(`nav.${item.key}`)}
              </a>
            ))}
          </nav>

          {/* Controls */}
          <div className="flex items-center space-x-4">
            {/* Language Selector */}
            <Select value={locale} onValueChange={(value) => setLocale(value as any)}>
              <SelectTrigger className="w-[120px] bg-surface border-card-border">
                <Globe className="h-4 w-4 me-2" />
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="en">English</SelectItem>
                <SelectItem value="es">Español</SelectItem>
                <SelectItem value="ar">العربية</SelectItem>
              </SelectContent>
            </Select>

            {/* Theme Selector */}
            <Select value={theme} onValueChange={(value) => setTheme(value as any)}>
              <SelectTrigger className="w-[120px] bg-surface border-card-border">
                {themeIcon[theme]}
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">Light</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
                <SelectItem value="system">System</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
    </header>
  );
}