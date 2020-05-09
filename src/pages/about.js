import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import {
  Banner,
  Button,
  Container,
  Layout,
  GridFlex,
  GridFlexItem,
  Section,
  SEO,
  Title,
} from '@components'
import linkCss from '@styles/links'
import { socialLinks } from 'config/vars'

const AboutContainer = styled(Container)`
  a {
    ${linkCss}
    line-height: 1;
  }
`

const AboutGrid = styled(GridFlex)`
  padding-bottom: ${props => props.theme.spacing.section.md};
`
const AboutImageWrapper = styled.div`
  padding-bottom: ${props => props.theme.spacing.section.md};
`

const About = ({ data }) => {
  const { about, AboutImage } = data
  const { title, bio } = about

  return (
    <Layout>
      <SEO title="About" description={bio} />
      <Banner title={title} variant="mono">
        <h4>{bio}</h4>
        <Button
          to={socialLinks.linkedin.link}
          variant="color"
          hasIcon={true}
          linksOut
        >
          LinkedIn Resume
        </Button>
      </Banner>
      <Section>
        <Container>
          <AboutImageWrapper>
            <Img fluid={AboutImage.childImageSharp.fluid} alt="me myself and I" />
          </AboutImageWrapper>
        </Container>
      </Section>
    </Layout>
  )
}

export const aboutQuery = graphql`
  query AboutQuery {
    about: aboutYaml {
      title
      bio
      currentPosition
      email
      phone
      address
    }
    AboutImage: file (
      relativePath: { eq: "vitormar.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default About