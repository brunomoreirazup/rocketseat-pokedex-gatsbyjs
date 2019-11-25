# rocketseat-pokedex-gatsbyjs
Criando uma pokedéx utilizando GatsbyJS e GraphQL

## Links Importantes:

JSON com os dados: https://github.com/brunomoreirazup/kanto-pokedex-json

## Instalando GatsbyJS:
  ```
  npm install -g gatsby-cli
  ```

## Criando um projeto:
 ```
 gatsby new project_name
 ```
 
## Plugins importantes:

### Gatsby Source FileSystem
  ```
  yarn add gatsby-source-filesystem
  ```

#### Para configurá-lo, inserir no arquivo gatsby-config.js:
  ```
   {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `data`,
      path: `${__dirname}/src/data`,
    },
  },
```

### Gatsby Transformer JSON
  ```
  yarn add gatsby-transformer-json
  ```

#### Para configurá-lo, inserir no arquivo gatsby-config.js:
  ```
  gatsby-plugin-styled-components,
  ```


### Gatsby Plugin React SVG
  ```
  yarn add gatsby-plugin-react-svg 
  ```

#### Para configurá-lo, inserir no arquivo gatsby-config.js:
  ```
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
```

## Bibliotecas Importantes:

### Styled components:
  ```
  yarn add gatsby-plugin-styled-components styled-components babel-plugin-styled-components
  ```

#### Para configurá-lo, inserir no arquivo gatsby-config.js:
  ```
  gatsby-plugin-styled-components,
  ```

### Lodash:
  ```
  yarn add lodash
  ```
  
