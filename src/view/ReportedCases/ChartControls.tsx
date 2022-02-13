import FormControl from '@mui/material/FormControl'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormLabel from '@mui/material/FormLabel'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import { FC, ReactElement } from 'react'
import { Controller, UseFormReturn } from 'react-hook-form'

import Form from '#components/Form'

import { FormFields } from './form-helpers'

type Props = {
  control: UseFormReturn<FormFields>['control']
}

const ChartControls: FC<Props> = ({ control }) => {
  return (
    <Form>
      <FormControl>
        <FormLabel>Measure</FormLabel>
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
      </FormControl>

      <FormControl>
        <FormLabel>Count mode</FormLabel>
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
      </FormControl>
    </Form>
  )
}

export default ChartControls
