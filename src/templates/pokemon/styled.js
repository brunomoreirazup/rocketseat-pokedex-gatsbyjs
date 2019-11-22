import styled from 'styled-components'

export const SideContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  width: 15%;
  padding-bottom: 20px;
  min-width: 200px;

  @media screen and (orientation: portrait) {
    align-items: flex-end;
    width: 100%;
  }
`

export const ScreenContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: black;
  border: 4px solid #1c1b1b;
  border-radius: 10px;
  width: 70%;
  height: 100%;
  padding: 0px 10px 30px 10px;

  @media screen and (orientation: portrait) {
    width: 90%;
    align-items: center;
    flex-direction: column;
  }
`