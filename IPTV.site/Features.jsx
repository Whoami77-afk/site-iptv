import React from 'react';
import { motion } from 'framer-motion';
import { Tv, Globe, Smartphone, Zap, Shield, Headphones as HeadphonesIcon } from 'lucide-react';

const features = [
  {
    icon: Tv,
    title: 'Qualidade HD/4K',
    description: 'Streaming cristalino em resolução HD e 4K para a melhor experiência de visualização'
  },
  {
    icon: Globe,
    title: 'Cobertura Global',
    description: 'Acesse canais de todo o mundo, incluindo esportes, filmes, notícias e entretenimento'
  },
  {
    icon: Smartphone,
    title: 'Multi-Dispositivos',
    description: 'Assista na Smart TV, celular, tablet, PC e dispositivos de streaming simultaneamente'
  },
  {
    icon: Zap,
    title: 'Rápido e Estável',
    description: 'Servidores ultrarrápidos garantem streaming suave com buffer mínimo'
  },
  {
    icon: Shield,
    title: 'Serviço Seguro',
    description: 'Streaming protegido com conexões criptografadas para sua privacidade e segurança'
  },
  {
    icon: HeadphonesIcon,
    title: 'Suporte 24/7',
    description: 'Equipe de suporte dedicada disponível a qualquer momento via WhatsApp'
  }
];

const Features = () => {
  return (
    <section id="features" className="py-20 bg-slate-900/50 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Por Que Escolher{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Vizzion MaxTV
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Experimente o futuro da televisão com recursos premium projetados para o máximo entretenimento
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300"
            >
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">{feature.title}</h3>
              <p className="text-slate-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;