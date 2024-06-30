import { DeleteButton } from './DeleteButton'
import { ActionButton } from './ActionButton'

export const Actions = () => {
  return (
    <div className="grid xl:flex xl:items-center gap-2 mt-4">
      <ActionButton theme="danger">Reprovar</ActionButton>
      <ActionButton theme="success">Aprovar</ActionButton>
      <ActionButton theme="warning">Revisar novamente</ActionButton>
      <DeleteButton />
    </div>
  )
}
