import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import './index.css'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: 'rgb(34, 48, 90)',
    },
    secondary: {
      main: 'rgb(49, 122, 189)',
    },
  },
})

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
)
