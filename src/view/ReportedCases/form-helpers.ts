export type FormFields = {
  countMode: 'cumulative' | 'daily'
  measure: 'confirmed-cases' | 'deaths'
}

export const defaultValues: FormFields = {
  countMode: 'daily',
  measure: 'confirmed-cases',
}
