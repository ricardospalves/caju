import { create } from 'zustand'

export type OpenDialogArguments = {
  title: string
  message: string
}

type UseGlobalConfirmDialogState = {
  open: boolean
  title: string
  message: string
  openDialog: ({ message, title }: OpenDialogArguments) => void
  closeDialog: () => void
  onConfirm: () => void
  setOnConfirm: (callback: () => void) => void
}

const DEFAULT_VALUES: Pick<
  UseGlobalConfirmDialogState,
  'message' | 'open' | 'title' | 'onConfirm'
> = {
  message: '',
  open: false,
  title: '',
  onConfirm: () => {},
}

export const useGlobalConfirmDialog = create<UseGlobalConfirmDialogState>(
  (set) => {
    return {
      ...DEFAULT_VALUES,
      confirm: false,
      openDialog: ({ message, title }) => {
        return set({
          open: true,
          message,
          title,
        })
      },
      closeDialog: () => {
        return set(DEFAULT_VALUES)
      },
      setOnConfirm: (callback) => {
        return set({
          onConfirm: callback,
        })
      },
    }
  },
)
