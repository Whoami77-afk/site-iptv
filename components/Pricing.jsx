import React from 'react'
import { Button } from './ui/button'

const plans = [
  { name: 'Essential', price: 'R$19,90', bullets: ['1000+ canais', '1 dispositivo'] },
  { name: 'Plus', price: 'R$34,90', bullets: ['2000+ canais', '2 dispositivos'] },
  { name: 'Premium', price: 'R$59,90', bullets: ['3000+ canais', '4 dispositivos'] },
]

export default function Pricing() {
  return (
    <section id="pricing" className="mt-12">
      <h3 className="text-2xl font-bold">Planos</h3>
      <div className="mt-6 grid sm:grid-cols-3 gap-6">
        {plans.map((p) => (
          <div key={p.name} className="p-6 bg-slate-800 rounded-lg">
            <h4 className="text-lg font-semibold">{p.name}</h4>
            <p className="mt-2 text-3xl font-extrabold">{p.price}</p>
            <ul className="mt-4 text-sm text-slate-300 space-y-2">
              {p.bullets.map((b) => (
                <li key={b}>• {b}</li>
              ))}
            </ul>
            <div className="mt-6">
              <Button as="a" href="#contact" variant="primary">Assinar via WhatsApp</Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
export { default } from '../Pricing.jsx'
