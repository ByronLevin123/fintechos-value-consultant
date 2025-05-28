mport React, { useState, useEffect } from 'react';

import './App.css';

import {

Calculator,

TrendingUp,

DollarSign,

Building2,

BarChart3,

Save,

Mail,

Download,

Layers

} from 'lucide-react';

const FintechOSValueConsultant = () => {

const [inputs, setInputs] = useState({

company_name: 'Community Bank',

annual_revenue: 50000000,

solution_cost: 300000,

staff_hours: 2000,

hourly_rate: 50,

efficiency_gain: 0.40,

contract_years: 5

});

const [results, setResults] = useState({

roi_percentage: 0,

annual_savings: 0,

payback_months: 0

});

const calculateROI = () => {

const annualStaffCost = inputs.staff_hours * 12 * inputs.hourly_rate;

const annualSavings = annualStaffCost * inputs.efficiency_gain;

const roi = ((annualSavings - inputs.solution_cost) / inputs.solution_cost) * 100;

const payback = (inputs.solution_cost / annualSavings) * 12;

setResults({

roi_percentage: roi,

annual_savings: annualSavings,

payback_months: payback

});

};

useEffect(() => {

calculateROI();

}, [inputs]);

const formatCurrency = (amount) => {

return new Intl.NumberFormat('en-US', {

style: 'currency',

currency: 'USD',

minimumFractionDigits: 0,

}).format(amount);

};

const formatNumber = (num) => {

return new Intl.NumberFormat('en-US').format(Math.round(num));

};

return (

<div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-cyan-50">

{/* Header */}

<header className="bg-white shadow-xl border-b border-gray-100">

<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">

<div className="flex items-center justify-between">

<div className="flex items-center space-x-4">

<div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-3 rounded-xl shadow-lg">

<Layers className="h-8 w-8 text-white" />

</div>

<div>

<h1 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">

FintechOS Value Consultant

</h1>

<p className="text-gray-600 font-medium">Digital Banking Transformation ROI Calculator</p>

</div>

</div>

<div className="flex items-center space-x-3">

<button className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-5 py-2.5 rounded-xl flex items-center space-x-2 hover:from-emerald-600 hover:to-teal-700 transition-all duration-200 shadow-lg hover:shadow-xl">

<Save className="h-4 w-4" />

<span>Save Analysis</span>

</button>

<button className="bg-gradient-to-r from-violet-500 to-purple-600 text-white px-5 py-2.5 rounded-xl flex items-center space-x-2 hover:from-violet-600 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl">

<Mail className="h-4 w-4" />

<span>Send Report</span>

</button>

<button className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-5 py-2.5 rounded-xl flex items-center space-x-2 hover:from-blue-600 hover:to-cyan-700 transition-all duration-200 shadow-lg hover:shadow-xl">

<Download className="h-4 w-4" />

<span>Export PDF</span>

</button>

</div>

</div>

</div>

</header>

{/* Hero Banner */}

<div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-600 py-8">

<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

<div className="text-white text-center">

<h2 className="text-2xl font-bold mb-3">Transform Banking with FintechOS</h2>

<p className="text-lg text-indigo-100 leading-relaxed">

Demonstrate the financial impact of digital banking transformation with comprehensive ROI analysis

</p>

</div>

</div>

</div>

<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">


{/* Input Section */}

<div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">

<h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">

<Building2 className="h-6 w-6 mr-3 text-blue-600" />

Client Configuration

</h3>


<div className="space-y-6">

<div>

<label className="block text-sm font-semibold text-gray-700 mb-2">Financial Institution Name</label>

<input

type="text"

value={inputs.company_name}

onChange={(e) => setInputs({...inputs, company_name: e.target.value})}

className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"

placeholder="e.g., First National Bank"

/>

</div>


<div>

<label className="block text-sm font-semibold text-gray-700 mb-2">Annual Revenue (USD)</label>

<input

type="number"

value={inputs.annual_revenue}

onChange={(e) => setInputs({...inputs, annual_revenue: parseFloat(e.target.value)})}

className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"

/>

</div>


<div>

<label className="block text-sm font-semibold text-gray-700 mb-2">FintechOS Annual Cost (USD)</label>

<input

type="number"

value={inputs.solution_cost}

onChange={(e) => setInputs({...inputs, solution_cost: parseFloat(e.target.value)})}

className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"

/>

</div>


<div>

<label className="block text-sm font-semibold text-gray-700 mb-2">Monthly Staff Hours</label>

<input

type="number"

value={inputs.staff_hours}

onChange={(e) => setInputs({...inputs, staff_hours: parseFloat(e.target.value)})}

className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"

/>

</div>


<div>

<label className="block text-sm font-semibold text-gray-700 mb-2">Average Hourly Rate (USD)</label>

<input

type="number"

value={inputs.hourly_rate}

onChange={(e) => setInputs({...inputs, hourly_rate: parseFloat(e.target.value)})}

className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"

/>

</div>


<div>

<label className="block text-sm font-semibold text-gray-700 mb-2">Efficiency Gain (%)</label>

<input

type="number"

step="0.01"

min="0"

max="1"

value={inputs.efficiency_gain}

onChange={(e) => setInputs({...inputs, efficiency_gain: parseFloat(e.target.value)})}

className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"

/>

</div>

</div>

</div>

{/* Results Section */}

<div className="space-y-6">


{/* Key Metrics */}

<div className="grid grid-cols-1 gap-4">

<div className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl p-6 text-white shadow-xl">

<div className="flex items-center justify-between">

<div>

<p className="text-emerald-100 text-sm font-medium">Digital ROI</p>

<p className="text-3xl font-bold">{formatNumber(results.roi_percentage)}%</p>

<p className="text-xs text-emerald-200 mt-1">Annual return on investment</p>

</div>

<TrendingUp className="h-10 w-10 text-emerald-200" />

</div>

</div>


<div className="bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl p-6 text-white shadow-xl">

<div className="flex items-center justify-between">

<div>

<p className="text-blue-100 text-sm font-medium">Annual Savings</p>

<p className="text-3xl font-bold">{formatCurrency(results.annual_savings)}</p>

<p className="text-xs text-blue-200 mt-1">Through digital transformation</p>

</div>

<DollarSign className="h-10 w-10 text-blue-200" />

</div>

</div>


<div className="bg-gradient-to-br from-violet-500 to-purple-600 rounded-2xl p-6 text-white shadow-xl">

<div className="flex items-center justify-between">

<div>

<p className="text-violet-100 text-sm font-medium">Payback Period</p>

<p className="text-3xl font-bold">{formatNumber(results.payback_months)} mo</p>

<p className="text-xs text-violet-200 mt-1">Time to recover investment</p>

</div>

<BarChart3 className="h-10 w-10 text-violet-200" />

</div>

</div>

</div>

{/* Summary */}

<div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">

<h3 className="text-xl font-bold text-gray-900 mb-6">FintechOS Value Summary</h3>

<div className="space-y-4">

<div className="flex justify-between items-center p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl border border-blue-100">

<span className="text-gray-800 font-medium">Institution</span>

<span className="font-bold text-blue-700">{inputs.company_name}</span>

</div>

<div className="flex justify-between items-center p-4 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl border border-emerald-100">

<span className="text-gray-800 font-medium">Annual Revenue</span>

<span className="font-bold text-emerald-700">{formatCurrency(inputs.annual_revenue)}</span>

</div>

<div className="flex justify-between items-center p-4 bg-gradient-to-r from-purple-50 to-violet-50 rounded-xl border border-purple-100">

<span className="text-gray-800 font-medium">FintechOS Investment</span>

<span className="font-bold text-purple-700">{formatCurrency(inputs.solution_cost)}</span>

</div>

<div className="flex justify-between items-center p-4 bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl border border-amber-100">

<span className="text-gray-800 font-medium">Net Annual Benefit</span>

<span className="font-bold text-amber-700">{formatCurrency(results.annual_savings - inputs.solution_cost)}</span>

</div>

</div>

</div>

</div>

</div>

</div>

{/* Footer */}

<footer className="bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-600 py-8 mt-16">

<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">

<h3 className="text-xl font-bold mb-2">Ready for Digital Banking Leadership?</h3>

<p className="text-indigo-100">Transform your institution with FintechOS platform technology</p>

</div>

</footer>

</div>

);

};
