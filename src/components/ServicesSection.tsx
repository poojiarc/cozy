import { Link } from 'react-router-dom';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import heroNewborn from '@/assets/hero-newborn.jpg';
import heroMaternity from '@/assets/hero-maternity.jpg';
import heroKids from '@/assets/hero-kids.jpg';
import heroHandcast from '@/assets/hero-handcast.jpg';

const services = [
  {
    title: 'Newborn Photography',
    slug: 'newborn',
    image: heroNewborn,
    desc: 'Capturing the first precious days of your baby\'s life with artistic, safe, and tender photography.',
  },
  {
    title: 'Maternity Photography',
    slug: 'maternity',
    image: heroMaternity,
    desc: 'Celebrating the beauty of your maternity journey with elegant and emotional portraits.',
  },
  {
    title: 'Kids Photography',
    slug: 'kids',
    image: heroKids,
    desc: 'Fun, playful, and heartwarming photoshoots that capture your child\'s unique personality.',
  },
  {
    title: 'Hand Casting Keepsakes',
    slug: 'hand-casting',
    image: heroHandcast,
    desc: 'Handcrafted keepsakes that preserve tiny hands and feet in beautiful, lasting art.',
  },
];

const ServicesSection = () => {
  const ref = useScrollReveal();

  return (
    <section ref={ref} className="py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16 section-reveal">
          <span className="text-xs tracking-[0.3em] uppercase text-gold/80">Our Services</span>
          <h2 className="font-heading text-3xl lg:text-5xl text-cream mt-4">
            What We <span className="gold-text italic">Offer</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <Link
              key={service.slug}
              to={`/services/${service.slug}`}
              className="section-reveal group relative rounded-2xl overflow-hidden h-80 lg:h-96 block"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <img
                src={service.image}
                alt={service.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
                width={400}
                height={500}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
              <div className="absolute inset-0 border border-gold/0 group-hover:border-gold/30 rounded-2xl transition-all duration-500 group-hover:gold-border-glow" />
              <div className="absolute bottom-0 left-0 right-0 p-6 transform transition-transform duration-500">
                <h3 className="font-heading text-xl text-cream group-hover:text-gold transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-2 group-hover:translate-y-0">
                  {service.desc}
                </p>
                <span className="inline-block mt-3 text-xs text-gold tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-all duration-500">
                  Learn More →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
export { services };
