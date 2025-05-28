import React, { useState } from 'react';
import { TrendingUp, DollarSign, BarChart3, Calculator, Building2, Users, Briefcase } from 'lucide-react';
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
  ResponsiveContainer
} from 'recharts';

const BANKING_COLORS = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6', '#06d6a0'];

function App() {
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
    avgLoanProcessingTime: 15, // days
    customerOnboardingTime: 7, // days
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
    processTimeReduction: 0.60, // 60%
    onboardingTimeReduction: 0.70, // 70%
    staffEfficiencyGain: 0.40, // 40%
    complianceRiskReduction: 0.80, // 80%
    
    // Revenue Opportunities
    newLoansPerMonth: 100,
    avgLoanValue: 50000,
    loanMargin: 0.03, // 3%
    crossSellRate: 0.15, // 15%
    customerRetentionImprovement: 0.05, // 5%
    
    // Contract Terms
    contractYears: 5,
    discountRate: 0.10
  });

  // Advanced Banking Calculations
  const calculations = {
    // Current State Costs
    get currentTotalCosts() {
      return inputs.manualProcessingCost + inputs.complianceFines + 
             inputs.trainingCosts + inputs.infrastructureCosts + 
             (inputs.staffHours * 12 * inputs.hourlyRate);
    },
    
    // Cost Savings
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
             (inputs.trainingCosts * 0.5); // 50% training cost reduction
    },
    
    // Revenue Opportunities
    get fasterLoanProcessingRevenue() {
      const additionalLoans = inputs.newLoansPerMonth * 12 * inputs.processTimeReduction * 0.4;
      return additionalLoans * inputs.avgLoanValue * inputs.loanMargin;
    },
    get crossSellingRevenue() {
      const totalCustomers = inputs.retailCustomers + inputs.businessCustomers + inputs.commercialCustomers;
      return totalCustomers * inputs.crossSellRate * 150; // avg product value $150
    },
    get retentionRevenue() {
      return inputs.annualRevenue * inputs.customerRetentionImprovement;
    },
    get nimImprovement() {
      return inputs.portfolioMetrics.loanPortfolioSize * 0.002; // 20 bps improvement
    },
    get totalRevenueGain() {
      return this.fasterLoanProcessingRevenue + this.crossSellingRevenue + 
             this.retentionRevenue + this.nimImprovement;
    },
    
    // Banking-Specific Metrics
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
    
    // Overall ROI
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
      // Simple NPV calculation for contract years
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

  // Chart data
  const getCostSavingsBreakdown = () => [
    { name: 'Staff Efficiency', value: calculations.staffCostSavings, color: BANKING_COLORS[0] },
    { name: 'Compliance Automation', value: calculations.complianceSavings, color: BANKING_COLORS[1] },
    { name: 'Process Digitization', value: calculations.processingCostSavings, color: BANKING_COLORS[2] },
    { name: 'Training Reduction', value: inputs.trainingCosts * 0.5, color: BANKING_COLORS[3] }
  ];

  const getRevenueBreakdown = () => [
    { name: 'Digital Loan Processing', value: calculations.fasterLoanProcessingRevenue, color: BANKING_COLORS[0] },
    { name: 'Cross-Platform Selling', value: calculations.crossSellingRevenue, color: BANKING_COLORS[1] },
    { name: 'Customer Experience', value: calculations.retentionRevenue, color: BANKING_COLORS[2] },
    { name: 'NIM Improvement', value: calculations.nimImprovement, color: BANKING_COLORS[3] }
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
        padding: '40px',
        boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
      }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h1 style={{
            fontSize: '3rem',
            fontWeight: 'bold',
            background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            marginBottom: '10px'
          }}>
            FintechOS Value Consultant
          </h1>
          <p style={{ color: '#666', fontSize: '1.1rem' }}>
            Digital Banking Transformation ROI Calculator
          </p>
        </div>

        {/* Hero Banner */}
        <div style={{
          background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
          borderRadius: '15px',
          padding: '30px',
          color: 'white',
          textAlign: 'center',
          marginBottom: '40px'
        }}>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '10px' }}>
            Transform Banking with FintechOS
          </h2>
          <p style={{ opacity: 0.9 }}>
            Comprehensive banking ROI analysis with portfolio metrics, regulatory compliance, and digital transformation benefits
          </p>
        </div>

        {/* Key Metrics Dashboard */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginBottom: '40px' }}>
          <div style={{
            background: 'linear-gradient(135deg, #10b981, #06d6a0)',
            borderRadius: '15px',
            padding: '25px',
            color: 'white',
            textAlign: 'center'
          }}>
            <p style={{ fontSize: '0.9rem', opacity: 0.8, margin: '0 0 5px 0' }}>Digital ROI</p>
            <p style={{ fontSize: '2.5rem', fontWeight: 'bold', margin: '0 0 5px 0' }}>{calculations.roi}%</p>
            <p style={{ fontSize: '0.8rem', opacity: 0.8, margin: 0 }}>Annual return</p>
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
            <p style={{ fontSize: '0.8rem', opacity: 0.8, margin: 0 }}>Investment recovery</p>
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
            <p style={{ fontSize: '0.8rem', opacity: 0.8, margin: 0 }}>Net present value</p>
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

        {/* Main Content Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '30px', marginBottom: '40px' }}>
          
          {/* Company & Portfolio Section */}
          <div>
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
                    borderRadius: '6px',
                    fontSize: '0.9rem',
                    outline: 'none'
                  }}
                />
              </div>
              
              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', color: '#666', marginBottom: '5px', fontWeight: '600' }}>
                  Bank Size
                </label>
                <select 
                  value={inputs.bankSize}
                  onChange={(e) => handleInputChange('bankSize', e.target.value)}
                  style={{
                    width: '100%',
                    padding: '10px',
                    border: '2px solid #e5e7eb',
                    borderRadius: '6px',
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
                    borderRadius: '6px',
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
                    borderRadius: '6px',
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
                    borderRadius: '6px',
                    fontSize: '0.9rem',
                    outline: 'none'
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', color: '#666', marginBottom: '5px', fontWeight: '600' }}>
                  Net Interest Margin
                </label>
                <input 
                  type="number"
                  step="0.001"
                  value={inputs.portfolioMetrics.netInterestMargin}
                  onChange={(e) => handleInputChange('portfolioMetrics', e.target.value, true, 'netInterestMargin')}
                  style={{
                    width: '100%',
                    padding: '10px',
                    border: '2px solid #e5e7eb',
                    borderRadius: '6px',
                    fontSize: '0.9rem',
                    outline: 'none'
                  }}
                />
              </div>
            </div>
          </div>

          {/* Banking Operations Section */}
          <div>
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
                    borderRadius: '6px',
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
                    borderRadius: '6px',
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
                    borderRadius: '6px',
                    fontSize: '0.9rem',
                    outline: 'none'
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', color: '#666', marginBottom: '5px', fontWeight: '600' }}>
                  Avg Loan Processing Time (days)
                </label>
                <input 
                  type="number"
                  value={inputs.avgLoanProcessingTime}
                  onChange={(e) => handleInputChange('avgLoanProcessingTime', e.target.value)}
                  style={{
                    width: '100%',
                    padding: '10px',
                    border: '2px solid #e5e7eb',
                    borderRadius: '6px',
                    fontSize: '0.9rem',
                    outline: 'none'
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', color: '#666', marginBottom: '5px', fontWeight: '600' }}>
                  Customer Onboarding Time (days)
                </label>
                <input 
                  type="number"
                  value={inputs.customerOnboardingTime}
                  onChange={(e) => handleInputChange('customerOnboardingTime', e.target.value)}
                  style={{
                    width: '100%',
                    padding: '10px',
                    border: '2px solid #e5e7eb',
                    borderRadius: '6px',
                    fontSize: '0.9rem',
                    outline: 'none'
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', color: '#666', marginBottom: '5px', fontWeight: '600' }}>
                  Manual Processing Cost (Annual)
                </label>
                <input 
                  type="number"
                  value={inputs.manualProcessingCost}
                  onChange={(e) => handleInputChange('manualProcessingCost', e.target.value)}
                  style={{
                    width: '100%',
                    padding: '10px',
                    border: '2px solid #e5e7eb',
                    borderRadius: '6px',
                    fontSize: '0.9rem',
                    outline: 'none'
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', color: '#666', marginBottom: '5px', fontWeight: '600' }}>
                  Compliance Fines (Annual)
                </label>
                <input 
                  type="number"
                  value={inputs.complianceFines}
                  onChange={(e) => handleInputChange('complianceFines', e.target.value)}
                  style={{
                    width: '100%',
                    padding: '10px',
                    border: '2px solid #e5e7eb',
                    borderRadius: '6px',
                    fontSize: '0.9rem',
                    outline: 'none'
                  }}
                />
              </div>
            </div>
          </div>

          {/* FintechOS Solution Section */}
          <div>
            <h3 style={{ fontSize: '1.3rem', marginBottom: '20px', color: '#333', display: 'flex', alignItems: 'center' }}>
              <Briefcase style={{ marginRight: '8px', color: '#8b5cf6' }} />
              FintechOS Solution
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
                    borderRadius: '6px',
                    fontSize: '0.9rem',
                    outline: 'none'
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', color: '#666', marginBottom: '5px', fontWeight: '600' }}>
                  Implementation Cost (One-time)
                </label>
                <input 
                  type="number"
                  value={inputs.implementationCost}
                  onChange={(e) => handleInputChange('implementationCost', e.target.value)}
                  style={{
                    width: '100%',
                    padding: '10px',
                    border: '2px solid #e5e7eb',
                    borderRadius: '6px',
                    fontSize: '0.9rem',
                    outline: 'none'
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', color: '#666', marginBottom: '5px', fontWeight: '600' }}>
                  Contract Years
                </label>
                <select 
                  value={inputs.contractYears}
                  onChange={(e) => handleInputChange('contractYears', e.target.value)}
                  style={{
                    width: '100%',
                    padding: '10px',
                    border: '2px solid #e5e7eb',
                    borderRadius: '6px',
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
                    borderRadius: '6px',
                    fontSize: '0.9rem',
                    outline: 'none'
                  }}
                />
                <p style={{ fontSize: '0.7rem', color: '#888', margin: '2px 0 0 0' }}>
                  {formatPercentage(inputs.processTimeReduction)} faster loan processing
                </p>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', color: '#666', marginBottom: '5px', fontWeight: '600' }}>
                  Onboarding Time Reduction
                </label>
                <input 
                  type="number"
                  step="0.01"
                  min="0"
                  max="1"
                  value={inputs.onboardingTimeReduction}
                  onChange={(e) => handleInputChange('onboardingTimeReduction', e.target.value)}
                  style={{
                    width: '100%',
                    padding: '10px',
                    border: '2px solid #e5e7eb',
                    borderRadius: '6px',
                    fontSize: '0.9rem',
                    outline: 'none'
                  }}
                />
                <p style={{ fontSize: '0.7rem', color: '#888', margin: '2px 0 0 0' }}>
                  {formatPercentage(inputs.onboardingTimeReduction)} faster customer onboarding
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
                    borderRadius: '6px',
                    fontSize: '0.9rem',
                    outline: 'none'
                  }}
                />
                <p style={{ fontSize: '0.7rem', color: '#888', margin: '2px 0 0 0' }}>
                  {formatPercentage(inputs.staffEfficiencyGain)} productivity improvement
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
                    borderRadius: '6px',
                    fontSize: '0.9rem',
                    outline: 'none'
                  }}
                />
                <p style={{ fontSize: '0.7rem', color: '#888', margin: '2px 0 0 0' }}>
                  {formatPercentage(inputs.complianceRiskReduction)} reduction in compliance risk
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Banking-Specific Performance Metrics */}
        <div style={{
          background: '#f8fafc',
          borderRadius: '15px',
          padding: '30px',
          border: '2px solid #e2e8f0',
          marginBottom: '30px'
        }}>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '20px', color: '#333', textAlign: 'center' }}>
            Banking-Specific Performance Metrics
          </h3>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
            <div style={{ textAlign: 'center', padding: '20px', background: 'white', borderRadius: '10px', border: '2px solid #e2e8f0' }}>
              <p style={{ fontSize: '0.9rem', color: '#666', marginBottom: '5px' }}>Cost per Loan</p>
              <p style={{ fontSize: '2rem', fontWeight: 'bold', color: '#3b82f6', margin: '0 0 5px 0' }}>
                {formatCurrency(calculations.costPerLoan)}
              </p>
              <p style={{ fontSize: '0.7rem', color: '#888', margin: 0 }}>
                vs ${formatCurrency(750)} industry avg
              </p>
            </div>
            
            <div style={{ textAlign: 'center', padding: '20px', background: 'white', borderRadius: '10px', border: '2px solid #e2e8f0' }}>
              <p style={{ fontSize: '0.9rem', color: '#666', marginBottom: '5px' }}>Revenue per Customer</p>
              <p style={{ fontSize: '2rem', fontWeight: 'bold', color: '#10b981', margin: '0 0 5px 0' }}>
                {formatCurrency(calculations.revenuePerCustomer)}
              </p>
              <p style={{ fontSize: '0.7rem', color: '#888', margin: 0 }}>annual improvement</p>
            </div>
            
            <div style={{ textAlign: 'center', padding: '20px', background: 'white', borderRadius: '10px', border: '2px solid #e2e8f0' }}>
              <p style={{ fontSize: '0.9rem', color: '#666', marginBottom: '5px' }}>Efficiency Ratio</p>
              <p style={{ fontSize: '2rem', fontWeight: 'bold', color: '#8b5cf6', margin: '0 0 5px 0' }}>
                {formatPercentage(calculations.efficiencyRatio)}
              </p>
              <p style={{ fontSize: '0.7rem', color: '#888', margin: 0 }}>
                vs {formatPercentage(0.65)} current
              </p>
            </div>
            
            <div style={{ textAlign: 'center', padding: '20px', background: 'white', borderRadius: '10px', border: '2px solid #e2e8f0' }}>
              <p style={{ fontSize: '0.9rem', color: '#666', marginBottom: '5px' }}>Loan Processing</p>
              <p style={{ fontSize: '2rem', fontWeight: 'bold', color: '#f59e0b', margin: '0 0 5px 0' }}>
                {calculations.timeSavingsPerLoan.toFixed(1)} days
              </p>
              <p style={{ fontSize: '0.7rem', color: '#888', margin: 0 }}>time savings per loan</p>
            </div>
            
            <div style={{ textAlign: 'center', padding: '20px', background: 'white', borderRadius: '10px', border: '2px solid #e2e8f0' }}>
              <p style={{ fontSize: '0.9rem', color: '#666', marginBottom: '5px' }}>Customer Onboarding</p>
              <p style={{ fontSize: '2rem', fontWeight: 'bold', color: '#ef4444', margin: '0 0 5px 0' }}>
                {calculations.timeSavingsPerOnboarding.toFixed(1)} days
              </p>
              <p style={{ fontSize: '0.7rem', color: '#888', margin: 0 }}>faster onboarding</p>
            </div>
          </div>
        </div>

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

        {/* Multi-Year Analysis Chart */}
        <div style={{
          background: 'white',
          borderRadius: '15px',
          padding: '30px',
          border: '2px solid #e2e8f0'
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

        {/* Footer */}
        <div style={{
          marginTop: '40px',
          textAlign: 'center',
          padding: '30px',
          background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
          borderRadius: '15px',
          color: 'white'
        }}>
          <h3 style={{ fontSize: '1.3rem', marginBottom: '10px' }}>
            Ready for Digital Banking Leadership?
          </h3>
          <p style={{ opacity: 0.9, margin: 0 }}>
            Transform your institution with FintechOS platform technology and achieve industry-leading performance metrics
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
