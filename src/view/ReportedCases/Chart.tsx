import useTheme from '@mui/material/styles/useTheme'
import { FC } from 'react'
import { UseFormReturn } from 'react-hook-form'
import {
  AreaChart,
  AreaSeries,
  LinearYAxis,
  LinearYAxisTickLabel,
  LinearYAxisTickSeries,
} from 'reaviz'

import { locationDataSelector } from '#store/covid/selectors'
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
    locationDataSelector({
      countMode: watch('countMode'),
      countryId: location ? location.value : null,
      measure: watch('measure'),
    }),
  )

  const theme = useTheme()
  const primaryColor = theme.palette.primary.main

  if (chartData === null) return <p>Data not found.</p>

  return (
    <AreaChart
      data={chartData}
      height={400}
      margins={[0, 0, 0, 20]}
      series={<AreaSeries colorScheme={primaryColor} />}
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
