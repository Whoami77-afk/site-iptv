import React from 'react'
import { Button } from './ui/button'

export default function Hero() {
  return (
    <section className="grid md:grid-cols-2 gap-8 items-center py-12">
      <div>
        <h2 className="text-4xl font-extrabold leading-tight">Entretenimento sem interrupções — IPTV Profissional</h2>
        <p className="mt-4 text-slate-300">Milhares de canais, filmes e séries em HD. Instalação simples, suporte 24/7 via WhatsApp e planos para todos os perfis.</p>
        <div className="mt-6 flex gap-4">
          <Button as="a" href="#pricing" variant="primary">Ver Planos</Button>
          <Button as="a" href="#contact" variant="ghost">Fale conosco</Button>
        </div>
        <ul className="mt-6 grid grid-cols-2 gap-3 text-sm text-slate-400">
          <li>✅ Suporte rápido via WhatsApp</li>
          <li>✅ Atualizações de canais semanal</li>
          <li>✅ Reembolso em 7 dias</li>
          <li>✅ Multiplataforma (Smart TVs, Kodi, Android)</li>
        </ul>
      </div>
      <div>
        <img src="https://images.unsplash.com/photo-1511688878351-4c3e6f7d8f3a?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&s=example" alt="Smart TV streaming" className="rounded-lg shadow-lg w-full" />
      </div>
    </section>
  )
}

