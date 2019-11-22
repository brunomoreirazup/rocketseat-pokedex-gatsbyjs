import styled from 'styled-components'
import Pokeball from '../../core/assets/svg/pokeball.svg'

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
  height: 22px;
  padding-left: 25px;
  background-color: #960e29;
`

export const TitleContainer = styled.div`
color: white;
font-weigth: bold;
font-size: 16px;
padding-left: 10px;
`

export const PokeballStyled = styled(Pokeball)`
  width: 30px;
  height: 30px;
`