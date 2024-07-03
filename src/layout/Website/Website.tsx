import { ReactNode } from 'react'
import { Header } from '~/components/Header'
import { ToastContainer } from 'react-toastify'
import { GlobalConfirmDialog } from './GlobalConfirmDialog/GlobalConfirmDialog'

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

      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        pauseOnHover={false}
        closeOnClick={true}
        hideProgressBar={true}
        stacked={true}
      />

      <GlobalConfirmDialog />
    </>
  )
}
