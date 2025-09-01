import React, { useEffect, useState, useRef } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useI18n } from "@/contexts/I18nContext";
import {
  TestTube,
  Bot,
  Database,
  Gauge,
  GitBranch,
  BarChart3,
} from "lucide-react";

export function Skills() {
  const { t, dir } = useI18n();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Intersection Observer for animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const skills = [
    {
      icon: <TestTube className="h-8 w-8" />,
      title: t("skills.web.title"),
      description: t("skills.web.desc"),
      tools: t("skills.web.tools"),
      color: "from-blue-500/10 to-blue-600/10",
      hoverColor: "hover:from-blue-500/20 hover:to-blue-600/20",
      iconColor: "text-blue-500",
    },
    {
      icon: <Bot className="h-8 w-8" />,
      title: t("skills.mobile.title"),
      description: t("skills.mobile.desc"),
      tools: t("skills.mobile.tools"),
      color: "from-emerald-500/10 to-emerald-600/10",
      hoverColor: "hover:from-emerald-500/20 hover:to-emerald-600/20",
      iconColor: "text-emerald-500",
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: t("skills.api.title"),
      description: t("skills.api.desc"),
      tools: t("skills.api.tools"),
      color: "from-violet-500/10 to-violet-600/10",
      hoverColor: "hover:from-violet-500/20 hover:to-violet-600/20",
      iconColor: "text-violet-500",
    },
    {
      icon: <Gauge className="h-8 w-8" />,
      title: t("skills.ai.title"),
      description: t("skills.ai.desc"),
      tools: t("skills.ai.tools"),
      color: "from-orange-500/10 to-orange-600/10",
      hoverColor: "hover:from-orange-500/20 hover:to-orange-600/20",
      iconColor: "text-orange-500",
    },
    {
      icon: <GitBranch className="h-8 w-8" />,
      title: t("skills.cicd.title"),
      description: t("skills.cicd.desc"),
      tools: t("skills.cicd.tools"),
      color: "from-purple-500/10 to-purple-600/10",
      hoverColor: "hover:from-purple-500/20 hover:to-purple-600/20",
      iconColor: "text-purple-500",
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: t("skills.metrics.title"),
      description: t("skills.metrics.desc"),
      tools: t("skills.metrics.tools"),
      color: "from-cyan-500/10 to-cyan-600/10",
      hoverColor: "hover:from-cyan-500/20 hover:to-cyan-600/20",
      iconColor: "text-cyan-500",
    },
  ];

  // Dynamic spacing classes for RTL
  const spacingClass = dir === "rtl" ? "space-x-reverse" : "";

  return (
    <section
      id="skills"
      className="py-24 bg-surface/20 overflow-hidden relative"
      ref={sectionRef}
    >
      {/* Enhanced background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>

        {/* Diagonal blurred lines from bottom-left to top-right */}
        <div className="absolute bottom-0 left-0 w-[400px] h-1 bg-gradient-to-r from-transparent via-primary to-transparent rotate-[135deg] translate-x-[-100px] translate-y-[100px] blur-2xl opacity-40"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-1 bg-gradient-to-r from-transparent via-secondary to-transparent rotate-[135deg] translate-x-[100px] translate-y-[300px] blur-3xl opacity-40"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section header with improved animation */}
        <div
          className={`text-center mb-20 transform transition-all duration-1000 ease-out ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="inline-block mb-4">
            <span className="px-4 py-1.5 text-sm font-medium rounded-full bg-primary/10 text-primary border border-primary/20">
              {t("skills.badge")}
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            {t("skills.title")}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {t("skills.subtitle")}
          </p>
        </div>

        {/* Skills Grid - Fixed RTL alignment and spacing */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`transform transition-all duration-700 ease-out ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <Card
                className={`h-full flex flex-col border border-border/40 shadow-xl hover:shadow-2xl transition-all duration-500 group bg-gradient-to-br ${skill.color} ${skill.hoverColor} backdrop-blur-sm rounded-3xl overflow-hidden hover:-translate-y-2`}
              >
                {/* Compact header with less vertical space */}
                <CardHeader className="pb-3 pt-3 relative">
                  <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
                  <div
                    className={`flex items-center space-x-4 ${spacingClass}`}
                    dir={dir}
                  >
                    <div
                      className={`p-3 rounded-xl bg-background/90 shadow-md ${skill.iconColor} group-hover:scale-105 transition-all duration-300 border border-border/30`}
                    >
                      {skill.icon}
                    </div>
                    <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors duration-300">
                      {skill.title}
                    </CardTitle>
                  </div>
                </CardHeader>

                <div className="px-6 h-px bg-gradient-to-r from-transparent via-border/30 to-transparent"></div>

                <CardContent className="flex flex-col flex-grow py-5">
                  <CardDescription className="text-muted-foreground mb-5 text-base leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                    {skill.description}
                  </CardDescription>

                  <div className="mt-auto">
                    <h4 className="text-sm font-semibold text-foreground/90 mb-3 tracking-wide uppercase">
                      {t("skills.tech")}
                    </h4>
                    <ul className="space-y-2">
                      {Array.isArray(skill.tools) &&
                        skill.tools.map((tool, toolIndex) => (
                          <li
                            key={toolIndex}
                            className="flex items-center text-muted-foreground group-hover:text-foreground/90 transition-colors duration-300"
                            dir={dir}
                          >
                            <span
                              className={`inline-block w-1.5 h-1.5 rounded-full bg-primary/80 ${
                                dir === "rtl" ? "ml-2" : "mr-2"
                              } flex-shrink-0`}
                            ></span>
                            <span className="text-sm font-medium">{tool}</span>
                          </li>
                        ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Enhanced Stats Section - Fixed RTL alignment */}
        <div
          className={`mt-28 bg-surface/40 border border-border/30 rounded-3xl p-10 backdrop-blur-md shadow-xl transform transition-all duration-1000 delay-700 ease-out ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8" dir={dir}>
            {[
              {
                value: "95%",
                label: t("skills.stats.1"),
                color: "text-primary",
              },
              {
                value: "100+",
                label: t("skills.stats.2"),
                color: "text-secondary",
              },
              {
                value: "90%",
                label: t("skills.stats.3"),
                color: "text-accent",
              },
              {
                value: "40+",
                label: t("skills.stats.4"),
                color: "text-purple-500",
              },
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div
                  className={`text-4xl md:text-5xl font-bold mb-3 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300`}
                >
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Enhanced animations */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delay {
          animation: float 6s ease-in-out infinite;
          animation-delay: 1s;
        }
      `}</style>
    </section>
  );
}
