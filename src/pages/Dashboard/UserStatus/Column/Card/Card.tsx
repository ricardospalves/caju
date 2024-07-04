import {
  HiOutlineMail as EmailIcon,
  HiOutlineUser as UserIcon,
  HiOutlineCalendar as CalendarIcon,
} from 'react-icons/hi'
import { RegistrationCard } from '~/components/RegistrationCard'
import { deleteRegistrationById } from '~/services/deleteRegistrationById'
import { useUserStore } from '~/stores/useUserStore'
import { CardButton } from './CardButton'
import { useGlobalConfirmDialog } from '~/stores/useGlobalConfirmDialog'
import { NOTIFY } from './notify'
import { GLOBAL_STATUS } from '~/constants/globalStatus'

export type CardProps = {
  id: string
  name: string
  email: string
  admissionDate: string
  status: Status
}

export const Card = ({ id, admissionDate, email, name, status }: CardProps) => {
  const { deleteUserById } = useUserStore((state) => state)
  const { openDialog, setOnConfirm } = useGlobalConfirmDialog((state) => state)

  return (
    <RegistrationCard.Root key={id}>
      <RegistrationCard.List>
        <RegistrationCard.ListItem Icon={UserIcon}>
          <strong>{name}</strong>
        </RegistrationCard.ListItem>

        <RegistrationCard.ListItem Icon={EmailIcon}>
          <a href={`mailto:${email}`} className="text-cajuPrimary underline">
            {email}
          </a>
        </RegistrationCard.ListItem>

        <RegistrationCard.ListItem Icon={CalendarIcon}>
          {admissionDate}
        </RegistrationCard.ListItem>
      </RegistrationCard.List>

      <RegistrationCard.ActionsBar>
        {status === 'REVIEW' && (
          <>
            <CardButton status={GLOBAL_STATUS.accepted} userId={id} />
            <CardButton status={GLOBAL_STATUS.rejected} userId={id} />
          </>
        )}

        {status !== 'REVIEW' && (
          <CardButton status={GLOBAL_STATUS.pending} userId={id} />
        )}

        <RegistrationCard.DeleteButton
          onClick={() => {
            openDialog({
              title: 'Deletar usuário',
              message:
                'Tem certeza que deseja deletar o usuário? Esta ação é irreversível!',
            })

            setOnConfirm(async () => {
              const response = await deleteRegistrationById(id)
              const deletedUser = response.data

              deleteUserById(deletedUser.id)
              NOTIFY.userDeleted()
            })
          }}
        />
      </RegistrationCard.ActionsBar>
    </RegistrationCard.Root>
  )
}
