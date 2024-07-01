import { useEffect } from 'react'
import { ActionBar } from './ActionBar'
import { UserStatus } from './UserStatus'
import { getRegistrations } from '~/services/getRegistrations'
import { useUserStore } from '~/stores/useUserStore'

export const DashboardPage = () => {
  const { setUsers } = useUserStore((state) => state)

  useEffect(() => {
    ;(async () => {
      const response = await getRegistrations()
      const users = response.data

      setUsers(users)
    })()
  }, [setUsers])

  return (
    <main className="lg:grow grid lg:grid-rows-[auto_minmax(0,1fr)] gap-16">
      <ActionBar />
      <UserStatus />
    </main>
  )
}
