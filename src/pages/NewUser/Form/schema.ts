import { z } from 'zod'
import { isValidCPF } from '~/utils/isValidCPF'

export const schema = z.object({
  email: z.string().email('E-mail inválido.'),
  admissionDate: z.string().date('Data inválida.'),
  employeeName: z.string().min(1, 'Campo obrigatório.'),
  cpf: z.custom(
    (value) => {
      return isValidCPF(value)
    },
    { message: 'CPF inválido.' },
  ),
})

export type FormFields = z.infer<typeof schema>
