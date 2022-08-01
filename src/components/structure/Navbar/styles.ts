import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.main.navbar};
    box-shadow: ${theme.shadow.navbar};
    display: flex;
    height: 10vh;
    justify-content: space-between;
    width: 100%;
  `}
`
