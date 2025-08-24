import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  FileText, 
  CheckCircle, 
  XCircle, 
  Clock, 
  AlertTriangle,
  Bug,
  TrendingUp,
  BarChart3
} from 'lucide-react';

export function TestLab() {
  const testPlans = [
    { id: 'TP001', name: 'E-commerce Checkout Flow', status: 'Active', coverage: '95%' },
    { id: 'TP002', name: 'User Authentication System', status: 'Completed', coverage: '100%' },
    { id: 'TP003', name: 'Payment Gateway Integration', status: 'In Progress', coverage: '78%' },
  ];

  const testCases = [
    { 
      id: 'TC001', 
      title: 'Login with valid credentials', 
      priority: 'High', 
      status: 'Passed',
      lastRun: '2024-01-15'
    },
    { 
      id: 'TC002', 
      title: 'Password reset functionality', 
      priority: 'Medium', 
      status: 'Failed',
      lastRun: '2024-01-14'
    },
    { 
      id: 'TC003', 
      title: 'Multi-factor authentication', 
      priority: 'High', 
      status: 'Pending',
      lastRun: 'N/A'
    },
  ];

  const bugReports = [
    {
      id: 'BUG001',
      title: 'Login button not responsive on mobile',
      severity: 'High',
      status: 'Open',
      assignee: 'Dev Team A'
    },
    {
      id: 'BUG002',
      title: 'Incorrect error message on invalid email',
      severity: 'Medium',
      status: 'In Progress',
      assignee: 'Dev Team B'
    },
    {
      id: 'BUG003',
      title: 'Page load timeout on slow connections',
      severity: 'Low',
      status: 'Resolved',
      assignee: 'Performance Team'
    },
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Passed': case 'Completed': case 'Resolved':
        return <CheckCircle className="h-4 w-4 text-success" />;
      case 'Failed': case 'Open':
        return <XCircle className="h-4 w-4 text-error" />;
      case 'Pending': case 'In Progress':
        return <Clock className="h-4 w-4 text-warning" />;
      default:
        return <AlertTriangle className="h-4 w-4 text-muted" />;
    }
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'High': return 'bg-error text-white';
      case 'Medium': return 'bg-warning text-black';
      case 'Low': return 'bg-success text-white';
      default: return 'bg-muted text-foreground';
    }
  };

  return (
    <section id="testlab" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Test Lab Demo
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Interactive showcase of test management capabilities and quality metrics
          </p>
        </div>

        <Tabs defaultValue="plans" className="w-full">
          <TabsList className="grid w-full grid-cols-4 bg-surface">
            <TabsTrigger value="plans">Test Plans</TabsTrigger>
            <TabsTrigger value="cases">Test Cases</TabsTrigger>
            <TabsTrigger value="bugs">Bug Reports</TabsTrigger>
            <TabsTrigger value="metrics">Metrics</TabsTrigger>
          </TabsList>

          <TabsContent value="plans" className="mt-8">
            <Card className="bg-gradient-card border-card-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  Test Plans Overview
                </CardTitle>
                <CardDescription>
                  Comprehensive test planning and execution tracking
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {testPlans.map((plan) => (
                    <div 
                      key={plan.id} 
                      className="flex items-center justify-between p-4 rounded-lg bg-surface border border-card-border"
                    >
                      <div>
                        <div className="font-medium">{plan.name}</div>
                        <div className="text-sm text-muted-foreground">ID: {plan.id}</div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="text-center">
                          <div className="text-sm font-medium">{plan.coverage}</div>
                          <div className="text-xs text-muted-foreground">Coverage</div>
                        </div>
                        <Badge 
                          variant="secondary" 
                          className={`${plan.status === 'Completed' ? 'bg-success text-white' : 
                            plan.status === 'Active' ? 'bg-primary text-white' : 'bg-warning text-black'}`}
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

          <TabsContent value="cases" className="mt-8">
            <Card className="bg-gradient-card border-card-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5" />
                  Test Cases Execution
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {testCases.map((testCase) => (
                    <div 
                      key={testCase.id} 
                      className="flex items-center justify-between p-4 rounded-lg bg-surface border border-card-border"
                    >
                      <div className="flex items-center gap-4">
                        {getStatusIcon(testCase.status)}
                        <div>
                          <div className="font-medium">{testCase.title}</div>
                          <div className="text-sm text-muted-foreground">
                            {testCase.id} • Last run: {testCase.lastRun}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className={getSeverityColor(testCase.priority)}>
                          {testCase.priority}
                        </Badge>
                        <Badge variant="secondary">
                          {testCase.status}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="bugs" className="mt-8">
            <Card className="bg-gradient-card border-card-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Bug className="h-5 w-5" />
                  Bug Reports Tracking
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {bugReports.map((bug) => (
                    <div 
                      key={bug.id} 
                      className="flex items-center justify-between p-4 rounded-lg bg-surface border border-card-border"
                    >
                      <div>
                        <div className="font-medium">{bug.title}</div>
                        <div className="text-sm text-muted-foreground">
                          {bug.id} • Assigned to: {bug.assignee}
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge className={getSeverityColor(bug.severity)}>
                          {bug.severity}
                        </Badge>
                        <div className="flex items-center gap-1">
                          {getStatusIcon(bug.status)}
                          <span className="text-sm">{bug.status}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="metrics" className="mt-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="bg-gradient-card border-card-border">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Test Pass Rate</p>
                      <p className="text-3xl font-bold text-success">94.2%</p>
                    </div>
                    <TrendingUp className="h-8 w-8 text-success" />
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-card border-card-border">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Code Coverage</p>
                      <p className="text-3xl font-bold text-primary">87.5%</p>
                    </div>
                    <BarChart3 className="h-8 w-8 text-primary" />
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-card border-card-border">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Defect Density</p>
                      <p className="text-3xl font-bold text-warning">2.1/KLOC</p>
                    </div>
                    <Bug className="h-8 w-8 text-warning" />
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-card border-card-border">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Automation Rate</p>
                      <p className="text-3xl font-bold text-secondary">76%</p>
                    </div>
                    <CheckCircle className="h-8 w-8 text-secondary" />
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}