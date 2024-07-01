import { create } from 'zustand'

type useUserStoreState = {
  users: RegistrationUsers
  filteredUsers: RegistrationUsers | null
  setUsers: (users: RegistrationUsers) => void
  filterByCPF: (cpf?: string) => void
  deleteUserById: (id: string) => void
  setUserStatusById: (id: string, status: Status) => void
}

export const useUserStore = create<useUserStoreState>((set, get) => {
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
    deleteUserById: (id) => {
      const usersCopy = [...get().users]
      const userIndex = usersCopy.findIndex((user) => user.id === id)

      usersCopy.splice(userIndex, 1)

      return set({
        users: usersCopy,
      })
    },
    setUserStatusById: (id, status) => {
      const usersCopy = [...get().users]
      const user = usersCopy.find((user) => user.id === id) as User

      user.status = status

      return set({
        users: usersCopy,
      })
    },
  }
})
