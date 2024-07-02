import { ReactNode } from 'react'
import { Header } from '~/components/Header'
import { ToastContainer } from 'react-toastify'

export type WebsiteLayoutProps = {
  children: ReactNode
}

export const WebsiteLayout = ({ children }: WebsiteLayoutProps) => {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <Header className="shrink-0" />
        <div className="grow flex flex-col">{children}</div>
      </div>

      <ToastContainer position="bottom-center" />
    </>
  )
}
