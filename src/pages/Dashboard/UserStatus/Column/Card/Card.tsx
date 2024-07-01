import {
  HiOutlineMail as EmailIcon,
  HiOutlineUser as UserIcon,
  HiOutlineCalendar as CalendarIcon,
} from 'react-icons/hi'
import { RegistrationCard } from '~/components/RegistrationCard'
import { deleteRegistrationById } from '~/services/deleteRegistrationById'
import { useUserStore } from '~/stores/useUserStore'

export type CardProps = {
  id: string
  name: string
  email: string
  admissionDate: string
  status: Status
}

export const Card = ({ id, admissionDate, email, name, status }: CardProps) => {
  const { deleteUserById } = useUserStore((state) => state)

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
        {status !== 'REPROVED' && (
          <RegistrationCard.ActionButton
            theme="danger"
            onClick={() => {
              console.log('REPROVED', id)
            }}
          >
            Reprovar
          </RegistrationCard.ActionButton>
        )}

        {status !== 'APPROVED' && (
          <RegistrationCard.ActionButton
            theme="success"
            onClick={() => {
              console.log('APPROVED', id)
            }}
          >
            Aprovar
          </RegistrationCard.ActionButton>
        )}

        {status !== 'REVIEW' && (
          <RegistrationCard.ActionButton
            theme="warning"
            onClick={() => {
              console.log('REVIEW', id)
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
