import { FC } from 'react'
import { UseFormReturn } from 'react-hook-form'
import {
  BarChart,
  BarSeries,
  LinearYAxis,
  LinearYAxisTickLabel,
  LinearYAxisTickSeries,
} from 'reaviz'

import { rankedDataSelector } from '#store/covid/selectors'
import { Location } from '#types'
import { useAppSelector } from '#utils/hooks'
import shortenNumber from '#utils/shortenNumber'

import { FormFields } from './form-helpers'

type Props = {
  watch: UseFormReturn<FormFields>['watch']
  location: Location | null
}

const Chart: FC<Props> = ({ location, watch }) => {
  const chartData = useAppSelector(
    rankedDataSelector({
      displayedCountriesAmount: watch('displayedCountriesAmount'),
      measure: watch('measure'),
    }),
  )

  if (chartData === null) return <p>Data not found.</p>

  return (
    <BarChart
      data={chartData}
      height={400}
      margins={[0, 0, 0, 20]}
      series={
        <BarSeries colorScheme={({ id }): string => (id === location?.value ? 'red' : 'blue')} />
      }
      yAxis={
        <LinearYAxis
          tickSeries={
            <LinearYAxisTickSeries label={<LinearYAxisTickLabel format={shortenNumber} />} />
          }
        />
      }
    />
  )
}

export default Chart
