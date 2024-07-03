import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, FormProvider } from 'react-hook-form'
import { Button } from '~/components/Button'
import { schema, FormFields } from './schema'
import { postRegistration } from '~/services/postRegistration'
import { User } from '~/entities/User'
import { toast } from 'react-toastify'
import { Fields } from './Fields'
import { useNavigate } from 'react-router-dom'
import { ROUTES } from '~/constants/routes'
import { removeNonDigits } from '~/utils/removeNonDigits'

export const Form = () => {
  const navigate = useNavigate()
  const notify = () => toast.success('Usuário cadastrado com sucesso!')
  const form = useForm<FormFields>({
    resolver: zodResolver(schema),
  })
  const { handleSubmit } = form

  return (
    <FormProvider {...form}>
      <form
        className="grid gap-4"
        onSubmit={handleSubmit(
          async ({ admissionDate, email, employeeName, cpf }: FormFields) => {
            cpf = removeNonDigits(cpf)

            const user = new User({
              admissionDate,
              email,
              employeeName,
              cpf,
              status: 'REVIEW',
            })

            await postRegistration(user)

            navigate(ROUTES.dashboard)

            notify()
          },
        )}
      >
        <Fields />

        <div className="lg:max-w-36 w-full lg:ml-auto">
          <Button type="submit" className="w-full">
            Cadastrar
          </Button>
        </div>
      </form>
    </FormProvider>
  )
}
