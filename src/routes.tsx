import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Company, Home } from './pages'

const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/company/:companyId" element={<Company />} />
    </Routes>
  </BrowserRouter>
)

export default AppRoutes
