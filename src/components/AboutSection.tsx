import { useScrollReveal } from '@/hooks/useScrollReveal';
import aboutStudio from '@/assets/about-studio.jpg';

const AboutSection = () => {
  const ref = useScrollReveal();

  return (
    <section ref={ref} className="py-20 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gold/[0.02] to-transparent pointer-events-none" />
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text */}
          <div className="section-reveal space-y-6">
            <span className="text-xs tracking-[0.3em] uppercase text-gold/80">About Us</span>
            <h2 className="font-heading text-3xl lg:text-5xl text-cream leading-tight">
              Where Every <span className="gold-text italic">Little Moment</span> Becomes Art
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed font-light">
              <p>
                CozyCoo Baby Studio is a trusted newborn photography studio in Kakinada, dedicated to capturing the most precious moments of your family's journey. From the miracle of maternity to the first days of your newborn's life, we create timeless art that you'll treasure forever.
              </p>
              <p>
                Our premium studio is designed with your baby's safety and comfort as the top priority. With over 4 years of experience, personalized sessions, and a baby-safe environment, we ensure every shoot is a warm, relaxed, and magical experience.
              </p>
            </div>
            <div className="flex gap-8 pt-4">
              {[
                { num: '4+', label: 'Years Experience' },
                { num: '500+', label: 'Happy Families' },
                { num: '10000+', label: 'Photos Delivered' },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="font-heading text-2xl lg:text-3xl gold-text">{stat.num}</div>
                  <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="section-reveal">
            <div className="relative rounded-2xl overflow-hidden group">
              <img
                src={aboutStudio}
                alt="CozyCoo Baby Studio interior"
                className="w-full h-80 lg:h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
                width={600}
                height={500}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
              <div className="absolute -inset-1 rounded-2xl border border-gold/10 pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
