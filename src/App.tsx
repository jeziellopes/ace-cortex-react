import { ThemeProvider } from './providers/theme'
import AppRoutes from './routes'
import GlobalStyles from './styles/global'

const App = () => {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider>
        <AppRoutes />
      </ThemeProvider>
    </>
  )
}

export default App
