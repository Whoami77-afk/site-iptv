import React from 'react'

export const ToastProvider = ({ children }) => <div>{children}</div>

export const ToastViewport = ({ className, ...props }) => (
  <div {...props} className={className} />
)

export const Toast = ({ children, className, ...props }) => (
  <div {...props} className={className}>
    {children}
  </div>
)

export const ToastTitle = ({ children, className }) => (
  <div className={className}>{children}</div>
)

export const ToastDescription = ({ children, className }) => (
  <div className={className}>{children}</div>
)

export const ToastAction = ({ children, className, ...props }) => (
  <button {...props} className={className}>
    {children}
  </button>
)

export const ToastClose = ({ className, ...props }) => (
  <button aria-label="Close" {...props} className={className}>
    ✕
  </button>
)
