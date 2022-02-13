import styled from '@mui/material/styles/styled'

import Autocomplete from '#components/Autocomplete'
import ColorModeSwitch from '#components/ColorModeSwitch'

export const StyledHeader = styled('header')(() => ({
  display: 'flex',
  justifyContent: 'center',
  columnGap: '12px',
}))

export const StyledAutocomplete = styled(Autocomplete)(({ theme }) => ({
  width: '336px',
  [theme.breakpoints.down('md')]: {
    flexGrow: '1',
  },
}))

export const StyledColorModeSwitch = styled(ColorModeSwitch)(({ theme }) => ({
  height: '40px',
  width: '40px',
  [theme.breakpoints.up('md')]: {
    display: 'none',
  },
}))
