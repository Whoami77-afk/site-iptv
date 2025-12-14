import React from 'react'

export default function Footer() {
	return (
		<footer className="bg-slate-800 text-slate-300 py-8 mt-12">
			<div className="container mx-auto px-4 text-center">
				<p className="text-sm">© {new Date().getFullYear()} Vizzion MaxTV — Todos os direitos reservados.</p>
				<p className="text-xs mt-2">Suporte via WhatsApp: <strong>+55 61 99839-3570</strong></p>
			</div>
		</footer>
	)
}
