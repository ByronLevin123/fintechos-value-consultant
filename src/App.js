import React, { useState } from 'react';
import './App.css';

const FintechOSValueConsultant = () => {
  const [companyName, setCompanyName] = useState('Community Bank');
  const [revenue, setRevenue] = useState(50000000);
  const [solutionCost, setSolutionCost] = useState(300000);

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
    }).format(amount);
  };

  const calculateROI = () => {
    const savings = revenue * 0.02; // 2% efficiency gain
    const roi = ((savings - solutionCost) / solutionCost) * 100;
    return Math.round(roi);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      {/* Header */}
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              FintechOS Value Consultant
            </h1>
            <p className="text-gray-600 mt-2">Digital Banking Transformation ROI Calculator</p>
          </div>

          {/* Hero Banner */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-white text-center mb-8">
            <h2 className="text-2xl font-bold mb-3">Transform Banking with FintechOS</h2>
            <p className="text-blue-100">
              Demonstrate the financial impact of digital banking transformation
            </p>
          </div>

          {/* Input Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-6">Client Configuration</h3>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Financial Institution Name
                  </label>
                  <input 
                    type="text"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="e.g., First National Bank"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Annual Revenue (USD)
                  </label>
                  <input 
                    type="number"
                    value={revenue}
                    onChange={(e) => setRevenue(parseFloat(e.target.value) || 0)}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    FintechOS Annual Cost (USD)
                  </label>
                  <input 
                    type="number"
                    value={solutionCost}
                    onChange={(e) => setSolutionCost(parseFloat(e.target.value) || 0)}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
            </div>

            {/* Results Section */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-6">ROI Analysis</h3>
              
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl p-6 text-white">
                  <div className="text-center">
                    <p className="text-green-100 text-sm">Digital ROI</p>
                    <p className="text-3xl font-bold">{calculateROI()}%</p>
                    <p className="text-xs text-green-200">Annual return on investment</p>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-blue-500 to-cyan-600 rounded-xl p-6 text-white">
                  <div className="text-center">
                    <p className="text-blue-100 text-sm">Annual Savings</p>
                    <p className="text-2xl font-bold">{formatCurrency(revenue * 0.02)}</p>
                    <p className="text-xs text-blue-200">Through digital transformation</p>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-purple-500 to-violet-600 rounded-xl p-6 text-white">
                  <div className="text-center">
                    <p className="text-purple-100 text-sm">Net Annual Benefit</p>
                    <p className="text-2xl font-bold">{formatCurrency((revenue * 0.02) - solutionCost)}</p>
                    <p className="text-xs text-purple-200">After FintechOS investment</p>
                  </div>
                </div>
              </div>

              {/* Summary */}
              <div className="mt-6 p-6 bg-gray-50 rounded-xl">
                <h4 className="font-bold text-gray-900 mb-4">Value Summary</h4>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Institution:</span>
                    <span className="font-medium">{companyName}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Annual Revenue:</span>
                    <span className="font-medium">{formatCurrency(revenue)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">FintechOS Investment:</span>
                    <span className="font-medium">{formatCurrency(solutionCost)}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-8 text-center p-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl text-white">
            <h3 className="text-lg font-bold mb-2">Ready for Digital Banking Leadership?</h3>
            <p className="text-blue-100">Transform your institution with FintechOS platform technology</p>
          </div>
        </div>
      </div>
    </div>
  );
};
