import React from 'react';
import { motion } from 'framer-motion';
import { Play, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-slate-950"></div>
      
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-600 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Experimente Streaming{' '}
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                IPTV Premium
              </span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Desbloqueie entretenimento ilimitado com Vizzion MaxTV. Assista a milhares de canais ao vivo, filmes e séries em qualidade HD impressionante de qualquer lugar do mundo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={() => window.open('https://wa.me/5561998393570', '_blank')}
                size="lg"
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white text-lg px-8 py-6 group"
              >
                <MessageCircle className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Contato via WhatsApp
              </Button>
              <Button
                onClick={() => document.getElementById('features').scrollIntoView({ behavior: 'smooth' })}
                size="lg"
                variant="outline"
                className="border-2 border-slate-700 bg-slate-900/50 hover:bg-slate-800 text-white text-lg px-8 py-6"
              >
                <Play className="w-5 h-5 mr-2" />
                Saiba Mais
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img alt="Sala de estar moderna com TV grande exibindo conteúdo de streaming" className="w-full h-auto rounded-2xl" src="https://images.unsplash.com/photo-1695651083280-0553119d5095" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent"></div>
            </div>
            <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-blue-500 to-purple-600 p-6 rounded-2xl shadow-xl">
              <p className="text-white font-bold text-3xl">10.000+</p>
              <p className="text-blue-100">Canais</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;