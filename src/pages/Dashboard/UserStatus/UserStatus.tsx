import { Column } from './Column'

export const UserStatus = () => {
  return (
    <div className="flex lg:grid lg:grid-cols-3 gap-2 lg:gap-4 p-1 sm:p-4 overflow-auto">
      <Column status="review">null</Column>
      <Column status="approved">null</Column>
      <Column status="reproved">null</Column>
    </div>
  )
}
