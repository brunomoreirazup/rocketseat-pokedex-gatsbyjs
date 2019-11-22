import React from 'react'
import { HeaderContainer, TitleContainer, PokeballStyled } from './styled'

const Header = ({ siteTitle }) => (
  <HeaderContainer>
    <PokeballStyled />
    <TitleContainer>
      {siteTitle}
    </TitleContainer>
  </HeaderContainer>
)

export default Header