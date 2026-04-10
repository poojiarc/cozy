import ServicesSection from '@/components/ServicesSection';

const ServicesPage = () => {
  return (
    <div className="pt-20">
      <section className="py-8 lg:py-16">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <span className="text-xs tracking-[0.3em] uppercase text-gold/80">Premium Photography</span>
          <h1 className="font-heading text-3xl lg:text-5xl text-cream mt-4">
            Our <span className="gold-text italic">Services</span>
          </h1>
          <p className="text-muted-foreground max-w-lg mx-auto mt-4">
            From the first breath to the first steps — we capture every precious milestone with artistry and love.
          </p>
        </div>
      </section>
      <ServicesSection />
    </div>
  );
};

export default ServicesPage;
