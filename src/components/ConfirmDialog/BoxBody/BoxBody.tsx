import { ReactNode } from 'react'

export type BoxBodyProps = {
  children: ReactNode
}

export const BoxBody = ({ children }: BoxBodyProps) => {
  return <div className="p-4">{children}</div>
}
