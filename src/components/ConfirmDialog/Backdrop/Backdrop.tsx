export type BackdropProps = {
  open?: boolean
  onClose?: () => void
}

export const Backdrop = ({ open, onClose }: BackdropProps) => {
  if (!open) {
    return null
  }

  return <div className="fixed inset-0 bg-black/90 z-40" onClick={onClose} />
}
