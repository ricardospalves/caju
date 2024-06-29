import { ReactNode } from 'react'
import { VariantProps, tv } from 'tailwind-variants'

const columnVariants = tv({
  base: 'w-full lg:w-auto max-w-[calc(100%-1rem)] lg:max-w-none shrink-0 p-4 rounded-2xl border lg:border-0',
  variants: {
    status: {
      review: 'text-review bg-review/10 border-review ',
      approved: 'text-approved bg-approved/10 border-approved',
      reproved: 'text-reproved bg-reproved/10 border-reproved',
    },
  },
})

type ColumnVariants = Required<VariantProps<typeof columnVariants>>

const HEADINGS: Record<ColumnVariants['status'], string> = {
  approved: 'Aprovado',
  reproved: 'Reprovado',
  review: 'Pronto para revisar',
}

export type ColumnProps = ColumnVariants & {
  children: ReactNode
}

export const Column = ({ children, status }: ColumnProps) => {
  return (
    <section className={columnVariants({ status })}>
      <h2 className="mb-4 font-bold">{HEADINGS[status]}</h2>
      <div className="grid gap-4">{children}</div>
    </section>
  )
}
