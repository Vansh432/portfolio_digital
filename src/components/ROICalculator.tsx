'use client';

import { useState } from 'react';

const industries = [
  'Healthcare',
  'Real Estate',
  'Education',
  'E-Commerce',
  'Jewellery',
  'Restaurant',
  'Automobile',
  'Local Business',
  'Other',
] as const;

const multipliers: Record<string, number> = {
  Healthcare: 0.008,
  'Real Estate': 0.006,
  Education: 0.01,
  'E-Commerce': 0.012,
  Jewellery: 0.007,
  Restaurant: 0.015,
  Automobile: 0.005,
  'Local Business': 0.013,
  Other: 0.009,
};

function formatINR(value: number): string {
  return '₹' + value.toLocaleString('en-IN');
}

export default function ROICalculator() {
  const [budget, setBudget] = useState(50000);
  const [industry, setIndustry] = useState<string>('Healthcare');

  const estimatedLeads = Math.round(budget * (multipliers[industry] ?? 0.009));

  return (
    <section id="roi-calculator" className="section section-alt">
      <div className="container text-center">
        <p className="section-label">ROI Calculator</p>
        <h2
          className="section-title"
          dangerouslySetInnerHTML={{
            __html: 'Estimate Your Marketing <span>Results</span>',
          }}
        />

        <div className="roi-calculator">
          {/* Budget slider */}
          <div className="roi-group">
            <label htmlFor="roi-budget">Monthly Ad Budget</label>
            <div className="roi-value">{formatINR(budget)}</div>
            <input
              id="roi-budget"
              type="range"
              className="roi-slider"
              min={5000}
              max={500000}
              step={5000}
              value={budget}
              onChange={(e) => setBudget(Number(e.target.value))}
            />
          </div>

          {/* Industry select */}
          <div className="roi-group">
            <label htmlFor="roi-industry">Select Your Industry</label>
            <select
              id="roi-industry"
              className="roi-select"
              value={industry}
              onChange={(e) => setIndustry(e.target.value)}
            >
              {industries.map((ind) => (
                <option key={ind} value={ind}>
                  {ind}
                </option>
              ))}
            </select>
          </div>

          {/* Result */}
          <div className="roi-result">
            <div className="roi-result-number">{estimatedLeads}</div>
            <div className="roi-result-label">Estimated Monthly Leads</div>
          </div>

          <button
            className="btn btn-primary"
            style={{ marginTop: 24, width: '100%' }}
          >
            Get Detailed Analysis
          </button>
        </div>
      </div>
    </section>
  );
}
