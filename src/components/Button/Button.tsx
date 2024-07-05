import type { VariantProps } from 'tailwind-variants'

import { ButtonHTMLAttributes } from 'react'
import { tv } from 'tailwind-variants'
import { ButtonSlot, type AsChildProps } from './ButtonSlot.tsx'
import { classNames } from '~/utils/classNames'

const buttonVariants = tv({
  base: 'inline-flex items-center justify-center rounded-full cursor-pointer text-center font-semibold transition-colors focus:outline-none focus:ring focus:ring-cajuPrimary/25',
  variants: {
    theme: {
      primary:
        'text-primaryContrast bg-primary hover:bg-primaryDark focus-visible:bg-primaryDark',
      danger: 'text-black bg-red-400 hover:bg-red-600 focus-visible:bg-red-600',
      success:
        'text-black bg-green-400 hover:bg-green-600 focus-visible:bg-green-600',
      warning:
        'text-black bg-yellow-400 hover:bg-yellow-600 focus-visible:bg-yellow-600',
      cancel:
        'text-white bg-gray-700 hover:bg-gray-900 focus-visible:bg-gray-900',
    },
    size: {
      medium: 'py-2 px-8 text-base',
      small: 'py-1 px-4 text-xs',
    },
  },
  defaultVariants: {
    theme: 'primary',
    size: 'medium',
  },
})

export type ButtonProps = AsChildProps<
  ButtonHTMLAttributes<HTMLButtonElement>
> &
  VariantProps<typeof buttonVariants> & {
    className?: string
  }

export const Button = ({
  asChild,
  theme,
  size,
  className,
  children,
  ...props
}: ButtonProps) => {
  const Component = asChild ? ButtonSlot : 'button'

  return (
    <Component
      className={classNames([buttonVariants({ theme, size }), className])}
      {...props}
    >
      {children}
    </Component>
  )
}
