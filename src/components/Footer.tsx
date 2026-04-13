import { Link } from 'react-router-dom';
import { Instagram, Phone, Home, Briefcase, Image as ImageIcon, PhoneCall, MapPin, Mail, Clock, Heart } from 'lucide-react';
import logo from '@/assets/logo-transparent.png';

const Footer = () => {
  return (
    <footer className="border-t border-gold/10 bg-background">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <img src={logo} alt="CozyCoo Baby Studio" className="h-14" width={56} height={56} />
              <span className="font-heading text-lg gold-text font-semibold tracking-wide">CozyCoo Baby Studio</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Premium baby photography studio in Kakinada. Newborn, maternity, kids photography and hand casting keepsakes.
            </p>
            {/* Social icons under logo */}
            <div className="flex items-center gap-4 pt-2">
              <a href="tel:9494700011" className="text-muted-foreground hover:text-gold transition-colors" aria-label="Phone">
                <Phone size={18} />
              </a>
              <a href="https://www.instagram.com/cozycoo_babystudio?igsh=MTNidG56OXQ4dXJiYQ==" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-gold transition-colors" aria-label="Instagram">
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-gold mb-4">Quick Links</h4>
            <div className="space-y-2">
              {[
                { label: 'Home', path: '/', icon: Home },
                { label: 'Services', path: '/services', icon: Briefcase },
                { label: 'Gallery', path: '/gallery', icon: ImageIcon },
                { label: 'Contact', path: '/contact', icon: PhoneCall },
              ].map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-gold transition-colors"
                >
                  <link.icon size={14} />
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-gold mb-4">Contact</h4>
            <div className="space-y-3 text-sm text-muted-foreground">
              <div className="flex items-start gap-2">
                <MapPin size={14} className="text-gold mt-0.5 flex-shrink-0" />
                <p>1st floor, Above Veerabadra Restaurant, Karnamgari Junction, Ashok Nagar, Kakinada, 533004, AP</p>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={14} className="text-gold flex-shrink-0" />
                <a href="tel:9494700011" className="hover:text-gold transition-colors">9494700011</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={14} className="text-gold flex-shrink-0" />
                <a href="mailto:Cozycoobaystudio@gmail.com" className="hover:text-gold transition-colors">Cozycoobaystudio@gmail.com</a>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={14} className="text-gold flex-shrink-0" />
                <p>10:00 AM – 7:00 PM (All days)</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gold/10 mt-12 pt-8 flex flex-col items-center gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} CozyCoo Baby Studio. All rights reserved.
          </p>
          <div className="flex justify-center items-center gap-1 text-xs text-muted-foreground">
            Made with <Heart className="inline h-4 w-4 text-red-500 mx-1" /> by
            <a
              href="https://staffarc.in"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-orange-600 hover:underline"
            >
              <img
                src="https://www.staffarc.in/images/Staffarc-logo.png"
                alt="StaffArc logo"
                className="h-5 w-5 object-contain"
              />
              StaffArc
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
