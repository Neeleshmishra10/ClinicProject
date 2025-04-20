 export function AboutSection() {
    return (
      <section id="about" className="bg-white py-14 border-b border-brand-yellow">
        <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-navy mb-3">About <span className="text-brand-orange">Maitri Wellness Clinic™</span> Homeopathy</h2>
            <p className="text-brand-navy/80 text-lg mb-4">
              Maitri Wellness Clinic™ Homeopathy delivers modern, ethical homeopathy with compassion and care — in-clinic and online, pan-India. Our expert doctors combine scientific case-taking with classical remedies for lasting wellness.
            </p>
            <ul className="text-brand-blue mb-2 space-y-1">
              <li>✓ 100,000+ patients treated</li>
              <li>✓ Government-registered doctors only</li>
              <li>✓ Patient-first protocols and privacy</li>
              <li>✓ Follow-ups & holistic guidance for full recovery</li>
            </ul>
          </div>
        </div>
      </section>
    );
  }