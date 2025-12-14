import React from 'react'

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-slate-800 via-slate-900 to-slate-800 shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-indigo-500 rounded-md flex items-center justify-center font-bold text-white">VM</div>
          <div>
            <h1 className="text-xl font-semibold">Vizzion MaxTV</h1>
            <p className="text-sm text-slate-300">IPTV Premium • Canais HD • Suporte via WhatsApp</p>
          </div>
        </div>
        <nav className="hidden md:flex gap-6 items-center text-slate-200">
          <a href="#features" className="hover:underline">Recursos</a>
          <a href="#channels" className="hover:underline">Canais</a>
          <a href="#pricing" className="hover:underline">Planos</a>
          <a href="#testimonials" className="hover:underline">Depoimentos</a>
        </nav>
      </div>
    </header>
  )
}
export { default } from '../header.jsx'
