import React from 'react'

function Button({ as: As = 'button', className = '', variant = 'primary', children, ...props }) {
	const base = 'inline-flex items-center gap-2 rounded-md px-4 py-2 font-medium focus:outline-none'
	const variants = {
		primary: 'bg-indigo-600 hover:bg-indigo-700 text-white',
		ghost: 'bg-transparent border border-slate-700 text-white',
	}
	return (
		<As className={`${base} ${variants[variant] || variants.primary} ${className}`} {...props}>
			{children}
		</As>
	)
}

export { Button }
