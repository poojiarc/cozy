import { useState, useEffect } from 'react';
import { Quote } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const testimonials = [
  {
    text: "CozyCoo captured our newborn's first days so beautifully. The photos are absolutely magical — we'll cherish them forever!",
    name: 'Priya & Ravi',
    service: 'Newborn Photography',
  },
  {
    text: "The maternity shoot was such a wonderful experience. The team made me feel so comfortable and the results were stunning.",
    name: 'Lakshmi S.',
    service: 'Maternity Photography',
  },
  {
    text: "Our baby's hand casting turned out so beautiful! It's now the centerpiece of our living room. Highly recommend!",
    name: 'Sneha & Kiran',
    service: 'Hand Casting Keepsakes',
  },
  {
    text: "The kids photoshoot was so fun! They captured our daughter's personality perfectly. Professional and patient team.",
    name: 'Divya M.',
    service: 'Kids Photography',
  },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);
  const ref = useScrollReveal();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section ref={ref} className="py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16 section-reveal">
          <span className="text-xs tracking-[0.3em] uppercase text-gold/80">Testimonials</span>
          <h2 className="font-heading text-3xl lg:text-5xl text-cream mt-4">
            What Families <span className="gold-text italic">Say</span>
          </h2>
        </div>

        <div className="section-reveal max-w-3xl mx-auto">
          <div className="glass-card rounded-3xl p-8 lg:p-12 text-center relative">
            <Quote className="w-10 h-10 text-gold/30 mx-auto mb-6" />
            <div className="min-h-[120px] flex items-center justify-center">
              <div key={current} className="animate-fade-in">
                <p className="font-heading text-lg lg:text-xl text-cream italic leading-relaxed">
                  "{testimonials[current].text}"
                </p>
                <div className="mt-6">
                  <p className="text-gold font-semibold">{testimonials[current].name}</p>
                  <p className="text-xs text-muted-foreground mt-1">{testimonials[current].service}</p>
                </div>
              </div>
            </div>

            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${i === current ? 'w-6 bg-gold' : 'bg-gold/30'}`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
