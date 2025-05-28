import React from 'react';

function App() {
  const companyName = 'Community Bank';
  const revenue = 50000000;
  const solutionCost = 300000;
  const savings = revenue * 0.02;
  const roi = Math.round(((savings - solutionCost) / solutionCost) * 100);

  const formatCurrency = (amount) => {
    return '$' + amount.toLocaleString();
  };

  return (
    <div style={{ 
      minHeight: '100vh', 
      background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
      padding: '40px 20px',
      fontFamily: 'Arial, sans-serif'
    }}>
      <div style={{
        maxWidth: '800px',
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

        {/* Hero */}
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
            Demonstrate the financial impact of digital banking transformation
          </p>
        </div>

        {/* Content Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }}>
          
          {/* Input Section */}
          <div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '20px', color: '#333' }}>
              Client Configuration
            </h3>
            
            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', fontSize: '0.9rem', color: '#666', marginBottom: '8px' }}>
                Financial Institution Name
              </label>
              <div style={{
                padding: '12px',
                border: '2px solid #e5e7eb',
                borderRadius: '8px',
                fontSize: '1rem'
              }}>
                {companyName}
              </div>
            </div>
            
            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', fontSize: '0.9rem', color: '#666', marginBottom: '8px' }}>
                Annual Revenue
              </label>
              <div style={{
                padding: '12px',
                border: '2px solid #e5e7eb',
                borderRadius: '8px',
                fontSize: '1rem'
              }}>
                {formatCurrency(revenue)}
              </div>
            </div>
            
            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', fontSize: '0.9rem', color: '#666', marginBottom: '8px' }}>
                FintechOS Annual Investment
              </label>
              <div style={{
                padding: '12px',
                border: '2px solid #e5e7eb',
                borderRadius: '8px',
                fontSize: '1rem'
              }}>
                {formatCurrency(solutionCost)}
              </div>
            </div>
          </div>

          {/* Results Section */}
          <div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '20px', color: '#333' }}>
              ROI Analysis Results
            </h3>
            
            <div style={{
              background: 'linear-gradient(135deg, #10b981, #06d6a0)',
              borderRadius: '15px',
              padding: '25px',
              color: 'white',
              textAlign: 'center',
              marginBottom: '15px'
            }}>
              <p style={{ fontSize: '0.9rem', opacity: 0.8, margin: '0 0 5px 0' }}>Digital ROI</p>
              <p style={{ fontSize: '2.5rem', fontWeight: 'bold', margin: '0 0 5px 0' }}>{roi}%</p>
              <p style={{ fontSize: '0.8rem', opacity: 0.8, margin: 0 }}>Annual return on investment</p>
            </div>
            
            <div style={{
              background: 'linear-gradient(135deg, #3b82f6, #06b6d4)',
              borderRadius: '15px',
              padding: '25px',
              color: 'white',
              textAlign: 'center',
              marginBottom: '15px'
            }}>
              <p style={{ fontSize: '0.9rem', opacity: 0.8, margin: '0 0 5px 0' }}>Annual Savings</p>
              <p style={{ fontSize: '2rem', fontWeight: 'bold', margin: '0 0 5px 0' }}>{formatCurrency(savings)}</p>
              <p style={{ fontSize: '0.8rem', opacity: 0.8, margin: 0 }}>Through digital transformation</p>
            </div>
            
            <div style={{
              background: 'linear-gradient(135deg, #8b5cf6, #a855f7)',
              borderRadius: '15px',
              padding: '25px',
              color: 'white',
              textAlign: 'center'
            }}>
              <p style={{ fontSize: '0.9rem', opacity: 0.8, margin: '0 0 5px 0' }}>Net Annual Benefit</p>
              <p style={{ fontSize: '2rem', fontWeight: 'bold', margin: '0 0 5px 0' }}>{formatCurrency(savings - solutionCost)}</p>
              <p style={{ fontSize: '0.8rem', opacity: 0.8, margin: 0 }}>After FintechOS investment</p>
            </div>
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
            Transform your institution with FintechOS platform technology
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
