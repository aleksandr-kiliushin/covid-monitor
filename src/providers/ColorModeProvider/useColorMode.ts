import { useContext } from 'react'

import ColorModeContext from './context'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const useColorMode = () => useContext(ColorModeContext)

export default useColorMode
