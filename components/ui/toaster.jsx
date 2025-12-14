import React from 'react'
import { ToastProvider, ToastViewport, Toast, ToastTitle, ToastDescription, ToastClose } from './toast'
import { useToast } from './use-toast'

export function Toaster() {
	const { toasts } = useToast()

	return (
		<ToastProvider>
			{toasts.map(({ id, title, description, dismiss }) => (
				<Toast key={id} className="fixed bottom-4 right-4 bg-slate-800 p-4 rounded-md shadow-lg">
					<div className="grid gap-1">
						{title && <ToastTitle className="font-semibold">{title}</ToastTitle>}
						{description && <ToastDescription className="text-sm text-slate-300">{description}</ToastDescription>}
					</div>
					<div className="mt-2">
						<ToastClose onClick={() => dismiss()} className="ml-2 text-sm text-slate-400">Fechar</ToastClose>
					</div>
				</Toast>
			))}
			<ToastViewport />
		</ToastProvider>
	)
}
