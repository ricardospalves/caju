import {
  HiOutlineMail as EmailIcon,
  HiOutlineUser as UserIcon,
  HiOutlineCalendar as CalendarIcon,
} from 'react-icons/hi'
import { Item } from './Item'
import { Actions } from './Actions'

export type RegistrationCardProps = {
  name: string
  email: string
  admissionDate: string
}

export const RegistrationCard = ({
  admissionDate,
  email,
  name,
}: RegistrationCardProps) => {
  return (
    <article className="p-4 text-black bg-white shadow rounded-lg">
      <div className="space-y-2">
        <Item Icon={UserIcon} isHeading>
          {name}
        </Item>

        <Item Icon={EmailIcon}>{email}</Item>

        <Item Icon={CalendarIcon}>{admissionDate}</Item>
      </div>

      <Actions />
    </article>
  )
}
