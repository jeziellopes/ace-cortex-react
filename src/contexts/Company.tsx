import React, { createContext, useContext } from 'react'

import { useSearch } from '../hooks'
import { useCompanies } from '../hooks/useCompanies'
import { Company } from '../types'

export type ContextType = {
  loading: boolean
  company: Company | null
  selectedCompany: string
  companies: Company[]
  search: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  fetchCompany: (companyId: string) => void
}

export const CompaniesContext = createContext<ContextType>({
  loading: true,
  company: null,
  selectedCompany: '',
  companies: [] as Company[],
  search: '',
  onChange: () => undefined,
  fetchCompany: () => undefined,
})

export type ReactProps = {
  children?: React.ReactNode | React.ReactNode[]
}

export const CompaniesProvider = ({ children }: ReactProps) => {
  const { search, onChange } = useSearch()
  const { loading, selectedCompany, company, fetchCompany, companies } =
    useCompanies()

  return (
    <CompaniesContext.Provider
      value={{
        loading,
        companies,
        search,
        onChange,
        company,
        fetchCompany,
        selectedCompany,
      }}
    >
      {children}
    </CompaniesContext.Provider>
  )
}

export const useCompaniesContext = () => useContext(CompaniesContext)
