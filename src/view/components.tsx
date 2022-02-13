import Tab from '@mui/material/Tab'
import Tabs from '@mui/material/Tabs'
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
  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
}))

export const StyledTabs = styled(Tabs)({
  '& .MuiTabs-flexContainer': {
    justifyContent: 'center',
  },
})

export const StyledTab = styled(Tab)(({ theme }) => ({
  minWidth: '168px',
  [theme.breakpoints.down('md')]: {
    flexGrow: '1',
    minWidth: 'revert',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '12px',
  },
}))
