import type { HTMLAttributes, ReactNode } from 'react'

export type CardProps = HTMLAttributes<HTMLDivElement> & {
  title?: string
  children: ReactNode
  /** Custom image content; replaces the default placeholder when set. */
  image?: ReactNode
  /** Show a token-styled image placeholder above the card body. */
  imagePlaceholder?: boolean
}

function CardImagePlaceholder() {
  return (
    <div
      className="flex aspect-video w-full items-center justify-center bg-bg-surface-alt text-text-secondary"
      aria-hidden="true"
    >
      <svg
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <circle cx="8.5" cy="8.5" r="1.5" fill="currentColor" stroke="none" />
        <path d="m21 15-5-5L5 21" />
      </svg>
    </div>
  )
}

export function Card({
  title,
  children,
  image,
  imagePlaceholder = false,
  className = '',
  ...props
}: CardProps) {
  const showImage = image != null || imagePlaceholder

  return (
    <div
      className={[
        'overflow-hidden rounded-card border border-border-default bg-bg-surface',
        !showImage && 'p-stack-md',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      {...props}
    >
      {showImage ? (
        <div className="border-b border-border-default p-stack-md">
          <div className="overflow-hidden rounded-button">
            {image ?? <CardImagePlaceholder />}
          </div>
        </div>
      ) : null}
      <div className={showImage ? 'p-stack-md' : undefined}>
        {title ? (
          <h3 className="mb-stack-sm text-card-title font-semibold text-text-primary">{title}</h3>
        ) : null}
        {children}
      </div>
    </div>
  )
}
