import { NewUserButton } from './NewUserButton'
import { Search } from './Search'

export const ActionBar = () => {
  return (
    <div className="max-w-5xl w-full mx-auto sm:flex sm:items-end sm:justify-between p-2 sm:p-4">
      <Search />
      <NewUserButton />
    </div>
  )
}
