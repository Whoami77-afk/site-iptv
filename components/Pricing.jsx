import React from 'react'
import { Check, Zap } from 'lucide-react'

const plans = [
  {
    name: 'Essencial',
    price: '19,90',
    period: 'mês',
    description: 'Perfeito para começar',
    bullets: ['1.000+ canais', '1 dispositivo simultâneo', 'Qualidade HD', 'Suporte via WhatsApp'],
    highlighted: false
  },
  {
    name: 'Plus',
    price: '34,90',
    period: 'mês',
    description: 'O mais popular',
    bullets: ['5.000+ canais', '2 dispositivos simultâneos', 'Qualidade Full HD', 'Suporte prioritário', '30 dias de garantia'],
    highlighted: true
  },
  {
    name: 'Premium',
    price: '59,90',
    period: 'mês',
    description: 'Máxima experiência',
    bullets: ['15.000+ canais', '4 dispositivos simultâneos', 'Qualidade 4K', 'Suporte VIP 24/7', '60 dias de garantia'],
    highlighted: false
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Planos Acessíveis e Flexíveis</h2>
          <p className="text-xl text-slate-300">Escolha o plano perfeito para você. Sem contratos, cancele quando quiser.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-xl transition transform ${
                plan.highlighted
                  ? 'bg-gradient-to-br from-indigo-900 to-purple-900 border-2 border-indigo-500 shadow-2xl shadow-indigo-500/30 md:scale-105'
                  : 'bg-slate-800 border border-slate-700 hover:border-indigo-500/50'
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-bold flex items-center gap-2">
                  <Zap size={16} />
                  Mais Popular
                </div>
              )}

              <div className="p-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-slate-400 text-sm mb-6">{plan.description}</p>

                <div className="mb-8">
                  <div className="text-4xl font-bold">
                    R$<span className="text-5xl">{plan.price}</span>
                  </div>
                  <p className="text-slate-400 text-sm mt-2">por {plan.period}</p>
                </div>

                <a
                  href="#contact"
                  className={`block w-full text-center py-3 rounded-lg font-bold transition mb-8 ${
                    plan.highlighted
                      ? 'bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white shadow-lg'
                      : 'border-2 border-indigo-500 text-indigo-400 hover:bg-indigo-500/10'
                  }`}
                >
                  Assinar Agora
                </a>

                <ul className="space-y-4">
                  {plan.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-3">
                      <Check size={20} className="text-indigo-400 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-200">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 p-6 bg-slate-800/50 border border-indigo-500/20 rounded-lg">
          <p className="text-slate-300">
            💳 Primeiros 7 dias 100% grátis • Sem cartão de crédito • Cancele a qualquer momento
          </p>
        </div>
      </div>
    </section>
  )
}

