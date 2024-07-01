import { useUserStore } from '~/stores/useUserStore'
import { Column } from './Column'
import { filterUsersByStatus } from '~/utils/filterUsersByStatus'

export const UserStatus = () => {
  const { users, filteredUsers } = useUserStore((state) => state)
  const userColumns = filteredUsers || users

  return (
    <div className="flex lg:grid lg:grid-cols-3 gap-2 lg:gap-4 p-1 sm:p-4 overflow-auto">
      <Column
        status="review"
        users={filterUsersByStatus(userColumns, 'REVIEW')}
      />
      <Column
        status="approved"
        users={filterUsersByStatus(userColumns, 'APPROVED')}
      />
      <Column
        status="reproved"
        users={filterUsersByStatus(userColumns, 'REPROVED')}
      />
    </div>
  )
}
