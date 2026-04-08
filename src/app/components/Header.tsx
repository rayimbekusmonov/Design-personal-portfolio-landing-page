import { useState, useEffect } from 'react';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto" style={{ maxWidth: 'calc(100% - 160px)', padding: '0 80px' }}>
        <div className="flex items-center justify-between h-20">
          {/* Logo Placeholder */}
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-[#3B82F6] flex items-center justify-center">
              <span className="text-white font-semibold text-lg">JD</span>
            </div>
          </div>

          {/* Navigation Menu */}
          <nav className="flex items-center gap-8">
            <button
              onClick={() => scrollToSection('works')}
              className="text-[#1A1A1A] hover:text-[#3B82F6] transition-colors font-medium"
            >
              Works
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-[#1A1A1A] hover:text-[#3B82F6] transition-colors font-medium"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="text-[#1A1A1A] hover:text-[#3B82F6] transition-colors font-medium"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-[#1A1A1A] hover:text-[#3B82F6] transition-colors font-medium"
            >
              Contact
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}
