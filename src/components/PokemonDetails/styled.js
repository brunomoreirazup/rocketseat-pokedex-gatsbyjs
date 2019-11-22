import styled from 'styled-components'
import { Link } from 'gatsby'
import { pokemonTypes } from '../../core/utils/pokemonTypes'
import LeftArrow from '../../core/assets/svg/left-arrow.svg'

export const PokemonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0 10px 0;
  margin-top: 10px;
  width: 95%;
  height: 100%;
  border-radius: 10px;
  background-color: #ebe4e4;
  overflow-y: auto;
  overflow-x: hidden;

  > div {
    padding: 5px 0;
  }
`

export const PokemonImage = styled.img`
  height: 30%;
`

export const PokemonHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  width: 90%;
  height: 5%;
`
export const PokemonInfo = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 50%;
`

export const PokemonBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 40%;
`

export const PokemonName = styled.span`
  font-size: 24px;
  font-weight: bolder;
  padding-left: 5px;
`
export const PokemonId = styled.span`
  font-size: 18px;
  font-weight: bolder;
`

export const PokemonTypes = styled.div`
  display: flex;
  justify-content: center;
  width: ${({ type }) => type === 'weakness' ? '100%' : '25%'};
  flex-wrap: wrap;
`

export const PokemonType = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ weakness }) => weakness ? '25%' : '70px'};
  height: 35px;
  border-radius: 5px;
  margin: 5px;
  background-color: ${({ type }) => pokemonTypes[type].background};
  font-size: 18px;
  color: ${({ type }) => pokemonTypes[type].color};
`

export const PokemonDescription = styled.div`
  display: flex;
  width: 50%;
  flex-direction: column;
  justify-content: center;
`

export const PokemonAttributes = styled.div`
  display: flex;
  justify-content: space-around;
`

export const PokemonSpan = styled.div`
  font-size: 20px;
  font-weight: bold;
`

export const PokemonEvolutions = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const PokemonWeakness = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const HomeLink = styled.div`
  display: flex;
  justify-content: flex-start;
  font-size: 16px;
  margin-left: 20px;
  padding: 0 !important;
  width: 100%;
  height: 20px;
`

export const BackArrow = styled(LeftArrow)`
  width: 20px;
  height: 20px;
`