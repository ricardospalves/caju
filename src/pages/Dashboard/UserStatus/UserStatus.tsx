import { useDashboardStore } from '~/stores/useDashboardStore'
import { Column } from './Column'
import { filterUsersByStatus } from '~/utils/filterUsersByStatus'

export const UserStatus = () => {
  const { users } = useDashboardStore((state) => state)

  return (
    <div className="flex lg:grid lg:grid-cols-3 gap-2 lg:gap-4 p-1 sm:p-4 overflow-auto">
      <Column status="review" users={filterUsersByStatus(users, 'REVIEW')} />
      <Column
        status="approved"
        users={filterUsersByStatus(users, 'APPROVED')}
      />
      <Column
        status="reproved"
        users={filterUsersByStatus(users, 'REPROVED')}
      />
    </div>
  )
}
