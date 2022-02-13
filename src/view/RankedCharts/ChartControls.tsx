import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'
import MenuItem from '@mui/material/MenuItem'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import Select from '@mui/material/Select'
import { FC, ReactElement, useMemo } from 'react'
import { Controller, UseFormReturn } from 'react-hook-form'

import Form from '#components/Form'
import FormControlLabel from '#components/FormControlLabel'
import { countriesSelector } from '#store/covid/selectors'
import { useAppSelector } from '#utils/hooks'

import { FormFields } from './form-helpers'

type Props = {
  control: UseFormReturn<FormFields>['control']
}

const ChartControls: FC<Props> = ({ control }) => {
  const countries = useAppSelector(countriesSelector)

  const displayedCountriesAmountOptions = useMemo((): number[] => {
    if (countries.length === 0) return []

    // Get 1-based country indices.
    const [, ...countryIndices] = [...Array.from(Array(countries.length).keys()), countries.length]

    return countryIndices.filter(
      (value) => value % 5 === 0 || [1, 2, 3, 4, 6, 7, 8, 9, countries.length].includes(value),
    )
  }, [countries])

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

      <FormControl sx={{ rowGap: '8px' }}>
        <FormLabel>Displayed countries amount</FormLabel>
        <Controller
          control={control}
          name="displayedCountriesAmount"
          render={({ field }): ReactElement => (
            <Select {...field} size="small" sx={{ width: '200px' }}>
              {displayedCountriesAmountOptions.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </Select>
          )}
        />
      </FormControl>
    </Form>
  )
}

export default ChartControls
