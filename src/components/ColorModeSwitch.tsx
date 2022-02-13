import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'
import IconButton from '@mui/material/IconButton'
import { useTheme } from '@mui/material/styles'
import styled from '@mui/material/styles/styled'
import { FC } from 'react'

import useColorMode from '#providers/ColorModeProvider/useColorMode'

const StyledIconButton = styled(IconButton)(({ theme }) => ({
  color: theme.palette.mode === 'dark' ? '#bbb' : '#333',
}))

type Props = {
  className?: string
}

const ColorModeSwitch: FC<Props> = ({ className }) => {
  const theme = useTheme()
  const { toggleColorMode } = useColorMode()

  return (
    <StyledIconButton css={className} onClick={toggleColorMode}>
      {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
    </StyledIconButton>
  )
}

export default ColorModeSwitch
