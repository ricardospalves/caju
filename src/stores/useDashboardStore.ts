import { create } from 'zustand'

type useDashboardStoreState = {
  users: RegistrationUsers
  setUsers: (users: RegistrationUsers) => void
}

export const useDashboardStore = create<useDashboardStoreState>((set) => {
  return {
    users: [],
    setUsers: (users) => {
      return set({
        users,
      })
    },
  }
})
