import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { Router } from './Router'
import { BrowserRouter } from 'react-router-dom'
import { CyclesContextsProvider } from './contexts/CyclesContext'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CyclesContextsProvider>
          <Router />
        </CyclesContextsProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}
