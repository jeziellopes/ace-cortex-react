import styled, { css, DefaultTheme } from 'styled-components'

export type Props = {
  theme: DefaultTheme
  height?: number
  width?: number
  size?: number
}

export const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 40px 0;
  width: 100vw;
`

export const Content = styled.div<Props>`
  ${({ theme, height, width }) => css`
    background: ${theme.colors.main.primary};
    border-radius: 4px;
    box-shadow: 8px 8px 4px 0px rgba(0, 0, 0, 0.11);
    cursor: pointer;
    display: flex;
    flex-direction: column;
    height: ${height || 'unset'}px;
    justify-content: flex-start;
    margin: 16px 0;
    padding: 24px;
    position: relative;
    position: relative;
    width: ${`${width}px` || 'auto'};
  `}
`

export const Column = styled.div<Props>`
  display: flex;
  flex-direction: column;
`

export const Row = styled.div<Props>`
  display: flex;
`

export const Title = styled.h2<Props>`
  ${({ theme }) => css`
    color: ${theme.colors.main.light};
    font-family: ${theme.font.primary};
    font-size: 24px;
    font-weight: 500;
    margin-top: 0;
  `}
`

export const Description = styled.span<Props>`
  ${({ theme }) => css`
    color: ${theme.colors.main.light};
    font-family: ${theme.font.primary};
    font-size: 12px;
    font-weight: 400;
    line-height: 24px;
  `}
`

export const LongDescription = styled(Description)`
  font-size: 15px;
  padding-left: 16px;
  text-align: justify;
`

export const Image = styled.img`
  height: auto;
  margin-bottom: 16px;
  width: 400px;
`
