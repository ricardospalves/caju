import { useEffect, useState } from 'react'
import { CPFField } from '~/components/CPFField/CPFField'
import { useUserStore } from '~/stores/useUserStore'

export const Search = () => {
  const [cpf, setCpf] = useState('')
  const { filterByCPF } = useUserStore((state) => state)

  useEffect(() => {
    const rawCpf = cpf.replace(/\D/g, '')

    filterByCPF(rawCpf)
  }, [cpf, filterByCPF])

  return (
    <form role="search" className="sm:shrink-0">
      <CPFField
        type="search"
        label="Pesquisar pelo CPF"
        value={cpf}
        onChange={(event) => setCpf(event.target.value)}
      />
    </form>
  )
}
