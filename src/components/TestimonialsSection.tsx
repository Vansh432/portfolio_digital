'use client';

import { useEffect, useRef } from 'react';

const testimonials = [
  {
    text: 'Dizital Vigyapan helped us generate quality leads consistently while reducing our acquisition costs by 40%.',
    name: 'Rahul Sharma',
    role: 'Real Estate Business',
  },
  {
    text: 'Our website traffic increased significantly and Google rankings improved within just 3 months of working together.',
    name: 'Priya Gupta',
    role: 'Healthcare Clinic',
  },
  {
    text: 'Their targeting strategy brought us high-quality inquiries and excellent ROI on our Meta ad campaigns.',
    name: 'Amit Singh',
    role: 'Education Institute',
  },
  {
    text: 'The team understands local business marketing extremely well. Our walk-ins increased by 60%.',
    name: 'Neha Verma',
    role: 'Jewellery Store',
  },
  {
    text: 'They created a modern website that immediately improved our credibility and online presence.',
    name: 'Vikash Kumar',
    role: 'Manufacturing',
  },
  {
    text: 'Our social media engagement and customer inquiries increased substantially after partnering with them.',
    name: 'Anjali Patel',
    role: 'Restaurant Chain',
  },
];

export default function TestimonialsSection() {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const interval = setInterval(() => {
      const card = track.querySelector('.testimonial-card') as HTMLElement | null;
      if (!card) return;

      const cardWidth = card.offsetWidth + 24; // card width + gap
      const maxScroll = track.scrollWidth - track.clientWidth;

      if (track.scrollLeft >= maxScroll - 10) {
        track.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        track.scrollBy({ left: cardWidth, behavior: 'smooth' });
      }
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="section">
      <div className="container">
        <p className="section-label">Testimonials</p>
        <h2
          className="section-title"
          dangerouslySetInnerHTML={{
            __html: 'What Our Clients <span>Say</span>',
          }}
        />

        <div className="testimonials-track" ref={trackRef}>
          {testimonials.map((t) => (
            <div key={t.name} className="testimonial-card">
              <div className="testimonial-quote">&ldquo;</div>
              <p className="testimonial-text">{t.text}</p>
              <div className="testimonial-stars">★★★★★</div>
              <div className="testimonial-author">
                <div className="testimonial-avatar">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="testimonial-author-name">{t.name}</div>
                  <div className="testimonial-author-role">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
