import { api } from '~/api'

export type PostRegistrationArguments = {
  id: string
  admissionDate: string
  email: string
  employeeName: string
  status: string
  cpf: string
}

export const postRegistration = ({
  admissionDate,
  cpf,
  email,
  employeeName,
  id,
  status,
}: PostRegistrationArguments) => {
  return api.post<RegistrationUsers>('/registrations', {
    admissionDate,
    cpf,
    email,
    employeeName,
    id,
    status,
  })
}
