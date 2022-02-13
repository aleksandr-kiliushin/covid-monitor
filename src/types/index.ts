export type ApiDateInfo = {
  date: string
  excess_mortality?: number
  excess_mortality_cumulative?: number
  excess_mortality_cumulative_absolute?: number
  excess_mortality_cumulative_per_million?: number
  hosp_patients?: number
  hosp_patients_per_million?: number
  icu_patients?: number
  icu_patients_per_million?: number
  new_cases?: number
  new_cases_per_million?: number
  new_cases_smoothed?: number
  new_cases_smoothed_per_million?: number
  new_deaths?: number
  new_deaths_per_million?: number
  new_deaths_smoothed?: number
  new_deaths_smoothed_per_million?: number
  new_people_vaccinated_smoothed?: number
  new_people_vaccinated_smoothed_per_hundred?: number
  new_tests?: number
  new_tests_per_thousand?: number
  new_tests_smoothed?: number
  new_tests_smoothed_per_thousand?: number
  new_vaccinations?: number
  new_vaccinations_smoothed?: number
  new_vaccinations_smoothed_per_million?: number
  people_fully_vaccinated?: number
  people_fully_vaccinated_per_hundred?: number
  people_vaccinated?: number
  people_vaccinated_per_hundred?: number
  positive_rate?: number
  reproduction_rate?: number
  stringency_index?: number
  tests_per_case?: number
  tests_units?: string
  total_boosters?: number
  total_boosters_per_hundred?: number
  total_cases?: number
  total_cases_per_million?: number
  total_deaths?: number
  total_deaths_per_million?: number
  total_tests?: number
  total_tests_per_thousand?: number
  total_vaccinations?: number
  total_vaccinations_per_hundred?: number
  weekly_hosp_admissions?: number
  weekly_hosp_admissions_per_million?: number
  weekly_icu_admissions?: number
  weekly_icu_admissions_per_million?: number
}

export type ApiLocationData = {
  aged_65_older?: number
  aged_70_older?: number
  cardiovasc_death_rate?: number
  continent?: string
  data: ApiDateInfo[]
  diabetes_prevalence?: number
  extreme_poverty?: number
  female_smokers?: number
  gdp_per_capita?: number
  handwashing_facilities?: number
  hospital_beds_per_thousand?: number
  human_development_index?: number
  life_expectancy?: number
  location: string
  male_smokers?: number
  median_age?: number
  population?: number
  population_density?: number
}

export type DateInfo = {
  date: ApiDateInfo['date']
  newCases: number
  newDeaths: number
  totalCases: number
  totalDeaths: number
}

// Rename with LocationData
export type LocationData = {
  data: DateInfo[]
  location: ApiLocationData['location']
}

export type Option = {
  label: string
  value: string
}

export type Location = {
  label: ApiLocationData['location']
  value: string // "AFG", "ALG", etc.
}
