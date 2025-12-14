import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Tv, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-slate-950/95 backdrop-blur-lg shadow-lg border-b border-white/5' : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2"
          >
            {/* Professional Vizzion MaxTV Logo */}
            <div 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="group flex items-center gap-3 cursor-pointer select-none"
            >
              {/* Logo Icon Container */}
              <motion.div 
                whileHover={{ scale: 1.05, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                className="relative"
              >
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-blue-500 rounded-xl blur-lg opacity-40 group-hover:opacity-75 transition-opacity duration-500" />
                
                {/* Main Icon Box */}
                <div className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 p-2.5 rounded-xl border border-white/10 shadow-xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <Tv className="w-6 h-6 text-white drop-shadow-md relative z-10" strokeWidth={2.5} />
                  
                  {/* Internal Screen Glow */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-blue-400 blur-md opacity-50 group-hover:opacity-80 transition-opacity" />
                </div>

                {/* Live Indicator Dot */}
                <div className="absolute -top-1 -right-1">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500 border-2 border-slate-950"></span>
                  </span>
                </div>
              </motion.div>

              {/* Logo Text */}
              <div className="flex flex-col justify-center">
                <h1 className="text-2xl font-bold leading-none tracking-tight flex items-center gap-0.5">
                  <span className="text-white drop-shadow-sm group-hover:text-blue-100 transition-colors">Vizzion</span>
                  <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent font-black italic group-hover:from-blue-300 group-hover:to-purple-400 transition-all duration-300">
                    MaxTV
                  </span>
                </h1>
                <div className="flex items-center gap-1.5 opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-out h-0 group-hover:h-auto overflow-hidden">
                  <span className="w-1 h-1 rounded-full bg-blue-500" />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-blue-400">
                    Premium Stream
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('features')}
              className="text-slate-300 hover:text-white transition-colors text-sm font-medium hover:tracking-wide duration-300"
            >
              Recursos
            </button>
            <button
              onClick={() => scrollToSection('channels')}
              className="text-slate-300 hover:text-white transition-colors text-sm font-medium hover:tracking-wide duration-300"
            >
              Canais
            </button>
            <button
              onClick={() => scrollToSection('pricing')}
              className="text-slate-300 hover:text-white transition-colors text-sm font-medium hover:tracking-wide duration-300"
            >
              Preços
            </button>
            <Button
              onClick={() => window.open('https://wa.me/5561998393570', '_blank')}
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300"
            >
              Assine Agora
            </Button>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white p-2 hover:bg-white/5 rounded-lg transition-colors"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden mt-4 pb-4 flex flex-col gap-4 bg-slate-900/90 p-4 rounded-xl border border-white/10 backdrop-blur-md"
          >
            <button
              onClick={() => scrollToSection('features')}
              className="text-slate-300 hover:text-white transition-colors text-left px-4 py-2 hover:bg-white/5 rounded-lg"
            >
              Recursos
            </button>
            <button
              onClick={() => scrollToSection('channels')}
              className="text-slate-300 hover:text-white transition-colors text-left px-4 py-2 hover:bg-white/5 rounded-lg"
            >
              Canais
            </button>
            <button
              onClick={() => scrollToSection('pricing')}
              className="text-slate-300 hover:text-white transition-colors text-left px-4 py-2 hover:bg-white/5 rounded-lg"
            >
              Preços
            </button>
            <Button
              onClick={() => window.open('https://wa.me/5561998393570', '_blank')}
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white w-full"
            >
              Assine Agora
            </Button>
          </motion.div>
        )}
      </nav>
    </motion.header>
  );
};

export default Header;