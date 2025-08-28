import React from "react";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { I18nProvider } from "@/contexts/I18nContext";
import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero";
import { Skills } from "@/components/sections/Skills";
import { TestLab } from "@/components/sections/TestLab";

const Index = () => {
  return (
    <ThemeProvider>
      <I18nProvider>
        <div className="min-h-screen bg-background text-foreground">
          <Header />
          <main>
            <Hero />
            <Skills />
            <TestLab />
          </main>
        </div>
      </I18nProvider>
    </ThemeProvider>
  );
};

export default Index;
