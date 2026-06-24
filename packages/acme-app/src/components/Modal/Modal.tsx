import { useEffect, useRef, type ReactNode, type MouseEvent } from 'react'

export type ModalProps = {
  open: boolean
  onClose: () => void
  title?: string
  children: ReactNode
  /** Optional footer content rendered below the body. */
  footer?: ReactNode
}

export function Modal({ open, onClose, title, children, footer }: ModalProps) {
  const overlayRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  /* Focus trap + escape handling */
  useEffect(() => {
    if (!open) return

    const previouslyFocused = document.activeElement as HTMLElement | null

    /* Move focus into the modal on open */
    requestAnimationFrame(() => {
      contentRef.current?.focus()
    })

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        onClose()
        return
      }

      /* Simple focus trap: tab cycles between focusable elements inside */
      if (event.key === 'Tab' && contentRef.current) {
        const focusable = contentRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
        )
        if (focusable.length === 0) return

        const first = focusable[0]
        const last = focusable[focusable.length - 1]

        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault()
          last.focus()
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault()
          first.focus()
        }
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    /* Prevent body scroll while modal is open */
    const originalOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = originalOverflow
      previouslyFocused?.focus()
    }
  }, [open, onClose])

  /* Click outside to close */
  function handleOverlayClick(event: MouseEvent) {
    if (event.target === overlayRef.current) {
      onClose()
    }
  }

  if (!open) return null

  return (
    <div
      ref={overlayRef}
      onClick={handleOverlayClick}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-stack-md"
      role="dialog"
      aria-modal="true"
      aria-label={title}
    >
      <div
        ref={contentRef}
        tabIndex={-1}
        className="flex w-full max-w-md flex-col rounded-card border border-border-default bg-bg-surface shadow-lg outline-none"
      >
        {/* Header */}
        {title ? (
          <div className="flex items-center justify-between border-b border-border-default px-stack-md py-stack-md">
            <h2 className="text-card-title font-semibold text-text-primary">{title}</h2>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close modal"
              className="flex size-8 items-center justify-center rounded-button text-text-secondary transition-colors hover:bg-bg-surface-alt focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-action-primary"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </button>
          </div>
        ) : null}

        {/* Body */}
        <div className="px-stack-md py-stack-md text-body text-text-primary">
          {children}
        </div>

        {/* Footer */}
        {footer ? (
          <div className="flex items-center justify-end gap-inline-sm border-t border-border-default px-stack-md py-stack-md">
            {footer}
          </div>
        ) : null}
      </div>
    </div>
  )
}
