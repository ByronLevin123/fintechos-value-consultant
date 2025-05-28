import React, { useState } from 'react';
import { TrendingUp, DollarSign, BarChart3, Calculator, Building2, Users, Briefcase, Settings, Award, FileText, Target } from 'lucide-react';
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line
} from 'recharts';

const BANKING_COLORS = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6', '#06d6a0'];

function App() {
  const [activeTab, setActiveTab] = useState('overview');
  const [inputs, setInputs] = useState({
    // Company Information
    companyName: 'Community Bank',
    bankSize: 'medium',
    annualRevenue: 50000000,
    
    // Banking Portfolio Metrics
    portfolioMetrics: {
      loanPortfolioSize: 500000000,
      depositVolume: 1000000000,
      costToIncomeRatio: 0.65,
      netInterestMargin: 0.035,
      riskAdjustedReturn: 0.12,
      numberOfBranches: 25,
      totalCustomers: 50000
    },
    
    // Banking Segments
    retailCustomers: 10000,
    businessCustomers: 500,
    commercialCustomers: 50,
    
    // Current State Metrics
    avgLoanProcessingTime: 15,
    customerOnboardingTime: 7,
    manualProcessingCost: 150000,
    complianceFines: 50000,
    trainingCosts: 75000,
    infrastructureCosts: 100000,
    staffHours: 2000,
    hourlyRate: 50,
    
    // FintechOS Solution
    solutionCost: 300000,
    implementationCost: 150000,
    
    // Banking Efficiency Gains
    processTimeReduction: 0.60,
    onboardingTimeReduction: 0.70,
    staffEfficiencyGain: 0.40,
    complianceRiskReduction: 0.80,
    
    // Revenue Opportunities
    newLoansPerMonth: 100,
    avgLoanValue: 50000,
    loanMargin: 0.03,
    crossSellRate: 0.15,
    customerRetentionImprovement: 0.05,
    
    // Contract Terms
    contractYears: 5,
    discountRate: 0.10
  });

  // Advanced Banking Calculations (same as Phase 2)
  const calculations = {
    get currentTotalCosts() {
      return inputs.manualProcessingCost + inputs.complianceFines + 
             inputs.trainingCosts + inputs.infrastructureCosts + 
             (inputs.staffHours * 12 * inputs.hourlyRate);
    },
    get staffCostSavings() {
      return inputs.staffHours * 12 * inputs.hourlyRate * inputs.staffEfficiencyGain;
    },
    get complianceSavings() {
      return inputs.complianceFines * inputs.complianceRiskReduction;
    },
    get processingCostSavings() {
      return inputs.manualProcessingCost * inputs.processTimeReduction;
    },
    get totalCostSavings() {
      return this.staffCostSavings + this.complianceSavings + this.processingCostSavings + 
             (inputs.trainingCosts * 0.5);
    },
    get fasterLoanProcessingRevenue() {
      const additionalLoans = inputs.newLoansPerMonth * 12 * inputs.processTimeReduction * 0.4;
      return additionalLoans * inputs.avgLoanValue * inputs.loanMargin;
    },
    get crossSellingRevenue() {
      const totalCustomers = inputs.retailCustomers + inputs.businessCustomers + inputs.commercialCustomers;
      return totalCustomers * inputs.crossSellRate * 150;
    },
    get retentionRevenue() {
      return inputs.annualRevenue * inputs.customerRetentionImprovement;
    },
    get nimImprovement() {
      return inputs.portfolioMetrics.loanPortfolioSize * 0.002;
    },
    get totalRevenueGain() {
      return this.fasterLoanProcessingRevenue + this.crossSellingRevenue + 
             this.retentionRevenue + this.nimImprovement;
    },
    get costPerLoan() {
      const annualLoans = inputs.newLoansPerMonth * 12;
      return inputs.solutionCost / annualLoans;
    },
    get revenuePerCustomer() {
      const totalCustomers = inputs.retailCustomers + inputs.businessCustomers + inputs.commercialCustomers;
      return this.totalRevenueGain / totalCustomers;
    },
    get efficiencyRatio() {
      return (this.currentTotalCosts - this.totalCostSavings) / inputs.annualRevenue;
    },
    get timeSavingsPerLoan() {
      return inputs.avgLoanProcessingTime * inputs.processTimeReduction;
    },
    get timeSavingsPerOnboarding() {
      return inputs.customerOnboardingTime * inputs.onboardingTimeReduction;
    },
    get totalBenefits() {
      return this.totalCostSavings + this.totalRevenueGain;
    },
    get netBenefit() {
      return this.totalBenefits - inputs.solutionCost;
    },
    get roi() {
      return Math.round((this.netBenefit / inputs.solutionCost) * 100);
    },
    get paybackMonths() {
      return Math.round((inputs.solutionCost / this.totalBenefits) * 12);
    },
    get npv() {
      let npv = -inputs.implementationCost;
      for (let year = 1; year <= inputs.contractYears; year++) {
        npv += this.netBenefit / Math.pow(1 + inputs.discountRate, year);
      }
      return npv;
    }
  };

  const formatCurrency = (amount) => {
    return '$' + Math.round(amount).toLocaleString();
  };

  const formatPercentage = (decimal) => {
    return (decimal * 100).toFixed(1) + '%';
  };

  const handleInputChange = (field, value, isNested = false, nestedField = null) => {
    setInputs(prev => {
      if (isNested && nestedField) {
        return {
          ...prev,
          [field]: {
            ...prev[field],
            [nestedField]: parseFloat(value) || value
          }
        };
      }
      return {
        ...prev,
        [field]: parseFloat(value) || value
      };
    });
  };

  // Chart data functions
  const getCostSavingsBreakdown = () => [
    { name: 'Staff Efficiency', value: calculations.staffCostSavings },
    { name: 'Compliance Automation', value: calculations.complianceSavings },
    { name: 'Process Digitization', value: calculations.processingCostSavings },
    { name: 'Training Reduction', value: inputs.trainingCosts * 0.5 }
  ];

  const getRevenueBreakdown = () => [
    { name: 'Digital Loan Processing', value: calculations.fasterLoanProcessingRevenue },
    { name: 'Cross-Platform Selling', value: calculations.crossSellingRevenue },
    { name: 'Customer Experience', value: calculations.retentionRevenue },
    { name: 'NIM Improvement', value: calculations.nimImprovement }
  ];

  const getYearByYearData = () => {
    return Array.from({ length: inputs.contractYears }, (_, i) => ({
      year: `Year ${i + 1}`,
      costSavings: calculations.totalCostSavings,
      revenueGains: calculations.totalRevenueGain,
      totalBenefits: calculations.totalBenefits,
      cumulative: calculations.totalBenefits * (i + 1),
      roi: calculations.roi
    }));
  };

  // Industry benchmark data
  const industryBenchmarks = {
    averageROI: 285,
    averagePayback: 18,
    averageCostPerLoan: 750,
    averageEfficiencyRatio: 0.58
  };

  // Tab configuration
  const tabs = [
    { id: 'overview', name: 'Overview', icon: BarChart3, color: 'indigo' },
    { id: 'configuration', name: 'Configuration', icon: Settings, color: 'purple' },
    { id: 'analysis', name: 'Analysis', icon: TrendingUp, color: 'emerald' },
    { id: 'scenarios', name: 'Scenarios', icon: FileText, color: 'blue' },
    { id: 'benchmarks', name: 'Benchmarks', icon: Award, color: 'amber' }
  ];

  return (
    <div style={{ 
      minHeight: '100vh', 
      background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
      padding: '20px',
      fontFamily: 'Arial, sans-serif'
    }}>
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        background: 'white',
        borderRadius: '20px',
        overflow: 'hidden',
        boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
      }}>
        
        {/* Header */}
        <div style={{ 
          background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
          padding: '30px',
          color: 'white',
          textAlign: 'center'
        }}>
          <h1 style={{
            fontSize: '2.5rem',
            fontWeight: 'bold',
            marginBottom: '10px',
            margin: 0
          }}>
            FintechOS Value Consultant
          </h1>
          <p style={{ fontSize: '1.1rem', opacity: 0.9, margin: '10px 0 0 0' }}>
            Digital Banking Transformation ROI Calculator
          </p>
        </div>

        {/* Tab Navigation */}
        <div style={{
          background: '#f8fafc',
          borderBottom: '2px solid #e2e8f0',
          padding: '0 30px'
        }}>
          <div style={{ display: 'flex', gap: '2px' }}>
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '15px 25px',
                    background: isActive ? 'white' : 'transparent',
                    border: 'none',
                    borderTop: isActive ? '3px solid #3b82f6' : '3px solid transparent',
                    borderBottom: isActive ? '2px solid white' : 'none',
                    color: isActive ? '#3b82f6' : '#64748b',
                    fontSize: '0.95rem',
                    fontWeight: isActive ? '600' : '500',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    marginBottom: isActive ? '-2px' : '0',
                    position: 'relative',
                    zIndex: isActive ? 10 : 1
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      e.target.style.background = '#f1f5f9';
                      e.target.style.color = '#475569';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      e.target.style.background = 'transparent';
                      e.target.style.color = '#64748b';
                    }
                  }}
                >
                  <Icon size={16} />
                  <span>{tab.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Tab Content */}
        <div style={{ padding: '30px' }}>
          
          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <div>
              <h2 style={{ fontSize: '1.8rem', marginBottom: '30px', color: '#1f2937', display: 'flex', alignItems: 'center' }}>
                <BarChart3 style={{ marginRight: '12px', color: '#3b82f6' }} />
                Executive Dashboard
              </h2>

              {/* Key Metrics Dashboard */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', marginBottom: '40px' }}>
                <div style={{
                  background: 'linear-gradient(135deg, #10b981, #06d6a0)',
                  borderRadius: '15px',
                  padding: '25px',
                  color: 'white',
                  textAlign: 'center'
                }}>
                  <p style={{ fontSize: '0.9rem', opacity: 0.8, margin: '0 0 5px 0' }}>Digital ROI</p>
                  <p style={{ fontSize: '2.5rem', fontWeight: 'bold', margin: '0 0 5px 0' }}>{calculations.roi}%</p>
                  <p style={{ fontSize: '0.8rem', opacity: 0.8, margin: 0 }}>
                    vs {industryBenchmarks.averageROI}% industry avg
                  </p>
                </div>
                
                <div style={{
                  background: 'linear-gradient(135deg, #3b82f6, #06b6d4)',
                  borderRadius: '15px',
                  padding: '25px',
                  color: 'white',
                  textAlign: 'center'
                }}>
                  <p style={{ fontSize: '0.9rem', opacity: 0.8, margin: '0 0 5px 0' }}>Payback Period</p>
                  <p style={{ fontSize: '2rem', fontWeight: 'bold', margin: '0 0 5px 0' }}>{calculations.paybackMonths} mo</p>
                  <p style={{ fontSize: '0.8rem', opacity: 0.8, margin: 0 }}>
                    vs {industryBenchmarks.averagePayback}mo industry avg
                  </p>
                </div>
                
                <div style={{
                  background: 'linear-gradient(135deg, #8b5cf6, #a855f7)',
                  borderRadius: '15px',
                  padding: '25px',
                  color: 'white',
                  textAlign: 'center'
                }}>
                  <p style={{ fontSize: '0.9rem', opacity: 0.8, margin: '0 0 5px 0' }}>NPV ({inputs.contractYears} years)</p>
                  <p style={{ fontSize: '1.8rem', fontWeight: 'bold', margin: '0 0 5px 0' }}>{formatCurrency(calculations.npv)}</p>
                  <p style={{ fontSize: '0.8rem', opacity: 0.8, margin: 0 }}>
                    at {formatPercentage(inputs.discountRate)} discount
                  </p>
                </div>
                
                <div style={{
                  background: 'linear-gradient(135deg, #f59e0b, #d97706)',
                  borderRadius: '15px',
                  padding: '25px',
                  color: 'white',
                  textAlign: 'center'
                }}>
                  <p style={{ fontSize: '0.9rem', opacity: 0.8, margin: '0 0 5px 0' }}>Total Benefits</p>
                  <p style={{ fontSize: '1.8rem', fontWeight: 'bold', margin: '0 0 5px 0' }}>{formatCurrency(calculations.totalBenefits)}</p>
                  <p style={{ fontSize: '0.8rem', opacity: 0.8, margin: 0 }}>Annual value creation</p>
                </div>
              </div>

              {/* Financial Impact Chart */}
              <div style={{
                background: 'white',
                borderRadius: '15px',
                padding: '30px',
                border: '2px solid #e2e8f0',
                marginBottom: '30px'
              }}>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '20px', color: '#333', textAlign: 'center' }}>
                  {inputs.contractYears}-Year Digital Banking Transformation Impact
                </h3>
                <div style={{ height: '350px', width: '100%' }}>
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={getYearByYearData()}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                      <XAxis dataKey="year" stroke="#666" />
                      <YAxis tickFormatter={(value) => '$' + (value/1000000).toFixed(1) + 'M'} stroke="#666" />
                      <Tooltip 
                        formatter={(value) => formatCurrency(value)}
                        contentStyle={{ 
                          backgroundColor: 'white', 
                          border: '2px solid #3b82f6', 
                          borderRadius: '10px',
                          boxShadow: '0 10px 25px rgba(0,0,0,0.1)'
                        }}
                      />
                      <Legend />
                      <Area 
                        type="monotone" 
                        dataKey="costSavings" 
                        stackId="1" 
                        stroke="#10b981" 
                        fill="#10b981" 
                        fillOpacity={0.6}
                        name="Operational Efficiency"
                      />
                      <Area 
                        type="monotone" 
                        dataKey="revenueGains" 
                        stackId="1" 
                        stroke="#3b82f6" 
                        fill="#3b82f6" 
                        fillOpacity={0.8}
                        name="Digital Revenue Growth"
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Banking Performance Summary */}
              <div style={{
                background: '#f8fafc',
                borderRadius: '15px',
                padding: '30px',
                border: '2px solid #e2e8f0'
              }}>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '20px', color: '#333', textAlign: 'center' }}>
                  FintechOS Platform Impact Summary
                </h3>
                
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
                  <div style={{ textAlign: 'center', padding: '20px', background: 'white', borderRadius: '10px' }}>
                    <p style={{ fontSize: '0.9rem', color: '#666', marginBottom: '5px' }}>Institution</p>
                    <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#3b82f6' }}>{inputs.companyName}</p>
                  </div>
                  
                  <div style={{ textAlign: 'center', padding: '20px', background: 'white', borderRadius: '10px' }}>
                    <p style={{ fontSize: '0.9rem', color: '#666', marginBottom: '5px' }}>Digital Cost per Loan</p>
                    <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#10b981' }}>
                      {formatCurrency(calculations.costPerLoan)}
                    </p>
                    <p style={{ fontSize: '0.7rem', color: '#888' }}>vs ${industryBenchmarks.averageCostPerLoan} traditional</p>
                  </div>
                  
                  <div style={{ textAlign: 'center', padding: '20px', background: 'white', borderRadius: '10px' }}>
                    <p style={{ fontSize: '0.9rem', color: '#666', marginBottom: '5px' }}>Process Time Savings</p>
                    <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#8b5cf6' }}>
                      {calculations.timeSavingsPerLoan.toFixed(1)} days
                    </p>
                    <p style={{ fontSize: '0.7rem', color: '#888' }}>per loan application</p>
                  </div>
                  
                  <div style={{ textAlign: 'center', padding: '20px', background: 'white', borderRadius: '10px' }}>
                    <p style={{ fontSize: '0.9rem', color: '#666', marginBottom: '5px' }}>Customer Onboarding</p>
                    <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#f59e0b' }}>
                      {formatPercentage(inputs.onboardingTimeReduction)}
                    </p>
                    <p style={{ fontSize: '0.7rem', color: '#888' }}>faster digital onboarding</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Configuration Tab */}
          {activeTab === 'configuration' && (
            <div>
              <h2 style={{ fontSize: '1.8rem', marginBottom: '30px', color: '#1f2937', display: 'flex', alignItems: 'center' }}>
                <Settings style={{ marginRight: '12px', color: '#8b5cf6' }} />
                Client Configuration
              </h2>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '30px' }}>
                
                {/* Institution Overview */}
                <div style={{ background: '#f8fafc', padding: '25px', borderRadius: '15px', border: '2px solid #e2e8f0' }}>
                  <h3 style={{ fontSize: '1.3rem', marginBottom: '20px', color: '#333', display: 'flex', alignItems: 'center' }}>
                    <Building2 style={{ marginRight: '8px', color: '#3b82f6' }} />
                    Institution Overview
                  </h3>
                  
                  <div style={{ display: 'grid', gap: '15px' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.8rem', color: '#666', marginBottom: '5px', fontWeight: '600' }}>
                        Financial Institution Name
                      </label>
                      <input 
                        type="text"
                        value={inputs.companyName}
                        onChange={(e) => handleInputChange('companyName', e.target.value)}
                        style={{
                          width: '100%',
                          padding: '10px',
                          border: '2px solid #e5e7eb',
                          borderRadius: '8px',
                          fontSize: '0.9rem',
                          outline: 'none'
                        }}
                      />
                    </div>
                    
                    <div>
                      <label style={{ display: 'block', fontSize: '0.8rem', color: '#666', marginBottom: '5px', fontWeight: '600' }}>
                        Institution Type
                      </label>
                      <select 
                        value={inputs.bankSize}
                        onChange={(e) => handleInputChange('bankSize', e.target.value)}
                        style={{
                          width: '100%',
                          padding: '10px',
                          border: '2px solid #e5e7eb',
                          borderRadius: '8px',
                          fontSize: '0.9rem',
                          outline: 'none',
                          background: 'white'
                        }}
                      >
                        <option value="small">Community Bank</option>
                        <option value="medium">Regional Bank</option>
                        <option value="large">National Bank</option>
                      </select>
                    </div>
                    
                    <div>
                      <label style={{ display: 'block', fontSize: '0.8rem', color: '#666', marginBottom: '5px', fontWeight: '600' }}>
                        Annual Revenue (USD)
                      </label>
                      <input 
                        type="number"
                        value={inputs.annualRevenue}
                        onChange={(e) => handleInputChange('annualRevenue', e.target.value)}
                        style={{
                          width: '100%',
                          padding: '10px',
                          border: '2px solid #e5e7eb',
                          borderRadius: '8px',
                          fontSize: '0.9rem',
                          outline: 'none'
                        }}
                      />
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '0.8rem', color: '#666', marginBottom: '5px', fontWeight: '600' }}>
                        Loan Portfolio Size (USD)
                      </label>
                      <input 
                        type="number"
                        value={inputs.portfolioMetrics.loanPortfolioSize}
                        onChange={(e) => handleInputChange('portfolioMetrics', e.target.value, true, 'loanPortfolioSize')}
                        style={{
                          width: '100%',
                          padding: '10px',
                          border: '2px solid #e5e7eb',
                          borderRadius: '8px',
                          fontSize: '0.9rem',
                          outline: 'none'
                        }}
                      />
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '0.8rem', color: '#666', marginBottom: '5px', fontWeight: '600' }}>
                        Cost-to-Income Ratio
                      </label>
                      <input 
                        type="number"
                        step="0.01"
                        value={inputs.portfolioMetrics.costToIncomeRatio}
                        onChange={(e) => handleInputChange('portfolioMetrics', e.target.value, true, 'costToIncomeRatio')}
                        style={{
                          width: '100%',
                          padding: '10px',
                          border: '2px solid #e5e7eb',
                          borderRadius: '8px',
                          fontSize: '0.9rem',
                          outline: 'none'
                        }}
                      />
                      <p style={{ fontSize: '0.7rem', color: '#888', margin: '2px 0 0 0' }}>
                        Current: {formatPercentage(inputs.portfolioMetrics.costToIncomeRatio)}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Banking Operations */}
                <div style={{ background: '#f8fafc', padding: '25px', borderRadius: '15px', border: '2px solid #e2e8f0' }}>
                  <h3 style={{ fontSize: '1.3rem', marginBottom: '20px', color: '#333', display: 'flex', alignItems: 'center' }}>
                    <Users style={{ marginRight: '8px', color: '#10b981' }} />
                    Banking Operations
                  </h3>
                  
                  <div style={{ display: 'grid', gap: '15px' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.8rem', color: '#666', marginBottom: '5px', fontWeight: '600' }}>
                        Retail Customers
                      </label>
                      <input 
                        type="number"
                        value={inputs.retailCustomers}
                        onChange={(e) => handleInputChange('retailCustomers', e.target.value)}
                        style={{
                          width: '100%',
                          padding: '10px',
                          border: '2px solid #e5e7eb',
                          borderRadius: '8px',
                          fontSize: '0.9rem',
                          outline: 'none'
                        }}
                      />
                    </div>
                    
                    <div>
                      <label style={{ display: 'block', fontSize: '0.8rem', color: '#666', marginBottom: '5px', fontWeight: '600' }}>
                        Business Customers
                      </label>
                      <input 
                        type="number"
                        value={inputs.businessCustomers}
                        onChange={(e) => handleInputChange('businessCustomers', e.target.value)}
                        style={{
                          width: '100%',
                          padding: '10px',
                          border: '2px solid #e5e7eb',
                          borderRadius: '8px',
                          fontSize: '0.9rem',
                          outline: 'none'
                        }}
                      />
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '0.8rem', color: '#666', marginBottom: '5px', fontWeight: '600' }}>
                        Commercial Customers
                      </label>
                      <input 
                        type="number"
                        value={inputs.commercialCustomers}
                        onChange={(e) => handleInputChange('commercialCustomers', e.target.value)}
                        style={{
                          width: '100%',
                          padding: '10px',
                          border: '2px solid #e5e7eb',
                          borderRadius: '8px',
                          fontSize: '0.9rem',
                          outline: 'none'
                        }}
                      />
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '0.8rem', color: '#666', marginBottom: '5px', fontWeight: '600' }}>
                        Current Loan Processing (days)
                      </label>
                      <input 
                        type="number"
                        value={inputs.avgLoanProcessingTime}
                        onChange={(e) => handleInputChange('avgLoanProcessingTime', e.target.value)}
                        style={{
                          width: '100%',
                          padding: '10px',
                          border: '2px solid #e5e7eb',
                          borderRadius: '8px',
                          fontSize: '0.9rem',
                          outline: 'none'
                        }}
                      />
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '0.8rem', color: '#666', marginBottom: '5px', fontWeight: '600' }}>
                        Customer Onboarding (days)
                      </label>
                      <input 
                        type="number"
                        value={inputs.customerOnboardingTime}
                        onChange={(e) => handleInputChange('customerOnboardingTime', e.target.value)}
                        style={{
                          width: '100%',
                          padding: '10px',
                          border: '2px solid #e5e7eb',
                          borderRadius: '8px',
                          fontSize: '0.9rem',
                          outline: 'none'
                        }}
                      />
                    </div>
                  </div>
                </div>

                {/* FintechOS Solution */}
                <div style={{ background: '#f8fafc', padding: '25px', borderRadius: '15px', border: '2px solid #e2e8f0' }}>
                  <h3 style={{ fontSize: '1.3rem', marginBottom: '20px', color: '#333', display: 'flex', alignItems: 'center' }}>
                    <Briefcase style={{ marginRight: '8px', color: '#8b5cf6' }} />
                    FintechOS Platform
                  </h3>
                  
                  <div style={{ display: 'grid', gap: '15px' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.8rem', color: '#666', marginBottom: '5px', fontWeight: '600' }}>
                        Annual Platform Cost (USD)
                      </label>
                      <input 
                        type="number"
                        value={inputs.solutionCost}
                        onChange={(e) => handleInputChange('solutionCost', e.target.value)}
                        style={{
                          width: '100%',
                          padding: '10px',
                          border: '2px solid #e5e7eb',
                          borderRadius: '8px',
                          fontSize: '0.9rem',
                          outline: 'none'
                        }}
                      />
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '0.8rem', color: '#666', marginBottom: '5px', fontWeight: '600' }}>
                        Contract Duration
                      </label>
                      <select 
                        value={inputs.contractYears}
                        onChange={(e) => handleInputChange('contractYears', e.target.value)}
                        style={{
                          width: '100%',
                          padding: '10px',
                          border: '2px solid #e5e7eb',
                          borderRadius: '8px',
                          fontSize: '0.9rem',
                          outline: 'none',
                          background: 'white'
                        }}
                      >
                        {[1,2,3,4,5,6,7,8,9,10].map(year => (
                          <option key={year} value={year}>{year} Year{year > 1 ? 's' : ''}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '0.8rem', color: '#666', marginBottom: '5px', fontWeight: '600' }}>
                        Process Time Reduction
                      </label>
                      <input 
                        type="number"
                        step="0.01"
                        min="0"
                        max="1"
                        value={inputs.processTimeReduction}
                        onChange={(e) => handleInputChange('processTimeReduction', e.target.value)}
                        style={{
                          width: '100%',
                          padding: '10px',
                          border: '2px solid #e5e7eb',
                          borderRadius: '8px',
                          fontSize: '0.9rem',
                          outline: 'none'
                        }}
                      />
                      <p style={{ fontSize: '0.7rem', color: '#888', margin: '2px 0 0 0' }}>
                        {formatPercentage(inputs.processTimeReduction)} faster processing
                      </p>
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '0.8rem', color: '#666', marginBottom: '5px', fontWeight: '600' }}>
                        Staff Efficiency Gain
                      </label>
                      <input 
                        type="number"
                        step="0.01"
                        min="0"
                        max="1"
                        value={inputs.staffEfficiencyGain}
                        onChange={(e) => handleInputChange('staffEfficiencyGain', e.target.value)}
                        style={{
                          width: '100%',
                          padding: '10px',
                          border: '2px solid #e5e7eb',
                          borderRadius: '8px',
                          fontSize: '0.9rem',
                          outline: 'none'
                        }}
                      />
                      <p style={{ fontSize: '0.7rem', color: '#888', margin: '2px 0 0 0' }}>
                        {formatPercentage(inputs.staffEfficiencyGain)} productivity boost
                      </p>
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '0.8rem', color: '#666', marginBottom: '5px', fontWeight: '600' }}>
                        Compliance Risk Reduction
                      </label>
                      <input 
                        type="number"
                        step="0.01"
                        min="0"
                        max="1"
                        value={inputs.complianceRiskReduction}
                        onChange={(e) => handleInputChange('complianceRiskReduction', e.target.value)}
                        style={{
                          width: '100%',
                          padding: '10px',
                          border: '2px solid #e5e7eb',
                          borderRadius: '8px',
                          fontSize: '0.9rem',
                          outline: 'none'
                        }}
                      />
                      <p style={{ fontSize: '0.7rem', color: '#888', margin: '2px 0 0 0' }}>
                        {formatPercentage(inputs.complianceRiskReduction)} risk reduction
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Analysis Tab */}
          {activeTab === 'analysis' && (
            <div>
              <h2 style={{ fontSize: '1.8rem', marginBottom: '30px', color: '#1f2937', display: 'flex', alignItems: 'center' }}>
                <TrendingUp style={{ marginRight: '12px', color: '#10b981' }} />
                Detailed Financial Analysis
              </h2>

              {/* Benefits Breakdown Charts */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px', marginBottom: '30px' }}>
                <div style={{
                  background: 'white',
                  borderRadius: '15px',
                  padding: '25px',
                  border: '2px solid #e2e8f0'
                }}>
                  <h3 style={{ fontSize: '1.3rem', marginBottom: '15px', color: '#333', textAlign: 'center' }}>
                    Operational Efficiency Gains
                  </h3>
                  <div style={{ height: '250px', width: '100%' }}>
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          dataKey="value"
                          data={getCostSavingsBreakdown()}
                          cx="50%"
                          cy="50%"
                          outerRadius={80}
                          fill="#8884d8"
                          label
                        >
                          {getCostSavingsBreakdown().map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={BANKING_COLORS[index % BANKING_COLORS.length]} />
                          ))}
                        </Pie>
                        <Tooltip formatter={(value) => formatCurrency(value)} />
                        <Legend />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                <div style={{
                  background: 'white',
                  borderRadius: '15px',
                  padding: '25px',
                  border: '2px solid #e2e8f0'
                }}>
                  <h3 style={{ fontSize: '1.3rem', marginBottom: '15px', color: '#333', textAlign: 'center' }}>
                    Digital Revenue Growth
                  </h3>
                  <div style={{ height: '250px', width: '100%' }}>
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          dataKey="value"
                          data={getRevenueBreakdown()}
                          cx="50%"
                          cy="50%"
                          outerRadius={80}
                          fill="#8884d8"
                          label
                        >
                          {getRevenueBreakdown().map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={BANKING_COLORS[index % BANKING_COLORS.length]} />
                          ))}
                        </Pie>
                        <Tooltip formatter={(value) => formatCurrency(value)} />
                        <Legend />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>

              {/* Year-by-Year Analysis Table */}
              <div style={{
                background: 'white',
                borderRadius: '15px',
                padding: '30px',
                border: '2px solid #e2e8f0'
              }}>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '20px', color: '#333', textAlign: 'center' }}>
                  Year-by-Year Financial Analysis
                </h3>
                <div style={{ overflowX: 'auto' }}>
                  <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
                    <thead>
                      <tr style={{ background: '#f8fafc' }}>
                        <th style={{ border: '1px solid #e2e8f0', padding: '12px', textAlign: 'left', fontWeight: '600' }}>Year</th>
                        <th style={{ border: '1px solid #e2e8f0', padding: '12px', textAlign: 'right', fontWeight: '600' }}>Cost Savings</th>
                        <th style={{ border: '1px solid #e2e8f0', padding: '12px', textAlign: 'right', fontWeight: '600' }}>Revenue Gains</th>
                        <th style={{ border: '1px solid #e2e8f0', padding: '12px', textAlign: 'right', fontWeight: '600' }}>Total Benefits</th>
                        <th style={{ border: '1px solid #e2e8f0', padding: '12px', textAlign: 'right', fontWeight: '600' }}>ROI %</th>
                        <th style={{ border: '1px solid #e2e8f0', padding: '12px', textAlign: 'right', fontWeight: '600' }}>Cumulative</th>
                      </tr>
                    </thead>
                    <tbody>
                      {getYearByYearData().map((year, index) => (
                        <tr key={index} style={{ background: index % 2 === 0 ? 'white' : '#f8fafc' }}>
                          <td style={{ border: '1px solid #e2e8f0', padding: '12px', fontWeight: '500' }}>Year {index + 1}</td>
                          <td style={{ border: '1px solid #e2e8f0', padding: '12px', textAlign: 'right' }}>{formatCurrency(year.costSavings)}</td>
                          <td style={{ border: '1px solid #e2e8f0', padding: '12px', textAlign: 'right' }}>{formatCurrency(year.revenueGains)}</td>
                          <td style={{ border: '1px solid #e2e8f0', padding: '12px', textAlign: 'right', fontWeight: '600', color: '#10b981' }}>{formatCurrency(year.totalBenefits)}</td>
                          <td style={{ border: '1px solid #e2e8f0', padding: '12px', textAlign: 'right', fontWeight: '600', color: '#3b82f6' }}>{year.roi}%</td>
                          <td style={{ border: '1px solid #e2e8f0', padding: '12px', textAlign: 'right', fontWeight: '600', color: '#8b5cf6' }}>{formatCurrency(year.cumulative)}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* Scenarios Tab */}
          {activeTab === 'scenarios' && (
            <div>
              <h2 style={{ fontSize: '1.8rem', marginBottom: '30px', color: '#1f2937', display: 'flex', alignItems: 'center' }}>
                <FileText style={{ marginRight: '12px', color: '#3b82f6' }} />
                Scenario Management
              </h2>
              
              <div style={{
                background: '#f8fafc',
                borderRadius: '15px',
                padding: '40px',
                border: '2px solid #e2e8f0',
                textAlign: 'center'
              }}>
                <FileText style={{ width: '64px', height: '64px', color: '#cbd5e1', margin: '0 auto 20px' }} />
                <h3 style={{ fontSize: '1.5rem', color: '#374151', marginBottom: '10px' }}>
                  Scenario Management Coming Soon
                </h3>
                <p style={{ color: '#6b7280', fontSize: '1.1rem', marginBottom: '20px' }}>
                  Save, load, and compare multiple ROI scenarios for different banking implementations.
                </p>
                <div style={{
                  background: 'white',
                  borderRadius: '10px',
                  padding: '20px',
                  border: '2px solid #e2e8f0',
                  marginTop: '20px'
                }}>
                  <h4 style={{ color: '#374151', marginBottom: '15px' }}>Current Analysis Summary</h4>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', fontSize: '0.9rem' }}>
                    <div style={{ textAlign: 'left' }}>
                      <p><strong>Institution:</strong> {inputs.companyName}</p>
                      <p><strong>ROI:</strong> {calculations.roi}%</p>
                      <p><strong>Payback:</strong> {calculations.paybackMonths} months</p>
                    </div>
                    <div style={{ textAlign: 'left' }}>
                      <p><strong>NPV:</strong> {formatCurrency(calculations.npv)}</p>
                      <p><strong>Total Benefits:</strong> {formatCurrency(calculations.totalBenefits)}</p>
                      <p><strong>Contract:</strong> {inputs.contractYears} years</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Benchmarks Tab */}
          {activeTab === 'benchmarks' && (
            <div>
              <h2 style={{ fontSize: '1.8rem', marginBottom: '30px', color: '#1f2937', display: 'flex', alignItems: 'center' }}>
                <Award style={{ marginRight: '12px', color: '#f59e0b' }} />
                FintechOS vs. Traditional Banking Technology
              </h2>
              
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
                <div style={{
                  background: 'linear-gradient(135deg, #3b82f6, #1e40af)',
                  borderRadius: '15px',
                  padding: '25px',
                  color: 'white',
                  textAlign: 'center'
                }}>
                  <p style={{ fontSize: '0.9rem', opacity: 0.8, marginBottom: '5px' }}>Digital-First ROI</p>
                  <p style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '5px' }}>
                    {industryBenchmarks.averageROI}%
                  </p>
                  <p style={{ fontSize: '0.8rem', opacity: 0.8, marginBottom: '10px' }}>Industry Average</p>
                  <p style={{ fontSize: '0.9rem', fontWeight: '600' }}>
                    FintechOS: {calculations.roi}%
                    <span style={{ fontSize: '0.8rem', marginLeft: '5px' }}>
                      ({calculations.roi > industryBenchmarks.averageROI ? '+' : ''}{calculations.roi - industryBenchmarks.averageROI}%)
                    </span>
                  </p>
                </div>
                
                <div style={{
                  background: 'linear-gradient(135deg, #10b981, #059669)',
                  borderRadius: '15px',
                  padding: '25px',
                  color: 'white',
                  textAlign: 'center'
                }}>
                  <p style={{ fontSize: '0.9rem', opacity: 0.8, marginBottom: '5px' }}>Digital Payback</p>
                  <p style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '5px' }}>
                    {industryBenchmarks.averagePayback} mo
                  </p>
                  <p style={{ fontSize: '0.8rem', opacity: 0.8, marginBottom: '10px' }}>Legacy Systems</p>
                  <p style={{ fontSize: '0.9rem', fontWeight: '600' }}>
                    FintechOS: {calculations.paybackMonths} mo
                    <span style={{ fontSize: '0.8rem', marginLeft: '5px' }}>
                      ({calculations.paybackMonths < industryBenchmarks.averagePayback ? '-' : '+'}{Math.abs(calculations.paybackMonths - industryBenchmarks.averagePayback)} mo)
                    </span>
                  </p>
                </div>
                
                <div style={{
                  background: 'linear-gradient(135deg, #8b5cf6, #7c3aed)',
                  borderRadius: '15px',
                  padding: '25px',
                  color: 'white',
                  textAlign: 'center'
                }}>
                  <p style={{ fontSize: '0.9rem', opacity: 0.8, marginBottom: '5px' }}>Cost per Loan</p>
                  <p style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '5px' }}>
                    ${industryBenchmarks.averageCostPerLoan}
                  </p>
                  <p style={{ fontSize: '0.8rem', opacity: 0.8, marginBottom: '10px' }}>Traditional Systems</p>
                  <p style={{ fontSize: '0.9rem', fontWeight: '600' }}>
                    FintechOS: {formatCurrency(calculations.costPerLoan)}
                    <span style={{ fontSize: '0.8rem', marginLeft: '5px' }}>
                      ({calculations.costPerLoan < industryBenchmarks.averageCostPerLoan ? '-' : '+'}{formatCurrency(Math.abs(calculations.costPerLoan - industryBenchmarks.averageCostPerLoan))})
                    </span>
                  </p>
                </div>
                
                <div style={{
                  background: 'linear-gradient(135deg, #f59e0b, #d97706)',
                  borderRadius: '15px',
                  padding: '25px',
                  color: 'white',
                  textAlign: 'center'
                }}>
                  <p style={{ fontSize: '0.9rem', opacity: 0.8, marginBottom: '5px' }}>Platform Efficiency</p>
                  <p style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '5px' }}>
                    {formatPercentage(industryBenchmarks.averageEfficiencyRatio)}
                  </p>
                  <p style={{ fontSize: '0.8rem', opacity: 0.8', marginBottom: '10px' }}>Legacy Average</p>
                  <p style={{ fontSize: '0.9rem', fontWeight: '600' }}>
                    FintechOS: {formatPercentage(calculations.efficiencyRatio)}
                    <span style={{ fontSize: '0.8rem', marginLeft: '5px' }}>
                      ({formatPercentage(Math.abs(calculations.efficiencyRatio - industryBenchmarks.averageEfficiencyRatio))} better)
                    </span>
                  </p>
                </div>
              </div>
              
              <div style={{
                background: 'white',
                borderRadius: '15px',
                padding: '30px',
                border: '2px solid #e2e8f0',
                marginTop: '30px'
              }}>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '20px', color: '#333', textAlign: 'center' }}>
                  Competitive Advantage Analysis
                </h3>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px' }}>
                  <div>
                    <h4 style={{ color: '#374151', marginBottom: '15px' }}>FintechOS Advantages</h4>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                      <li style={{ padding: '8px 0', borderBottom: '1px solid #e5e7eb', display: 'flex', alignItems: 'center' }}>
                        <span style={{ color: '#10b981', marginRight: '8px' }}>✓</span>
                        Cloud-native digital banking platform
                      </li>
                      <li style={{ padding: '8px 0', borderBottom: '1px solid #e5e7eb', display: 'flex', alignItems: 'center' }}>
                        <span style={{ color: '#10b981', marginRight: '8px' }}>✓</span>
                        {formatPercentage(inputs.processTimeReduction)} faster loan processing
                      </li>
                      <li style={{ padding: '8px 0', borderBottom: '1px solid #e5e7eb', display: 'flex', alignItems: 'center' }}>
                        <span style={{ color: '#10b981', marginRight: '8px' }}>✓</span>
                        {formatPercentage(inputs.complianceRiskReduction)} compliance risk reduction
                      </li>
                      <li style={{ padding: '8px 0', display: 'flex', alignItems: 'center' }}>
                        <span style={{ color: '#10b981', marginRight: '8px' }}>✓</span>
                        {calculations.paybackMonths} month ROI payback
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 style={{ color: '#374151', marginBottom: '15px' }}>Traditional Banking Challenges</h4>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                      <li style={{ padding: '8px 0', borderBottom: '1px solid #e5e7eb', display: 'flex', alignItems: 'center' }}>
                        <span style={{ color: '#ef4444', marginRight: '8px' }}>✗</span>
                        Legacy system maintenance costs
                      </li>
                      <li style={{ padding: '8px 0', borderBottom: '1px solid #e5e7eb', display: 'flex', alignItems: 'center' }}>
                        <span style={{ color: '#ef4444', marginRight: '8px' }}>✗</span>
                        {industryBenchmarks.averagePayback} month average payback
                      </li>
                      <li style={{ padding: '8px 0', borderBottom: '1px solid #e5e7eb', display: 'flex', alignItems: 'center' }}>
                        <span style={{ color: '#ef4444', marginRight: '8px' }}>✗</span>
                        Manual compliance processes
                      </li>
                      <li style={{ padding: '8px 0', display: 'flex', alignItems: 'center' }}>
                        <span style={{ color: '#ef4444', marginRight: '8px' }}>✗</span>
                        Limited digital transformation capability
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
