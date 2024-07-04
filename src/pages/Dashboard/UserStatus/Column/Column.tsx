import type { VariantProps } from 'tailwind-variants'
import { tv } from 'tailwind-variants'
import { Card } from './Card'
import { GLOBAL_STATUS } from '~/constants/globalStatus'
import { useState } from 'react'
import { classNames } from '~/utils/class-names'
import { MdExpandMore as ChevronDownIcon } from 'react-icons/md'

type VariantsStatus = Record<Status, string>

const columnVariants = tv({
  base: 'lg:p-4 lg:rounded-2xl border lg:border-0',
  variants: {
    status: {
      [GLOBAL_STATUS.pending]:
        'text-review bg-review lg:bg-review/10 border-review ',
      [GLOBAL_STATUS.accepted]:
        'text-approved bg-approved lg:bg-approved/10 border-approved',
      [GLOBAL_STATUS.rejected]:
        'text-reproved bg-reproved lg:bg-reproved/10 border-reproved',
    } as VariantsStatus,
  },
})

const headingVariants = tv({
  base: 'flex items-center justify-between w-full h-12 lg:h-auto px-2 lg:px-0 text-left',
  variants: {
    status: {
      [GLOBAL_STATUS.pending]:
        'text-white bg-review lg:text-review lg:bg-transparent',
      [GLOBAL_STATUS.accepted]:
        'text-white bg-approved lg:text-approved lg:bg-transparent',
      [GLOBAL_STATUS.rejected]:
        'text-white bg-reproved lg:text-reproved lg:bg-transparent',
    } as VariantsStatus,
  },
})

type ColumnVariants = Required<VariantProps<typeof columnVariants>>

export type ColumnProps = ColumnVariants & {
  users: RegistrationUsers
  title: string
  open?: boolean
}

export const Column = ({ title, status, users, open = true }: ColumnProps) => {
  const [isOpen, setIsOpen] = useState(open)

  return (
    <section
      className={classNames([columnVariants({ status }), isOpen && 'my-4'])}
    >
      <h2 className="lg:mb-4 sticky top-0 lg:static font-bold">
        <button
          type="button"
          className={classNames([
            'lg:pointer-events-none lg:cursor-pointer',
            headingVariants({ status }),
          ])}
          onClick={() => setIsOpen((previous) => !previous)}
        >
          {title}

          <ChevronDownIcon
            className={classNames([
              'block size-6 lg:hidden transition-all',
              isOpen && 'rotate-180',
            ])}
          />
        </button>
      </h2>

      <div className={classNames(['lg:grid gap-4 p-2', !isOpen && 'hidden'])}>
        {users.map(({ admissionDate, email, employeeName, id, status }) => {
          return (
            <Card
              key={id}
              admissionDate={admissionDate}
              email={email}
              id={id}
              name={employeeName}
              status={status}
            />
          )
        })}
      </div>
    </section>
  )
}
