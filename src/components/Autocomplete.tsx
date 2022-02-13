import MuiAutocomplete, { AutocompleteProps } from '@mui/material/Autocomplete'
import TextField from '@mui/material/TextField'
import styled from '@mui/material/styles/styled'
import { FC, ReactNode } from 'react'

import { Option } from '#types'

interface Props
  extends Omit<AutocompleteProps<Option, undefined, undefined, undefined>, 'renderInput'> {
  label: string
}

const Autocomplete: FC<Props> = ({ label, ...restProps }) => {
  return (
    <MuiAutocomplete
      loading
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      renderInput={(params): ReactNode => <TextField {...params} label={label} />}
      size="small"
      {...restProps}
    />
  )
}

const StyledAutocomplete = styled(Autocomplete)({
  borderRadius: '4px',
})

export default StyledAutocomplete
