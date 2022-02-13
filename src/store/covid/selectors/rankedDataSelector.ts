import { ChartDataShape } from 'reaviz'

import { RootState } from '#store'
import { DateInfo } from '#types'

const rankedDataSelector =
  ({
    displayedCountriesAmount,
    measure,
  }: {
    displayedCountriesAmount: number
    measure: 'confirmed-cases' | 'deaths'
  }) =>
  (state: RootState): ChartDataShape[] => {
    const propertyToDisplayByMeasure: Record<typeof measure, keyof DateInfo> = {
      'confirmed-cases': 'totalCases',
      deaths: 'totalDeaths',
    }
    const propertyToDisplay = propertyToDisplayByMeasure[measure]

    const countries = state.covid.locations.countries

    let result = []
    for (const countryId in countries) {
      const resultItem: ChartDataShape = {
        data: ([...countries[countryId].data]
          .reverse()
          .find((dataItem) => dataItem[propertyToDisplay] !== undefined)?.[propertyToDisplay] ??
          0) as number,
        id: countryId,
        key: countries[countryId].location,
      }
      result.push(resultItem)
    }

    result = result
      .sort((prev, next) => (prev.data < next.data ? 1 : -1))
      .slice(0, displayedCountriesAmount)

    return result
  }

export default rankedDataSelector
