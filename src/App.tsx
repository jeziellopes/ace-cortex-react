import { CompaniesProvider } from './contexts/Company'
import { ThemeProvider } from './providers/theme'
import AppRoutes from './routes'
import GlobalStyles from './styles/global'

const App = () => {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider>
        <CompaniesProvider>
          <AppRoutes />
        </CompaniesProvider>
      </ThemeProvider>
    </>
  )
}

export default App
