import React from 'react'

import * as S from './styles'

type Props = {
  children: React.ReactNode
}

export const Navbar = ({ children }: Props) => {
  return <S.Container>{children}</S.Container>
}
