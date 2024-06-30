import { ReactNode } from 'react'

export type ActionsBarProps = {
  children?: ReactNode
}

export const ActionsBar = ({ children }: ActionsBarProps) => {
  return (
    <footer className="grid xl:flex xl:items-center gap-2 mt-4">
      {children}
    </footer>
  )
}
