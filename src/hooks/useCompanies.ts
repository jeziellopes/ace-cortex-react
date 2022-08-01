import { useEffect, useState } from 'react'

import { Company } from '../types'
import { loadCompanies, showCompany } from '../useCases'

export const useCompanies = () => {
  const [loading, setLoading] = useState<boolean>(true)
  const [selectedCompany, setSelectedCompany] = useState('')
  const [company, setCompany] = useState<Company | null>(null)
  const [companies, setCompanies] = useState<Company[]>([] as Company[])

  const fetchCompanies = async () => {
    setLoading(true)
    const companies = await loadCompanies()

    if (companies.data) {
      setCompanies(companies.data)
      setLoading(false)
    }
  }

  const fetchCompany = async (companyId: string) => {
    setLoading(true)
    const company = await showCompany(companyId)

    if (company.data) {
      setSelectedCompany(companyId)
      setCompany(company.data)
      setLoading(false)
    }
  }

  useEffect(() => {
    const timer = setTimeout(() => fetchCompanies(), 100)

    return () => clearTimeout(timer)
  }, [])

  return {
    loading,
    companies,
    company,
    fetchCompany,
    selectedCompany,
  }
}
