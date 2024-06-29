import { Button } from '~/components/Button'
import { TextField } from '~/components/TextField'

export const Form = () => {
  return (
    <form action="" className="grid gap-4">
      <TextField label="Nome" />
      <TextField label="E-mail" inputMode="email" />
      <TextField label="CPF" inputMode="decimal" />
      <TextField label="Data de admissão" type="date" />

      <div className="lg:text-right">
        <Button type="submit" className="w-full lg:w-auto">
          Cadastrar
        </Button>
      </div>
    </form>
  )
}
