import styled from '@mui/material/styles/styled'

import ColorModeSwitch from '#components/ColorModeSwitch'

export const StyledColorModeSwitch = styled(ColorModeSwitch)(({ theme }) => ({
  position: 'absolute',
  right: '0',
  top: '0',
  height: '60px',
  width: '60px',
  '& .MuiSvgIcon-root': {
    height: '80%',
    width: '80%',
  },
  [theme.breakpoints.down('sm')]: {
    display: 'none',
  },
}))
