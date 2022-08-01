import React from 'react'

import * as S from './styles'

export const Search = (props: any) => {
  return (
    <S.Container>
      <S.InputSearch type="text" placeholder="search companies..." {...props} />
    </S.Container>
  )
}
