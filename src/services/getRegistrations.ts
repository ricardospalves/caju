import { api } from '~/api'

export const getRegistrations = () => {
  return api.get<RegistrationUsers>('/registrations')
}
