import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    color: #333;
    font-family: 'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased;
  }
`
