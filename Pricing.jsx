import React from 'react';
import { motion } from 'framer-motion';
import { Check, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const plans = [
  {
    name: 'Mensal',
    price: 'R$ 24,99',
    period: 'mês',
    popular: false,
    features: [
      'Acesso a todos os 10.000+ canais',
      'Qualidade de streaming HD/4K',
      'Suporte a múltiplos dispositivos',
      'Sem fidelidade',
      'Suporte ao cliente 24/7',
      'Atualizações regulares de conteúdo'
    ]
  },
  {
    name: 'Trimestral',
    price: 'R$ 71,99',
    period: '3 meses',
    popular: true,
    features: [
      'Todos os recursos do Mensal',
      'Melhor custo-benefício',
      'Suporte prioritário',
      'Canais premium exclusivos',
      'Acesso à biblioteca VOD',
      'Período de teste grátis'
    ]
  },
  {
    name: 'Anual',
    price: 'R$ 194,99',
    period: 'ano',
    popular: false,
    features: [
      'Todos os recursos do Trimestral',
      'Economia máxima',
      'Acesso a suporte VIP',
      'Acesso antecipado a novos recursos',
      'Biblioteca VOD estendida',
      'Descontos especiais'
    ]
  }
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-20 bg-slate-900/50 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Escolha Seu{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Plano
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Planos de assinatura flexíveis para atender às suas necessidades de entretenimento
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className={`relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-8 rounded-2xl border ${
                plan.popular ? 'border-blue-500 shadow-lg shadow-blue-500/20' : 'border-slate-700/50'
              } transition-all duration-300`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Mais Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <div className="flex justify-center items-end gap-1 mb-2">
                   <span className="text-3xl font-bold text-white">{plan.price}</span>
                   <span className="text-slate-400 mb-1">/{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="bg-blue-500/20 rounded-full p-1 mt-0.5">
                      <Check className="w-4 h-4 text-blue-400" />
                    </div>
                    <span className="text-slate-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                onClick={() => window.open('https://wa.me/5561998393570', '_blank')}
                className={`w-full ${
                  plan.popular
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700'
                    : 'bg-slate-700 hover:bg-slate-600'
                } text-white group`}
                size="lg"
              >
                <MessageCircle className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Assine Agora
              </Button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-slate-400 text-sm">
            Todos os planos incluem garantia de satisfação. Entre em contato pelo WhatsApp para detalhes de preços.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;