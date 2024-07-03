import { useFormContext } from 'react-hook-form'
import { CPFField } from '~/components/CPFField/CPFField'
import { TextField } from '~/components/TextField'
import { FormFields } from '../schema'

const TODAY = new Date().toISOString().split('T')[0]

export const Fields = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<FormFields>()

  return (
    <>
      <TextField
        label="Nome completo"
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
        max={TODAY}
        {...register('admissionDate')}
        errorMessage={errors.admissionDate?.message}
      />
    </>
  )
}
