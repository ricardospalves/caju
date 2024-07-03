import { MdClear as ClearIcon } from 'react-icons/md'

export type BoxHeaderProps = {
  title: string
  onClose?: () => void
}

export const BoxHeader = ({ title, onClose }: BoxHeaderProps) => {
  return (
    <div className="flex items-center border-b">
      <h2 className="grow font-bold p-2">{title}</h2>

      <button
        type="button"
        className="flex items-center justify-center shrink-0 size-10 p-1"
        aria-label="Fechar"
      >
        <ClearIcon className="block size-full" onClick={onClose} />
      </button>
    </div>
  )
}
