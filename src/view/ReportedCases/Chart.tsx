import { Typography } from '@mui/material'
import CircularProgress from '@mui/material/CircularProgress'
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

import { LoadingStatus } from '#constants/shared'
import { loadingStatusSelector, locationDataSelector } from '#store/covid/selectors'
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
  const loadingStatus = useAppSelector(loadingStatusSelector)

  const theme = useTheme()

  const primaryColor = theme.palette.primary.main

  if (loadingStatus === LoadingStatus.LOADING) {
    return <CircularProgress sx={{ margin: 'auto' }} />
  }

  if (loadingStatus === LoadingStatus.ERROR) {
    return (
      <Typography sx={{ margin: 'auto', color: theme.palette.error.main }}>
        Could not load data.
      </Typography>
    )
  }

  if (chartData === null) {
    return (
      <Typography sx={{ margin: 'auto', color: theme.palette.error.main }}>
        Loaded empty data.
      </Typography>
    )
  }

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
