import { useState } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const serviceOptions = [
  'Newborn Photography',
  'Maternity Photography',
  'Kids Photography',
  'Hand Casting Keepsakes',
];

const ContactPage = () => {
  const ref = useScrollReveal();
  const [form, setForm] = useState({ name: '', phone: '', email: '', service: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Hi CozyCoo! I'm ${form.name}.\nPhone: ${form.phone}\nEmail: ${form.email}\nService: ${form.service}\nMessage: ${form.message}`;
    window.open(`https://wa.me/919494700011?text=${encodeURIComponent(msg)}`, '_blank');
  };

  const update = (field: string, value: string) => setForm((prev) => ({ ...prev, [field]: value }));

  return (
    <div className="pt-20" ref={ref}>
      <section className="py-8 lg:py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-xs tracking-[0.3em] uppercase text-gold/80">Get In Touch</span>
            <h1 className="font-heading text-3xl lg:text-5xl text-cream mt-4">
              Contact <span className="gold-text italic">Us</span>
            </h1>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Left - Info */}
            <div className="section-reveal space-y-8">
              <h2 className="font-heading text-2xl text-cream">Visit Our Studio</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full gold-gradient flex items-center justify-center flex-shrink-0">
                    <MapPin size={18} className="text-background" />
                  </div>
                  <div>
                    <h3 className="text-cream font-semibold mb-1">Address</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      CozyCoo Baby Studio<br />
                      1st floor, Above Veerabadra Restaurant<br />
                      Karnamgari Junction, Ashok Nagar<br />
                      Kakinada, 533004, AP
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full gold-gradient flex items-center justify-center flex-shrink-0">
                    <Phone size={18} className="text-background" />
                  </div>
                  <div>
                    <h3 className="text-cream font-semibold mb-1">Phone</h3>
                    <a href="tel:9494700011" className="text-muted-foreground text-sm hover:text-gold transition-colors">9494700011</a>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full gold-gradient flex items-center justify-center flex-shrink-0">
                    <Mail size={18} className="text-background" />
                  </div>
                  <div>
                    <h3 className="text-cream font-semibold mb-1">Email</h3>
                    <a href="mailto:3knotsstories@gmail.com" className="text-muted-foreground text-sm hover:text-gold transition-colors">3knotsstories@gmail.com</a>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full gold-gradient flex items-center justify-center flex-shrink-0">
                    <Clock size={18} className="text-background" />
                  </div>
                  <div>
                    <h3 className="text-cream font-semibold mb-1">Working Hours</h3>
                    <p className="text-muted-foreground text-sm">10:00 AM – 7:00 PM (All days open)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Form */}
            <div className="section-reveal">
              <form onSubmit={handleSubmit} className="glass-card rounded-2xl p-8 space-y-6">
                <div>
                  <label className="block text-xs text-gold tracking-wider uppercase mb-2">Name</label>
                  <input
                    type="text"
                    required
                    maxLength={100}
                    value={form.name}
                    onChange={(e) => update('name', e.target.value)}
                    className="w-full bg-secondary/50 border border-gold/10 rounded-lg px-4 py-3 text-sm text-cream placeholder:text-muted-foreground focus:border-gold/40 focus:outline-none transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-xs text-gold tracking-wider uppercase mb-2">Phone</label>
                  <input
                    type="tel"
                    required
                    maxLength={15}
                    value={form.phone}
                    onChange={(e) => update('phone', e.target.value)}
                    className="w-full bg-secondary/50 border border-gold/10 rounded-lg px-4 py-3 text-sm text-cream placeholder:text-muted-foreground focus:border-gold/40 focus:outline-none transition-colors"
                    placeholder="Your phone number"
                  />
                </div>
                <div>
                  <label className="block text-xs text-gold tracking-wider uppercase mb-2">Email</label>
                  <input
                    type="email"
                    maxLength={255}
                    value={form.email}
                    onChange={(e) => update('email', e.target.value)}
                    className="w-full bg-secondary/50 border border-gold/10 rounded-lg px-4 py-3 text-sm text-cream placeholder:text-muted-foreground focus:border-gold/40 focus:outline-none transition-colors"
                    placeholder="Your email (optional)"
                  />
                </div>
                <div>
                  <label className="block text-xs text-gold tracking-wider uppercase mb-2">Service</label>
                  <select
                    required
                    value={form.service}
                    onChange={(e) => update('service', e.target.value)}
                    className="w-full bg-secondary/50 border border-gold/10 rounded-lg px-4 py-3 text-sm text-cream focus:border-gold/40 focus:outline-none transition-colors"
                  >
                    <option value="">Select a service</option>
                    {serviceOptions.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-xs text-gold tracking-wider uppercase mb-2">Message</label>
                  <textarea
                    rows={4}
                    maxLength={1000}
                    value={form.message}
                    onChange={(e) => update('message', e.target.value)}
                    className="w-full bg-secondary/50 border border-gold/10 rounded-lg px-4 py-3 text-sm text-cream placeholder:text-muted-foreground focus:border-gold/40 focus:outline-none transition-colors resize-none"
                    placeholder="Tell us about your requirements..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full shimmer-btn gold-gradient px-8 py-4 rounded-full text-sm font-semibold text-background tracking-wider uppercase gold-glow hover:scale-[1.02] transition-transform duration-300"
                >
                  Send via WhatsApp
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
