import { ReactNode } from 'react'
import { Header } from '~/components/Header'
import { ToastContainer } from 'react-toastify'
import { ConfirmDialog } from '~/components/ConfirmDialog'
import { useGlobalConfirmDialog } from '~/stores/useGlobalConfirmDialog'

export type WebsiteLayoutProps = {
  children: ReactNode
}

export const WebsiteLayout = ({ children }: WebsiteLayoutProps) => {
  const { open, message, title, closeDialog, onConfirm } =
    useGlobalConfirmDialog((state) => state)

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

      <ConfirmDialog.Backdrop open={open} onClose={closeDialog} />

      <ConfirmDialog.Box open={open}>
        <ConfirmDialog.BoxHeader title={title} onClose={closeDialog} />

        <ConfirmDialog.BoxBody>
          <p>{message}</p>
        </ConfirmDialog.BoxBody>

        <ConfirmDialog.BoxFooter onClose={closeDialog} onConfirm={onConfirm} />
      </ConfirmDialog.Box>
    </>
  )
}
