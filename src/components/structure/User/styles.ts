import styled from 'styled-components'

export const Container = styled.div`
  align-items: center;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  justify-content: center;
`

export const Image = styled.img`
  height: 5vh;
  width: 5vh;
`

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1em;
  width: 8em;
`

export const UserName = styled.span`
  color: #fff;
  font-size: 12px;
  opacity: 0.3;
`

export const Role = styled.span`
  color: #fff;
  font-size: 10px;
  opacity: 0.3;
`
