import { FC, useCallback, useState } from 'react'

import ColorModeContext from './context'
import { ColorMode } from './types'

const getInitialColorMode = (): ColorMode => {
  const storedColorMode = localStorage.getItem('color-mode')

  if (storedColorMode === 'dark' || storedColorMode === 'light') {
    return storedColorMode
  }

  return 'light'
}

const ColorModeProvider: FC = ({ children }) => {
  const [colorMode, setColorMode] = useState<ColorMode>(getInitialColorMode())

  const toggleColorMode = useCallback(
    () =>
      setColorMode((prevMode) => {
        const newMode = prevMode === 'light' ? 'dark' : 'light'
        localStorage.setItem('color-mode', newMode)
        return newMode
      }),
    [],
  )

  return (
    <ColorModeContext.Provider value={{ colorMode, toggleColorMode }}>
      {children}
    </ColorModeContext.Provider>
  )
}

export default ColorModeProvider
