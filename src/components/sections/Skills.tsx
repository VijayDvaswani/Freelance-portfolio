import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useI18n } from '@/contexts/I18nContext';
import { 
  TestTube, 
  Bot, 
  Database, 
  Gauge, 
  GitBranch, 
  Bug, 
  BarChart3,
  Smartphone,
  Shield,
  Zap
} from 'lucide-react';

export function Skills() {
  const { t } = useI18n();

  const skills = [
    {
      icon: <TestTube className="h-8 w-8" />,
      title: 'Manual Testing',
      description: 'Comprehensive manual testing strategies including exploratory, usability, and regression testing',
      tools: ['Test Case Design', 'Bug Reporting', 'User Acceptance Testing', 'Cross-browser Testing']
    },
    {
      icon: <Bot className="h-8 w-8" />,
      title: 'Test Automation',
      description: 'Advanced automation frameworks with AI-enhanced test generation and maintenance',
      tools: ['Cypress', 'Playwright', 'Selenium', 'AI Test Generation']
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: 'API Testing',
      description: 'Complete API testing lifecycle from functional to security testing',
      tools: ['Postman', 'REST Assured', 'Newman', 'API Documentation']
    },
    {
      icon: <Gauge className="h-8 w-8" />,
      title: 'Performance Testing',
      description: 'Load, stress, and performance optimization testing with detailed analytics',
      tools: ['JMeter', 'K6', 'LoadRunner', 'Performance Metrics']
    },
    {
      icon: <GitBranch className="h-8 w-8" />,
      title: 'CI/CD Integration',
      description: 'Seamless integration of testing into continuous delivery pipelines',
      tools: ['Jenkins', 'GitHub Actions', 'Docker', 'Test Reporting']
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: 'QA Metrics & Analytics',
      description: 'Data-driven quality insights with comprehensive reporting and dashboards',
      tools: ['Test Coverage', 'Defect Metrics', 'Quality Reports', 'KPI Tracking']
    }
  ];

  return (
    <section id="skills" className="py-20 bg-surface/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            {t('skills.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('skills.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <Card 
              key={index} 
              className="bg-gradient-card border-card-border shadow-card hover:shadow-glow transition-all duration-300 group"
            >
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                    {skill.icon}
                  </div>
                  <div>
                    <CardTitle className="text-xl">{skill.title}</CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground mb-4 leading-relaxed">
                  {skill.description}
                </CardDescription>
                <div className="flex flex-wrap gap-2">
                  {skill.tools.map((tool, toolIndex) => (
                    <Badge 
                      key={toolIndex} 
                      variant="secondary" 
                      className="bg-surface text-foreground border-card-border"
                    >
                      {tool}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}