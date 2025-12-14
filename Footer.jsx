import React from 'react';
import { Tv, Mail, MessageCircle, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-2 rounded-lg">
                <Tv className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Vizzion MaxTV
              </span>
            </div>
            <p className="text-slate-400 text-sm">
              Serviço de streaming IPTV premium entregando entretenimento para lares em todo o mundo.
            </p>
          </div>

          <div>
            <span className="text-white font-semibold mb-4 block">Links Rápidos</span>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => document.getElementById('features').scrollIntoView({ behavior: 'smooth' })}
                  className="text-slate-400 hover:text-blue-400 transition-colors text-sm"
                >
                  Recursos
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('channels').scrollIntoView({ behavior: 'smooth' })}
                  className="text-slate-400 hover:text-blue-400 transition-colors text-sm"
                >
                  Canais
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('pricing').scrollIntoView({ behavior: 'smooth' })}
                  className="text-slate-400 hover:text-blue-400 transition-colors text-sm"
                >
                  Preços
                </button>
              </li>
            </ul>
          </div>

          <div>
            <span className="text-white font-semibold mb-4 block">Suporte</span>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => window.open('https://wa.me/5561998393570', '_blank')}
                  className="text-slate-400 hover:text-blue-400 transition-colors text-sm"
                >
                  FAQ
                </button>
              </li>
              <li>
                <button
                  onClick={() => window.open('https://wa.me/5561998393570', '_blank')}
                  className="text-slate-400 hover:text-blue-400 transition-colors text-sm"
                >
                  Fale Conosco
                </button>
              </li>
              <li>
                <button
                  onClick={() => window.open('https://wa.me/5561998393570', '_blank')}
                  className="text-slate-400 hover:text-blue-400 transition-colors text-sm"
                >
                  Central de Ajuda
                </button>
              </li>
            </ul>
          </div>

          <div>
            <span className="text-white font-semibold mb-4 block">Contato</span>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-slate-400 text-sm">
                <MessageCircle className="w-4 h-4 text-blue-400" />
                <a href="https://wa.me/5561998393570" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
                  +55 61 99839-3570
                </a>
              </li>
              <li className="flex items-center gap-2 text-slate-400 text-sm">
                <Mail className="w-4 h-4 text-blue-400" />
                <span>support@vizzionmaxtv.com</span>
              </li>
              <li className="flex items-start gap-2 text-slate-400 text-sm">
                <MapPin className="w-4 h-4 text-blue-400 mt-1" />
                <span>Disponível Mundialmente</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-sm text-center md:text-left">
              © 2025 Vizzion MaxTV. Todos os direitos reservados.
            </p>
            <div className="flex gap-6">
              <button
                onClick={() => window.open('https://wa.me/5561998393570', '_blank')}
                className="text-slate-400 hover:text-blue-400 transition-colors text-sm"
              >
                Política de Privacidade
              </button>
              <button
                onClick={() => window.open('https://wa.me/5561998393570', '_blank')}
                className="text-slate-400 hover:text-blue-400 transition-colors text-sm"
              >
                Termos de Serviço
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;