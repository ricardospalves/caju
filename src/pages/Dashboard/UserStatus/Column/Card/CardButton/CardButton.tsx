import type { ActionButtonProps } from '~/components/RegistrationCard/types'
import { RegistrationCard } from '~/components/RegistrationCard'
import { useGlobalConfirmDialog } from '~/stores/useGlobalConfirmDialog'

export type CardButton = ActionButtonProps

export const CardButton = ({ onClick, ...props }: CardButton) => {
  const { openDialog } = useGlobalConfirmDialog((state) => state)

  return (
    <RegistrationCard.ActionButton
      {...props}
      onClick={(event) => {
        openDialog({
          title: 'Confirmar',
          message: 'Deseja confirmar a atualização?',
        })

        onClick?.(event)
      }}
    />
  )
}
