'use client';

import { useState } from 'react';

const faqData = [
  {
    question: 'How long does it take to see results?',
    answer:
      'Paid advertising can generate leads immediately, while SEO generally takes 3-6 months. We provide monthly reports to track progress.',
  },
  {
    question: 'Do you work with small businesses?',
    answer:
      'Yes, we work with startups, local businesses, and large enterprises. We create efficient campaigns for any budget.',
  },
  {
    question: 'Do you provide monthly reports?',
    answer:
      'Yes, detailed performance reports with KPIs, insights, and recommendations are provided regularly.',
  },
  {
    question: 'Can you manage our complete digital marketing?',
    answer:
      'Absolutely! We offer end-to-end digital marketing solutions from strategy to execution.',
  },
  {
    question: 'What is included in your services?',
    answer:
      'We offer comprehensive services including Meta Ads, Google Ads, SEO, content marketing, social media management, website design, graphic design, and lead generation.',
  },
  {
    question: 'How do you measure campaign success?',
    answer:
      'We track metrics including traffic, conversions, ROI, leads generated, engagement rates, and revenue impact with detailed monthly reports.',
  },
];

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="section section-alt">
      <div className="container">
        <div className="text-center">
          <p className="section-label">FAQ</p>
          <h2
            className="section-title"
            dangerouslySetInnerHTML={{
              __html: 'Frequently Asked <span>Questions</span>',
            }}
          />
        </div>

        <div className="faq-list">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className={`faq-item ${activeIndex === index ? 'active' : ''}`}
            >
              <button
                className="faq-question"
                onClick={() => toggleFAQ(index)}
                aria-expanded={activeIndex === index}
              >
                {faq.question}
                <span className="faq-toggle">+</span>
              </button>
              <div className="faq-answer">
                <div className="faq-answer-inner">{faq.answer}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
