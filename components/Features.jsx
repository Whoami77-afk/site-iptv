import React from 'react'
import { Tv, Film, Smartphone, Headphones, Zap, Lock, Users, Globe } from 'lucide-react'

const features = [
  {
    icon: Tv,
    title: 'Canais ao Vivo',
    description: 'Milhares de canais HD de TV ao vivo: notícias, esportes, filmes e muito mais'
  },
  {
    icon: Film,
    title: 'Filmes & Séries',
    description: 'Catálogo atualizado semanalmente com lançamentos e clássicos'
  },
  {
    icon: Smartphone,
    title: 'Multiplataforma',
    description: 'Assista em Smart TVs, Android, iOS, Windows, macOS e muito mais'
  },
  {
    icon: Headphones,
    title: 'Suporte 24/7',
    description: 'Atendimento rápido via WhatsApp por nossa equipe especializada'
  },
  {
    icon: Zap,
    title: 'Streaming Rápido',
    description: 'Servidores otimizados para qualidade máxima sem buffering'
  },
  {
    icon: Lock,
    title: 'Seguro & Privado',
    description: 'Sua privacidade é protegida com criptografia de ponta a ponta'
  },
  {
    icon: Users,
    title: 'Múltiplos Perfis',
    description: 'Configure vários perfis de usuário para sua família'
  },
  {
    icon: Globe,
    title: 'Acesso Global',
    description: 'Conecte-se de qualquer lugar do mundo com VPN incluso'
  },
]

export default function Features() {
  return (
    <section id="features" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Por Que Escolher Vizzion MaxTV?</h2>
          <p className="text-xl text-slate-300">Tudo que você precisa para streaming de qualidade em um único lugar</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.title}
                className="group p-6 bg-slate-800/50 border border-slate-700 hover:border-indigo-500/50 rounded-xl transition hover:bg-slate-800 cursor-pointer"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:from-indigo-500/30 group-hover:to-purple-500/30 transition">
                  <Icon size={24} className="text-indigo-400" />
                </div>
                <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

