import { api } from '~/api'

export const deleteRegistrationById = (id: string) => {
  return api.delete<User>(`/registrations/${id}`)
}
