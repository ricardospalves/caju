type GlobalStatusKeys = 'accepted' | 'rejected' | 'pending'

export const GLOBAL_STATUS: Record<GlobalStatusKeys, Status> = {
  accepted: 'APPROVED',
  pending: 'REVIEW',
  rejected: 'REPROVED',
}
