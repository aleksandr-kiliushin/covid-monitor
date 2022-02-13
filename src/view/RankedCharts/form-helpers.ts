export type FormFields = {
  displayedCountriesAmount: number
  measure: 'confirmed-cases' | 'deaths'
}

export const defaultValues: FormFields = {
  displayedCountriesAmount: 5,
  measure: 'confirmed-cases',
}
