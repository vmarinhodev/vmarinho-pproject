import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import { Container, Grid, Project } from '@components'

const ProjectCollection = ({ type }) => (
  <Container>
    <StaticQuery
      query={`${ProjectsQuery}`}
      render={({allMarkdownRemark}) => {
        const projects = allMarkdownRemark.edges

        return (
          <Grid>
            {projects.map((project, index) => {
              const {
                title,
                path,
                featureImage,
                website,
                tagline,
              } = project.node.frontmatter
              
              const details = {
                title,
                featureImage,
                website,
                path,
              }
              return (
                <Project
                  key={`project-${path}`}
                  id={`project-${path}`}
                  index={index}
                  details={details}
                  excerpt={tagline}
                  type="card"
                />
              )
            })}
          </Grid>
        )
      }}
    />
  </Container>
)

export const ProjectsQuery = graphql`
  query ProjectsQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___completed] }) {
      edges {
        node {
          frontmatter {
            path
            title
            tagline
            completed(formatString: "YYYY")
            client
            role
            website {
              url
            }
            tags
            featureImage {
              childImageSharp {
                fluid(maxWidth: 1260) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          fields {
            slug
          }
        }
      }
    }
  }
`

export default ProjectCollection