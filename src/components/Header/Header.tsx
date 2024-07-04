import { classNames } from '~/utils/class-names'

export type HeaderProps = {
  className?: string
}

export const Header = ({ className }: HeaderProps) => {
  return (
    <header
      className={classNames([
        'h-16 flex items-center lg:sticky lg:top-0 px-6 bg-cajuPrimary bg-gradient-to-r from-transparent to-cajuSecondary text-white',
        className,
      ])}
    >
      <h1 className="font-bold text-2xl">Caju</h1>
    </header>
  )
}
