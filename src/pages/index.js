import React, { Component, Fragment } from "react"
import get from 'lodash/get'
import filter from 'lodash/filter'
import find from 'lodash/find'
import Layout from "../components/Layout"
import PokedexList from '../components/PokedexList'
import Search from '../components/Search'
import Joystic from '../components/Joystic'
import {
  PokedexContainer,
  ScreenContainer,
  SideContainer,
} from '../styles/home/styled'


class Home extends Component {
  state = {
    prev: 0,
    next: 7,
    pokemons: []
  }

  componentDidMount() {
    const { data } = this.props
    this.setState({ pokemons: get(data, 'pokemonsJson.pokemons', []) })
  }

  resetPagination = () => {
    this.setState({ prev: 0, next: 7 })
  }

  handleSearch = (value) => {
    const { data } = this.props
    const pokemons = get(data, 'pokemonsJson.pokemons', [])
    const searchedPokemons = filter(pokemons, (pokemon) => {
      const { name, type } = pokemon
      const isNameMatch = name.includes(value)
      const isTypeMatch = find(type, item => item.includes(value))
      return isNameMatch || isTypeMatch
    })

    this.resetPagination()
    this.setState({ pokemons: searchedPokemons })
  }

  handleOnChange = (event) => {
    const value = event.target.value

    this.setState({ searchValue: value })
    this.handleSearch(value)
  }

  handleNextPage = () => {
    const { prev, next } = this.state
    this.setState({ prev: prev + 7, next: next + 7 })
  }

  handlePrevPage = () => {
    const { prev, next } = this.state
    this.setState({ prev: prev - 7, next: next - 7 })
  }

  render() {
    const { prev, next, pokemons, searchValue } = this.state
    const isNextDisabled = next >= get(pokemons, 'length', 0)
    const isPrevDisabled = prev <= 0


    return (
      <Layout>
        <ScreenContainer>
          <Fragment>
            <Search
              placeholder="Search a pokemon by name or type"
              onChange={(event) => this.handleOnChange(event)}
              value={searchValue}
            />
            <PokedexContainer>
              <PokedexList
                pokemons={pokemons.slice(prev, next)}
              />
            </PokedexContainer>
          </Fragment>
        </ScreenContainer>
        <SideContainer>
          <Joystic
            isUpDisabled={true}
            isDownDisabled={true}
            isLeftDisabled={isPrevDisabled}
            isRightDisabled={isNextDisabled}
            handleRightButton={this.handleNextPage}
            handleLeftButton={this.handlePrevPage}
          />
        </SideContainer>
      </Layout>
    )
  }
}

export const query = graphql`
  query {
    pokemonsJson : dataJson(id: { eq: "pokemon"}){
      pokemons {
        id
        name
        img
        type
      }
    }
  }
`

export default Home
