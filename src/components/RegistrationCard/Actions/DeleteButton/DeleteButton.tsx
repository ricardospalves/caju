import { HiOutlineTrash as DeleteIcon } from 'react-icons/hi'

export const DeleteButton = () => {
  return (
    <button
      type="button"
      className="block size-6 mx-auto xl:mr-0 transition-colors hover:text-red-600 focus-visible:text-red-600 focus:outline-none focus:ring focus:ring-cajuPrimary/25"
      title="Deletar"
    >
      <span className="sr-only">Deletar</span>

      <DeleteIcon
        className="block size-full stroke-current"
        aria-hidden={true}
      />
    </button>
  )
}
