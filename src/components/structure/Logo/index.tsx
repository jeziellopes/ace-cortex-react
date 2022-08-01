import React from 'react'

import * as S from './styles'

type Props = {
  onClick?: () => void
}

export const Logo = (props: Props) => {
  return (
    <S.Container {...props}>
      <S.Image src="https://i0.wp.com/www.acecortex.com.br/wp-content/uploads/2021/05/AceCortex_MarcaFinal_FundosClaros-1024x544.png"></S.Image>
    </S.Container>
  )
}
