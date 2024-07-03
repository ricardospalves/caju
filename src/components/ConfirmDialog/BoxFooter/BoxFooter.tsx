import { Button } from '~/components/Button'

export type BoxFooterProps = {
  onClose: () => void
  onConfirm: () => void
}

export const BoxFooter = ({ onClose, onConfirm }: BoxFooterProps) => {
  return (
    <div className="flex items-center justify-end gap-2 p-2 border-t">
      <Button type="button" theme="cancel" onClick={onClose}>
        Cancelar
      </Button>

      <Button
        type="button"
        theme="primary"
        onClick={() => {
          onConfirm()
          onClose()
        }}
      >
        Confirmar
      </Button>
    </div>
  )
}
