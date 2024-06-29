import { ActionBar } from './ActionBar'
import { UserStatus } from './UserStatus'

export const DashboardPage = () => {
  return (
    <main className="lg:grow grid lg:grid-rows-[auto_minmax(0,1fr)] gap-16">
      <ActionBar />
      <UserStatus />
    </main>
  )
}
