import styled from 'styled-components'

import { spin } from '../../../styles/animations'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 30vh;
  justify-content: center;

  svg {
    animation-duration: 1300ms;
    animation-iteration-count: infinite;
    animation-name: ${spin};
    animation-timing-function: linear;
    height: 48px;
    width: 48px;
  }
`
