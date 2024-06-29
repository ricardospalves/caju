import { CPFField } from '~/components/CPFField/CPFField'

export const Search = () => {
  return (
    <form role="search" className="sm:shrink-0">
      <CPFField type="search" label="Pesquisar pelo CPF" />
    </form>
  )
}
