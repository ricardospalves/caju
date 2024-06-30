import { ReactNode } from 'react'

export type ListProps = {
  children: ReactNode
}

export const List = ({ children }: ListProps) => {
  return <ul className="space-y-2">{children}</ul>
}
