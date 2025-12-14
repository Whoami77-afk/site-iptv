import React from 'react'
import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Carlos Silva',
    role: 'Cliente desde 2023',
    text: 'Assinei o plano Premium e a qualidade é excelente. Atendimento rápido via WhatsApp e sem complicações. Recomendo!',
    rating: 5,
    photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3'
  },
  {
    name: 'Mariana Costa',
    role: 'Cliente desde 2024',
    text: 'Ótima variedade de canais! Funcionou perfeitamente na minha Smart TV. Relação qualidade-preço imbatível.',
    rating: 5,
    photo: 'https://images.unsplash.com/photo-1545996124-1a5f6e07f39b?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3'
  },
  {
    name: 'João Santos',
    role: 'Cliente desde 2024',
    text: 'Cancelei outras plataformas. Vizzion tem tudo que eu preciso. Suporte fantástico, disponível 24/7.',
    rating: 5,
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3'
  },
  {
    name: 'Ana Oliveira',
    role: 'Cliente desde 2024',
    text: 'A instalação foi super fácil. Minha família toda usa em diferentes aparelhos. Muito satisfeita!',
    rating: 5,
    photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3'
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">O Que Nossos Clientes Dizem</h2>
          <p className="text-xl text-slate-300">Confira as avaliações de milhares de clientes satisfeitos</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="p-6 bg-slate-800/50 border border-slate-700 rounded-xl hover:border-indigo-500/50 transition"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} size={18} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-slate-300 italic mb-6">"{testimonial.text}"</p>

              {/* Author */}
              <div className="flex items-center gap-4 border-t border-slate-700 pt-4">
                <img
                  src={testimonial.photo}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-indigo-500/30"
                />
                <div>
                  <p className="font-bold text-white">{testimonial.name}</p>
                  <p className="text-sm text-slate-400">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
