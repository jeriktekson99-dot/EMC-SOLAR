import { useState, useEffect, MouseEvent } from 'react';
import { Menu, X } from 'lucide-react';
import SolareignLogo from './SolareignLogo';

interface NavbarProps {
  activePage?: string;
  onNavigate?: (page: string) => void;
  onConsultationClick?: () => void;
}

export default function Navbar({ 
  activePage = 'about', 
  onNavigate, 
  onConsultationClick 
}: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Services', id: 'services' },
    { label: 'Products', id: 'portfolio' },
  ];

  const handleLinkClick = (e: MouseEvent, id: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (onNavigate) {
      onNavigate(id);
    }
  };

  return (
    <header
      id="main-navbar"
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/80 py-3.5'
          : 'bg-white/85 backdrop-blur-sm border-b border-slate-100 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Left: Solareign Solar Power Services logo */}
          <div className="flex items-center justify-start shrink-0">
            <button
              onClick={(e) => handleLinkClick(e, 'home')}
              id="brand-logo-link"
              className="flex items-center group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#DC2626] rounded-lg text-left"
            >
              <SolareignLogo />
            </button>
          </div>

          {/* Right: Four navigation links & Mobile menu toggle */}
          <div className="flex items-center justify-end">
            <nav
              id="desktop-nav-menu"
              aria-label="Main Navigation"
              className="hidden md:flex items-center justify-end gap-7 lg:gap-9"
            >
              {navLinks.map((link) => {
                const isActive = 
                  activePage.toLowerCase() === link.id || 
                  (link.id === 'portfolio' && (activePage.toLowerCase() === 'portfolio-details' || activePage.toLowerCase() === 'products'));
                return (
                  <button
                    key={link.id}
                    id={`nav-link-${link.id}`}
                    onClick={(e) => handleLinkClick(e, link.id)}
                    className={`text-sm tracking-tight transition-all duration-200 relative py-2 font-bold cursor-pointer whitespace-nowrap ${
                      isActive
                        ? 'text-[#DC2626]'
                        : 'text-slate-600 hover:text-[#DC2626]'
                    }`}
                  >
                    <span>{link.label}</span>
                    {/* Active indicator state */}
                    {isActive ? (
                      <span 
                        aria-hidden="true"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#DC2626] rounded-full" 
                      />
                    ) : (
                      <span 
                        aria-hidden="true"
                        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-[#DC2626] rounded-full transition-all duration-200 hover:w-full" 
                      />
                    )}
                  </button>
                );
              })}
            </nav>

            {/* Mobile menu toggle */}
            <div className="md:hidden flex items-center">
              <button
                id="mobile-menu-toggle-btn"
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl text-slate-700 hover:text-[#DC2626] hover:bg-slate-100 transition-colors focus:outline-none focus:ring-2 focus:ring-[#DC2626]"
                aria-expanded={mobileMenuOpen}
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div
            id="mobile-nav-panel"
            className="md:hidden pt-4 pb-3 border-t border-slate-100 mt-3 space-y-2 animate-in fade-in slide-in-from-top-2 duration-200"
          >
            {navLinks.map((link) => {
              const isActive = 
                activePage.toLowerCase() === link.id || 
                (link.id === 'portfolio' && (activePage.toLowerCase() === 'portfolio-details' || activePage.toLowerCase() === 'products'));
              return (
                <button
                  key={link.id}
                  id={`mobile-nav-link-${link.id}`}
                  onClick={(e) => handleLinkClick(e, link.id)}
                  className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-base font-bold text-left transition-all cursor-pointer ${
                    isActive
                      ? 'border-2 border-[#DC2626] bg-[#DC2626]/10 text-[#DC2626] shadow-xs'
                      : 'border-2 border-transparent text-slate-700 hover:text-[#DC2626] hover:bg-slate-50'
                  }`}
                >
                  <span>{link.label}</span>
                </button>
              );
            })}
          </div>
        )}
      </div>
    </header>
  );
}
