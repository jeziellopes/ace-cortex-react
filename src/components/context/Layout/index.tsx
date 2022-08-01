import React from 'react'
import { useNavigate } from 'react-router-dom'

import * as CS from '../../../components/structure'
import { useCompaniesContext } from '../../../contexts'
import * as S from './styles'

type Props = {
  children: React.ReactNode
}

export const Layout = ({ children }: Props) => {
  const navigate = useNavigate()
  const { search, onChange } = useCompaniesContext()

  return (
    <S.Container>
      <CS.Navbar>
        <CS.Logo onClick={() => navigate('/')} />
        <CS.Search value={search} onChange={onChange} />
        <CS.User />
      </CS.Navbar>
      <S.Content>{children}</S.Content>
    </S.Container>
  )
}
