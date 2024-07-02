import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Button } from '~/components/Button'
import { CPFField } from '~/components/CPFField/CPFField'
import { TextField } from '~/components/TextField'
import { schema } from './schema'
import { z } from 'zod'
import { postRegistration } from '~/services/postRegistration'
import { User } from '~/entities/User'

type FormFields = z.infer<typeof schema>

export const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormFields>({
    resolver: zodResolver(schema),
  })
  const onSubmit = async ({
    admissionDate,
    email,
    employeeName,
    cpf,
  }: FormFields) => {
    cpf = (cpf as string).replace(/\D/g, '')

    const user = new User({
      admissionDate,
      email,
      employeeName,
      cpf,
      status: 'REVIEW',
    })

    await postRegistration(user)
  }

  return (
    <form className="grid gap-4" onSubmit={handleSubmit(onSubmit)}>
      <TextField
        label="Nome"
        {...register('employeeName')}
        errorMessage={errors.employeeName?.message}
      />

      <TextField
        label="E-mail"
        inputMode="email"
        {...register('email')}
        errorMessage={errors.email?.message}
      />

      <CPFField
        label="CPF"
        {...register('cpf')}
        errorMessage={errors.cpf?.message as string}
      />

      <TextField
        label="Data de admissão"
        type="date"
        {...register('admissionDate')}
        errorMessage={errors.admissionDate?.message}
      />

      <div className="lg:text-right">
        <Button type="submit" className="w-full lg:w-auto">
          Cadastrar
        </Button>
      </div>
    </form>
  )
}
