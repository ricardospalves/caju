import { z } from 'zod'
import { isValidCPF } from '~/utils/isValidCPF'
import { isValidProperNoun } from '~/utils/isValidProperNoun'

export const schema = z.object(
  {
    email: z.string().email('Informe um e-mail válido.'),
    admissionDate: z.string().date('Informe uma data válida.'),
    employeeName: z.string().refine((value) => isValidProperNoun(value), {
      message: 'Escreva seu nome completo.',
    }),
    cpf: z.string().refine((value) => isValidCPF(value), {
      message: 'Informe um CPF válido.',
    }),
  },
  {
    required_error: 'Campo obrigatório',
  },
)

export type FormFields = z.infer<typeof schema>
