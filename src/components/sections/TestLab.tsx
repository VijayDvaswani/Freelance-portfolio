import React, { useState, useEffect, useRef } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  FileText,
  CheckCircle,
  XCircle,
  Clock,
  AlertTriangle,
  Bug,
  TrendingUp,
  BarChart3,
  TestTube,
  GitBranch,
  Gauge,
} from "lucide-react";
import { useI18n } from "@/contexts/I18nContext";

export function TestLab() {
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

  const testPlans = [
    {
      id: "TP001",
      name: "E-commerce Checkout Flow",
      status: "Active",
      coverage: "95%",
    },
    {
      id: "TP002",
      name: "User Authentication System",
      status: "Completed",
      coverage: "100%",
    },
    {
      id: "TP003",
      name: "Payment Gateway Integration",
      status: "In Progress",
      coverage: "78%",
    },
  ];

  const testCases = [
    {
      id: "TC001",
      title: "Login with valid credentials",
      priority: "High",
      status: "Passed",
      lastRun: "2024-01-15",
    },
    {
      id: "TC002",
      title: "Password reset functionality",
      priority: "Medium",
      status: "Failed",
      lastRun: "2024-01-14",
    },
    {
      id: "TC003",
      title: "Multi-factor authentication",
      priority: "High",
      status: "Pending",
      lastRun: "N/A",
    },
  ];

  const bugReports = [
    {
      id: "BUG001",
      title: "Login button not responsive on mobile",
      severity: "High",
      status: "Open",
      assignee: "Dev Team A",
    },
    {
      id: "BUG002",
      title: "Incorrect error message on invalid email",
      severity: "Medium",
      status: "In Progress",
      assignee: "Dev Team B",
    },
    {
      id: "BUG003",
      title: "Page load timeout on slow connections",
      severity: "Low",
      status: "Resolved",
      assignee: "Performance Team",
    },
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Passed":
      case "Completed":
      case "Resolved":
        return <CheckCircle className="h-5 w-5 text-emerald-500" />;
      case "Failed":
      case "Open":
        return <XCircle className="h-5 w-5 text-red-500" />;
      case "Pending":
      case "In Progress":
        return <Clock className="h-5 w-5 text-amber-500" />;
      default:
        return <AlertTriangle className="h-5 w-5 text-gray-500" />;
    }
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "High":
        return "bg-red-500 text-white";
      case "Medium":
        return "bg-amber-500 text-black";
      case "Low":
        return "bg-emerald-500 text-white";
      default:
        return "bg-gray-500 text-white";
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed":
      case "Resolved":
        return "bg-emerald-500/10 text-emerald-500 border-emerald-500/20";
      case "Active":
      case "In Progress":
        return "bg-amber-500/10 text-amber-500 border-amber-500/20";
      case "Open":
        return "bg-red-500/10 text-red-500 border-red-500/20";
      case "Pending":
        return "bg-gray-500/10 text-gray-500 border-gray-500/20";
      default:
        return "bg-gray-500/10 text-gray-500 border-gray-500/20";
    }
  };

  // RTL-specific classes
  const isRtl = dir === "rtl";
  const rtlPaddingClass = isRtl
    ? "ps-4 sm:ps-6 pe-4 sm:pe-6"
    : "ps-4 sm:ps-6 pe-4 sm:pe-6";
  const rtlMarginClass = isRtl ? "ms-2 me-0" : "ms-0 me-2";
  const flexDirectionClass = isRtl ? "flex-row-reverse" : "flex-row";
  const textAlignClass = isRtl ? "text-right" : "text-left";
  const spaceClass = isRtl ? "space-x-reverse" : "space-x-0";

  return (
    <section
      id="testlab"
      className={`py-16 sm:py-24 bg-surface/20 overflow-hidden relative ${rtlPaddingClass}`}
      ref={sectionRef}
      dir={dir}
    >
      {/* Enhanced background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent"></div>
        <div className="absolute top-0 left-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-secondary/5 rounded-full blur-3xl"></div>

        {/* Diagonal blurred lines from bottom-left to top-right */}
        <div className="absolute bottom-0 left-0 w-[200px] sm:w-[400px] h-1 bg-gradient-to-r from-transparent via-primary to-transparent rotate-[135deg] translate-x-[-50px] sm:translate-x-[-100px] translate-y-[50px] sm:translate-y-[100px] blur-2xl opacity-40"></div>
        <div className="absolute bottom-0 left-0 w-[200px] sm:w-[400px] h-1 bg-gradient-to-r from-transparent via-secondary to-transparent rotate-[135deg] translate-x-[50px] sm:translate-x-[100px] translate-y-[150px] sm:translate-y-[300px] blur-3xl opacity-40"></div>
      </div>

      <div
        className={`container mx-auto px-4 sm:px-6 relative z-10 ${rtlPaddingClass}`}
      >
        {/* Section header with improved animation */}
        <div
          className={`text-center mb-12 sm:mb-20 transform transition-all duration-1000 ease-out ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="inline-block mb-4">
            <span className="px-3 py-1 sm:px-4 sm:py-1.5 text-xs sm:text-sm font-medium rounded-full bg-primary/10 text-primary border border-primary/20">
              {t("testlab.badge")}
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            {t("testlab.title")}
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {t("testlab.subtitle")}
          </p>
        </div>

        <Tabs defaultValue="plans" className="w-full">
          <TabsList className="grid w-full grid-cols-1 sm:grid-cols-3 bg-purple-200 backdrop-blur-sm border border-border/30 rounded-2xl p-1 sm:p-2 mb-6 sm:mb-8">
            <TabsTrigger
              value="plans"
              className={`flex items-center justify-center gap-2 w-full py-2 sm:py-3 text-base sm:text-lg font-medium rounded-xl transition-all duration-200
      data-[state=active]:bg-primary data-[state=active]:text-primary-foreground
      data-[state=inactive]:bg-transparent data-[state=inactive]:text-muted-foreground
      hover:bg-primary/10 focus-visible:ring-2 focus-visible:ring-primary/50
      ${flexDirectionClass}`}
            >
              <FileText className="h-4 w-4 sm:h-5 sm:w-5" />
              <span className="truncate">{t("testlab.tabs.plans")}</span>
            </TabsTrigger>

            <TabsTrigger
              value="cases"
              className={`flex items-center justify-center gap-2 w-full py-2 sm:py-3 text-base sm:text-lg font-medium rounded-xl transition-all duration-200
      data-[state=active]:bg-primary data-[state=active]:text-primary-foreground
      data-[state=inactive]:bg-transparent data-[state=inactive]:text-muted-foreground
      hover:bg-primary/10 focus-visible:ring-2 focus-visible:ring-primary/50
      ${flexDirectionClass}`}
            >
              <TestTube className="h-4 w-4 sm:h-5 sm:w-5" />
              <span className="truncate">{t("testlab.tabs.cases")}</span>
            </TabsTrigger>

            <TabsTrigger
              value="bugs"
              className={`flex items-center justify-center gap-2 w-full py-2 sm:py-3 text-base sm:text-lg font-medium rounded-xl transition-all duration-200
      data-[state=active]:bg-primary data-[state=active]:text-primary-foreground
      data-[state=inactive]:bg-transparent data-[state=inactive]:text-muted-foreground
      hover:bg-primary/10 focus-visible:ring-2 focus-visible:ring-primary/50
      ${flexDirectionClass}`}
            >
              <Bug className="h-4 w-4 sm:h-5 sm:w-5" />
              <span className="truncate">{t("testlab.tabs.bugs")}</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="plans" className="mt-6 sm:mt-8">
            <Card className="bg-gradient-to-br from-background/40 to-background/20 border border-border/30 shadow-xl backdrop-blur-sm rounded-2xl sm:rounded-3xl overflow-hidden">
              <CardHeader className="pb-4 sm:pb-6">
                <CardTitle
                  className={`flex items-center gap-2 sm:gap-3 text-xl sm:text-2xl ${
                    isRtl ? "flex-row-reverse" : ""
                  }`}
                >
                  <div
                    className={`p-2 sm:p-3 rounded-xl sm:rounded-2xl bg-primary/10 text-primary ${
                      isRtl ? "ml-2 sm:ml-3" : "mr-2 sm:mr-3"
                    }`}
                  >
                    <FileText className="h-5 w-5 sm:h-6 sm:w-6" />
                  </div>
                  {t("testlab.plans.title")}
                </CardTitle>
                <CardDescription
                  className={`text-base sm:text-lg ${textAlignClass}`}
                >
                  {t("testlab.plans.description")}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 sm:space-y-6">
                  {testPlans.map((plan, index) => (
                    <div
                      key={plan.id}
                      className={`flex flex-col sm:flex-row sm:items-center justify-between p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-background/50 border border-border/30 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 ${
                        isRtl ? "flex-row-reverse" : ""
                      } ${
                        isVisible
                          ? "translate-y-0 opacity-100"
                          : "translate-y-8 opacity-0"
                      }`}
                      style={{ transitionDelay: `${index * 100}ms` }}
                    >
                      <div className={`${textAlignClass} mb-3 sm:mb-0`}>
                        <div className="font-bold text-lg sm:text-xl mb-1">
                          {plan.name}
                        </div>
                        <div className="text-muted-foreground text-sm">
                          ID: {plan.id}
                        </div>
                      </div>
                      <div
                        className={`flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 ${
                          isRtl ? "flex-row-reverse" : ""
                        }`}
                      >
                        <div
                          className={`text-center ${
                            isRtl ? "ml-0 sm:ml-6" : "mr-0 sm:mr-6"
                          }`}
                        >
                          <div className="text-xl sm:text-2xl font-bold text-primary">
                            {plan.coverage}
                          </div>
                          <div className="text-xs sm:text-sm text-muted-foreground">
                            {t("testlab.plans.coverage")}
                          </div>
                        </div>
                        <Badge
                          className={`${getStatusColor(
                            plan.status
                          )} px-3 py-1 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium self-start sm:self-auto`}
                        >
                          {plan.status}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="cases" className="mt-6 sm:mt-8">
            <Card className="bg-gradient-to-br from-background/40 to-background/20 border border-border/30 shadow-xl backdrop-blur-sm rounded-2xl sm:rounded-3xl overflow-hidden">
              <CardHeader className="pb-4 sm:pb-6">
                <CardTitle
                  className={`flex items-center gap-2 sm:gap-3 text-xl sm:text-2xl ${
                    isRtl ? "flex-row-reverse" : ""
                  }`}
                >
                  <div
                    className={`p-2 sm:p-3 rounded-xl sm:rounded-2xl bg-emerald-500/10 text-emerald-500 ${
                      isRtl ? "ml-2 sm:ml-3" : "mr-2 sm:mr-3"
                    }`}
                  >
                    <TestTube className="h-5 w-5 sm:h-6 sm:w-6" />
                  </div>
                  {t("testlab.cases.title")}
                </CardTitle>
                <CardDescription
                  className={`text-base sm:text-lg ${textAlignClass}`}
                >
                  {t("testlab.cases.description")}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 sm:space-y-6">
                  {testCases.map((testCase, index) => (
                    <div
                      key={testCase.id}
                      className={`flex flex-col sm:flex-row sm:items-center justify-between p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-background/50 border border-border/30 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 ${
                        isRtl ? "flex-row-reverse" : ""
                      } ${
                        isVisible
                          ? "translate-y-0 opacity-100"
                          : "translate-y-8 opacity-0"
                      }`}
                      style={{ transitionDelay: `${index * 100}ms` }}
                    >
                      <div
                        className={`flex items-start gap-3 sm:gap-4 ${
                          isRtl ? "flex-row-reverse" : ""
                        } mb-3 sm:mb-0`}
                      >
                        <div className="pt-1">
                          {getStatusIcon(testCase.status)}
                        </div>
                        <div className={textAlignClass}>
                          <div className="font-bold text-base sm:text-lg mb-1">
                            {testCase.title}
                          </div>
                          <div className="text-muted-foreground text-xs sm:text-sm">
                            {testCase.id} • {t("testlab.cases.lastRun")}:{" "}
                            {testCase.lastRun}
                          </div>
                        </div>
                      </div>
                      <div
                        className={`flex flex-wrap gap-2 sm:gap-3 ${
                          isRtl ? "flex-row-reverse" : ""
                        } justify-start sm:justify-end`}
                      >
                        <Badge
                          variant="outline"
                          className={`${getSeverityColor(
                            testCase.priority
                          )} px-2 py-0.5 sm:px-3 sm:py-1 text-xs sm:text-sm`}
                        >
                          {testCase.priority}
                        </Badge>
                        <Badge
                          className={`${getStatusColor(
                            testCase.status
                          )} px-2 py-0.5 sm:px-3 sm:py-1 text-xs sm:text-sm`}
                        >
                          {testCase.status}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="bugs" className="mt-6 sm:mt-8">
            <Card className="bg-gradient-to-br from-background/40 to-background/20 border border-border/30 shadow-xl backdrop-blur-sm rounded-2xl sm:rounded-3xl overflow-hidden">
              <CardHeader className="pb-4 sm:pb-6">
                <CardTitle
                  className={`flex items-center gap-2 sm:gap-3 text-xl sm:text-2xl ${
                    isRtl ? "flex-row-reverse" : ""
                  }`}
                >
                  <div
                    className={`p-2 sm:p-3 rounded-xl sm:rounded-2xl bg-red-500/10 text-red-500 ${
                      isRtl ? "ml-2 sm:ml-3" : "mr-2 sm:mr-3"
                    }`}
                  >
                    <Bug className="h-5 w-5 sm:h-6 sm:w-6" />
                  </div>
                  {t("testlab.bugs.title")}
                </CardTitle>
                <CardDescription
                  className={`text-base sm:text-lg ${textAlignClass}`}
                >
                  {t("testlab.bugs.description")}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 sm:space-y-6">
                  {bugReports.map((bug, index) => (
                    <div
                      key={bug.id}
                      className={`flex flex-col sm:flex-row sm:items-center justify-between p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-background/50 border border-border/30 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 ${
                        isRtl ? "flex-row-reverse" : ""
                      } ${
                        isVisible
                          ? "translate-y-0 opacity-100"
                          : "translate-y-8 opacity-0"
                      }`}
                      style={{ transitionDelay: `${index * 100}ms` }}
                    >
                      <div className={`${textAlignClass} mb-3 sm:mb-0`}>
                        <div className="font-bold text-base sm:text-lg mb-1">
                          {bug.title}
                        </div>
                        <div className="text-muted-foreground text-xs sm:text-sm">
                          {bug.id} • {t("testlab.bugs.assignee")}:{" "}
                          {bug.assignee}
                        </div>
                      </div>
                      <div
                        className={`flex flex-wrap gap-2 sm:gap-3 items-center ${
                          isRtl ? "flex-row-reverse" : ""
                        } justify-start sm:justify-end`}
                      >
                        <Badge
                          className={`${getSeverityColor(
                            bug.severity
                          )} px-2 py-0.5 sm:px-3 sm:py-1 text-xs sm:text-sm`}
                        >
                          {bug.severity}
                        </Badge>
                        <div
                          className={`flex items-center gap-1 sm:gap-2 ${
                            isRtl ? "flex-row-reverse" : ""
                          }`}
                        >
                          {getStatusIcon(bug.status)}
                          <span className="font-medium text-xs sm:text-sm">
                            {bug.status}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      {/* Enhanced animations */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @media (min-width: 640px) {
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
          }
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
