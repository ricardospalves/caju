import {
  HiOutlineMail as EmailIcon,
  HiOutlineUser as UserIcon,
  HiOutlineCalendar as CalendarIcon,
} from 'react-icons/hi'
import { toast } from 'react-toastify'
import { RegistrationCard } from '~/components/RegistrationCard'
import { deleteRegistrationById } from '~/services/deleteRegistrationById'
import { updateRegistrationStatusById } from '~/services/updateRegistrationStatusById'
import { useUserStore } from '~/stores/useUserStore'

export type CardProps = {
  id: string
  name: string
  email: string
  admissionDate: string
  status: Status
}

export const Card = ({ id, admissionDate, email, name, status }: CardProps) => {
  const { deleteUserById, setUserStatusById } = useUserStore((state) => state)

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
            <RegistrationCard.ActionButton
              theme="success"
              onClick={async () => {
                const response = await updateRegistrationStatusById(
                  id,
                  'APPROVED',
                )
                const user = response.data

                setUserStatusById(id, user.status)
                toast.success(
                  <>
                    Usuário <strong>{user.employeeName}</strong> movido para o
                    board{' '}
                    <strong className="text-approved uppercase">
                      Aprovado
                    </strong>
                    .
                  </>,
                )
              }}
            >
              Aprovar
            </RegistrationCard.ActionButton>

            <RegistrationCard.ActionButton
              theme="danger"
              onClick={async () => {
                const response = await updateRegistrationStatusById(
                  id,
                  'REPROVED',
                )
                const user = response.data

                setUserStatusById(id, user.status)
                toast.success(
                  <>
                    Usuário <strong>{user.employeeName}</strong> movido para o
                    board{' '}
                    <strong className="text-reproved uppercase">
                      Reprovado
                    </strong>
                    .
                  </>,
                )
              }}
            >
              Reprovar
            </RegistrationCard.ActionButton>
          </>
        )}

        {status !== 'REVIEW' && (
          <RegistrationCard.ActionButton
            theme="warning"
            onClick={async () => {
              const response = await updateRegistrationStatusById(id, 'REVIEW')
              const user = response.data

              setUserStatusById(id, user.status)

              toast.success(
                <>
                  Usuário <strong>{user.employeeName}</strong> movido para o
                  board{' '}
                  <strong className="text-review uppercase">Revisão</strong>.
                </>,
              )
            }}
          >
            Revisar novamente
          </RegistrationCard.ActionButton>
        )}

        <RegistrationCard.DeleteButton
          onClick={async () => {
            const response = await deleteRegistrationById(id)
            const deletedUser = response.data

            deleteUserById(deletedUser.id)
          }}
        />
      </RegistrationCard.ActionsBar>
    </RegistrationCard.Root>
  )
}
