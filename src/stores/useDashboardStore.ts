import { create } from 'zustand'

type useDashboardStoreState = {
  users: RegistrationUsers
  filteredUsers: RegistrationUsers | null
  setUsers: (users: RegistrationUsers) => void
  filterByCPF: (cpf?: string) => void
}

export const useDashboardStore = create<useDashboardStoreState>((set, get) => {
  return {
    users: [],
    setUsers: (users) => {
      return set({
        users,
      })
    },
    filteredUsers: null,
    filterByCPF: (cpf) => {
      if (!cpf) {
        return set({
          filteredUsers: null,
        })
      }

      const usersCopy = [...get().users]
      const filteredUsers = usersCopy.filter((user) => {
        return user.cpf.startsWith(cpf)
      })

      return set({
        filteredUsers,
      })
    },
  }
})
