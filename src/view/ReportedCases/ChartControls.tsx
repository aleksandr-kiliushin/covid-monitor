import FormControlLabel from '@mui/material/FormControlLabel'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import { FC, ReactElement } from 'react'
import { Controller, UseFormReturn } from 'react-hook-form'

import ControlForm from '#components/ControlForm'

import { FormFields } from './form-helpers'

type Props = {
  control: UseFormReturn<FormFields>['control']
}

const ChartControls: FC<Props> = ({ control }) => {
  return (
    <ControlForm>
      <div>
        <label>Measure</label>
        <Controller
          control={control}
          name="measure"
          render={({ field }): ReactElement => (
            <RadioGroup {...field}>
              <FormControlLabel
                control={<Radio />}
                label="Confirmed cases"
                value="confirmed-cases"
              />
              <FormControlLabel control={<Radio />} label="Deaths" value="deaths" />
            </RadioGroup>
          )}
        />
      </div>

      <div>
        <label>Count mode</label>
        <Controller
          render={({ field }): ReactElement => (
            <RadioGroup {...field}>
              <FormControlLabel control={<Radio />} label="Daily" value="daily" />
              <FormControlLabel control={<Radio />} label="Cumulative" value="cumulative" />
            </RadioGroup>
          )}
          control={control}
          name="countMode"
        />
      </div>
    </ControlForm>
  )
}

export default ChartControls
