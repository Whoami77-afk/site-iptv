import React from 'react'

const features = [
  { title: 'Canais ao vivo', desc: 'TVs ao vivo nacionais e internacionais em HD' },
  { title: 'On-demand', desc: 'Filmes e séries atualizadas semanalmente' },
  { title: 'Compatível', desc: 'Smart TV, Android, iOS, Kodi e MAG' },
  { title: 'Suporte', desc: 'Atendimento via WhatsApp e painel de controle' },
]

export default function Features() {
  return (
    <section id="features" className="mt-12">
      <h3 className="text-2xl font-bold">Recursos</h3>
      <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((f) => (
          <div key={f.title} className="p-5 bg-slate-800 rounded-lg">
            <h4 className="font-semibold">{f.title}</h4>
            <p className="mt-2 text-sm text-slate-300">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

