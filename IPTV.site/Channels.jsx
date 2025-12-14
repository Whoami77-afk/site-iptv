import React from 'react';
import { motion } from 'framer-motion';
import { Film, Trophy, Newspaper, Music, Gamepad2, Baby } from 'lucide-react';

const categories = [
  {
    icon: Film,
    title: 'Filmes e Séries',
    count: '5.000+',
    description: 'Últimos lançamentos e clássicos'
  },
  {
    icon: Trophy,
    title: 'Esportes',
    count: '500+',
    description: 'Jogos e eventos ao vivo'
  },
  {
    icon: Newspaper,
    title: 'Notícias',
    count: '200+',
    description: 'Canais de notícias globais'
  },
  {
    icon: Music,
    title: 'Música',
    count: '300+',
    description: 'Vídeos musicais e shows'
  },
  {
    icon: Gamepad2,
    title: 'Entretenimento',
    count: '1.500+',
    description: 'Programas e documentários'
  },
  {
    icon: Baby,
    title: 'Infantil',
    count: '400+',
    description: 'Conteúdo seguro para crianças'
  }
];

const Channels = () => {
  return (
    <section id="channels" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Entretenimento{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Sem Fim
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Explore nossa vasta biblioteca de canais em várias categorias
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 cursor-pointer"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-gradient-to-br from-blue-500 to-purple-600 w-12 h-12 rounded-lg flex items-center justify-center">
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{category.title}</h3>
                  <p className="text-blue-400 font-semibold">{category.count}</p>
                </div>
              </div>
              <p className="text-slate-400">{category.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-block bg-gradient-to-r from-blue-500/10 to-purple-600/10 backdrop-blur-sm p-8 rounded-2xl border border-blue-500/20">
            <p className="text-2xl font-bold text-white mb-2">10.000+ Canais no Total</p>
            <p className="text-slate-400">Conteúdo de mais de 150 países em todo o mundo</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Channels;