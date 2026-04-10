import { useEffect, useState } from 'react';
import heroNewborn from '@/assets/hero-newborn.jpg';
import heroMaternity from '@/assets/hero-maternity.jpg';
import heroKids from '@/assets/hero-kids.jpg';
import heroHandcast from '@/assets/hero-handcast.jpg';

const images = [heroNewborn, heroMaternity, heroKids, heroHandcast];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 pt-20 pb-12 lg:pt-0 lg:pb-0">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-[calc(100vh-5rem)]">
          {/* Left - Text */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <div className="space-y-6 lg:space-y-8">
              <div className="inline-block">
                <span className="text-xs tracking-[0.3em] uppercase text-gold/80 font-body">Premium Baby Photography</span>
                <div className="h-px w-12 gold-gradient mt-2 mx-auto lg:mx-0" />
              </div>
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-tight">
                <span className="text-cream">Tiny Moments.</span>
                <br />
                <span className="gold-text">Timeless Memories.</span>
              </h1>
              <p className="text-muted-foreground text-base lg:text-lg max-w-lg mx-auto lg:mx-0 leading-relaxed font-light">
                Capturing the beauty of newborns, maternity journeys, childhood memories, and hand casting keepsakes at CozyCoo Baby Studio in Kakinada.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a
                  href="https://wa.me/919494700011?text=Hi%20CozyCoo!%20I%20would%20like%20to%20book%20a%20session."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shimmer-btn gold-gradient px-8 py-4 rounded-full text-sm font-semibold text-background tracking-wider uppercase inline-block text-center gold-glow"
                >
                  ✨ Book Your Session
                </a>
                <a
                  href="/gallery"
                  className="px-8 py-4 rounded-full text-sm font-semibold text-gold tracking-wider uppercase border border-gold/30 hover:border-gold/60 hover:bg-gold/5 transition-all duration-300 inline-block text-center"
                >
                  View Gallery
                </a>
              </div>
            </div>
          </div>

          {/* Right - Image Carousel */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative w-72 h-96 sm:w-80 sm:h-[28rem] lg:w-[380px] lg:h-[520px]">
              {images.map((img, i) => (
                <div
                  key={i}
                  className={`absolute inset-0 rounded-2xl overflow-hidden transition-all duration-1000 ${
                    i === currentIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                  }`}
                >
                  <img
                    src={img}
                    alt="CozyCoo Baby Studio photography"
                    className="w-full h-full object-cover"
                    width={380}
                    height={520}
                    {...(i === 0 ? {} : { loading: 'lazy' as const })}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
                </div>
              ))}
              {/* Gold border accent */}
              <div className="absolute -inset-2 rounded-2xl border border-gold/20 pointer-events-none" />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full bg-gold/5 blur-2xl" />
            </div>
          </div>
        </div>
      </div>

      {/* Background effects */}
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold/3 rounded-full blur-3xl pointer-events-none" />
    </section>
  );
};

export default HeroSection;
