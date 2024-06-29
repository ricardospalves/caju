import { TextField } from '~/components/TextField'

export const Search = () => {
  return (
    <form role="search" className="sm:shrink-0">
      <TextField type="search" label="Pesquisar pelo CPF" />
    </form>
  )
}
