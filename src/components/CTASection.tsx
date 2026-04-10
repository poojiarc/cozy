import { useScrollReveal } from '@/hooks/useScrollReveal';
import ctaBg from '@/assets/cta-background.jpg';

const CTASection = () => {
  const ref = useScrollReveal();

  return (
    <section ref={ref} className="relative py-32 lg:py-40 overflow-hidden">
      <div className="absolute inset-0">
        <img src={ctaBg} alt="" className="w-full h-full object-cover" loading="lazy" width={1920} height={800} />
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
      </div>
      <div className="relative container mx-auto px-4 lg:px-8 text-center section-reveal">
        <span className="text-xs tracking-[0.3em] uppercase text-gold/80">Don't Wait</span>
        <h2 className="font-heading text-3xl lg:text-5xl xl:text-6xl text-cream mt-4 mb-6">
          Preserve Your Precious <br className="hidden lg:block" />
          <span className="gold-text italic">Memories Today</span>
        </h2>
        <p className="text-muted-foreground max-w-lg mx-auto mb-10">
          These moments are fleeting. Let us turn them into timeless works of art that your family will treasure for generations.
        </p>
        <a
          href="https://wa.me/919494700011?text=Hi%20CozyCoo!%20I%20would%20like%20to%20book%20a%20session."
          target="_blank"
          rel="noopener noreferrer"
          className="shimmer-btn gold-gradient px-10 py-4 rounded-full text-sm font-semibold text-background tracking-wider uppercase inline-block gold-glow hover:scale-105 transition-transform duration-300"
        >
          ✨ Book Your Session Now
        </a>
      </div>
    </section>
  );
};

export default CTASection;
