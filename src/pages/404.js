import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { Banner, Layout } from 'components'
import linkCss from '@styles/links'

const HomeLink = styled(Link)`
  ${linkCss}
  color: inherit;
  line-height: 1.2;
  &:hover {
    color: ${props => props.theme.colors.main};
    &:after {
      background-color: ${props => props.theme.colors.black}
    }
  }
`


const NotFoundPage = () => (
  <Layout hasFooter={false}>
    <Banner title="Ooops it's a 404!" size="100vh" variant="color" hasTexture>
      <h4>It looks like the page you are looking for does not exist. Well let's go <HomeLink to="/">back home</HomeLink> and try again. </h4>
    </Banner>
  </Layout>
)

export default NotFoundPage
