import React from 'react'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 border-b border-indigo-500/20 shadow-lg">
      <div className="container mx-auto px-4 py-5 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-11 h-11 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center font-bold text-white shadow-lg group-hover:shadow-indigo-500/50 transition">
            VM
          </div>
          <div>
            <h1 className="text-xl font-bold text-white">Vizzion MaxTV</h1>
            <p className="text-xs text-indigo-300">Streaming Premium</p>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 items-center">
          <a href="#features" className="text-slate-300 hover:text-indigo-400 transition font-medium text-sm">Recursos</a>
          <a href="#channels" className="text-slate-300 hover:text-indigo-400 transition font-medium text-sm">Canais</a>
          <a href="#pricing" className="text-slate-300 hover:text-indigo-400 transition font-medium text-sm">Planos</a>
          <a href="#testimonials" className="text-slate-300 hover:text-indigo-400 transition font-medium text-sm">Depoimentos</a>
          <a href="#contact" className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white px-6 py-2 rounded-lg font-medium transition shadow-lg">
            Contato
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-slate-300 hover:text-indigo-400 transition"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-900/95 border-t border-indigo-500/20 px-4 py-4 space-y-3">
          <a href="#features" className="block text-slate-300 hover:text-indigo-400 transition py-2">Recursos</a>
          <a href="#channels" className="block text-slate-300 hover:text-indigo-400 transition py-2">Canais</a>
          <a href="#pricing" className="block text-slate-300 hover:text-indigo-400 transition py-2">Planos</a>
          <a href="#testimonials" className="block text-slate-300 hover:text-indigo-400 transition py-2">Depoimentos</a>
          <a href="#contact" className="block bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-center px-4 py-2 rounded-lg font-medium transition">
            Contato
          </a>
        </div>
      )}
    </header>
  )
}
