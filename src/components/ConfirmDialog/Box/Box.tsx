import { ReactNode } from 'react'

export type BoxProps = {
  children?: ReactNode
  open?: boolean
}

export const Box = ({ children, open }: BoxProps) => {
  if (!open) {
    return null
  }

  return (
    <div
      className="max-w-xl w-full fixed left-1/2 top-1/2 z-50 -translate-x-1/2 -translate-y-1/2 bg-white shadow-md rounded"
      role="dialog"
      tabIndex={-1}
    >
      {children}
    </div>
  )
}
