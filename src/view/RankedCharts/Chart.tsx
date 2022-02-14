import useTheme from '@mui/material/styles/useTheme'
import { FC } from 'react'
import { UseFormReturn } from 'react-hook-form'
import {
  BarChart,
  BarSeries,
  LinearYAxis,
  LinearYAxisTickLabel,
  LinearYAxisTickSeries,
} from 'reaviz'

import { EmptyDataMessage, ErrorMessage, LoadingProgressMessage } from '#components/status-messages'
import { LoadingStatus } from '#constants/shared'
import { loadingStatusSelector, rankedDataSelector } from '#store/covid/selectors'
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
  const loadingStatus = useAppSelector(loadingStatusSelector)

  const { palette } = useTheme()

  if (loadingStatus === LoadingStatus.LOADING) return <LoadingProgressMessage />
  if (loadingStatus === LoadingStatus.ERROR) return <ErrorMessage />
  if (chartData === null) return <EmptyDataMessage />

  return (
    <BarChart
      data={chartData}
      height={400}
      margins={[0, 0, 0, 20]}
      series={
        <BarSeries
          colorScheme={({ id }): string => (id === location?.value ? 'red' : palette.primary.main)}
        />
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
