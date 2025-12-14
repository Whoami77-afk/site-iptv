import React from 'react'
import { Play, Zap, Shield } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative py-32 px-4 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 to-purple-900/20 blur-3xl -z-10"></div>

      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-indigo-300 to-purple-300 bg-clip-text text-transparent">
            Streaming Ilimitado de IPTV Premium
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            Mais de 15.000 canais, séries e filmes em qualidade HD/4K. Assista quando quiser, onde quiser.
          </p>

          {/* Feature Pills */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <div className="flex items-center gap-2 bg-slate-800/50 border border-indigo-500/30 rounded-full px-4 py-2">
              <Zap size={18} className="text-indigo-400" />
              <span className="text-sm font-medium">Ultra Rápido</span>
            </div>
            <div className="flex items-center gap-2 bg-slate-800/50 border border-indigo-500/30 rounded-full px-4 py-2">
              <Shield size={18} className="text-indigo-400" />
              <span className="text-sm font-medium">Seguro & Privado</span>
            </div>
            <div className="flex items-center gap-2 bg-slate-800/50 border border-indigo-500/30 rounded-full px-4 py-2">
              <Play size={18} className="text-indigo-400" />
              <span className="text-sm font-medium">Sem Limites</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a href="#contact" className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-bold transition shadow-lg hover:shadow-indigo-500/50 text-lg">
              Assine Agora
            </a>
            <a href="#pricing" className="border-2 border-indigo-500 text-indigo-400 hover:bg-indigo-500/10 px-8 py-4 rounded-lg font-bold transition text-lg">
              Ver Planos
            </a>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative rounded-xl overflow-hidden shadow-2xl border border-indigo-500/20">
          <img 
            src="https://images.unsplash.com/photo-1611339555312-e607c90352fd?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3" 
            alt="Smart TV streaming Vizzion MaxTV" 
            className="w-full h-auto object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 to-transparent"></div>
        </div>
      </div>
    </section>
  )
}

