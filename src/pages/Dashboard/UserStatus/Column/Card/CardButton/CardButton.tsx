import type { ActionButtonProps } from '~/components/RegistrationCard/types'
import type { OpenDialogArguments } from '~/stores/useGlobalConfirmDialog'
import { RegistrationCard } from '~/components/RegistrationCard'
import { useGlobalConfirmDialog } from '~/stores/useGlobalConfirmDialog'
import { updateRegistrationStatusById } from '~/services/updateRegistrationStatusById'
import { NOTIFY } from '../notify'
import { useUserStore } from '~/stores/useUserStore'

const CARD_BUTTON_PROPS: Record<
  Status,
  Pick<ActionButtonProps, 'theme' | 'children'>
> = {
  APPROVED: {
    theme: 'success',
    children: 'Aprovar',
  },
  REPROVED: {
    theme: 'danger',
    children: 'Reprovar',
  },
  REVIEW: {
    theme: 'warning',
    children: 'Revisar novamente',
  },
}

const OPEN_DIALOG_OPTIONS: Record<Status, OpenDialogArguments> = {
  APPROVED: {
    title: 'Aprovar',
    message: 'Deseja aprovar o usuário?',
  },
  REPROVED: {
    title: 'Reprovar',
    message: 'Deseja reprovar o usuário?',
  },
  REVIEW: {
    title: 'Revisar',
    message: 'Deseja revisar o status do usuário?',
  },
}

export type CardButton = {
  userId: string
  status: Status
}

export const CardButton = ({ status, userId }: CardButton) => {
  const { setUserStatusById } = useUserStore((state) => state)
  const { openDialog, setOnConfirm } = useGlobalConfirmDialog((state) => state)

  return (
    <RegistrationCard.ActionButton
      {...CARD_BUTTON_PROPS[status]}
      onClick={() => {
        openDialog(OPEN_DIALOG_OPTIONS[status])

        setOnConfirm(async () => {
          const response = await updateRegistrationStatusById(userId, status)
          const user = response.data

          setUserStatusById(userId, user.status)
          NOTIFY.userStatusUpdated()
        })
      }}
    />
  )
}
