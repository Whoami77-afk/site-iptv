import React from 'react'

const PHONE = '5561998393570' // atualizado conforme solicitado

export default function WhatsAppButton() {
  const message = encodeURIComponent('Olá, quero assinar o Vizzion MaxTV. Quais são os planos?')
  return (
    <a
      id="contact"
      href={`https://wa.me/${PHONE}?text=${message}`}
      target="_blank"
      rel="noreferrer"
      className="fixed right-4 bottom-4 bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-full shadow-lg flex items-center gap-3"
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12.4A8.4 8.4 0 1112.6 3 8.4 8.4 0 0121 12.4z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M22 22l-4.35-1.1A9 9 0 1112 3v0" />
      </svg>
      <span className="hidden sm:inline">Fale no WhatsApp</span>
      <span className="sm:hidden">WhatsApp</span>
    </a>
  )
}

