import { FC } from 'react'
import { UseFormReturn } from 'react-hook-form'
import { AreaChart } from 'reaviz'

import { locationDataSelector } from '#store/covid/selectors'
import { Location } from '#types'
import { useAppSelector } from '#utils/hooks'

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

  if (chartData === null) return <p>Data not found.</p>

  return <AreaChart data={chartData} height={300} />
}

export default Chart
