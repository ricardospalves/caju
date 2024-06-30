import type { ButtonProps } from '~/components/Button'
import { HTMLAttributes } from 'react'
import { Button } from '~/components/Button'

type OmitProps = 'type' | 'className'

export type ActionButtonProps = Omit<
  HTMLAttributes<HTMLButtonElement>,
  OmitProps
> &
  Pick<ButtonProps, 'theme'>

export const ActionButton = ({ ...props }: ActionButtonProps) => {
  return (
    <Button type="button" className="h-11 xl:h-auto" size="small" {...props} />
  )
}
