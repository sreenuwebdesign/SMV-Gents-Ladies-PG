import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageCircle, Building2, ChevronRight } from 'lucide-react';
import { PG_CONTACT } from '../data/pgData';

interface NavbarProps {
  onOpenBooking: (roomType?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Rooms & Pricing', href: '#rooms-pricing' },
    { name: 'Amenities', href: '#amenities' },
    { name: 'Food & Kitchen', href: '#food-kitchen' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Location', href: '#location' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const whatsappUrl = `https://wa.me/${PG_CONTACT.phoneRaw}?text=${encodeURIComponent(PG_CONTACT.whatsappMessage)}`;

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/80 py-3'
          : 'bg-white/90 backdrop-blur-sm border-b border-slate-100 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Identity */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#home');
            }}
            id="nav-brand-logo"
            className="flex items-center gap-3 group"
          >
            <div className="w-10 h-10 rounded-xl bg-amber-500 text-slate-950 flex items-center justify-center font-extrabold text-xl shadow-sm group-hover:scale-105 transition-transform">
              <Building2 className="w-5 h-5 text-slate-950" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-heading font-extrabold text-lg sm:text-xl text-slate-900 tracking-tight">
                  SMV PG
                </span>
                <span className="bg-amber-100 text-amber-900 text-[11px] font-bold px-2 py-0.5 rounded-full border border-amber-200">
                  Gents & Ladies
                </span>
              </div>
              <p className="text-xs text-slate-500 font-medium hidden sm:block">
                Kharadi, Pune • Food Included
              </p>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                id={`nav-link-${link.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                className="px-3 py-1.5 text-sm font-semibold text-slate-600 hover:text-amber-600 hover:bg-amber-50/70 rounded-lg transition-colors whitespace-nowrap"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Sticky Header CTAs */}
          <div className="hidden sm:flex items-center gap-2.5">
            <a
              href={PG_CONTACT.mapDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              id="header-btn-directions"
              className="px-3 py-2 text-xs md:text-sm font-bold text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors inline-flex items-center gap-1.5"
            >
              <span>Map & Directions</span>
            </a>

            <a
              href="#rooms-pricing"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#rooms-pricing');
              }}
              id="header-btn-view-rooms"
              className="px-3.5 py-2 text-xs md:text-sm font-bold text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors"
            >
              View Rooms
            </a>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              id="header-btn-enquire-now"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs md:text-sm font-bold text-slate-950 bg-amber-400 hover:bg-amber-500 active:scale-95 rounded-lg shadow-sm hover:shadow transition-all"
            >
              <MessageCircle className="w-4 h-4 fill-slate-950 text-amber-400" />
              <span>Enquire Now</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-950 bg-amber-400 rounded-lg shadow-xs"
              aria-label="Enquire on WhatsApp"
            >
              <MessageCircle className="w-5 h-5 fill-slate-950 text-amber-400" />
            </a>
            <button
              type="button"
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-slate-900 hover:bg-slate-100 rounded-lg"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div id="mobile-nav-drawer" className="lg:hidden border-t border-slate-200 bg-white shadow-xl animate-in slide-in-from-top-2 duration-200">
          <div className="px-4 pt-3 pb-6 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="block px-3 py-2.5 rounded-lg text-base font-semibold text-slate-700 hover:text-amber-600 hover:bg-amber-50"
              >
                {link.name}
              </a>
            ))}

            <div className="pt-4 border-t border-slate-100 flex flex-col gap-2.5">
              <a
                href={`tel:${PG_CONTACT.phoneRaw}`}
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 font-bold text-slate-800 bg-slate-100 rounded-lg text-sm border border-slate-200"
              >
                <Phone className="w-4 h-4 text-slate-600" />
                <span>Call {PG_CONTACT.phone}</span>
              </a>
              <a
                href="#rooms-pricing"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('#rooms-pricing');
                }}
                className="w-full text-center py-2.5 px-4 font-bold text-slate-800 bg-slate-100 rounded-lg text-sm"
              >
                View Rooms & Pricing
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 font-bold text-slate-950 bg-amber-400 hover:bg-amber-500 rounded-lg text-sm shadow-sm"
              >
                <MessageCircle className="w-4 h-4 fill-slate-950 text-amber-400" />
                <span>Enquire on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
