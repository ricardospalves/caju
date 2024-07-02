import { v4 as uuid } from 'uuid'

type UserConstructor = {
  admissionDate: string
  email: string
  employeeName: string
  cpf: string
  status: Status
}

export class User {
  readonly id: string
  admissionDate: string
  email: string
  employeeName: string
  cpf: string
  status: Status

  constructor({
    admissionDate,
    cpf,
    email,
    employeeName,
    status,
  }: UserConstructor) {
    this.id = uuid()
    this.admissionDate = admissionDate
    this.email = email
    this.employeeName = employeeName
    this.cpf = cpf
    this.status = status
  }
}
