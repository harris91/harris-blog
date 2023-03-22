export function formatDate(date: any, local: any) {
  const d = new Date(date)
  const options: any = { year: 'numeric', month: 'short', day: 'numeric' }
  const res = d.toLocaleDateString(local, options)
  return res
}

export function formatDateObject(date: any) {
  let d = new Date(date)
  return {day: d.getDate(), month: d.toLocaleDateString('en-US', { month:'short'}), year: d.getFullYear()}
}
