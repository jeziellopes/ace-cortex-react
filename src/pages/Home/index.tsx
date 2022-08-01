import React from 'react'
import { useNavigate } from 'react-router-dom'

import { Layout } from '../../components/context'
import * as CS from '../../components/structure'
import { useCompaniesContext } from '../../contexts/Company'

export const Home = () => {
  const navigate = useNavigate()
  const { loading, search, companies } = useCompaniesContext()

  return (
    <Layout>
      {loading ? (
        <CS.Loading />
      ) : (
        <CS.Grid>
          {companies
            .filter((company) => company.name.includes(search))
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
      )}
    </Layout>
  )
}
