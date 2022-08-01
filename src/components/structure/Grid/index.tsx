import React from 'react'

import * as S from './styles'

type Props = {
  children: React.ReactNode
}

export const Grid = ({ children }: Props) => {
  return <S.Container>{children}</S.Container>
}
