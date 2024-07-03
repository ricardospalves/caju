import { toast } from 'react-toastify'

export const NOTIFY = {
  userStatusUpdated: () => {
    toast.success('Status do usuário atualizado.')
  },
  userDeleted: () => {
    toast.success('Usuário deletado.')
  },
} as const
