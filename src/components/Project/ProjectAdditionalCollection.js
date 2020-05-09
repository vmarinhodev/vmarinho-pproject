import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { Container, ProjectBasic } from '@components'

const ProjectAdditionalCollection = () => (
  <Container>
    <StaticQuery 
      query={`${ProjectsAdditionalQuery}`}
      render={({
        basicProjects: { edges },
      }) => {
        return (
          <>
          {edges.map(({node: details }, index) => (
            <ProjectBasic key={`project-${index}`} details={details} />
          ))}
          </>
        )
      }}
    />
  </Container>
)

export const ProjectsAdditionalQuery = graphql`
      query ProjectsAdditionalQuery {
        basicProjects: allBasicProjectsYaml(sort: {fields: completed, order: DESC}) {
          edges {
            node {
              title
              role
              personalproject
              completed
              client
              link {
                url
              }
              source {
                url
              }
            }
          }
        }
      }
`

export default ProjectAdditionalCollection