import { HiOutlineArrowLeft as ArrowLeftIcon } from 'react-icons/hi'
import { Form } from './Form'
import { Link } from 'react-router-dom'

const LINK_TEXT_BACK = 'Voltar'

export const NewUserPage = () => {
  return (
    <main className="grow lg:flex p-2">
      <div className="max-w-lg w-full lg:p-8 m-auto lg:shadow-md bg-white">
        <p className="mb-8">
          <Link
            to="/"
            className="flex items-center justify-center size-10 p-1 border-2 border-current rounded-full transition-colors text-primary hover:text-primaryDark focus-visible:text-primaryDark"
            title={LINK_TEXT_BACK}
          >
            <span>{LINK_TEXT_BACK}</span>

            <ArrowLeftIcon
              className="block size-full fill-current"
              aria-hidden={true}
            />
          </Link>
        </p>

        <Form />
      </div>
    </main>
  )
}
