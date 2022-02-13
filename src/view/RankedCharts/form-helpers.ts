export type FormFields = {
  displayedCountriesAmount: number
  measure: 'confirmed-cases' | 'deaths'
}

export const defaultValues: FormFields = {
  displayedCountriesAmount: 10,
  measure: 'confirmed-cases',
}
