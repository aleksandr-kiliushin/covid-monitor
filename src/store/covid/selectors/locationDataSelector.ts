import { ChartDataShape } from 'reaviz'

import { RootState } from '#store'

const locationDataSelector =
  ({
    countMode,
    countryId,
    measure,
  }: {
    countMode: 'cumulative' | 'daily'
    countryId: string | null
    measure: 'confirmed-cases' | 'deaths'
  }) =>
  (state: RootState): ChartDataShape[] | null => {
    const locationDataByDate = countryId
      ? state.covid.locations.countries[countryId].data
      : state.covid.locations.world?.data

    if (!locationDataByDate) return null

    let propertyToDisplay: 'newCases' | 'newDeaths' | 'totalCases' | 'totalDeaths'

    if (countMode === 'daily' && measure === 'confirmed-cases') {
      propertyToDisplay = 'newCases'
    } else if (countMode === 'daily' && measure === 'deaths') {
      propertyToDisplay = 'newDeaths'
    } else if (countMode === 'cumulative' && measure === 'confirmed-cases') {
      propertyToDisplay = 'totalCases'
    } else if (countMode === 'cumulative' && measure === 'deaths') {
      propertyToDisplay = 'totalDeaths'
    } else {
      return null
    }

    return locationDataByDate.map((dateInfo) => ({
      data: dateInfo[propertyToDisplay] ?? 0,
      key: new Date(dateInfo.date),
    }))
  }

export default locationDataSelector
