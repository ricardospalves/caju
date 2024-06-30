export const filterUsersByStatus = (
  users: RegistrationUsers,
  filterByStatus: Status,
) => {
  return users.filter(({ status }) => status === filterByStatus)
}
