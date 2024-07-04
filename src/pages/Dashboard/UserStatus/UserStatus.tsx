import { useUserStore } from '~/stores/useUserStore'
import { Column } from './Column'
import { filterUsersByStatus } from '~/utils/filterUsersByStatus'
import { GLOBAL_STATUS } from '~/constants/globalStatus'

export const UserStatus = () => {
  const { users, filteredUsers } = useUserStore((state) => state)
  const userColumns = filteredUsers || users

  return (
    <div className="grid lg:grid-cols-3 gap-0 lg:gap-4 lg:p-4">
      <Column
        title="Pronto para revisar"
        status={GLOBAL_STATUS.pending}
        users={filterUsersByStatus(userColumns, 'REVIEW')}
      />

      <Column
        title="Aprovado"
        status={GLOBAL_STATUS.accepted}
        users={filterUsersByStatus(userColumns, 'APPROVED')}
      />

      <Column
        title="Reprovado"
        status={GLOBAL_STATUS.rejected}
        users={filterUsersByStatus(userColumns, 'REPROVED')}
      />
    </div>
  )
}
