import React, { useState } from 'react';
import { TrendingUp, DollarSign, BarChart3, Calculator } from 'lucide-react';
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

function App() {
  const [inputs, setInputs] = useState({
    companyName: 'Community Bank',
    revenue: 50000000,
    solutionCost: 300000,
    staffHours: 2000,
    hourlyRate: 50,
    efficiencyGain: 0.40,
    contractYears: 5
  });

  // Enhanced calculations
  const calculations = {
    annualStaffCost: inputs.staffHours * 12 * inputs.hourlyRate,
    get annualSavings() {
      return this.annualStaffCost * inputs.efficiencyGain;
    },
    get roi() {
      return Math.round(((this.annualSavings - inputs.solutionCost) / inputs.solutionCost) * 100);
    },
    get paybackMonths() {
      return Math.round((inputs.solutionCost / this.annualSavings) * 12);
    },
    get netAnnualBenefit() {
      return this.annualSavings - inputs.solutionCost;
    }
  };

  const formatCurrency = (amount) => {
    return '$' + Math.round(amount).toLocaleString();
  };

  // Chart data for multi-year analysis
  const getChartData = () => {
    return Array.from({ length: inputs.contractYears }, (_, i) => ({
      year: `Year ${i + 1}`,
      savings: calculations.annualSavings,
      investment: inputs.solutionCost,
      netBenefit: calculations.netAnnualBenefit,
      cumulative: calculations.netAnnualBenefit * (i + 1)
    }));
  };

  const handleInputChange = (field, value) => {
    setInputs(prev => ({
      ...prev,
      [field]: parseFloat(value) || value
    }));
  };

  return (
    <div style={{ 
      minHeight: '100vh', 
      background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
      padding: '20px',
      fontFamily: 'Arial, sans-serif'
    }}>
      <div style={{
        maxWidth: '1200px',
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
            Comprehensive ROI analysis with advanced visualizations and banking-specific metrics
          </p>
        </div>

        {/* Main Content Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', marginBottom: '40px' }}>
          
          {/* Enhanced Input Section */}
          <div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '20px', color: '#333', display: 'flex', alignItems: 'center' }}>
              <Calculator style={{ marginRight: '10px', color: '#3b82f6' }} />
              Client Configuration
            </h3>
            
            <div style={{ display: 'grid', gap: '20px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.9rem', color: '#666', marginBottom: '8px', fontWeight: '600' }}>
                  Financial Institution Name
                </label>
                <input 
                  type="text"
                  value={inputs.companyName}
                  onChange={(e) => handleInputChange('companyName', e.target.value)}
                  style={{
                    width: '100%',
                    padding: '12px',
                    border: '2px solid #e5e7eb',
                    borderRadius: '8px',
                    fontSize: '1rem',
                    transition: 'all 0.2s',
                    outline: 'none'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#3b82f6'}
                  onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
                />
              </div>
              
              <div>
                <label style={{ display: 'block', fontSize: '0.9rem', color: '#666', marginBottom: '8px', fontWeight: '600' }}>
                  Annual Revenue (USD)
                </label>
                <input 
                  type="number"
                  value={inputs.revenue}
                  onChange={(e) => handleInputChange('revenue', e.target.value)}
                  style={{
                    width: '100%',
                    padding: '12px',
                    border: '2px solid #e5e7eb',
                    borderRadius: '8px',
                    fontSize: '1rem',
                    transition: 'all 0.2s',
                    outline: 'none'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#3b82f6'}
                  onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
                />
              </div>
              
              <div>
                <label style={{ display: 'block', fontSize: '0.9rem', color: '#666', marginBottom: '8px', fontWeight: '600' }}>
                  FintechOS Annual Investment (USD)
                </label>
                <input 
                  type="number"
                  value={inputs.solutionCost}
                  onChange={(e) => handleInputChange('solutionCost', e.target.value)}
                  style={{
                    width: '100%',
                    padding: '12px',
                    border: '2px solid #e5e7eb',
                    borderRadius: '8px',
                    fontSize: '1rem',
                    transition: 'all 0.2s',
                    outline: 'none'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#3b82f6'}
                  onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.9rem', color: '#666', marginBottom: '8px', fontWeight: '600' }}>
                    Monthly Staff Hours
                  </label>
                  <input 
                    type="number"
                    value={inputs.staffHours}
                    onChange={(e) => handleInputChange('staffHours', e.target.value)}
                    style={{
                      width: '100%',
                      padding: '12px',
                      border: '2px solid #e5e7eb',
                      borderRadius: '8px',
                      fontSize: '1rem',
                      transition: 'all 0.2s',
                      outline: 'none'
                    }}
                    onFocus={(e) => e.target.style.borderColor = '#3b82f6'}
                    onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
                  />
                </div>
                
                <div>
                  <label style={{ display: 'block', fontSize: '0.9rem', color: '#666', marginBottom: '8px', fontWeight: '600' }}>
                    Hourly Rate (USD)
                  </label>
                  <input 
                    type="number"
                    value={inputs.hourlyRate}
                    onChange={(e) => handleInputChange('hourlyRate', e.target.value)}
                    style={{
                      width: '100%',
                      padding: '12px',
                      border: '2px solid #e5e7eb',
                      borderRadius: '8px',
                      fontSize: '1rem',
                      transition: 'all 0.2s',
                      outline: 'none'
                    }}
                    onFocus={(e) => e.target.style.borderColor = '#3b82f6'}
                    onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
                  />
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.9rem', color: '#666', marginBottom: '8px', fontWeight: '600' }}>
                  Efficiency Gain (0.1 = 10%, 0.4 = 40%)
                </label>
                <input 
                  type="number"
                  step="0.01"
                  min="0"
                  max="1"
                  value={inputs.efficiencyGain}
                  onChange={(e) => handleInputChange('efficiencyGain', e.target.value)}
                  style={{
                    width: '100%',
                    padding: '12px',
                    border: '2px solid #e5e7eb',
                    borderRadius: '8px',
                    fontSize: '1rem',
                    transition: 'all 0.2s',
                    outline: 'none'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#3b82f6'}
                  onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.9rem', color: '#666', marginBottom: '8px', fontWeight: '600' }}>
                  Contract Years
                </label>
                <select 
                  value={inputs.contractYears}
                  onChange={(e) => handleInputChange('contractYears', e.target.value)}
                  style={{
                    width: '100%',
                    padding: '12px',
                    border: '2px solid #e5e7eb',
                    borderRadius: '8px',
                    fontSize: '1rem',
                    transition: 'all 0.2s',
                    outline: 'none',
                    background: 'white'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#3b82f6'}
                  onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
                >
                  {[1,2,3,4,5,6,7,8,9,10].map(year => (
                    <option key={year} value={year}>{year} Year{year > 1 ? 's' : ''}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Enhanced Results Section */}
          <div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '20px', color: '#333', display: 'flex', alignItems: 'center' }}>
              <TrendingUp style={{ marginRight: '10px', color: '#10b981' }} />
              ROI Analysis Results
            </h3>
            
            <div style={{ display: 'grid', gap: '15px', marginBottom: '30px' }}>
              <div style={{
                background: 'linear-gradient(135deg, #10b981, #06d6a0)',
                borderRadius: '15px',
                padding: '25px',
                color: 'white',
                textAlign: 'center'
              }}>
                <p style={{ fontSize: '0.9rem', opacity: 0.8, margin: '0 0 5px 0' }}>Digital ROI</p>
                <p style={{ fontSize: '2.5rem', fontWeight: 'bold', margin: '0 0 5px 0' }}>{calculations.roi}%</p>
                <p style={{ fontSize: '0.8rem', opacity: 0.8, margin: 0 }}>Annual return on investment</p>
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
                <p style={{ fontSize: '0.8rem', opacity: 0.8, margin: 0 }}>Time to recover investment</p>
              </div>
              
              <div style={{
                background: 'linear-gradient(135deg, #8b5cf6, #a855f7)',
                borderRadius: '15px',
                padding: '25px',
                color: 'white',
                textAlign: 'center'
              }}>
                <p style={{ fontSize: '0.9rem', opacity: 0.8, margin: '0 0 5px 0' }}>Net Annual Benefit</p>
                <p style={{ fontSize: '1.8rem', fontWeight: 'bold', margin: '0 0 5px 0' }}>{formatCurrency(calculations.netAnnualBenefit)}</p>
                <p style={{ fontSize: '0.8rem', opacity: 0.8, margin: 0 }}>After FintechOS investment</p>
              </div>
            </div>

            {/* Value Summary */}
            <div style={{
              background: '#f8fafc',
              borderRadius: '15px',
              padding: '20px',
              border: '2px solid #e2e8f0'
            }}>
              <h4 style={{ fontSize: '1.1rem', marginBottom: '15px', color: '#333', display: 'flex', alignItems: 'center' }}>
                <BarChart3 style={{ marginRight: '8px', color: '#3b82f6' }} />
                Financial Summary
              </h4>
              <div style={{ display: 'grid', gap: '10px', fontSize: '0.9rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '8px', borderBottom: '1px solid #e2e8f0' }}>
                  <span style={{ color: '#666' }}>Institution:</span>
                  <span style={{ fontWeight: '600' }}>{inputs.companyName}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '8px', borderBottom: '1px solid #e2e8f0' }}>
                  <span style={{ color: '#666' }}>Annual Revenue:</span>
                  <span style={{ fontWeight: '600' }}>{formatCurrency(inputs.revenue)}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '8px', borderBottom: '1px solid #e2e8f0' }}>
                  <span style={{ color: '#666' }}>Current Staff Cost:</span>
                  <span style={{ fontWeight: '600' }}>{formatCurrency(calculations.annualStaffCost)}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '8px', borderBottom: '1px solid #e2e8f0' }}>
                  <span style={{ color: '#666' }}>Annual Savings:</span>
                  <span style={{ fontWeight: '600', color: '#10b981' }}>{formatCurrency(calculations.annualSavings)}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: '8px' }}>
                  <span style={{ color: '#666' }}>FintechOS Investment:</span>
                  <span style={{ fontWeight: '600', color: '#3b82f6' }}>{formatCurrency(inputs.solutionCost)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* NEW: Multi-Year Analysis Chart */}
        <div style={{
          background: 'white',
          borderRadius: '15px',
          padding: '30px',
          border: '2px solid #e2e8f0',
          marginBottom: '30px'
        }}>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '20px', color: '#333', textAlign: 'center' }}>
            {inputs.contractYears}-Year Financial Impact Analysis
          </h3>
          <div style={{ height: '300px', width: '100%' }}>
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={getChartData()}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="year" stroke="#666" />
                <YAxis tickFormatter={(value) => '$' + (value/1000).toFixed(0) + 'K'} stroke="#666" />
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
                  dataKey="savings" 
                  stackId="1" 
                  stroke="#10b981" 
                  fill="#10b981" 
                  fillOpacity={0.6}
                  name="Annual Savings"
                />
                <Area 
                  type="monotone" 
                  dataKey="netBenefit" 
                  stackId="2" 
                  stroke="#3b82f6" 
                  fill="#3b82f6" 
                  fillOpacity={0.8}
                  name="Net Benefit"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Cumulative Benefits Chart */}
        <div style={{
          background: 'white',
          borderRadius: '15px',
          padding: '30px',
          border: '2px solid #e2e8f0'
        }}>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '20px', color: '#333', textAlign: 'center' }}>
            Cumulative Value Creation
          </h3>
          <div style={{ height: '300px', width: '100%' }}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={getChartData()}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="year" stroke="#666" />
                <YAxis tickFormatter={(value) => '$' + (value/1000000).toFixed(1) + 'M'} stroke="#666" />
                <Tooltip 
                  formatter={(value) => formatCurrency(value)}
                  contentStyle={{ 
                    backgroundColor: 'white', 
                    border: '2px solid #8b5cf6', 
                    borderRadius: '10px',
                    boxShadow: '0 10px 25px rgba(0,0,0,0.1)'
                  }}
                />
                <Legend />
                <Bar 
                  dataKey="cumulative" 
                  fill="#8b5cf6" 
                  name="Cumulative Net Benefit"
                  radius={[4, 4, 0, 0]}
                />
              </BarChart>
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
            Transform your institution with FintechOS platform technology and achieve industry-leading ROI
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
