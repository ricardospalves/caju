import { ReactNode } from 'react'
import { IconBase } from 'react-icons'

export type ListItemProps = {
  Icon: typeof IconBase
  children: ReactNode
}

export const ListItem = ({ Icon, children }: ListItemProps) => {
  return (
    <li className="flex items-center gap-2">
      <Icon className="block shrink-0" aria-hidden={true} />
      <span className="block">{children}</span>
    </li>
  )
}
