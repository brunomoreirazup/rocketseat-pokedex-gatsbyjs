import React, { Fragment } from 'react'
import Header from '../Header'
import GlobalStyle from '../../core/utils/global-styled'
import { StaticQuery } from 'gatsby';
import {
  MainContainer,
} from './styled'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <Fragment>
        <GlobalStyle />
        <Header
          siteTitle={data.site.siteMetadata.title}
        />
        <MainContainer>
          {children}
        </MainContainer>
      </Fragment>)}
  />
)

export default Layout