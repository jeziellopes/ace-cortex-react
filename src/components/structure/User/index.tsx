import React from 'react'

import * as S from './styles'

export const User = () => {
  return (
    <S.Container>
      <S.Image src="https://jeziellopes.github.io/images/avatar.png"></S.Image>
      <S.UserInfo>
        <S.UserName>Jeziel Lopes</S.UserName>
        <S.Role>Administrator</S.Role>
      </S.UserInfo>
    </S.Container>
  )
}
