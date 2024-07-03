import {
  HiOutlineMail as EmailIcon,
  HiOutlineUser as UserIcon,
  HiOutlineCalendar as CalendarIcon,
} from 'react-icons/hi'
import { RegistrationCard } from '~/components/RegistrationCard'
import { deleteRegistrationById } from '~/services/deleteRegistrationById'
import { updateRegistrationStatusById } from '~/services/updateRegistrationStatusById'
import { useUserStore } from '~/stores/useUserStore'
import { CardButton } from './CardButton'
import { useGlobalConfirmDialog } from '~/stores/useGlobalConfirmDialog'
import { NOTIFY } from './notify'

export type CardProps = {
  id: string
  name: string
  email: string
  admissionDate: string
  status: Status
}

export const Card = ({ id, admissionDate, email, name, status }: CardProps) => {
  const { deleteUserById, setUserStatusById } = useUserStore((state) => state)
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
            <CardButton
              theme="success"
              onClick={() => {
                setOnConfirm(async () => {
                  const response = await updateRegistrationStatusById(
                    id,
                    'APPROVED',
                  )
                  const user = response.data

                  setUserStatusById(id, user.status)
                  NOTIFY.userStatusUpdated()
                })
              }}
            >
              Aprovar
            </CardButton>

            <CardButton
              theme="danger"
              onClick={() => {
                setOnConfirm(async () => {
                  const response = await updateRegistrationStatusById(
                    id,
                    'REPROVED',
                  )
                  const user = response.data

                  setUserStatusById(id, user.status)
                  NOTIFY.userStatusUpdated()
                })
              }}
            >
              Reprovar
            </CardButton>
          </>
        )}

        {status !== 'REVIEW' && (
          <CardButton
            theme="warning"
            onClick={() => {
              setOnConfirm(async () => {
                const response = await updateRegistrationStatusById(
                  id,
                  'REVIEW',
                )
                const user = response.data

                setUserStatusById(id, user.status)
                NOTIFY.userStatusUpdated()
              })
            }}
          >
            Revisar novamente
          </CardButton>
        )}

        <RegistrationCard.DeleteButton
          onClick={() => {
            openDialog({
              title: 'Deletar usuário',
              message: 'Deseja deletar o usuário? Esta ação é irreversível!',
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
