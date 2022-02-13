import cyan from '@mui/material/colors/cyan'
import MuiThemeProvider from '@mui/material/styles/ThemeProvider'
import createTheme from '@mui/material/styles/createTheme'
import { FC, useMemo } from 'react'

import useColorMode from '#providers/ColorModeProvider/useColorMode'

const ThemeProvider: FC = ({ children }) => {
  const { colorMode } = useColorMode()

  const theme = useMemo(
    () =>
      createTheme({
        breakpoints: {
          values: {
            xs: 0,
            sm: 420,
            md: 600,
            lg: 900,
            xl: 1400,
          },
        },
        palette: {
          mode: colorMode,
          primary: {
            main: cyan[600],
          },
        },
      }),
    [colorMode],
  )

  return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
}

export default ThemeProvider
