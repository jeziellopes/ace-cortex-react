import styled, { css } from 'styled-components'

import searchIcon from '../../../assets/search.svg'
import { colorAnimations } from './../../../styles/animations'

export const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 50vw;
`

export const InputSearch = styled.input`
  ${({ theme }) => css`
    background: url(${searchIcon}) no-repeat scroll 12px 12px;
    border: 1px solid;
    border-radius: 4px;
    color: ${theme.colors.main.primary};
    display: flex;
    font-family: ${theme.font.primary};
    font-size: 1em;
    font-weight: 500;
    height: 48px;

    padding-left: 30px;
    text-indent: 24px;
    transition: border 0.5ms;

    width: 100%;

    ${colorAnimations}

    @media only screen and (max-width: 600px) {
      font-size: 1.2em;
    }
  `}
`
