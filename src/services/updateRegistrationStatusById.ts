import { api } from '~/api'

export const updateRegistrationStatusById = (id: string, status: Status) => {
  return api.patch<User>(`/registrations/${id}`, {
    status,
  })
}
