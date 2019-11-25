const path = require('path')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return graphql(`
    query {
      pokemonsJson: dataJson(id: {eq: "pokemon"}) {
        pokemons {
          id
          num
          name
          type
          img
          height
          weight
          weaknesses
          prev_evolution {
            name
          }
          next_evolution {
            name
          }
        }
      }
    }
  `).then((result) => {
    result.data.pokemonsJson.pokemons.forEach((pokemon) => {
      createPage({
        path: '/pokemon/' + pokemon.id,
        component: path.resolve('./src/templates/pokemon/index.jsx'),
        context: {
          id: pokemon.id,
          name: pokemon.name,
          image: pokemon.img,
          type: pokemon.type,
          height: pokemon.height,
          weight: pokemon.weight,
          weaknesses: pokemon.weaknesses,
          prevEvolution: pokemon.prev_evolution,
          nextEvolution: pokemon.next_evolution,
        }
      })
    })
  })
}
/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
