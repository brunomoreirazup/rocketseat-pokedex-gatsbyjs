import styled from 'styled-components'
import { pokemonTypes } from '../../../core/utils/pokemonTypes'

export const PokemonItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  padding: 10px 0px;
  background-color: transparent;
  color: #424242;
`

export const PokemonId = styled.span`
  font-size: 16px;
  font-weight: bolder;
  width: 50px;
`

export const PokemonName = styled.span`
  font-weight: bold;
  font-size: 20px;
  width: 45%;
  margin-left: 5px;
`

export const PokemonTypesContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 50%;
`

export const PokemonType = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30%;
  height: 35px;
  border-radius: 5px;
  background-color: ${({ type }) => pokemonTypes[type].background};
  font-size: 18px;
  color: ${({ type }) => pokemonTypes[type].color};
  margin: 0px 1px;

  @media screen and (orientation: portrait) {
    width: 50%;
    font-size: 16px;
  }
`

export const PokemonImg = styled.img`
  width: 50px;
  height: 50px;
  margin: 0;
`

export const PokemonDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`