import { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import heroNewborn from '@/assets/hero-newborn.jpg';
import heroMaternity from '@/assets/hero-maternity.jpg';
import heroKids from '@/assets/hero-kids.jpg';
import heroHandcast from '@/assets/hero-handcast.jpg';
import aboutStudio from '@/assets/about-studio.jpg';
import ctaBg from '@/assets/cta-background.jpg';

const categories = ['All', 'Newborn', 'Maternity', 'Kids', 'Hand Casting'];

const galleryImages = [
  { src: heroNewborn, category: 'Newborn', alt: 'Newborn baby photography Kakinada' },
  { src: heroMaternity, category: 'Maternity', alt: 'Maternity photoshoot Kakinada' },
  { src: heroKids, category: 'Kids', alt: 'Kids photography Kakinada' },
  { src: heroHandcast, category: 'Hand Casting', alt: 'Baby hand casting keepsake' },
  { src: aboutStudio, category: 'Newborn', alt: 'Baby photography studio setup' },
  { src: ctaBg, category: 'Newborn', alt: 'Family newborn photography' },
];

const GalleryPage = () => {
  const [active, setActive] = useState('All');
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered = active === 'All' ? galleryImages : galleryImages.filter((img) => img.category === active);

  const openLightbox = (i: number) => setLightbox(i);
  const closeLightbox = () => setLightbox(null);
  const prev = () => setLightbox((p) => (p !== null ? (p - 1 + filtered.length) % filtered.length : null));
  const next = () => setLightbox((p) => (p !== null ? (p + 1) % filtered.length : null));

  return (
    <div className="pt-20">
      <section className="py-8 lg:py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs tracking-[0.3em] uppercase text-gold/80">Our Work</span>
            <h1 className="font-heading text-3xl lg:text-5xl text-cream mt-4">
              Photo <span className="gold-text italic">Gallery</span>
            </h1>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-5 py-2 rounded-full text-xs tracking-wider uppercase transition-all duration-300 ${
                  active === cat
                    ? 'gold-gradient text-background font-semibold'
                    : 'border border-gold/20 text-muted-foreground hover:border-gold/50 hover:text-cream'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Masonry Grid */}
          <div className="columns-2 lg:columns-3 gap-4 space-y-4">
            {filtered.map((img, i) => (
              <div
                key={`${img.src}-${i}`}
                className="break-inside-avoid rounded-xl overflow-hidden group cursor-pointer relative"
                onClick={() => openLightbox(i)}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                  width={600}
                  height={400}
                />
                <div className="absolute inset-0 bg-background/0 group-hover:bg-background/40 transition-colors duration-500 flex items-center justify-center">
                  <span className="text-cream text-sm tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    View
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox !== null && (
        <div className="fixed inset-0 z-[100] bg-background/95 flex items-center justify-center" onClick={closeLightbox}>
          <button onClick={closeLightbox} className="absolute top-6 right-6 text-cream hover:text-gold transition-colors" aria-label="Close">
            <X size={28} />
          </button>
          <button onClick={(e) => { e.stopPropagation(); prev(); }} className="absolute left-4 text-cream hover:text-gold transition-colors" aria-label="Previous">
            <ChevronLeft size={36} />
          </button>
          <button onClick={(e) => { e.stopPropagation(); next(); }} className="absolute right-4 text-cream hover:text-gold transition-colors" aria-label="Next">
            <ChevronRight size={36} />
          </button>
          <img
            src={filtered[lightbox].src}
            alt={filtered[lightbox].alt}
            className="max-w-[90vw] max-h-[85vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
};

export default GalleryPage;
