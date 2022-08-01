import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import * as CC from '../../components/context'
import * as CS from '../../components/structure'
import { useCompaniesContext } from '../../contexts'
import { dynamicFormatCNPJ } from '../../utils/cnpj'
import * as S from './styles'

export const Company = () => {
  const navigate = useNavigate()
  const { companyId } = useParams()
  const { loading, selectedCompany, company, fetchCompany } =
    useCompaniesContext()

  useEffect(() => {
    if (companyId && selectedCompany !== companyId) {
      fetchCompany(companyId)
    }
  })

  return (
    <CC.Layout>
      <S.Container>
        {loading ? (
          <CS.Loading />
        ) : (
          !!company && (
            <S.Content width={900} height={500}>
              <CS.Button onClick={() => navigate('/')} />
              <S.Row>
                <S.Title>{company.name}</S.Title>
              </S.Row>
              <S.Row>
                <S.Column>
                  <S.Image src={company.photo} />
                  <S.Description>
                    Demanda: R${' '}
                    {Intl.NumberFormat('pt-BR').format(company.demand)}
                  </S.Description>
                  <S.Description>
                    CNPJ: {dynamicFormatCNPJ(company.taxId)}
                  </S.Description>
                  <S.Description>
                    Faturamento Anual: {company.annualIncome}
                  </S.Description>
                </S.Column>
                <S.Column>
                  <S.LongDescription>{company.about}</S.LongDescription>
                </S.Column>
              </S.Row>
            </S.Content>
          )
        )}
      </S.Container>
    </CC.Layout>
  )
}
