import client from '../services/api/client'

export const showCompany = async (companyId: string) => {
  return client.get(`/api/companies/${companyId}`)
}
