import FormControlLabel from '@mui/material/FormControlLabel'
import MenuItem from '@mui/material/MenuItem'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import Select from '@mui/material/Select'
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
        <label>Displayed countries amount</label>
        <Controller
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
          control={control}
          name="displayedCountriesAmount"
        />
      </div>
    </ControlForm>
  )
}

export default ChartControls
