export const getFormattedDate = (date) => {
  let newDate = new Date(date)
  return newDate.toDateString()
}