import { ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export const classNames = (...classnames: ClassValue[]) => {
  return twMerge(clsx(classnames))
}
