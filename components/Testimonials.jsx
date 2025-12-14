import React from 'react'

const testimonials = [
  {
    name: 'Carlos Silva',
    text: 'Assinei o plano Premium e a qualidade é excelente. Atendimento rápido e sem dores de cabeça.',
    photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3&s=example'
  },
  {
    name: 'Mariana Costa',
    text: 'Ótima variedade de canais e funcionou facilmente na minha Smart TV.',
    photo: 'https://images.unsplash.com/photo-1545996124-1a5f6e07f39b?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3&s=example'
  }
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="mt-12">
      <h3 className="text-2xl font-bold">Depoimentos</h3>
      <div className="mt-6 grid md:grid-cols-2 gap-6">
        {testimonials.map((t) => (
          <div key={t.name} className="p-5 bg-slate-800 rounded-lg flex gap-4 items-center">
            <img src={t.photo} alt={t.name} className="w-16 h-16 rounded-full object-cover" />
            <div>
              <p className="font-semibold">{t.name}</p>
              <p className="text-sm text-slate-300 mt-1">{t.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
