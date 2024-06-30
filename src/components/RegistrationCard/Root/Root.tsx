import { ReactNode } from 'react'

export type RootProps = {
  children: ReactNode
}

export const Root = ({ children }: RootProps) => {
  return (
    <article className="p-4 text-black bg-white shadow rounded-lg">
      {children}
    </article>
  )
}
