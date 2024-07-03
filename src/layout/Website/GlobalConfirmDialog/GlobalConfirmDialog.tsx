import { useCallback, useEffect } from 'react'
import { ConfirmDialog } from '~/components/ConfirmDialog'
import { useGlobalConfirmDialog } from '~/stores/useGlobalConfirmDialog'

const KEYS_TO_CLOSE_DIALOG = ['Escape']

export const GlobalConfirmDialog = () => {
  const { open, message, title, closeDialog, onConfirm } =
    useGlobalConfirmDialog((state) => state)
  const dispatchClose = useCallback(() => {
    closeDialog()
  }, [closeDialog])

  useEffect(() => {
    const body = document.body

    // Remove o scroll do <body> quando o componente está visível.
    body.style.overflow = open ? 'hidden' : ''
  }, [open])

  useEffect(() => {
    const handleKeyboard = (event: KeyboardEvent) => {
      const keyPressed = event.key

      if (KEYS_TO_CLOSE_DIALOG.includes(keyPressed)) {
        dispatchClose()
      }
    }

    document.addEventListener('keydown', handleKeyboard)

    return () => {
      document.removeEventListener('keydown', handleKeyboard)
    }
  }, [dispatchClose])

  return (
    <>
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
