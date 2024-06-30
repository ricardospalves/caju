import { clsx } from 'clsx'
import { ReactNode } from 'react'
import { IconBase } from 'react-icons'

export type ItemProps = {
  Icon: typeof IconBase
  children: ReactNode
  isHeading?: boolean
}

export const Item = ({ Icon, children, isHeading }: ItemProps) => {
  const Component = isHeading ? 'p' : 'h3'

  return (
    <Component
      className={clsx(['flex items-center gap-4', isHeading && 'font-bold'])}
    >
      <Icon className="block shrink-0" aria-hidden={true} />
      <span className="block">{children}</span>
    </Component>
  )
}
