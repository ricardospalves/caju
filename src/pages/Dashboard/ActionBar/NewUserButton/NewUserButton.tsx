import { Link } from 'react-router-dom'
import { Button } from '~/components/Button'
import { ROUTES } from '~/constants/routes'

export const NewUserButton = () => {
  return (
    <Button asChild className="w-full sm:w-auto mt-8 sm:mt-0 sm:shrink-0">
      <Link to={ROUTES.newUser}>Nova Admissão</Link>
    </Button>
  )
}
