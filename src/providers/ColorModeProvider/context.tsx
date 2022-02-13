import { createContext } from 'react'

import { ColorMode } from './types'

type ColorModeContextType = {
  colorMode: ColorMode
  toggleColorMode(): void
}

const ColorModeContext = createContext<ColorModeContextType>({
  toggleColorMode: () => {},
  colorMode: 'light',
})

export default ColorModeContext
