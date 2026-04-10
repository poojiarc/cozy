import { useParams, Link } from 'react-router-dom';
import { services } from '@/components/ServicesSection';
import heroNewborn from '@/assets/hero-newborn.jpg';
import heroMaternity from '@/assets/hero-maternity.jpg';
import heroKids from '@/assets/hero-kids.jpg';
import heroHandcast from '@/assets/hero-handcast.jpg';

const serviceDetails: Record<string, { images: string[]; description: string }> = {
  newborn: {
    images: [heroNewborn, heroMaternity, heroKids, heroHandcast],
    description:
      'Our newborn photography sessions are designed to capture the first precious days of your baby\'s life. We use baby-safe props, temperature-controlled environments, and artistic posing techniques to create timeless portraits. Every session is personalized — from the colors and textures to the mood and style. At CozyCoo Baby Studio in Kakinada, your baby\'s safety and comfort are our top priorities. Sessions typically last 2-3 hours to allow for feeding, soothing, and natural pauses. The result? Stunning, emotional images that tell the story of your newborn\'s earliest moments.',
  },
  maternity: {
    images: [heroMaternity, heroNewborn, heroKids, heroHandcast],
    description:
      'Celebrate the beautiful journey of motherhood with our premium maternity photography sessions. We provide a curated selection of flowing gowns, elegant backdrops, and studio lighting that highlights the beauty of pregnancy. Whether you prefer dramatic and moody or soft and ethereal, our team at CozyCoo Baby Studio in Kakinada will bring your vision to life. Maternity sessions are best scheduled between 28-36 weeks for the most flattering results. Partners and siblings are welcome to join for family maternity portraits.',
  },
  kids: {
    images: [heroKids, heroNewborn, heroMaternity, heroHandcast],
    description:
      'Our kids photography sessions are all about capturing personality, laughter, and the joy of childhood. From milestone sessions (sitters, first birthday, cake smash) to creative themed shoots, we make every session fun and engaging. At CozyCoo Baby Studio in Kakinada, we have a wide range of age-appropriate props, costumes, and setups. Our patient and experienced team knows how to work with children of all ages to capture genuine expressions and heartwarming moments.',
  },
  'hand-casting': {
    images: [heroHandcast, heroNewborn, heroMaternity, heroKids],
    description:
      'Preserve the tiniest details of your baby\'s hands and feet with our premium hand casting keepsake service. Using safe, high-quality materials, we create beautiful 3D castings that capture every little line and dimple. These handcrafted keepsakes are finished with your choice of frame and color — from classic white to luxurious gold. Available at CozyCoo Baby Studio in Kakinada, our hand casting service is perfect as a standalone keepsake or as an add-on to any photography session.',
  },
};

const ServicePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = services.find((s) => s.slug === slug);
  const details = slug ? serviceDetails[slug] : null;

  if (!service || !details) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <h1 className="font-heading text-3xl text-cream mb-4">Service Not Found</h1>
          <Link to="/services" className="text-gold hover:underline">View All Services</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20">
      {/* Hero Banner */}
      <section className="relative h-[50vh] lg:h-[60vh] overflow-hidden">
        <img src={service.image} alt={service.title} className="w-full h-full object-cover" width={1200} height={600} />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-16">
          <div className="container mx-auto">
            <span className="text-xs tracking-[0.3em] uppercase text-gold/80">Our Services</span>
            <h1 className="font-heading text-3xl lg:text-5xl text-cream mt-2">{service.title}</h1>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <p className="text-muted-foreground leading-relaxed text-lg font-light">{details.description}</p>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-16">
            {details.images.map((img, i) => (
              <div key={i} className="rounded-xl overflow-hidden group">
                <img
                  src={img}
                  alt={`${service.title} gallery ${i + 1}`}
                  className="w-full h-48 lg:h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                  width={400}
                  height={300}
                />
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <a
              href={`https://wa.me/919494700011?text=Hi%20CozyCoo!%20I'm%20interested%20in%20${encodeURIComponent(service.title)}.`}
              target="_blank"
              rel="noopener noreferrer"
              className="shimmer-btn gold-gradient px-10 py-4 rounded-full text-sm font-semibold text-background tracking-wider uppercase inline-block gold-glow hover:scale-105 transition-transform duration-300"
            >
              ✨ Book {service.title}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicePage;
