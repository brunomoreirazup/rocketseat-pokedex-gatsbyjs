import React from 'react'
import { Link } from 'gatsby'
import map from 'lodash/map'
import isEmpty from 'lodash/isEmpty'
import {
  HomeLink,
  BackArrow,
  PokemonContainer,
  PokemonImage,
  PokemonHeader,
  PokemonInfo,
  PokemonBody,
  PokemonName,
  PokemonId,
  PokemonTypes,
  PokemonType,
  PokemonSpan,
  PokemonDescription,
  PokemonAttributes,
  PokemonEvolutions,
  PokemonWeakness
} from './styled'

const PokemonDetails = (props) => {
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
  } = props

  const renderTypes = (type, weakness = false) => {
    return (
      map(type, item => (
        <PokemonType type={item} weakness={weakness}>
          {item}
        </PokemonType>
      ))
    )
  }

  const renderEvolutions = (evolution, message) => (
    <PokemonSpan>
      {message} {evolution.pop().name}
    </PokemonSpan>
  )

  const hasPrevEvolution = !isEmpty(prevEvolution)
  const hasNextEvolution = !isEmpty(nextEvolution)
  const prevMessage = 'Evolves from:'
  const nextMessage = 'Evolves to:'

  return (
    <PokemonContainer>
      <HomeLink>
        <Link to={'/'}>
          <BackArrow />
        </Link>
      </HomeLink>
      <PokemonHeader>
        <PokemonInfo>
          <PokemonId>#{id}</PokemonId>
          <PokemonName>{name}</PokemonName>
        </PokemonInfo>
        <PokemonTypes type="type">
          {renderTypes(type)}
        </PokemonTypes>
      </PokemonHeader>
      <PokemonImage src={image} />
      <PokemonBody>
        <PokemonDescription>
          <PokemonAttributes>
            <PokemonSpan>Weight: {weight}</PokemonSpan>
            <PokemonSpan>Height: {height}</PokemonSpan>
          </PokemonAttributes>
        </PokemonDescription>
        <PokemonEvolutions>
          {hasPrevEvolution && renderEvolutions(prevEvolution, prevMessage)}
          {hasNextEvolution && renderEvolutions(nextEvolution, nextMessage)}
        </PokemonEvolutions>
        <PokemonWeakness>
          <div>
            <PokemonSpan>Weak Against: </PokemonSpan>
          </div>
          <PokemonTypes type="weakness">
            {renderTypes(weaknesses, true)}
          </PokemonTypes>
        </PokemonWeakness>
      </PokemonBody>
    </PokemonContainer>
  )
}

export default PokemonDetails