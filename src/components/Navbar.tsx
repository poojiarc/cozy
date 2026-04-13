import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Home, Briefcase, Image, PhoneCall } from 'lucide-react';
import logo from '@/assets/logo-transparent.png';

const navLinks = [
  { label: 'Home', path: '/', icon: Home },
  { label: 'Services', path: '/services', icon: Briefcase },
  { label: 'Gallery', path: '/gallery', icon: Image },
  { label: 'Contact', path: '/contact', icon: PhoneCall },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-background/95 backdrop-blur-md border-b border-gold/10' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 lg:px-8">
        {/* Mobile Header */}
        <div className="flex lg:hidden items-center justify-between h-16">
          <button onClick={() => setIsOpen(!isOpen)} className="text-cream w-8">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <Link to="/" className="absolute left-1/2 -translate-x-1/2">
            <img src={logo} alt="CozyCoo Baby Studio" className="h-28" width={112} height={112} />
          </Link>
          <div className="w-8" />
        </div>

        {/* Desktop Header */}
        <div className="hidden lg:flex items-center justify-between h-24">
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="CozyCoo Baby Studio" className="h-32" width={128} height={128} />
            <div className="flex flex-col">
              <span className="font-heading text-2xl gold-text font-bold tracking-widest uppercase">CozyCoo</span>
              <span className="text-xs text-cream-dark tracking-[0.3em] uppercase">Baby Studio</span>
            </div>
          </Link>

          <div className="flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`flex items-center gap-1.5 text-sm tracking-wider uppercase transition-colors duration-300 hover:text-gold ${location.pathname === link.path ? 'text-gold' : 'text-cream-dark'}`}
              >
                <link.icon size={16} />
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="shimmer-btn gold-gradient px-6 py-2.5 rounded-full text-sm font-semibold text-background tracking-wider uppercase"
            >
              Book Now
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden transition-all duration-500 overflow-hidden ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="bg-background/98 backdrop-blur-xl border-t border-gold/10 px-4 py-6 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`flex items-center justify-center gap-2 text-sm tracking-wider uppercase py-2 transition-colors ${location.pathname === link.path ? 'text-gold' : 'text-cream-dark'}`}
            >
              <link.icon size={16} />
              {link.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="block text-center shimmer-btn gold-gradient px-6 py-3 rounded-full text-sm font-semibold text-background tracking-wider uppercase mx-auto max-w-xs"
          >
            Book Now
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
