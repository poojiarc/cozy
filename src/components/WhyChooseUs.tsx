import { Shield, Clock, Star, Heart, Palette } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const features = [
  { icon: Clock, title: '4+ Years Experience', desc: 'Trusted by hundreds of families in Kakinada' },
  { icon: Shield, title: 'Baby-Safe Environment', desc: 'Temperature controlled, sanitized, and secure studio' },
  { icon: Star, title: 'Premium Setup', desc: 'Professional lighting, props, and backdrops' },
  { icon: Heart, title: 'Personalized Sessions', desc: 'Every session is tailored to your family\'s story' },
  { icon: Palette, title: 'Handcrafted Keepsakes', desc: 'Beautiful hand and foot castings to treasure forever' },
];

const WhyChooseUs = () => {
  const ref = useScrollReveal();

  return (
    <section ref={ref} className="py-20 lg:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gold/[0.02] to-transparent pointer-events-none" />
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16 section-reveal">
          <span className="text-xs tracking-[0.3em] uppercase text-gold/80">Why Choose Us</span>
          <h2 className="font-heading text-3xl lg:text-5xl text-cream mt-4">
            The <span className="gold-text italic">CozyCoo</span> Difference
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {features.map((f, i) => (
            <div
              key={f.title}
              className="section-reveal glass-card rounded-2xl p-6 text-center group hover:gold-border-glow transition-all duration-500"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-full gold-gradient flex items-center justify-center mx-auto mb-4 group-hover:gold-glow transition-all duration-500">
                <f.icon size={20} className="text-background" />
              </div>
              <h3 className="font-heading text-sm text-cream mb-2">{f.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
