import React from 'react'
import { Button, Banner, Layout, ProjectPageContent, SEO } from '@components'

const projectsTagline = 
  'Every project serves as a learning experience.'

  const Projects = () => (
    <Layout>
      <SEO title="Projects"  />
      <Banner title="My web contribution" variant="mono">
        <h4>{projectsTagline}</h4>
        <Button
          to="mailto:vitor@vmarinho.dev?subject=Let's get working."
          hasIcon={true}
          variant="color"
          isEmail
        >
          Working together
        </Button>
      </Banner>
      <ProjectPageContent />
    </Layout>
  )

  export default Projects