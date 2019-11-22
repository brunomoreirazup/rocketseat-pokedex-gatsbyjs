import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  background-color: #960e29;
  padding: 20px 0;
  height: calc(100vh - 22px);

  @media screen and (orientation: portrait) {
    align-items: center;
    flex-direction: column;
  }
`