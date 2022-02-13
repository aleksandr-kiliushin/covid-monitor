import MuiThemeProvider from '@mui/material/styles/ThemeProvider'
import createTheme from '@mui/material/styles/createTheme'
import { FC, useMemo } from 'react'

import useColorMode from '#providers/ColorModeProvider/useColorMode'

const ThemeProvider: FC = ({ children }) => {
  const { colorMode } = useColorMode()

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: colorMode,
        },
      }),
    [colorMode],
  )

  return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
}

export default ThemeProvider
