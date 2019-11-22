import React from 'react'
import { navigate } from 'gatsby'
import Layout from '../../components/Layout'
import Joystic from '../../components/Joystic'
import PokemonDetails from '../../components/PokemonDetails'
import {
  ScreenContainer,
  SideContainer,
} from './styled'

const Pokemon = (props) => {
  const { pageContext } = props
  const {
    id,
    name,
    type,
    image,
    height,
    weight,
    weaknesses,
    prevEvolution,
    nextEvolution
  } = pageContext

  const isFirstPokemon = id === 1
  const isLastPokemon = id === 151
  const nextPokemon = id + 1
  const prevPokemon = id - 1

  return (
    <Layout>
      <ScreenContainer>
        <PokemonDetails
          id={id}
          name={name}
          type={type}
          image={image}
          height={height}
          weight={weight}
          weaknesses={weaknesses}
          prevEvolution={prevEvolution}
          nextEvolution={nextEvolution}
        />
      </ScreenContainer>
      <SideContainer>
        <Joystic
          isUpDisabled={isFirstPokemon}
          isDownDisabled={isLastPokemon}
          isRightDisabled={true}
          isLeftDisabled={true}
          upLink={prevPokemon}
          downLink={nextPokemon}
        />
      </SideContainer>
    </Layout>
  )
}

export default Pokemon