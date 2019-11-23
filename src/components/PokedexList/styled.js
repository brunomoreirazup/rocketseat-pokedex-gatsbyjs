import styled from 'styled-components'

export const PokemonContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  background-color: #ebe4e4;
`

export const PokemonList = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow-y: auto;
  border-radius: 10px;
  margin: 0 10px;

  ::-webkit-scrollbar {
    width: 0;
  }
`

export const StyledLink = styled.div`
  text-decoration: none;
  border-bottom: 1px solid black;

  :last-child {
    border-bottom: none;
  }
`