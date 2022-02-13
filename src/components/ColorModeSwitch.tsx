import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'
import IconButton from '@mui/material/IconButton'
import { useTheme } from '@mui/material/styles'
import styled from '@mui/material/styles/styled'
import { FC } from 'react'

import useColorMode from '#providers/ColorModeProvider/useColorMode'

const StyledIconButton = styled(IconButton)(({ theme }) => ({
  position: 'absolute',
  right: '0',
  top: '0',
  height: '60px',
  width: '60px',
  color: theme.palette.mode === 'dark' ? '#bbb' : '#333',
  '& .MuiSvgIcon-root': {
    height: '80%',
    width: '80%',
  },
}))

const ColorModeSwitch: FC = () => {
  const theme = useTheme()
  const { toggleColorMode } = useColorMode()

  return (
    <StyledIconButton color="inherit" onClick={toggleColorMode}>
      {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
    </StyledIconButton>
  )
}

export default ColorModeSwitch
