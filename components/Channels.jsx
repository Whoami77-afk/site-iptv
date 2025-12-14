import React from 'react'

const sample = [
  'Esportes HD',
  'Filmes & Séries',
  'Canais Infantis',
  'Notícias Internacionais',
  'Documentários',
  'Entretenimento'
]

export default function Channels() {
  return (
    <section id="channels" className="mt-12">
      <h3 className="text-2xl font-bold">Alguns canais e categorias</h3>
      <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 text-sm text-slate-300">
        {sample.map((s) => (
          <div key={s} className="p-3 bg-slate-800 rounded">{s}</div>
        ))}
      </div>
    </section>
  )
}
export { default } from '../Channels.jsx'
