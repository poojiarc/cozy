import { Link } from 'react-router-dom';
import { Instagram, Facebook, Phone } from 'lucide-react';
import logo from '@/assets/logo.jpeg';

const Footer = () => {
  return (
    <footer className="border-t border-gold/10 bg-background">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img src={logo} alt="CozyCoo Baby Studio" className="h-12 rounded-full" width={48} height={48} />
              <div>
                <span className="font-heading text-lg gold-text font-semibold">CozyCoo</span>
                <span className="block text-xs text-muted-foreground tracking-widest uppercase">Baby Studio</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Premium baby photography studio in Kakinada. Newborn, maternity, kids photography and hand casting keepsakes.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-gold mb-4">Quick Links</h4>
            <div className="space-y-2">
              {[
                { label: 'Home', path: '/' },
                { label: 'Services', path: '/services' },
                { label: 'Gallery', path: '/gallery' },
                { label: 'Contact', path: '/contact' },
              ].map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="block text-sm text-muted-foreground hover:text-gold transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-gold mb-4">Contact</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>1st floor, Above Veerabadra Restaurant</p>
              <p>Karnamgari Junction, Ashok Nagar</p>
              <p>Kakinada, 533004, AP</p>
              <p className="text-gold mt-3">📞 9494700011</p>
              <p>✉️ 3knotsstories@gmail.com</p>
              <p>🕐 10:00 AM – 7:00 PM (All days)</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gold/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} CozyCoo Baby Studio. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a href="https://wa.me/919494700011" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-gold transition-colors" aria-label="WhatsApp">
              <Phone size={18} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-gold transition-colors" aria-label="Instagram">
              <Instagram size={18} />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-gold transition-colors" aria-label="Facebook">
              <Facebook size={18} />
            </a>
          </div>
          <p className="text-xs text-muted-foreground">
            Designed by <span className="text-gold">StaffArc</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
