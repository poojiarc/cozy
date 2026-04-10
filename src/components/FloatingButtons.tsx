import { useState, useEffect } from 'react';
import { ArrowUp, MessageCircle } from 'lucide-react';

const FloatingButtons = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScroll(window.scrollY > 400);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* WhatsApp Floating */}
      <a
        href="https://wa.me/919494700011?text=Hi%20CozyCoo!%20I%20would%20like%20to%20book%20a%20session."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-green-600 flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={24} className="text-foreground" />
      </a>

      {/* Scroll to Top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`fixed bottom-6 left-6 z-50 w-12 h-12 rounded-full gold-gradient flex items-center justify-center shadow-lg transition-all duration-300 ${
          showScroll ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
        aria-label="Scroll to top"
      >
        <ArrowUp size={20} className="text-background" />
      </button>

      {/* Mobile Sticky CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-background/95 backdrop-blur-md border-t border-gold/10 p-3 safe-area-pb">
        <a
          href="https://wa.me/919494700011?text=Hi%20CozyCoo!%20I%20would%20like%20to%20book%20a%20session."
          target="_blank"
          rel="noopener noreferrer"
          className="block shimmer-btn gold-gradient px-6 py-3 rounded-full text-sm font-semibold text-background tracking-wider uppercase text-center"
        >
          📱 Book Now on WhatsApp
        </a>
      </div>
    </>
  );
};

export default FloatingButtons;
