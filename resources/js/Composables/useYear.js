export function useYear(numberOfYears) {
  const currentYear = new Date().getFullYear()
  const previousYears = []

  for (let i = 0; i < numberOfYears; i++) {
    previousYears.push(currentYear - i)
  }

  // Reverse the array to have the older year first
  const olderYearsFirst = previousYears.reverse()
  const years = olderYearsFirst.map((number) => number.toString())

  return {
    previousYears: years,
  }
}
