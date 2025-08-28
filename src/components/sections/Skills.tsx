import React, { useEffect, useState, useRef } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
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
  const { t } = useI18n();
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
      title: "Manual Testing",
      description:
        "Comprehensive manual testing strategies including exploratory, usability, and regression testing",
      tools: [
        "Test Case Design",
        "Bug Reporting",
        "User Acceptance Testing",
        "Cross-browser Testing",
      ],
      color: "from-blue-500/10 to-blue-600/10",
      hoverColor: "hover:from-blue-500/20 hover:to-blue-600/20",
      iconColor: "text-blue-500",
    },
    {
      icon: <Bot className="h-8 w-8" />,
      title: "Test Automation",
      description:
        "Advanced automation frameworks with AI-enhanced test generation and maintenance",
      tools: ["Cypress", "Playwright", "Selenium", "AI Test Generation"],
      color: "from-emerald-500/10 to-emerald-600/10",
      hoverColor: "hover:from-emerald-500/20 hover:to-emerald-600/20",
      iconColor: "text-emerald-500",
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: "API Testing",
      description:
        "Complete API testing lifecycle from functional to security testing",
      tools: ["Postman", "REST Assured", "Newman", "API Documentation"],
      color: "from-violet-500/10 to-violet-600/10",
      hoverColor: "hover:from-violet-500/20 hover:to-violet-600/20",
      iconColor: "text-violet-500",
    },
    {
      icon: <Gauge className="h-8 w-8" />,
      title: "Performance Testing",
      description:
        "Load, stress, and performance optimization testing with detailed analytics",
      tools: ["JMeter", "K6", "LoadRunner", "Performance Metrics"],
      color: "from-orange-500/10 to-orange-600/10",
      hoverColor: "hover:from-orange-500/20 hover:to-orange-600/20",
      iconColor: "text-orange-500",
    },
    {
      icon: <GitBranch className="h-8 w-8" />,
      title: "CI/CD Integration",
      description:
        "Seamless integration of testing into continuous delivery pipelines",
      tools: ["Jenkins", "GitHub Actions", "Docker", "Test Reporting"],
      color: "from-purple-500/10 to-purple-600/10",
      hoverColor: "hover:from-purple-500/20 hover:to-purple-600/20",
      iconColor: "text-purple-500",
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: "QA Metrics & Analytics",
      description:
        "Data-driven quality insights with comprehensive reporting and dashboards",
      tools: [
        "Test Coverage",
        "Defect Metrics",
        "Quality Reports",
        "KPI Tracking",
      ],
      color: "from-cyan-500/10 to-cyan-600/10",
      hoverColor: "hover:from-cyan-500/20 hover:to-cyan-600/20",
      iconColor: "text-cyan-500",
    },
  ];

  return (
    <section
      id="skills"
      className="py-20 bg-surface/30 overflow-hidden relative"
      ref={sectionRef}
    >
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse-slow"></div>
        <div
          className="absolute -bottom-20 -right-20 w-72 h-72 bg-secondary/5 rounded-full blur-3xl animate-pulse-slow"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Heading */}
        <div
          className={`text-center mb-16 transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            {t("skills.title")}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t("skills.subtitle")}
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`h-full transform transition-all duration-700 delay-${
                index * 100
              } ${
                isVisible
                  ? "translate-y-0 opacity-100 scale-100"
                  : "translate-y-10 opacity-0 scale-95"
              }`}
            >
              <Card
                className={`h-full flex flex-col justify-between border-card-border shadow-card hover:shadow-lg transition-all duration-300 group hover:-translate-y-2 bg-gradient-to-br ${skill.color} ${skill.hoverColor}`}
              >
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div
                      className={`p-3 rounded-lg bg-gradient-to-br ${skill.color} ${skill.iconColor} group-hover:scale-110 transition-transform duration-300`}
                    >
                      {skill.icon}
                    </div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                      {skill.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="flex flex-col flex-grow justify-between">
                  <CardDescription className="text-muted-foreground mb-4 leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                    {skill.description}
                  </CardDescription>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {skill.tools.map((tool, toolIndex) => (
                      <Badge
                        key={toolIndex}
                        variant="secondary"
                        className="bg-surface/80 text-foreground border-card-border group-hover:bg-surface group-hover:scale-105 transition-all duration-300"
                      >
                        {tool}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div
          className={`mt-20 bg-surface/50 border border-card-border rounded-2xl p-8 backdrop-blur-sm transform transition-all duration-1000 delay-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">100%</div>
              <div className="text-sm text-muted-foreground">
                Client Satisfaction
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary mb-2">500+</div>
              <div className="text-sm text-muted-foreground">
                Tests Automated
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">99.9%</div>
              <div className="text-sm text-muted-foreground">Bug Detection</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-500 mb-2">50+</div>
              <div className="text-sm text-muted-foreground">Projects</div>
            </div>
          </div>
        </div>
      </div>

      {/* Extra Animations */}
      <style>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.05); }
        }
        .animate-pulse-slow {
          animation: pulse-slow 8s ease-in-out infinite;
        }
        .delay-0 { transition-delay: 0ms; }
        .delay-100 { transition-delay: 100ms; }
        .delay-200 { transition-delay: 200ms; }
        .delay-300 { transition-delay: 300ms; }
        .delay-400 { transition-delay: 400ms; }
        .delay-500 { transition-delay: 500ms; }
      `}</style>
    </section>
  );
}
