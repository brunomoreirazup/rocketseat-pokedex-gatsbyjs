import React from 'react'
import map from 'lodash/map'
import {
  PokemonItemContainer,
  PokemonId,
  PokemonImg,
  PokemonName,
  PokemonTypesContainer,
  PokemonType
} from './styled'

const PokemonItem = (props) => {
  const { id, name, img, types } = props

  return (
    <PokemonItemContainer>
      <PokemonId>#{id}</PokemonId>
      <PokemonImg src={img} />
      <PokemonName>{name}</PokemonName>
      <PokemonTypesContainer>
        {
          map(types, type => (
            <PokemonType type={type}>{type}</PokemonType>
          ))
        }
      </PokemonTypesContainer>
    </PokemonItemContainer>
  )
}

export default PokemonItem