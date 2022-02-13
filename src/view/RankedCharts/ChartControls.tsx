import FormControl from '@mui/material/FormControl'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormLabel from '@mui/material/FormLabel'
import MenuItem from '@mui/material/MenuItem'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import Select from '@mui/material/Select'
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
        <FormLabel>Displayed countries amount</FormLabel>
        <Controller
          control={control}
          name="displayedCountriesAmount"
          render={({ field }): ReactElement => (
            <Select {...field}>
              <MenuItem value={1}>1</MenuItem>
              <MenuItem value={3}>3</MenuItem>
              <MenuItem value={5}>5</MenuItem>
              <MenuItem value={10}>10</MenuItem>
              <MenuItem value={20}>20</MenuItem>
              <MenuItem value={30}>30</MenuItem>
              <MenuItem value={40}>40</MenuItem>
            </Select>
          )}
        />
      </FormControl>
    </Form>
  )
}

export default ChartControls
