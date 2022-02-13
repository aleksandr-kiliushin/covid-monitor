import { ApiDateInfo, ApiLocationData, DateInfo, LocationData } from '#types'

const preprocessStatisticsValue = (value: number | undefined): number => {
  if (value === undefined) return 0
  if (value < 0) return 0
  return value
}

const prepareLocationData = (countryInfo: ApiLocationData): LocationData => ({
  data: countryInfo.data.map(
    ({ date, new_cases, new_deaths, total_cases, total_deaths }: ApiDateInfo): DateInfo => ({
      date,
      newCases: preprocessStatisticsValue(new_cases),
      newDeaths: preprocessStatisticsValue(new_deaths),
      totalCases: preprocessStatisticsValue(total_cases),
      totalDeaths: preprocessStatisticsValue(total_deaths),
    }),
  ),
  location: countryInfo.location,
})

export default prepareLocationData
