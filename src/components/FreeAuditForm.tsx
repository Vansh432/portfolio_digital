'use client';

import { useState } from 'react';

export default function FreeAuditForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    website: '',
    industry: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const res = await fetch('https://api.dizitalvigyapan.com/api/mail', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: formData.name,
          email: formData.email,
          phone: formData.phone,
          websiteURL: formData.website,
          industry: formData.industry,
          message: formData.message,
        }),
      });
      const data = await res.json();
      if (!res.ok || !data.status) throw new Error(data.message || 'Something went wrong');
      setSubmitted(true);
      setFormData({ name: '', email: '', phone: '', website: '', industry: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Failed to send. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="section audit-section" id="free-audit">
      <div className="container">
        <div className="text-center">
          <span className="section-label">Free Audit</span>
          <h2 className="section-title">
            Get Your Free Digital Marketing <span>Audit</span>
          </h2>
          <p className="section-desc mx-auto">
            Discover opportunities to grow your business online. Fill in your details
            and our experts will analyze your digital presence for free.
          </p>
        </div>

        <form className="audit-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="audit-name">Full Name *</label>
            <input
              id="audit-name"
              type="text"
              className="form-input"
              placeholder="Your full name"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label htmlFor="audit-email">Email Address *</label>
            <input
              id="audit-email"
              type="email"
              className="form-input"
              placeholder="your@email.com"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label htmlFor="audit-phone">Phone Number *</label>
            <input
              id="audit-phone"
              type="tel"
              className="form-input"
              placeholder="+91 XXXXX XXXXX"
              required
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label htmlFor="audit-website">Website URL</label>
            <input
              id="audit-website"
              type="url"
              className="form-input"
              placeholder="https://yourwebsite.com"
              value={formData.website}
              onChange={(e) => setFormData({ ...formData, website: e.target.value })}
            />
          </div>
          <div className="form-group full-width">
            <label htmlFor="audit-industry">Industry *</label>
            <select
              id="audit-industry"
              className="form-input"
              required
              value={formData.industry}
              onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
              style={{ padding: '14px 16px', background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-sm)' }}
            >
              <option value="">Select your industry</option>
              <option value="Healthcare">Healthcare & IVF Centers</option>
              <option value="Real Estate">Real Estate</option>
              <option value="Education">Education & Coaching</option>
              <option value="Jewellery">Jewellery</option>
              <option value="Automobile">Automobile</option>
              <option value="Hotels">Hotels & Restaurants</option>
              <option value="Manufacturing">Manufacturing</option>
              <option value="E-Commerce">E-Commerce</option>
              <option value="Local Business">Local Business</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div className="form-group full-width">
            <label htmlFor="audit-message">Tell us about your business</label>
            <textarea
              id="audit-message"
              className="form-input"
              placeholder="Briefly describe your business, goals, and current challenges..."
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            />
          </div>
          {error && (
            <div className="full-width" style={{ textAlign: 'center', color: '#ff4d4d', fontSize: '14px', marginTop: '4px' }}>
              {error}
            </div>
          )}
          <div className="full-width" style={{ textAlign: 'center' }}>
            <button type="submit" className="btn btn-primary" disabled={loading} style={{ padding: '16px 48px', fontSize: '16px', opacity: loading ? 0.7 : 1, cursor: loading ? 'not-allowed' : 'pointer' }}>
              {loading ? 'Sending...' : 'Get My Free Audit Report'}
              {!loading && (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              )}
            </button>
          </div>
        </form>

        {/* Success Toast */}
        {submitted && (
          <div className="toast">
            <span style={{ color: 'var(--primary)', fontSize: '20px' }}>✓</span>
            Thank you! We&apos;ll send your free audit report within 24 hours.
          </div>
        )}
      </div>
    </section>
  );
}
