import { Global } from '@emotion/react'
import { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import ColorModeProvider from '#providers/ColorModeProvider'
import ThemeProvider from '#providers/ThemeProvider'
import store from '#store'
import globalStyles from '#styles/global'
import App from '#view'

ReactDOM.render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <ColorModeProvider>
          <ThemeProvider>
            <Global styles={globalStyles} />
            <App />
          </ThemeProvider>
        </ColorModeProvider>
      </Provider>
    </BrowserRouter>
  </StrictMode>,
  document.querySelector('#root'),
)
