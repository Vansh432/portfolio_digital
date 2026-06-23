'use client';

import { useEffect, useRef, useState } from 'react';

const stats = [
  { end: 500, suffix: '+', label: 'Projects Completed' },
  { end: 10000, suffix: '+', label: 'Leads Generated' },
  { end: 200, suffix: '+', label: 'Happy Clients' },
  { end: 50, suffix: 'L+', label: 'Ad Spend Managed' },
];

function formatNumber(n: number): string {
  if (n >= 10000) return (n / 1000).toFixed(0) + 'K';
  return n.toLocaleString('en-IN');
}

export default function StatsCounter() {
  const ref = useRef<HTMLDivElement>(null);
  const [counts, setCounts] = useState(stats.map(() => 0));
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;

    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = Math.min(step / steps, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic

      setCounts(stats.map((s) => Math.round(s.end * eased)));

      if (step >= steps) clearInterval(timer);
    }, interval);

    return () => clearInterval(timer);
  }, [started]);

  return (
    <section className="stats-section" ref={ref}>
      <div className="container">
        <div className="stats-grid">
          {stats.map((stat, i) => (
            <div key={stat.label} className="stat-item">
              <div className="stat-number">
                {stat.end >= 10000 ? formatNumber(counts[i]) : counts[i].toLocaleString('en-IN')}
                {stat.suffix}
              </div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
