import { css } from '@emotion/react'

export const globalStyles = css`
  html,
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell,
      Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    font-size: 10px;
  }

  main {
    height: 100vh;
    width: 100vw;
    padding: 40px 60px;
  }

  * {
    box-sizing: border-box;
  }
`

export default globalStyles
