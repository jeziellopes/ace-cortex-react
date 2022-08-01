import React from 'react'
import { useNavigate } from 'react-router-dom'

import { Layout } from '../../components/context'
import * as CS from '../../components/structure'
import { useCompaniesContext } from '../../contexts/Company'
import { useInfiniteScroll } from '../../hooks'
import * as S from './styles'

export const Home = () => {
  const navigate = useNavigate()
  const { loading, search, companies, fetchCompanies } = useCompaniesContext()
  const { loader } = useInfiniteScroll({ callback: fetchCompanies, loading })

  return (
    <Layout withSearch>
      <CS.Grid>
        {companies
          .filter(
            (company) =>
              company.name.includes(search) || company.about.includes(search)
          )
          .map((company, key) => (
            <CS.Card
              key={key}
              title={company.name}
              description={company.about}
              imageUrl={company.photo}
              onClick={() => navigate(`/company/${company.id}`)}
            />
          ))}
      </CS.Grid>
      {loading && <CS.Loading />}
      <S.Loader ref={loader} />
    </Layout>
  )
}
