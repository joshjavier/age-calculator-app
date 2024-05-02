export const calculateAge = ({ year, month, day }) => {
  const today = new Date()
  const birthDate = new Date(year, month - 1, day)
  const diff = today - birthDate

  // split into human-readable units
  const years = Math.floor(diff / (1000 * 3.155693e7))
  const months = Math.floor((diff % (1000 * 3.155693e7)) / (1000 * (3.155693e7 / 12)))
  const days = Math.floor(diff % (1000 * (3.155693e7 / 12)) / (1000 * 86400))

  return { years, months, days }
}
