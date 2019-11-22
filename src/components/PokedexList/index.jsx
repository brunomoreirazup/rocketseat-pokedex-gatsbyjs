import React from 'react'
import { map } from 'lodash'
import { PokemonContainer, PokemonList, StyledLink } from './styled'
import PokemonItem from './PokemonItem'

const PokedexList = (props) => {
  const { pokemons } = props

  return (
    <PokemonContainer>
      <PokemonList>
        {
          map(pokemons, pokemon => {
            const { id, name, img, type } = pokemon
            const to = `/pokemon/` + id

            return (
              <StyledLink to={to}>
                <PokemonItem
                  id={id}
                  name={name}
                  img={img}
                  types={type}
                />
              </StyledLink>
            )
          })
        }
      </PokemonList>
    </PokemonContainer>
  )
}

export default PokedexList