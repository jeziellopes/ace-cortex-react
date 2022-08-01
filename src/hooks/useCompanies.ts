import { useCallback, useEffect, useState } from 'react'

import { Company } from '../types'
import { loadCompanies, showCompany } from '../useCases'

export const useCompanies = () => {
  const [loading, setLoading] = useState<boolean>(false)
  const [selectedCompany, setSelectedCompany] = useState('')
  const [company, setCompany] = useState<Company | null>(null)
  const [companies, setCompanies] = useState<Company[]>([] as Company[])
  const [nextId, setNextId] = useState<number>(0)

  const fetchCompanies = useCallback(async () => {
    setLoading(true)
    const { data } = await loadCompanies({ limit: 8, cursor: nextId })

    if (data.companies) {
      setCompanies((prev) => [...prev, ...data.companies])
      setNextId(data.nextId)
      setLoading(false)
    }
  }, [nextId])

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
    nextId,
    company,
    fetchCompany,
    selectedCompany,
    fetchCompanies,
  }
}
