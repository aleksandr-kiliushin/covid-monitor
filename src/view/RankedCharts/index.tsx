import { FC } from 'react'
import { useForm } from 'react-hook-form'

import AnalyticsBoard from '#components/AnalyticsBoard'
import { Location } from '#types'

import Chart from './Chart'
import ChartControls from './ChartControls'
import { defaultValues } from './form-helpers'

type Props = {
  location: Location | null
}

const RankedCharts: FC<Props> = ({ location }) => {
  const { control, watch } = useForm({ defaultValues })

  return (
    <AnalyticsBoard>
      <Chart watch={watch} location={location} />
      <ChartControls control={control} />
    </AnalyticsBoard>
  )
}

export default RankedCharts
