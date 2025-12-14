import React from 'react'
import { Facebook, Instagram, Twitter, Mail, Phone } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-t from-slate-950 to-slate-900 border-t border-slate-800 mt-20">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center font-bold text-white">
                VM
              </div>
              <div>
                <h3 className="font-bold text-white">Vizzion MaxTV</h3>
                <p className="text-xs text-indigo-400">IPTV Premium</p>
              </div>
            </div>
            <p className="text-slate-400 text-sm">
              A melhor experiência em streaming com milhares de canais, filmes e séries.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-white mb-4">Links Rápidos</h4>
            <ul className="space-y-3">
              <li><a href="#features" className="text-slate-400 hover:text-indigo-400 transition text-sm">Recursos</a></li>
              <li><a href="#pricing" className="text-slate-400 hover:text-indigo-400 transition text-sm">Planos</a></li>
              <li><a href="#testimonials" className="text-slate-400 hover:text-indigo-400 transition text-sm">Depoimentos</a></li>
              <li><a href="#contact" className="text-slate-400 hover:text-indigo-400 transition text-sm">Contato</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-bold text-white mb-4">Suporte</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-slate-400 hover:text-indigo-400 transition text-sm">FAQ</a></li>
              <li><a href="#" className="text-slate-400 hover:text-indigo-400 transition text-sm">Termos de Serviço</a></li>
              <li><a href="#" className="text-slate-400 hover:text-indigo-400 transition text-sm">Privacidade</a></li>
              <li><a href="#" className="text-slate-400 hover:text-indigo-400 transition text-sm">Contato</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-white mb-4">Entre em Contato</h4>
            <div className="space-y-4">
              <a href="https://wa.me/5561998393570" className="flex items-center gap-3 text-slate-400 hover:text-indigo-400 transition">
                <Phone size={18} />
                <span className="text-sm">+55 61 99839-3570</span>
              </a>
              <a href="mailto:contato@vizzionmaxtv.com" className="flex items-center gap-3 text-slate-400 hover:text-indigo-400 transition">
                <Mail size={18} />
                <span className="text-sm">contato@vizzionmaxtv.com</span>
              </a>
            </div>
          </div>
        </div>

        {/* Social & Copyright */}
        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-slate-500 text-sm">© {new Date().getFullYear()} Vizzion MaxTV. Todos os direitos reservados.</p>

            <div className="flex gap-6">
              <a href="#" className="text-slate-400 hover:text-indigo-400 transition">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-slate-400 hover:text-indigo-400 transition">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-slate-400 hover:text-indigo-400 transition">
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
	)
}
