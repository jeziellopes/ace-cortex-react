import { AxiosResponse } from 'axios'

import client from '../services/api/client'
import { Company } from '../types'

export const loadCompanies = (): Promise<AxiosResponse<Company[]>> => {
  return client.get('/api/companies')
}
