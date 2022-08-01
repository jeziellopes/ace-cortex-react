import { AxiosResponse } from 'axios'

import client from '../services/api/client'
import { Company } from '../types'

type LoadCompaniesBody = {
  limit: number
  cursor: number
}

type CompaniesResponse = {
  companies: Company[]
  nextId: number
}

export const loadCompanies = (
  body: LoadCompaniesBody
): Promise<AxiosResponse<CompaniesResponse>> => {
  return client.post('/api/companies', body)
}
