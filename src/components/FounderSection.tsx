import Image from 'next/image';

export default function FounderSection() {
  return (
    <section className="section section-alt py-16 md:py-24" id="founder">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="section-label">Meet Our Founder</span>
          <h2 className="section-title">
            The Vision Behind <span>Dizital Vigyapan</span>
          </h2>
        </div>

        <div className="founder-card grid grid-cols-1 md:grid-cols-[minmax(260px,380px)_1fr] gap-8 md:gap-12 items-start">
          {/* Founder Image — left column */}
          <div className="flex flex-col gap-5">
            <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden shadow-[0_20px_40px_-12px_rgba(0,0,0,0.25)]">
              <Image
                src="/founder.png"
                alt="Pramod Diwakar - Founder of Dizital Vigyapan"
                fill
                className="object-cover"
              />
            </div>

            {/* Stats sit under the image on the left, anchoring it visually */}
            <div className="grid grid-cols-3 gap-2">
              <div className="text-center rounded-[10px] bg-black/[0.03] px-1 py-3">
                <div className="text-xl font-extrabold leading-tight">5+</div>
                <div className="mt-1 text-[11px] text-neutral-500">Years Exp.</div>
              </div>
              <div className="text-center rounded-[10px] bg-black/[0.03] px-1 py-3">
                <div className="text-xl font-extrabold leading-tight">500+</div>
                <div className="mt-1 text-[11px] text-neutral-500">Campaigns</div>
              </div>
              <div className="text-center rounded-[10px] bg-black/[0.03] px-1 py-3">
                <div className="text-xl font-extrabold leading-tight">200+</div>
                <div className="mt-1 text-[11px] text-neutral-500">Clients</div>
              </div>
            </div>
          </div>

          {/* Founder Info — right column */}
          <div>
            <h3 className="founder-name mb-1">Pramod Diwakar</h3>
            <p className="founder-title mb-5 font-semibold tracking-wide text-[#d97757]">
              Founder &amp; Digital Marketing Strategist
            </p>

            <p className="founder-bio mb-4 leading-relaxed">
              As the Founder of Dizital Vigyapan, my vision is to help businesses
              leverage the power of digital marketing to achieve sustainable growth
              and measurable success. With a strong focus on performance marketing,
              lead generation, branding, and online advertising, I work closely with
              businesses to create strategies that deliver real results.
            </p>
            <p className="founder-bio mb-7 leading-relaxed">
              I believe that successful marketing is built on creativity, data-driven
              decisions, and a deep understanding of customer behavior. My goal is not
              just to increase visibility but to help brands generate more leads, build
              trust, and grow with confidence in the digital age.
            </p>

            {/* Founder's Vision — styled as a distinct quoted callout */}
            <div className="mb-8 rounded-r-xl border-l-[3px] border-[#d97757] bg-[#d97757]/[0.06] px-6 py-5">
              <p className="mb-2.5 text-xs font-bold uppercase tracking-[0.08em] text-[#d97757]">
                Founder&rsquo;s Vision
              </p>
              <p className="m-0 text-[15px] leading-relaxed">
                I started Dizital Vigyapan with a clear purpose — to help businesses
                turn their ideas into real digital growth. My vision is to create
                impactful marketing solutions that not only build brand presence but
                also generate genuine leads, stronger customer trust, and measurable
                business results. For me, digital marketing is not just about
                promotion — it&rsquo;s about creating growth opportunities for every
                business that wants to move forward.
              </p>
            </div>

            {/* Contact Info */}
            <div className="flex flex-wrap gap-3">
              <a
                href="tel:+918899316670"
                className="btn btn-primary px-5 py-2.5 text-[13px]"
              >
                📞 +91 8899316670
              </a>
              <a
                href="mailto:dizitalvigyapan@gmail.com"
                className="btn btn-outline px-5 py-2.5 text-[13px]"
              >
                ✉️ dizitalvigyapan@gmail.com
              </a>
              <a
                href="https://wa.me/918899316670"
                className="btn btn-ghost px-5 py-2.5 text-[13px]"
                target="_blank"
                rel="noopener noreferrer"
              >
                💬 WhatsApp Chat
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}