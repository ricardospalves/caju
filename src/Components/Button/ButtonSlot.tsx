import {
  ReactNode,
  HTMLAttributes,
  isValidElement,
  cloneElement,
  Children,
} from 'react'

export type AsChildProps<DefaultElementProps> =
  | ({ asChild?: false } & DefaultElementProps)
  | { asChild: true; children: ReactNode }

export const ButtonSlot = ({
  children,
  ...props
}: HTMLAttributes<HTMLElement> & {
  children?: ReactNode
}) => {
  if (isValidElement(children)) {
    return cloneElement(children, {
      ...props,
    })
  }

  if (Children.count(children) > 1) {
    Children.only(null)
  }

  return null
}
